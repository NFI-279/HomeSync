import { supabase } from './supabase.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const overlay = document.getElementById('overlay');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            alert('Login failed: ' + error.message);
        } else {
            overlay.style.display = 'flex';
            setTimeout(() => {
                overlay.style.display = 'none';
                window.location.href = './home.html';
            }, 2300);
        }
    });

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = signupForm.querySelector('input[type="email"]').value;
        const username = signupForm.querySelector('input[type="text"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;
        const { user, error } = await supabase.auth.signUp({ email, password });
        if (error) {
            alert('Signup failed: ' + error.message);
        } else {
            overlay.style.display = 'flex';
            setTimeout(() => {
                overlay.style.display = 'none';
                window.location.href = './home.html';
            }, 2300);
        }
    });

    forgotPasswordForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = forgotPasswordForm.querySelector('input[type="email"]').value;
        const { data, error } = await supabase.auth.resetPasswordForEmail(email);
        if (error) {
            alert('Password reset failed: ' + error.message);
        } else {
            alert('Password reset email has been sent. Check your inbox!');
        }
    });

    document.getElementById('showSignUp').addEventListener('click', () => {
        document.getElementById('loginModal').classList.remove('show');
        document.getElementById('signupModal').classList.add('show');
    });

    document.getElementById('showLogin').addEventListener('click', () => {
        document.getElementById('signupModal').classList.remove('show');
        document.getElementById('loginModal').classList.add('show');
    });

    document.getElementById('forgotPassword').addEventListener('click', () => {
        document.getElementById('loginModal').classList.remove('show');
        document.getElementById('forgotPasswordModal').classList.add('show');
    });

    document.getElementById('backToLogin').addEventListener('click', () => {
        document.getElementById('forgotPasswordModal').classList.remove('show');
        document.getElementById('loginModal').classList.add('show');
    });
});