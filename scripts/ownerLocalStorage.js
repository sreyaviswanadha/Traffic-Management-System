var owners = [
    {
        firstName: "John",
        lastName: "Doe",
        dob: "1985-06-15",
        phone: "9876543210",
        gender: "Male",
        tempAddress: "1234 Elm Street, Apt 56",
        permAddress: "7890 Oak Avenue, Suite 12",
        pincode: "123456",
        occupation: "Software Engineer",
        panNum: "ABCDE1234F",
        proofName: "Passport"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        dob: "1990-02-28",
        phone: "9123456789",
        gender: "Female",
        tempAddress: "4321 Maple Road, Apt 21",
        permAddress: "6789 Pine Street, House 5",
        pincode: "654321",
        occupation: "Doctor",
        panNum: "XYZAB9876H",
        proofName: "Aadhar Card"
    },
    {
        firstName: "Michael",
        lastName: "Johnson",
        dob: "1978-11-02",
        phone: "9988776655",
        gender: "Male",
        tempAddress: "1111 Birch Lane, Flat 34",
        permAddress: "2222 Cedar Avenue, Building 10",
        pincode: "789012",
        occupation: "Teacher",
        panNum: "PQRST5678K",
        proofName: "Driving License"
    },
    {
        firstName: "Emily",
        lastName: "Williams",
        dob: "1995-08-19",
        phone: "9348567123",
        gender: "Female",
        tempAddress: "5678 Walnut Street, Apt 89",
        permAddress: "1234 Ash Avenue, Block C",
        pincode: "321654",
        occupation: "Designer",
        panNum: "LMNOP6789Q",
        proofName: "Voter ID"
    }
];

localStorage.setItem('owners', JSON.stringify(owners));