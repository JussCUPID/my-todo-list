const signupForm = document.getElementById("signupForm");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
        return;
    }

    if (password.length < 8) {
        message.textContent = "Password must be at least 8 characters.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Sign-up form completed successfully!";
    message.style.color = "green";

    signupForm.reset();
});
const passwordSuggestions =
    document.getElementById("passwordSuggestions");

// Select a suggested password
passwordSuggestions.addEventListener("change", function() {
    passwordInput.value = this.value;

    document.getElementById("confirmPassword").value =
        this.value;
});