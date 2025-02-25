function fetchOwnerDetails() {
    var fullName = document.getElementById("fullName").value.trim().toLowerCase(); // Full name input
    var owners = JSON.parse(localStorage.getItem("owners")) || [];

    // Find the owner by combining firstName and lastName
    var owner = owners.find(o => (o.firstName + " " + o.lastName).toLowerCase() === fullName);

    if (!owner) {
        alert("Owner not found!");
        return;
    }

    // Display owner details in the update form for modification
    document.getElementById("updateOwnerForm").style.display = "block";

    // Pre-fill form fields with the existing owner details
    document.getElementById("newPhone").value = owner.phone;
    document.getElementById("newFirstName").value = owner.firstName;
    document.getElementById("newLastName").value = owner.lastName;
    document.getElementById("newTempAddress").value = owner.tempAddress;
    document.getElementById("newPermAddress").value = owner.permAddress;
    document.getElementById("newProofName").value = owner.proofName;
    document.getElementById("newPincode").value = owner.pincode;
}

function updateOwnerDetails() {
    var fullName = document.getElementById("fullName").value.trim().toLowerCase(); // Full name input
    var newPhone = document.getElementById("newPhone").value.trim();
    var newFirstName = document.getElementById("newFirstName").value.trim();
    var newLastName = document.getElementById("newLastName").value.trim();
    var newTempAddress = document.getElementById("newTempAddress").value.trim();
    var newPermAddress = document.getElementById("newPermAddress").value.trim();
    var newProofName = document.getElementById("newProofName").value.trim();
    var newPincode = document.getElementById("newPincode").value.trim();

    var owners = JSON.parse(localStorage.getItem("owners")) || [];
    var ownerIndex = owners.findIndex(o => (o.firstName + " " + o.lastName).toLowerCase() === fullName);

    if (ownerIndex === -1) {
        alert("Owner not found!");
        return;
    }

    // Update the owner's details (only fields that have values)
    if (newPhone) owners[ownerIndex].phone = newPhone;
    if (newFirstName) owners[ownerIndex].firstName = newFirstName;
    if (newLastName) owners[ownerIndex].lastName = newLastName;
    if (newTempAddress) owners[ownerIndex].tempAddress = newTempAddress;
    if (newPermAddress) owners[ownerIndex].permAddress = newPermAddress;
    if (newProofName) owners[ownerIndex].proofName = newProofName;
    if (newPincode) owners[ownerIndex].pincode = newPincode;

    // Save the updated owners array back to localStorage
    localStorage.setItem("owners", JSON.stringify(owners));

    // Alert the user that the update was successful
    alert("Owner details updated successfully!");
}
