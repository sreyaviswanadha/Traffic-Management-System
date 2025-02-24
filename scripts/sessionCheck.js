document.addEventListener("DOMContentLoaded", function () {
    var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
        // Prevent users from accessing dashboards if not logged in
        if (window.location.pathname.includes("Dashboard.html")) {
            alert("Session expired! Please log in again.");
            window.location.href = "LoginPage.html";
        }
    } else {
        // Only block forward navigation if coming from login page
        if (document.referrer.includes("LoginPage.html")) {
            window.history.replaceState(null, "", window.location.href);
            window.history.pushState(null, "", window.location.href);

            window.onpopstate = function () {
                if (!localStorage.getItem("loggedInUser")) {
                    window.history.pushState(null, "", window.location.href);
                }
            };
        }
    }
});
