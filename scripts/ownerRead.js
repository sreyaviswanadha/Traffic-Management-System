function searchOwnerByVehicle() {
    var vehicleNumber = document.getElementById("vehicleNumber").value.trim();
    
    if (!vehicleNumber) {
        alert("Please enter a valid Vehicle Number.");
        return;
    }

    // Retrieve data from localStorage
    var owners = JSON.parse(localStorage.getItem("owners")) || [];
    var vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    var registrations = JSON.parse(localStorage.getItem("registrations")) || [];

    // Find vehicle by number
    var vehicle = vehicles.find(v => v.vehicleNumber === vehicleNumber);
    
    if (!vehicle) {
        document.getElementById("ownerDetails").innerHTML = "<p>No vehicle found with this number.</p>";
        return;
    }

    // Find registration record
    var registration = registrations.find(r => r.vehicleId === vehicle.vehicleId);
    
    if (!registration) {
        document.getElementById("ownerDetails").innerHTML = "<p>No owner registered for this vehicle.</p>";
        return;
    }

    // Find owner by ownerId
    var owner = owners.find(o => o.ownerId === registration.ownerId);
    
    if (!owner) {
        document.getElementById("ownerDetails").innerHTML = "<p>Owner details not found.</p>";
        return;
    }

    // Display owner details
    document.getElementById("ownerDetails").innerHTML = `
        <h2>Owner Details</h2>
        <p><strong>First Name:</strong> ${owner.firstName}</p>
        <p><strong>Last Name:</strong> ${owner.lastName}</p>
        <p><strong>Date of Birth:</strong> ${owner.dob}</p>
        <p><strong>Phone:</strong> ${owner.phone}</p>
        <p><strong>Gender:</strong> ${owner.gender}</p>
        <p><strong>Temporary Address:</strong> ${owner.tempAddress}</p>
        <p><strong>Permanent Address:</strong> ${owner.permAddress}</p>
        <p><strong>Pincode:</strong> ${owner.pincode}</p>
        <p><strong>Occupation:</strong> ${owner.occupation}</p>
        <p><strong>PAN Number:</strong> ${owner.panNum}</p>
        <p><strong>Address Proof Name:</strong> ${owner.proofName}</p>
    `;
}

function searchOwnerByFullName() {
    var fullName = document.getElementById("fullName").value.trim().toLowerCase();
    
    if (!fullName) {
        alert("Please enter a valid Full Name.");
        return;
    }

    // Retrieve data from localStorage
    var owners = JSON.parse(localStorage.getItem("owners")) || [];

    // Find owner by full name (combining first and last name)
    var owner = owners.find(o => (o.firstName + " " + o.lastName).toLowerCase() === fullName);

    if (!owner) {
        document.getElementById("ownerDetails").innerHTML = "<p>No owner found with this name.</p>";
        return;
    }

    // Display owner details
    document.getElementById("ownerDetails").innerHTML = `
        <h2>Owner Details</h2>
        <p><strong>First Name:</strong> ${owner.firstName}</p>
        <p><strong>Last Name:</strong> ${owner.lastName}</p>
        <p><strong>Date of Birth:</strong> ${owner.dob}</p>
        <p><strong>Phone:</strong> ${owner.phone}</p>
        <p><strong>Gender:</strong> ${owner.gender}</p>
        <p><strong>Temporary Address:</strong> ${owner.tempAddress}</p>
        <p><strong>Permanent Address:</strong> ${owner.permAddress}</p>
        <p><strong>Pincode:</strong> ${owner.pincode}</p>
        <p><strong>Occupation:</strong> ${owner.occupation}</p>
        <p><strong>PAN Number:</strong> ${owner.panNum}</p>
        <p><strong>Address Proof Name:</strong> ${owner.proofName}</p>
    `;
}
