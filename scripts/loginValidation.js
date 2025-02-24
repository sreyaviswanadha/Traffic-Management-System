function validateLogin(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var users = {
        "admin@tms.com": { password: "admin123", role: "admin", redirect: "AdminDashboard.html" },
        "rto@tms.com": { password: "rto123", role: "rto", redirect: "RTODashboard.html" },
        "cop@tms.com": { password: "cop123", role: "cop", redirect: "CopDashboard.html" },
        "clerk@tms.com": { password: "clerk123", role: "clerk", redirect: "ClerkDashboard.html" }
    };

    if (users[email] && users[email].password === password) {
        // Store login session
        localStorage.setItem("loggedInUser", JSON.stringify(users[email]));
        window.location.href = users[email].redirect;
    } else {
        alert("Invalid email or password.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", validateLogin);
});
