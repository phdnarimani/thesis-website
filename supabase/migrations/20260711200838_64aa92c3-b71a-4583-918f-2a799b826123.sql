
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_slug TEXT,
  degree TEXT,
  field TEXT,
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.orders TO anon, authenticated;
GRANT ALL ON public.orders TO service_role;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone can create orders" ON public.orders FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone can send messages" ON public.contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);
