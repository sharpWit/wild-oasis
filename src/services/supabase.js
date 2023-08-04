import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lgsgfuqtnwihhpmyvrzv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxnc2dmdXF0bndpaGhwbXl2cnp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwNTc1MzQsImV4cCI6MjAwNjYzMzUzNH0.kwdtff1fk-vurdvyW6k6ctIwjcLKjBS9eEwjTRwGkNM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
