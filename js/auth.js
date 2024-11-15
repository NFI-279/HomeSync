// auth.js
import { supabase } from './supabase.js';  // Import Supabase client

// Function to check if the user is authenticated
async function checkUserSession() {
    const user = supabase.auth.user();

    if (user) {
        // If the user is authenticated, allow access to home page
        console.log('User is logged in:', user);
    } else {
        // If not authenticated, redirect to the login page
        window.location.href = '/login.html'; // Change this to your login page URL
    }
}

// Check session when home page loads
document.addEventListener('DOMContentLoaded', checkUserSession);
