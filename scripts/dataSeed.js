// Owners Data
var owners = [
    { ownerId: "O1001", firstName: "Raj", lastName: "Kumar", dob: "1985-06-15", phone: "9876543210", gender: "Male", 
      tempAddress: "123, MG Road, Hyderabad", permAddress: "456, Jubilee Hills, Hyderabad", pincode: "500033", 
      occupation: "Engineer", panNum: "ABCDE1234F", proofName: "Aadhar Card" },
    
    { ownerId: "O1002", firstName: "Anita", lastName: "Sharma", dob: "1992-09-20", phone: "9876504321", gender: "Female", 
      tempAddress: "78, Banjara Hills, Hyderabad", permAddress: "90, Gachibowli, Hyderabad", pincode: "500032", 
      occupation: "Doctor", panNum: "FGHIJ5678K", proofName: "Passport" }
];

// Vehicles Data
var vehicles = [
    { vehicleId: "V2001", vehicleNumber: "AP01AB1234", model: "Honda City", color: "White" },
    { vehicleId: "V2002", vehicleNumber: "TS09CD5678", model: "Hyundai Creta", color: "Black" }
];

// Registration Data (Maps ownerId to vehicleId)
var registrations = [
    { ownerId: "O1001", vehicleId: "V2001" },
    { ownerId: "O1002", vehicleId: "V2002" }
];

// Store the data in localStorage
localStorage.setItem('owners', JSON.stringify(owners));
localStorage.setItem('vehicles', JSON.stringify(vehicles));
localStorage.setItem('registrations', JSON.stringify(registrations));

console.log("Predefined data stored successfully!");
