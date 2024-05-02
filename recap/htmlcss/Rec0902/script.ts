console.log("hello");



const loginEmailOrPhone: string = "112sheriff@email.com"
const loginPassword = "121212";


//check loginEmailOrPhone
//find a not a number
let inputCredentials;
const isEmail: string[] = loginEmailOrPhone.split("").filter((p:any) => {
    return isNaN(p);
})

console.log(isEmail);

if (isEmail.length > 0) {
    //9.2 sessions
    //this is the code from app.js
    // UserClassModel.findById("652725974ad26fc2ae8f8433")
                    console.log("user found with email");

} else if (isEmail.length <= 0) {

                    console.log("user found with phone");

}


console.log(Date.now());
console.log((Date.now())+1);

const today = new Date();
const Year = today.getFullYear();
let Month = today.getMonth();
let Day = today.getDate();
if (Day < 10) Day = +('0' + Day);
if (Month < 10) Month = +('0' + Month);
const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const Hours = today.getHours();
const Minutes = today.getMinutes();


console.log(Hours+" "+Minutes+" "+Day+" "+Month+" "+Year);


const today = new Date();
let currentTime = {
    Year : today.getFullYear(),
    Month : today.getMonth(),
    Day : today.getDate(),
    Hours : today.getHours(),
    Minutes : today.getMinutes(),
}
if (currentTime.Day < 10) currentTime.Day = +('0' + currentTime.Day);
if (currentTime.Month < 10) currentTime.Month = +('0' + currentTime.Month);
const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let expiryTime = {...currentTime};
expiryTime.Minutes = expiryTime.Minutes+15;
if (expiryTime.Minutes > 59) {
    expiryTime.Minutes = expiryTime.Minutes-60;
    expiryTime.Hours = expiryTime.Hours+1;
}
