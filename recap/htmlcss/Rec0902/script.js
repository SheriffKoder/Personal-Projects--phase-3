"use strict";
console.log("hello");
const loginEmailOrPhone = "112sheriff@email.com";
const loginPassword = "121212";
//check loginEmailOrPhone
//find a not a number
let inputCredentials;
const isEmail = loginEmailOrPhone.split("").filter((p) => {
    return isNaN(p);
});
console.log(isEmail);
if (isEmail.length > 0) {
    //9.2 sessions
    //this is the code from app.js
    // UserClassModel.findById("652725974ad26fc2ae8f8433")
    console.log("user found with email");
}
else if (isEmail.length <= 0) {
    console.log("user found with phone");
}
console.log(Date.now());
console.log((Date.now()) + 1);
const today = new Date();
const Year = today.getFullYear();
let Month = today.getMonth();
let Day = today.getDate();
if (Day < 10)
    Day = +('0' + Day);
if (Month < 10)
    Month = +('0' + Month);
const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const minutes = today.getMinutes();
const hours = today.getHours();
console.log(minutes + " " + hours + " " + Day + " " + Month + " " + Year);
