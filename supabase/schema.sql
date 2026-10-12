-- Supabase schema for SHIPNEX MVP

-- Enable pgcrypto for UUID generation (run once in SQL editor)
-- CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- users table: link to auth.users (Supabase Auth)
-- We store profile data and role; auth.users remains the source of truth for email/password
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  full_name text,
  role text NOT NULL DEFAULT 'customer', -- 'customer' or 'admin'
  created_at timestamptz DEFAULT now()
);

-- shipments
CREATE TABLE IF NOT EXISTS shipments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tracking_number text NOT NULL UNIQUE,
  customer_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  sender jsonb NOT NULL,
  recipient jsonb NOT NULL,
  origin text,
  destination text,
  weight_kg numeric,
  dimensions jsonb,
  method text,
  status text DEFAULT 'created',
  cost numeric,
  metadata jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- tracking events
CREATE TABLE IF NOT EXISTS tracking_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  shipment_id uuid REFERENCES shipments(id) ON DELETE CASCADE,
  status text,
  location text,
  occurred_at timestamptz DEFAULT now(),
  notes text
);

-- Example seed (run manually)
-- INSERT INTO profiles (id, full_name, role) VALUES ('a-uuid-here', 'Admin User', 'admin');
-- INSERT INTO shipments (tracking_number, customer_id, sender, recipient, origin, destination, weight_kg, dimensions, method, status) VALUES ('SNX000001', 'a-uuid-here', '{"name":"Alice"}', '{"name":"Bob"}', 'Lagos', 'Abuja', 2.5, '{"l":10,"w":5,"h":4}', 'standard', 'created');

-- Row-level security notes (example templates):
-- ALTER TABLE shipments ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "customers_can_manage_their_shipments" ON shipments FOR ALL USING (
--   auth.role() = 'authenticated' AND customer_id = auth.uid()
-- );
-- CREATE POLICY "admins_can_access_all" ON shipments FOR ALL USING (
--   EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'admin')
-- );
