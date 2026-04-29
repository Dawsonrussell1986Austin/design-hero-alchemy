import { useEffect } from "react";

const REPORT_LEAD_PREFILL_KEY = "oak_report_lead_prefill";

const getStringFromPayload = (payload: unknown, keys: string[]) => {
  const queue = [payload];
  const visited = new Set<unknown>();

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current || typeof current !== "object" || visited.has(current)) continue;

    visited.add(current);
    const record = current as Record<string, unknown>;

    for (const key of keys) {
      if (typeof record[key] === "string" && record[key].trim()) return record[key].trim();
    }

    queue.push(...Object.values(record).filter((value) => value && typeof value === "object"));
  }

  return "";
};

const persistLeadPrefill = (payload: unknown) => {
  if (typeof window === "undefined") return;

  const firstName = getStringFromPayload(payload, ["first_name", "firstName", "first"]);
  const lastName = getStringFromPayload(payload, ["last_name", "lastName", "last"]);
  const fullName = getStringFromPayload(payload, ["full_name", "fullName", "name"]) || [firstName, lastName].filter(Boolean).join(" ");
  const email = getStringFromPayload(payload, ["email", "email_address", "emailAddress"]);
  const phone = getStringFromPayload(payload, ["phone", "phone_number", "phoneNumber", "mobile"]);

  if (!fullName && !email && !phone) return;

  window.sessionStorage.setItem(
    REPORT_LEAD_PREFILL_KEY,
    JSON.stringify({ name: fullName, email, phone, landing_page: window.location.pathname })
  );
};

const persistLeadPrefillFromUrl = () => {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  persistLeadPrefill({
    first_name: params.get("first_name") || params.get("firstName") || params.get("first"),
    last_name: params.get("last_name") || params.get("lastName") || params.get("last"),
    name: params.get("name") || params.get("full_name") || params.get("fullName"),
    email: params.get("email") || params.get("email_address"),
    phone: params.get("phone") || params.get("phone_number"),
  });
};

const LandingGHLForm = () => {
  useEffect(() => {
    persistLeadPrefillFromUrl();

    const handleGhlMessage = (event: MessageEvent) => {
      if (event.origin !== "https://invest.oakrepartners.com") return;

      const payload = typeof event.data === "string" ? (() => {
        try {
          return JSON.parse(event.data);
        } catch (_error) {
          return event.data;
        }
      })() : event.data;

      persistLeadPrefill(payload);
    };

    window.addEventListener("message", handleGhlMessage);

    const script = document.createElement("script");
    script.src = "https://invest.oakrepartners.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      window.removeEventListener("message", handleGhlMessage);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://invest.oakrepartners.com/widget/form/ZLuKcTZDJl3PVHXmaSG9"
      style={{ width: "100%", height: "541px", border: "none", borderRadius: "3px" }}
      id="inline-ZLuKcTZDJl3PVHXmaSG9"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="2026 Accredited Investor Report"
      data-height="541"
      data-layout-iframe-id="inline-ZLuKcTZDJl3PVHXmaSG9"
      data-form-id="ZLuKcTZDJl3PVHXmaSG9"
      title="2026 Accredited Investor Report"
    />
  );
};

export default LandingGHLForm;
