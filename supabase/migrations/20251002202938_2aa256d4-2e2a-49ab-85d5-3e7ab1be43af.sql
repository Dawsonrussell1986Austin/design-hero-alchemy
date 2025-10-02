-- Create investor_leads table to store opt-in information
CREATE TABLE public.investor_leads (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL UNIQUE,
  full_name text NOT NULL,
  company text,
  investment_range text,
  message text,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  status text NOT NULL DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE public.investor_leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public landing page)
CREATE POLICY "Anyone can submit investor leads"
ON public.investor_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create index on email for faster lookups
CREATE INDEX idx_investor_leads_email ON public.investor_leads(email);

-- Create index on created_at for sorting
CREATE INDEX idx_investor_leads_created_at ON public.investor_leads(created_at DESC);