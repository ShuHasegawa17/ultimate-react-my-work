import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://raugrihxjruvcszmsatr.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdWdyaWh4anJ1dmNzem1zYXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxNTk3OTIsImV4cCI6MjAzOTczNTc5Mn0.HNdK_9t19qapqKX2Endr4CpNkLFX1QYgH0qhi9958cU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
