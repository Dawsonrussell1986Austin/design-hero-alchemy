import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface InvestorAccessData {
  firstName: string;
  lastName: string;
  email: string;
  state: string;
  phone: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const data: InvestorAccessData = await req.json();
    console.log('Received investor access submission:', data);

    const zapierWebhook = Deno.env.get('ZAPIER_INVESTOR_ACCESS_WEBHOOK');
    if (!zapierWebhook) {
      throw new Error('ZAPIER_INVESTOR_ACCESS_WEBHOOK is not configured');
    }

    // Send to Zapier webhook
    const zapierPayload = {
      timestamp: new Date().toISOString(),
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      state: data.state,
      phone: data.phone,
    };

    console.log('Sending to Zapier:', zapierPayload);

    const zapierResponse = await fetch(zapierWebhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(zapierPayload),
    });

    if (!zapierResponse.ok) {
      const errorText = await zapierResponse.text();
      console.error('Zapier webhook error:', zapierResponse.status, errorText);
      throw new Error(`Zapier webhook failed: ${zapierResponse.status}`);
    }

    console.log('Successfully sent to Zapier');

    // Also save to Supabase as backup
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (supabaseUrl && supabaseServiceKey) {
      const supabase = createClient(supabaseUrl, supabaseServiceKey);
      const { error } = await supabase
        .from('investor_access_submissions')
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          state: data.state,
          phone: data.phone,
        });

      if (error) {
        console.error('Supabase backup insert error:', error);
        // Don't throw - Zapier already succeeded
      } else {
        console.log('Also saved to Supabase as backup');
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Submission recorded successfully' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error processing submission:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
