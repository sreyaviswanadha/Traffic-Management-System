
function saveOwnerDetails() {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get form data
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('DOB').value;
    var phone = document.getElementById('phone').value;
    var gender = document.querySelector('input[name="gender"]:checked')?.value;
    var tempAddress = document.getElementById('tempAddress').value;
    var permAddress = document.getElementById('permAddress').value;
    var pincode = document.getElementById('pincode').value;
    var occupation = document.getElementById('occupation').value;
    var panNum = document.getElementById('panNum').value;
    var proofName = document.getElementById('proofName').value;

        // Validation rules
        var nameRegex = /^[A-Za-z\s]+$/;
        var phoneRegex = /^[6-9]\d{9}$/; // 10-digit phone starting with 6-9
        var pincodeRegex = /^\d{6}$/; // 6-digit pincode
        var panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // PAN format ABCDE1234F
    
        // Check if the person is at least 18 years old
        var today = new Date();
        var birthDate = new Date(dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
    
        // Error messages
        if (!nameRegex.test(firstName)) {
            alert("First Name should contain only letters.");
            return false;
        }
        if (!nameRegex.test(lastName)) {
            alert("Last Name should contain only letters.");
            return false;
        }
        if (!dob || age < 18) {
            alert("Owner must be at least 18 years old.");
            return false;
        }
        if (!phoneRegex.test(phone)) {
            alert("Enter a valid 10-digit Phone Number.");
            return false;
        }
        if (!gender) {
            alert("Please select Gender.");
            return false;
        }
        if (!tempAddress || !permAddress) {
            alert("Both Temporary and Permanent Address are required.");
            return false;
        }
        if (!pincodeRegex.test(pincode)) {
            alert("Pincode must be a 6-digit number.");
            return false;
        }
        if (!panRegex.test(panNum)) {
            alert("Enter a valid PAN Number (Format: ABCDE1234F).");
            return false;
        }
        if (!proofName) {
            alert("Please select an Address Proof.");
            return false;
        }    

    // Create an object to store the form data
    var owner = {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        phone: phone,
        gender: gender,
        tempAddress: tempAddress,
        permAddress: permAddress,
        pincode: pincode,
        occupation: occupation,
        panNum: panNum,
        proofName: proofName
    };

    // Retrieve existing owners from localStorage, or initialize an empty array
    var owners = JSON.parse(localStorage.getItem('owners')) || [];

    // Add the new owner to the list
    owners.push(owner);

    // Save the updated list back to localStorage
    localStorage.setItem('owners', JSON.stringify(owners));

    // Dynamically create the success page content
    document.body.innerHTML = `
        <button id="returnToDashboardBtn" onclick="returnToDashboard()">Return to Dashboard</button>
        <h2>Successfully Submitted!</h2>
        <p>Your details have been saved successfully.</p>
        <script type="text/javascript" src="scripts/returnToOwnerDashboard.js"></script>
    `;
}