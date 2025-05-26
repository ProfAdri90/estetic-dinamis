import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rjvmbisolnrfmszmzodx.supabase.co'; // ganti ini
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqdm1iaXNvbG5yZm1zem16b2R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0Mzg3NTEsImV4cCI6MjA2MjAxNDc1MX0.m0KckUgjEq6JFN29SBA33Y2oT_xlJzhYMx00JVsvjzE'; // ganti ini juga

export const supabase = createClient(supabaseUrl, supabaseKey);
