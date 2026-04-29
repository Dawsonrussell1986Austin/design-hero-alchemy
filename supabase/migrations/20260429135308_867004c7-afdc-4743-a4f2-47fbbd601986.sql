CREATE POLICY "No direct client reads for Calendly webhook events"
ON public.calendly_webhook_events
FOR SELECT
TO anon, authenticated
USING (false);

CREATE POLICY "No direct client inserts for Calendly webhook events"
ON public.calendly_webhook_events
FOR INSERT
TO anon, authenticated
WITH CHECK (false);

CREATE POLICY "No direct client updates for Calendly webhook events"
ON public.calendly_webhook_events
FOR UPDATE
TO anon, authenticated
USING (false)
WITH CHECK (false);

CREATE POLICY "No direct client deletes for Calendly webhook events"
ON public.calendly_webhook_events
FOR DELETE
TO anon, authenticated
USING (false);