function deleteOwner() {
    var fullName = document.getElementById("deleteFullName").value.trim().toLowerCase();
    var owners = JSON.parse(localStorage.getItem("owners")) || [];
    var registrations = JSON.parse(localStorage.getItem("registrations")) || [];
    var vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];

    // Ensure the full name is provided
    if (!fullName) {
        document.getElementById("deleteStatus").innerHTML = "<p style='color: red;'>Please enter the full name of the owner.</p>";
        return;
    }

    // Find the owner by full name
    var ownerIndex = owners.findIndex(o => (o.firstName + " " + o.lastName).toLowerCase() === fullName);

    if (ownerIndex === -1) {
        document.getElementById("deleteStatus").innerHTML = "<p style='color: red;'>Owner not found!</p>";
        return;
    }

    // Log to verify that the owner is being found
    console.log("Owner to delete: ", owners[ownerIndex]);

    // Find the corresponding registration record
    var registration = registrations.find(r => r.ownerId === owners[ownerIndex].ownerId);
    console.log("Registration found: ", registration);

    // If there is a registration, remove it and related vehicles
    if (registration) {
        // Remove the registration
        registrations = registrations.filter(r => r.ownerId !== owners[ownerIndex].ownerId);
        console.log("Updated Registrations: ", registrations);

        // Find the corresponding vehicle and delete it if necessary
        var vehicle = vehicles.find(v => v.vehicleId === registration.vehicleId);
        if (vehicle) {
            vehicles = vehicles.filter(v => v.vehicleId !== vehicle.vehicleId);
            console.log("Updated Vehicles: ", vehicles);
        }
    }

    // Remove the owner from the list
    owners.splice(ownerIndex, 1);
    console.log("Updated Owners: ", owners);

    // Save the updated lists back to localStorage
    localStorage.setItem("owners", JSON.stringify(owners));
    localStorage.setItem("registrations", JSON.stringify(registrations));
    localStorage.setItem("vehicles", JSON.stringify(vehicles));

    // Provide a success message
    document.getElementById("deleteStatus").innerHTML = "<p style='color: green;'>Owner deleted successfully!</p>";
}
