
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bbbxgjxxcvwbggxfnvpk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJiYnhnanh4Y3Z3YmdneGZudnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNTEzMjksImV4cCI6MjA2MjgyNzMyOX0.i_CGIrmlccA5fhJxynIjld9wY_8P4dsj4ZnvVwTTkIo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
  