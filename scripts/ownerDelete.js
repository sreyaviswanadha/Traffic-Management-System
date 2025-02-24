function deleteOwner() {
    var fullName = document.getElementById("deleteFullName").value.trim().toLowerCase();
    var owners = JSON.parse(localStorage.getItem("owners")) || [];

    var ownerIndex = owners.findIndex(o => (o.firstName + " " + o.lastName).toLowerCase() === fullName);

    if (ownerIndex === -1) {
        document.getElementById("deleteStatus").innerHTML = "<p style='color: red;'>Owner not found!</p>";
        return;
    }

    owners.splice(ownerIndex, 1);
    localStorage.setItem("owners", JSON.stringify(owners));

    document.getElementById("deleteStatus").innerHTML = "<p style='color: green;'>Owner deleted successfully!</p>";
}
