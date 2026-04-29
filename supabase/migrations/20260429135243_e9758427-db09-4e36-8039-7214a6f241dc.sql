CREATE TABLE IF NOT EXISTS public.calendly_webhook_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  calendly_event_type TEXT NOT NULL,
  booking_source TEXT NOT NULL DEFAULT 'thank_you_report_calendly_cta',
  calendly_event_uri TEXT,
  calendly_invitee_uri TEXT,
  invitee_email_hash TEXT,
  status TEXT NOT NULL,
  processed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.calendly_webhook_events ENABLE ROW LEVEL SECURITY;

CREATE UNIQUE INDEX IF NOT EXISTS calendly_webhook_events_dedupe_idx
ON public.calendly_webhook_events (
  calendly_event_type,
  COALESCE(calendly_event_uri, ''),
  COALESCE(calendly_invitee_uri, '')
);

CREATE INDEX IF NOT EXISTS calendly_webhook_events_type_created_idx
ON public.calendly_webhook_events (calendly_event_type, created_at DESC);

CREATE INDEX IF NOT EXISTS calendly_webhook_events_source_created_idx
ON public.calendly_webhook_events (booking_source, created_at DESC);