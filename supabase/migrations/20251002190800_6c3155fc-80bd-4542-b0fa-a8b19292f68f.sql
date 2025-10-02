-- Phase 1: Fix Critical Email Exposure in invites table
-- Add policy for invitees to view their own invites by email
CREATE POLICY "Invitees can view their own invites"
ON public.invites
FOR SELECT
TO authenticated
USING (
  invitee_email = (SELECT email FROM auth.users WHERE id = auth.uid())
  OR inviter_id = auth.uid()
);

-- Phase 2: Secure Database Functions with explicit search_path

-- Update handle_new_user_stats function
CREATE OR REPLACE FUNCTION public.handle_new_user_stats()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  INSERT INTO public.user_stats (user_id)
  VALUES (new.id);
  RETURN new;
END;
$function$;

-- Update handle_successful_invite function
CREATE OR REPLACE FUNCTION public.handle_successful_invite()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
    UPDATE public.user_stats
    SET points = points + 100
    WHERE user_id = NEW.inviter_id;
    
    RETURN NEW;
END;
$function$;

-- Update handle_updated_at function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $function$
BEGIN
    new.updated_at = timezone('utc'::text, now());
    return new;
END;
$function$;