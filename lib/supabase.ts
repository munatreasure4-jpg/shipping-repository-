import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

if (!url || !anonKey) {
  // Note: we intentionally don't throw here so the app can build in CI without secrets.
  console.warn('Missing Supabase URL or ANON KEY in environment')
}

export const supabase = createClient(url ?? '', anonKey ?? '')
