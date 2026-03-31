import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not configured");

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { type, taskName, assignedTo, oldValue, newValue } = await req.json();

    // Look up team member email
    const { data: member } = await supabase
      .from("team_members")
      .select("email")
      .eq("name", assignedTo)
      .single();

    if (!member?.email || member.email.endsWith("@example.com")) {
      return new Response(
        JSON.stringify({ success: false, reason: "No real email configured for " + assignedTo }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
      );
    }

    let subject = "";
    let html = "";

    if (type === "status_change") {
      subject = `Task Status Changed: ${taskName}`;
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #a85839, #e8c468); padding: 20px 25px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 18px;">Task Status Updated</h2>
          </div>
          <div style="background: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="color: #374151; font-size: 14px; margin: 0 0 15px;"><strong>Task:</strong> ${taskName}</p>
            <p style="color: #374151; font-size: 14px; margin: 0 0 15px;"><strong>Status:</strong> <span style="text-decoration: line-through; color: #9ca3af;">${oldValue}</span> → <strong style="color: #a85839;">${newValue}</strong></p>
            <p style="color: #374151; font-size: 14px; margin: 0 0 15px;"><strong>Assigned to:</strong> ${assignedTo}</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="color: #9ca3af; font-size: 11px; margin: 0;">Oak Real Estate Partners · Fortified Capital Marketing</p>
          </div>
        </div>
      `;
    } else if (type === "assignment_change") {
      subject = `Task Assigned to You: ${taskName}`;
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #a85839, #e8c468); padding: 20px 25px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 18px;">Task Assignment</h2>
          </div>
          <div style="background: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="color: #374151; font-size: 14px; margin: 0 0 15px;"><strong>Task:</strong> ${taskName}</p>
            <p style="color: #374151; font-size: 14px; margin: 0 0 15px;">This task has been ${oldValue ? `reassigned from <strong>${oldValue}</strong> to` : "assigned to"} <strong style="color: #a85839;">${assignedTo}</strong></p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="color: #9ca3af; font-size: 11px; margin: 0;">Oak Real Estate Partners · Fortified Capital Marketing</p>
          </div>
        </div>
      `;
    } else if (type === "note_added") {
      subject = `New Note on Task: ${taskName}`;
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #a85839, #e8c468); padding: 20px 25px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 18px;">💬 New Note Added</h2>
          </div>
          <div style="background: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="color: #374151; font-size: 14px; margin: 0 0 15px;"><strong>Task:</strong> ${taskName}</p>
            <p style="color: #374151; font-size: 14px; margin: 0 0 15px;"><strong>Note by:</strong> ${oldValue || "Team"}</p>
            <div style="background: #f9fafb; border-left: 3px solid #a85839; padding: 12px 16px; margin: 0 0 15px; border-radius: 0 4px 4px 0;">
              <p style="color: #374151; font-size: 13px; margin: 0; white-space: pre-wrap;">${newValue || ""}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="color: #9ca3af; font-size: 11px; margin: 0;">Oak Real Estate Partners · Fortified Capital Marketing</p>
          </div>
        </div>
      `;
    } else {
      return new Response(
        JSON.stringify({ success: false, reason: "Unknown notification type" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: "Fortified Capital <onboarding@resend.dev>",
        to: [member.email],
        subject,
        html,
      }),
    });

    const result = await res.json();
    if (!res.ok) {
      console.error("Resend error:", result);
      return new Response(
        JSON.stringify({ success: false, error: result }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, emailId: result.id }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
