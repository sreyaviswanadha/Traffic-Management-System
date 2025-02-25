function returnToOwnerDashboard() {
    window.location.href = 'manageOwner.html';  // Redirect to manageOwner.html
}

    function returnToMainDashboard() {
        window.location.href = localStorage.getItem(["loggedInUser"]["redirect"]);  // Redirect to manageOwner.html
    } 