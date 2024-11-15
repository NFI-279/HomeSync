// Import Supabase client
const { createClient } = require('@supabase/supabase-js');

// Replace these with your Supabase project URL and anon key
const SUPABASE_URL = 'https://ephnrozolobkslipobyi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwaG5yb3pvbG9ia3NsaXBvYnlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0NzIxODMsImV4cCI6MjA0NjA0ODE4M30.DZZqPANbtCl2en9k980o80oqbBDae4rLKgrU62rmCz8';

// Initialize the Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Function to check connection status
async function checkConnection() {
    try {
        // Make a simple request to verify connection
        const { data, error } = await supabase.from('dummy_table').select('*').limit(1);
        if (error) {
            console.log('Connection failed:', error.message);
        } else {
            console.log('Connection successful!');
        }
    } catch (err) {
        console.error('Connection error:', err);
    }
}

// Run the connection check
checkConnection();
