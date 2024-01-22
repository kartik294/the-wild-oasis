import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fjofulrmjnnklwrpimts.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqb2Z1bHJtam5ua2x3cnBpbXRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyNjgzMDMsImV4cCI6MjAxOTg0NDMwM30.wMQm0UthKZ53LmYKWHqQa0PpKkhyvlbSqn0SXo9wUnY";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
