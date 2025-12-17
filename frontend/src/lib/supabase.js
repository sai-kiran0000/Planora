import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tbogliydrxvlhddmtilf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRib2dsaXlkcnh2bGhkZG10aWxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5NTc0MDQsImV4cCI6MjA4MTUzMzQwNH0.e-m_jAAguoaE3jS0Lp91GRt6LBryMyO_LdOAj1NhXy8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
