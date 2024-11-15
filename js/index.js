document.addEventListener("DOMContentLoaded", function() {
    const loginContainer = document.getElementById("formContainer");
    const registerContainer = document.getElementById("registerContainer");
    const modalContainer = document.getElementById("modalContainer");
    const closeModal = document.getElementById("closeModal");

    document.getElementById("loginButton").onclick = function() {
        modalContainer.style.display = "block";
        loginContainer.style.display = "block";
        registerContainer.style.display = "none";
    };

    document.getElementById("signupButton").onclick = function() {
        modalContainer.style.display = "block";
        loginContainer.style.display = "none";
        registerContainer.style.display = "block";
    };

    closeModal.onclick = function() {
        modalContainer.style.display = "none";
    };

    document.getElementById("passwordReset").onclick = function() {
        loginContainer.innerHTML = `
            <form>
                <img src="Images/OddsStream.png" class="formImage">
                <input type="text" required autocomplete="off" maxlength="30" placeholder="Email...">
                <button type="submit" id="resetRequest">Reset</button>
                <span class="close" id="closeLogin">&times;</span>
            </form>
        `;
        document.getElementById("closeLogin").onclick = closeModal;
    };

    document.getElementById("mainForm").addEventListener("submit", function(event) {
        event.preventDefault();
        // Handle login logic here
        console.log("Login form submitted");
    });

    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault();
        // Handle registration logic here
        console.log("Registration form submitted");
    });
});
