
DROP POLICY IF EXISTS "anyone can send messages" ON public.contact_messages;
CREATE POLICY "anyone can send messages"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(full_name)) BETWEEN 1 AND 100
  AND length(btrim(phone)) BETWEEN 4 AND 15
  AND length(btrim(subject)) BETWEEN 1 AND 150
  AND length(btrim(message)) BETWEEN 1 AND 2000
  AND (email IS NULL OR length(email) <= 255)
);

DROP POLICY IF EXISTS "anyone can create orders" ON public.orders;
CREATE POLICY "anyone can create orders"
ON public.orders
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(full_name)) BETWEEN 1 AND 100
  AND length(btrim(phone)) BETWEEN 4 AND 15
  AND length(btrim(description)) BETWEEN 1 AND 2000
  AND (service_slug IS NULL OR length(service_slug) <= 100)
  AND (degree IS NULL OR length(degree) <= 50)
  AND (field IS NULL OR length(field) <= 100)
);
