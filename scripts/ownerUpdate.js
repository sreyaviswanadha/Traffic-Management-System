function fetchOwnerDetails() {
    var fullName = document.getElementById("fullName").value.trim().toLowerCase();
    var owners = JSON.parse(localStorage.getItem("owners")) || [];

    var owner = owners.find(o => (o.firstName + " " + o.lastName).toLowerCase() === fullName);

    if (!owner) {
        alert("Owner not found!");
        return;
    }

    document.getElementById("updateOwnerForm").style.display = "block";
    document.getElementById("phone").value = owner.phone;
    document.getElementById("pincode").value = owner.pincode;
}

function updateOwnerDetails(event) {
    event.preventDefault();
    
    var fullName = document.getElementById("fullName").value.trim().toLowerCase();
    var owners = JSON.parse(localStorage.getItem("owners")) || [];

    var ownerIndex = owners.findIndex(o => (o.firstName + " " + o.lastName).toLowerCase() === fullName);

    if (ownerIndex === -1) {
        alert("Owner not found!");
        return;
    }

    // Update owner details
    owners[ownerIndex].phone = document.getElementById("phone").value;
    owners[ownerIndex].pincode = document.getElementById("pincode").value;

    localStorage.setItem("owners", JSON.stringify(owners));
    alert("Owner details updated successfully!");
}
