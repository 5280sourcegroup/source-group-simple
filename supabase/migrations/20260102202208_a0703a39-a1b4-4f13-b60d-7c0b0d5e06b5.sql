-- Create table for storing quote requests
CREATE TABLE public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company_name TEXT NOT NULL,
  job_title TEXT NOT NULL,
  industry TEXT NOT NULL,
  address TEXT,
  message TEXT NOT NULL,
  file_url TEXT,
  file_name TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS but allow public inserts (no auth required for quote submissions)
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert quote requests (public form)
CREATE POLICY "Anyone can submit quote requests"
ON public.quote_requests
FOR INSERT
WITH CHECK (true);

-- Only authenticated users (admins) can view/update/delete
CREATE POLICY "Authenticated users can view quote requests"
ON public.quote_requests
FOR SELECT
USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update quote requests"
ON public.quote_requests
FOR UPDATE
USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete quote requests"
ON public.quote_requests
FOR DELETE
USING (auth.role() = 'authenticated');

-- Create storage bucket for quote files (PDFs)
INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('quote-files', 'quote-files', true, 10485760);

-- Storage policies for quote files
CREATE POLICY "Anyone can upload quote files"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'quote-files');

CREATE POLICY "Anyone can view quote files"
ON storage.objects
FOR SELECT
USING (bucket_id = 'quote-files');