import { createClient } from '@supabase/supabase-js'

export default createClient(
  process.env.SUPABASE_ANON_KEY,
  process.env.SUPABASE_ANON_KEY
)
