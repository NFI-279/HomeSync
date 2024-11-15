// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
// Replace with your Supabase project details
const SUPABASE_URL = 'https://ephnrozolobkslipobyi.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwaG5yb3pvbG9ia3NsaXBvYnlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0NzIxODMsImV4cCI6MjA0NjA0ODE4M30.DZZqPANbtCl2en9k980o80oqbBDae4rLKgrU62rmCz8';

// Initialize Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
