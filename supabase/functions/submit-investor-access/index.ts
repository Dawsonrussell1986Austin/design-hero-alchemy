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
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const data: InvestorAccessData = await req.json();
    console.log('Received investor access submission:', data);

    // Insert into Supabase
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
      console.error('Supabase insert error:', error);
      throw new Error(`Failed to save submission: ${error.message}`);
    }

    console.log('Successfully saved investor access submission');

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
