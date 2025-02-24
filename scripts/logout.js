function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "LoginPage.html"; // Redirect to login
}
