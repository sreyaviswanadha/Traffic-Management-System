function validateLogin(event) {
    event.preventDefault(); // Prevent default form submission

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var users = {
        "admin@tms.com": { password: "admin123", redirect: "AdminLogin.html" },
        "rto@tms.com": { password: "rto123", redirect: "RTOLogin.html" },
        "cop@tms.com": { password: "cop123", redirect: "CopLogin.html" },
        "clerk@tms.com": { password: "clerk123", redirect: "ClerkLogin.html" }
    };

    if (users[email] && users[email].password === password) {
        window.location.href = users[email].redirect;
    } else {
        alert("Invalid email or password.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", validateLogin);
});
