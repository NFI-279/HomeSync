import { supabase } from './supabase.js';  // Import Supabase client

document.addEventListener('DOMContentLoaded', () => {
    // DOM elements for login, signup, and reset actions
    const loginForm = document.getElementById('loginForm');  // Use loginForm here
    const signupForm = document.getElementById('signupForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');

    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');


    const overlay = document.getElementById('overlay');

    // Handle user login
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        overlay.style.display = 'flex';

        // Correct the selector here to use loginForm
        const email = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            // Show error message if login fails
            alert('Login failed: ' + error.message);
        } else {
            setTimeout(() => {
                overlay.style.display = 'none';

            // User successfully logged in, redirect to home.html inside DB-Project folder
            window.location.href = './home.html';  // Absolute path to the home.html
            }, 2300);
        }
    });

    // Handle user signup
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = signupForm.querySelector('input[type="email"]').value;
        const username = signupForm.querySelector('input[type="text"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;

        const { user, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            // Show error message if signup fails
            alert('Signup failed: ' + error.message);
        } else {
            // Directly redirect to home.html inside DB-Project folder after successful signup
            window.location.href = './home.html';  // Absolute path to the home.html
        }
    });

    // Handle password reset
    forgotPasswordForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = forgotPasswordForm.querySelector('input[type="email"]').value;

        const { data, error } = await supabase.auth.resetPasswordForEmail(email);

        if (error) {
            // Show error message if password reset fails
            alert('Password reset failed: ' + error.message);
        } else {
            // Inform the user that a reset email has been sent
            alert('Password reset email has been sent. Check your inbox!');
            forgotPasswordModal.classList.remove('show');
            loginModal.classList.add('show');
        }
    });

    // Show the sign up modal when "Don't have an account?" is clicked
    document.getElementById('showSignUp').addEventListener('click', () => {
        loginModal.classList.remove('show');
        signupModal.classList.add('show');
    });

    // Show the login modal when "Already have an account?" is clicked
    document.getElementById('showLogin').addEventListener('click', () => {
        signupModal.classList.remove('show');
        loginModal.classList.add('show');
    });

    // Show the forgot password modal when "Forgot Password?" is clicked
    document.getElementById('forgotPassword').addEventListener('click', () => {
        loginModal.classList.remove('show');
        forgotPasswordModal.classList.add('show');
    });

    // Show the login modal when "Back to Login" is clicked in forgot password modal
    document.getElementById('backToLogin').addEventListener('click', () => {
        forgotPasswordModal.classList.remove('show');
        loginModal.classList.add('show');
    });
});

