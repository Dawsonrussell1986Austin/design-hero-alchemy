import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, calendly-webhook-signature",
};

const BOOKING_SOURCE_FALLBACK = "thank_you_report_calendly_cta";
const TRACKED_EVENTS = new Set(["invitee.canceled", "invitee_no_show.created"]);
const SIGNATURE_TOLERANCE_MS = 5 * 60 * 1000;

const textEncoder = new TextEncoder();

const toHex = (buffer: ArrayBuffer) =>
  Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

const timingSafeEqual = (left: string, right: string) => {
  if (left.length !== right.length) return false;

  let diff = 0;
  for (let i = 0; i < left.length; i += 1) {
    diff |= left.charCodeAt(i) ^ right.charCodeAt(i);
  }

  return diff === 0;
};

const parseCalendlySignature = (signatureHeader: string | null) => {
  if (!signatureHeader) return null;

  return signatureHeader.split(",").reduce<Record<string, string>>((parts, part) => {
    const [key, value] = part.split("=");
    if (key && value) parts[key.trim()] = value.trim();
    return parts;
  }, {});
};

const verifyCalendlySignature = async (rawBody: string, signatureHeader: string | null, signingKey: string) => {
  const signature = parseCalendlySignature(signatureHeader);
  const timestamp = Number(signature?.t);
  const receivedSignature = signature?.v1;

  if (!timestamp || !receivedSignature) return false;
  if (Math.abs(Date.now() - timestamp * 1000) > SIGNATURE_TOLERANCE_MS) return false;

  const key = await crypto.subtle.importKey(
    "raw",
    textEncoder.encode(signingKey),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const digest = await crypto.subtle.sign("HMAC", key, textEncoder.encode(`${timestamp}.${rawBody}`));

  return timingSafeEqual(toHex(digest), receivedSignature);
};

const findString = (value: unknown, keys: string[]) => {
  const queue = [value];
  const visited = new Set<unknown>();

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current || typeof current !== "object" || visited.has(current)) continue;

    visited.add(current);
    const record = current as Record<string, unknown>;

    for (const key of keys) {
      if (typeof record[key] === "string" && record[key]) return record[key] as string;
    }

    queue.push(...Object.values(record).filter((child) => child && typeof child === "object"));
  }

  return null;
};

const sha256 = async (value: string | null) => {
  if (!value) return null;
  const digest = await crypto.subtle.digest("SHA-256", textEncoder.encode(value.trim().toLowerCase()));
  return toHex(digest);
};

const getBookingSource = (payload: Record<string, unknown>) => {
  const tracking = payload.payload && typeof payload.payload === "object"
    ? (payload.payload as Record<string, unknown>).tracking
    : undefined;

  if (tracking && typeof tracking === "object") {
    const trackingRecord = tracking as Record<string, unknown>;
    if (typeof trackingRecord.utm_source === "string" && trackingRecord.utm_source) return trackingRecord.utm_source;
    if (typeof trackingRecord.utm_campaign === "string" && trackingRecord.utm_campaign) return trackingRecord.utm_campaign;
  }

  return BOOKING_SOURCE_FALLBACK;
};

const getCalendlyPayload = (payload: Record<string, unknown>) =>
  payload.payload && typeof payload.payload === "object"
    ? (payload.payload as Record<string, unknown>)
    : payload;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const signingKey = Deno.env.get("CALENDLY_WEBHOOK_SIGNING_KEY");
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!signingKey || !supabaseUrl || !serviceRoleKey) {
    return new Response(JSON.stringify({ error: "Webhook is not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const rawBody = await req.text();
  const isVerified = await verifyCalendlySignature(
    rawBody,
    req.headers.get("calendly-webhook-signature"),
    signingKey
  );

  if (!isVerified) {
    return new Response(JSON.stringify({ error: "Invalid webhook signature" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let payload: Record<string, unknown>;
  try {
    payload = JSON.parse(rawBody);
  } catch (_error) {
    return new Response(JSON.stringify({ error: "Invalid JSON payload" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const eventType = typeof payload.event === "string" ? payload.event : "unknown";
  if (!TRACKED_EVENTS.has(eventType)) {
    return new Response(JSON.stringify({ success: true, ignored: true, event_type: eventType }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const email = findString(payload, ["email", "email_address"]);
  const calendlyPayload = getCalendlyPayload(payload);
  const supabase = createClient(supabaseUrl, serviceRoleKey);
  const status = eventType === "invitee.canceled" ? "canceled" : "no_show";

  const { error } = await supabase.from("calendly_webhook_events").insert({
    calendly_event_type: eventType,
    booking_source: getBookingSource(payload),
    calendly_event_uri: findString(calendlyPayload, ["event", "event_uri", "scheduled_event_uri"]),
    calendly_invitee_uri: findString(calendlyPayload, ["invitee", "invitee_uri", "uri"]),
    invitee_email_hash: await sha256(email),
    status,
    payload,
  });

  if (error?.code === "23505") {
    return new Response(JSON.stringify({ success: true, duplicate: true, event_type: eventType, status }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  if (error) {
    console.error("Calendly webhook insert failed", error);
    return new Response(JSON.stringify({ error: "Failed to record webhook event" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  console.log("Calendly lifecycle event recorded", { event_type: eventType, status });
  return new Response(JSON.stringify({ success: true, event_type: eventType, status }), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});