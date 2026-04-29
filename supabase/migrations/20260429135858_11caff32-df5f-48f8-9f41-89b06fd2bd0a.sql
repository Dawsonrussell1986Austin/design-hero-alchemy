ALTER TABLE public.calendly_webhook_events
ADD COLUMN IF NOT EXISTS analytics_event_name TEXT,
ADD COLUMN IF NOT EXISTS analytics_payload JSONB NOT NULL DEFAULT '{}'::jsonb;

CREATE INDEX IF NOT EXISTS calendly_webhook_events_analytics_event_created_idx
ON public.calendly_webhook_events (analytics_event_name, created_at DESC);