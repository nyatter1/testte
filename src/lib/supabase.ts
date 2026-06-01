import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || 'https://fzzpijyacognzucxjrga.supabase.co';
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6enBpanlhY29nbnp1Y3hqcmdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5Mjc0NzMsImV4cCI6MjA4OTUwMzQ3M30.unfp-A6yOsKKMDpLBkq2PxSF4wEq_qmAptU80lRL2JQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
