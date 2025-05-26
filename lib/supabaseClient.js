import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xxxx.supabase.co'; // ganti ini
const supabaseKey = 'YOUR_ANON_KEY'; // ganti ini juga

export const supabase = createClient(supabaseUrl, supabaseKey);
