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

    const today = new Date().toISOString().split("T")[0];

    // Get overdue tasks (due_date < today, not Complete/Archived)
    const { data: overdueTasks, error } = await supabase
      .from("brownie_tasks")
      .select("*")
      .lt("due_date", today)
      .not("status", "in", '("Complete","Archived")')
      .not("due_date", "is", null);

    if (error) throw error;
    if (!overdueTasks || overdueTasks.length === 0) {
      return new Response(
        JSON.stringify({ success: true, message: "No overdue tasks" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
      );
    }

    // Get team members
    const { data: members } = await supabase.from("team_members").select("*");
    const emailMap: Record<string, string> = {};
    (members || []).forEach((m: { name: string; email: string }) => {
      if (!m.email.endsWith("@example.com")) emailMap[m.name] = m.email;
    });

    // Group by assignee
    const grouped: Record<string, typeof overdueTasks> = {};
    overdueTasks.forEach((t) => {
      if (!grouped[t.assigned]) grouped[t.assigned] = [];
      grouped[t.assigned].push(t);
    });

    const sent: string[] = [];

    for (const [assignee, tasks] of Object.entries(grouped)) {
      const email = emailMap[assignee];
      if (!email) continue;

      const taskRows = tasks
        .map(
          (t) =>
            `<tr>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #374151;">${t.task}</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #ef4444; font-weight: 600;">${t.due_date}</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280;">${t.status}</td>
            </tr>`
        )
        .join("");

      const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #a85839, #e8c468); padding: 20px 25px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 18px;">⚠️ Overdue Tasks</h2>
          </div>
          <div style="background: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="color: #374151; font-size: 14px; margin: 0 0 15px;">Hi ${assignee}, you have <strong>${tasks.length}</strong> overdue task${tasks.length > 1 ? "s" : ""}:</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <thead>
                <tr style="background: #f9fafb;">
                  <th style="text-align: left; padding: 8px 12px; font-size: 11px; text-transform: uppercase; color: #9ca3af; letter-spacing: 0.05em;">Task</th>
                  <th style="text-align: left; padding: 8px 12px; font-size: 11px; text-transform: uppercase; color: #9ca3af; letter-spacing: 0.05em;">Due Date</th>
                  <th style="text-align: left; padding: 8px 12px; font-size: 11px; text-transform: uppercase; color: #9ca3af; letter-spacing: 0.05em;">Status</th>
                </tr>
              </thead>
              <tbody>${taskRows}</tbody>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="color: #9ca3af; font-size: 11px; margin: 0;">Oak Real Estate Partners · Fortified Capital Marketing</p>
          </div>
        </div>
      `;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
        body: JSON.stringify({
          from: "Fortified Capital <onboarding@resend.dev>",
          to: [email],
          subject: `⚠️ ${tasks.length} Overdue Task${tasks.length > 1 ? "s" : ""} — Fortified Capital`,
          html,
        }),
      });

      if (res.ok) {
        sent.push(assignee);
      } else {
        const err = await res.json();
        console.error(`Failed to send to ${assignee}:`, err);
      }
    }

    return new Response(
      JSON.stringify({ success: true, overdue: overdueTasks.length, notified: sent }),
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
