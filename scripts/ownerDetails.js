
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
        <h2>Successfully Submitted!</h2>
        <p>Your details have been saved successfully.</p>
        <a href="OwnerRead.html">View All Records</a>
    `;
}