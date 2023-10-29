"use strict";
//npm init
//npm install --save express body-parser mongodb ejs
//npm install --save mongoose
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// # npm install --save dotenv
// # npm install typescript --save-dev
// # tsc --init //create ts config
// //@types package for the validation library
// # npm install --save-dev @types/node @types/express @types/mongoose @types/body-parser
// in the TS config file
// add "moduleResolution": "node" below "module": "commonjs"
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// const express = __importDefault(require("express"));
// require("dotenv").config();
// > replace values with process.env.variableName
// npm install --save express-session //9.2
// npm install --save connect-mongodb-session
// npm install --save @types/express-session    //for TS
//10
// npm install --save bcryptjs     //10 //hash passwords
// npm install --save csurf        //10 //compare ejs session token with server
// npm install --save connect-flash    //10 //send messages to ejs
// npm install --save @types/connect-flash //TS
// npm install --save @types/csurf
//10.2
// npm install --save nodemailer
//11
// npm install --save express-validator
//module imports
require("dotenv").config();
const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// const User = require("./models/user");  //6
const user_1 = require("./models/user");
//public directory
app.use(express.static(path.join(__dirname, "public")));
//10
const csrf = require("csurf");
const flash = require("connect-flash");
/////////////////////////////////////////////////
////Sessions //9
// const session = require("express-session");
const express_session_1 = __importDefault(require("express-session"));
const mongoDBStore = require("connect-mongodb-session")(express_session_1.default);
const store = new mongoDBStore({
    uri: process.env.MongoDbUri,
    collection: "sessions"
});
//10
const csrfProtection = csrf();
//flash needs to be initialized, after the session
app.use(flash());
//secret: key
//re-save: re-save on every request, false for only when something changes - for better performance
//saveUninitialized; false for no session save for no changes requests
//can configure the session cookie for maxAge, expires
//can add cookie related configuration ,cookie {..}
app.use((0, express_session_1.default)({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store
}));
//10
app.use(csrfProtection);
/////////////////////////////////////////////////
//set the templating engine
app.set("view engine", "ejs");
app.set("views", "views");
//Routes
const adminJSRoutes = require("./routes/admin.js");
const shopJSRoutes = require("./routes/shop");
const authJSRoutes = require("./routes/auth");
////////////////////end of TS//////////
/////////////////////////////////////////////////
//pass a user and session //9.2
app.use((req, res, next) => {
    if (!req.session.user) {
        console.log("not logged in");
        return next();
    }
    user_1.UserClassModel.findById(req.session.user._id)
        .then(user => {
        console.log("logged in");
        if (user) {
            console.log("user found");
            req.user = user;
            res.locals.user = req.user;
        }
        next();
    }).catch(err => {
        // console.log(err);
        const error = new Error(err);
        error.code = 500;
        //throw error - for sync, return next for async then/catch
        return next(error);
    });
});
//10
//after the middleware that extracts our user
//but before our routes
////for every request that will be executed
//these two fields will be set for the views that are rendered
app.use((req, res, next) => {
    //a special feature/field provided by express js
    //locals allows to set local variables that are passed 
    //into the views which are rendered
    //isLoggedIn is set to true on a successful login
    //and isAuthenticated checked in is-auth.js before each routing
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    //call next so we are able to continue
    next();
});
/////////////////////////////////////////////////
//pass a user and cookies //9.1
/*
app.use((req: Request_With_reqUser, res: Response, next: NextFunction) => {                   //6
    UserClassModel.findById("652725974ad26fc2ae8f8433")
    .then(user => {
        if (user) {
            req.user = user;

            /////////////////////////////////////////
            //using cookies sec14.1 //9
            //// res.setHeader("Set-Cookie", "isLoggedIn=True");
            let myCookies = req.get("Cookie");  //cookies in a string format separated by spaces
            // console.log(typeof myCookies);
            let myCookies2 = myCookies?.split(" "); //an array of cookies of "isLogged=value"
            // console.log(myCookies2);
            let myCookies3 = myCookies2?.filter((cookie: string) => {   //take the valid cookies out
                return ((cookie.split("=")[0] === "isLoggedIn") && (cookie.split("=")[1] === "True"));
            });

            let final_final_Cookie;
            //get the value from the cookies (all?)
            let finalCookie = myCookies3?.forEach((cookie: string) => {
                final_final_Cookie = cookie.split("=")[1];
            });

            // console.log(final_final_Cookie);
            if (final_final_Cookie) {
                req.isLoggedIn = true;
            } else {
                req.isLoggedIn = false;
            }
            /////////////////////////////////////////
            //cookie is set in the auth controller postLogin



            next();
        }
    })
    .catch(err => {
        console.log(err);
    })
})
*/
app.use(shopJSRoutes);
app.use("/admin", adminJSRoutes);
app.use(authJSRoutes);
//404 page
const errorController = require("./controllers/errorController.js");
//render this in case of get, not when any route fails
app.get("/500", errorController.get500);
app.use(errorController.get404);
mongoose.connect(process.env.MongoDbUri)
    .then(() => {
    //6
    //gives back the first user it finds
    // UserClassModel
    // .findOne()
    // .then(user => {
    //     if (!user) {
    //         //TS: HydratedDocument<IUser> represents a hydrated Mongoose document, with methods, virtuals, and other Mongoose-specific features.
    //         //to allow use populate with IUser
    //         const user: HydratedDocument<IUser> = new UserClassModel({
    //             name: "Sheriff",
    //             email: "Sheriff@email.com",
    //             seller: true,
    //             UserRating: 0,
    //             cart: {
    //                 items: []
    //             }
    //         })
    //         user.save();
    //     }
    // });
    app.listen(3000);
})
    .catch((err) => {
    console.log("mongoose connect error :: " + err);
});
/*

//Section 18

//server-side validation


validating from users before going to the node code
when handling the request

to succeed or reject input (return information again)

js validation is good for UE but can be manipulated

check for input errors during validation
check for logical errors in the controller

//11

# npm install --save express-validator

will validate routes handling a post request
- auth.js router import express-validator/check < function returns a middleware
- postSignup route in auth.js

in the controllers
- auth.js controller, import the validationResult < to gather all errors
- postSignUp, const errors = validationResult(req); to render with flash

- the get controllers will have an empty array of validation errors
- and the post will have errors.array();


remove user.findOne{email:email} from postSignUp controller
add it to the custom method in the router
to return a promise that has a reject message
to be caught by the custom method


do the same for the login route postLogin

oldInput object with values to user in the ejs

change the styling of ejs inputs based on the existence of errors
class="<%= validationErrors.find(e => e.path === 'email') ? 'invalid' : '' %>"

////now keeping credentials

postLogin, render with oldInput, empty validationErrors
getLogin, render with empty oldInput, empty validationErrors
adjust the ejs to have value=oldLogin

sanitizing, trimming, normalize email


------

now working on validating the add-product

- routes post addProduct, editProduct
import validator body, start middleware by body("ejs-name")
- import validator in admin.js and setup their controllers for errors


//handling errors

- error object

can be used if there is an expected error or no error thrown
- error page
- return user to same page with old input values
- redirect
- response with error information

use try/catch
in the catch block render the add-product page
with old input and status 500

work on 500.ejs (like 400.ejs)
error.js controller
add to app.js its route

in the post addProduct controller in the catch block
return next(new Error(err).httpStatusCode=500);

in the app.js add a middleware with an extra error argument
which will be evoked by the return next(error) in any middleware

and the return next error object is the last resort
if everything else fails

Note:
async: promise, then/catch, callbacks
so in sync code errors we could throw new Error("..")
in async parts (then) for any throw new Error or code error to go to 500 page
    in the (catch) return next(new Error(err).httpStatusCode=500); //(19.0.3)








>>add the return next error-object to all catch blocks in all
controller middleware's in the project

the idea is to show to the user something when something fails
instead of doing nothing or console to non end users

auth.js's
- routes postSignUp, postLogin, getLogin
- postSignUp controller

admin.js
- routes post addProduct, editProduct
- their admin.js controllers
- addProduct catch block renders 500.ejs

app.js
error middleware


ejs
login
edit-product


- routes
- controllers
- app.js
- ejs


///////////// routes /////////////
////-- auth.js route
// post login:
body("ejsName").validationCheckMethods

// post signUp:
check for email
add a custom middleware that uses the find email from the controller
in async format

////-- admin.js route
post add-product, post edit-product
add some validations for the inputs used




///////////// controllers /////////////
////-- auth.js controller

//postLogin
import the validation result

if the validation result is not empty, redirect to /login with old input
if validation error, send error to errorMessage

if no user or wrong password (no validation error)
(will not flash) but render login with oldInput and string error message

in the catch, return next(new Error)

//postSignUp
add the if errors code as before

//rest of post middlewares
add the throw error in the catch blocks


////-- admin.js controller

- in post add and edit, add the if validation errors code
for all middlewares add throw error in the catch


////--error controller



///////////// app.js /////////////

work on the catch errors
app.use /500


///////////// ejs /////////////

edit-product
change if (editing) to if (editing ||hasError) to place values
add to inputs class invalid in case validation errors contain .path of the input
add the error message div

login
add value=oldValue.name
add to inputs class invalid in case validation errors contain .path of the input
the error message is the same, the first displaying input span


- work on the errors and sort notes to add to description



-ejs : oldInput, error message, validationErrors(for classes)



on the validator library docs that the express-validator use
we can also find sanitizers
//there are also other 3rd party validation packages to use
mongoDB has built in validation (optional) MDB course

MDN has a nice list: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
also https://httpstatuses.com/


validation messages will replace flash in
postLogin


- use express-validator to pass after submitting
- old inputs and error messages(login), error messages manual for signup

- sort ejs and pass the right properties from the controllers
- add styling based on passed properties
- display the messages for each signup field from the server validator
- fix some issues with the javascript validation, not allowing autofilled inputs to enable the buttons
- add a special regex for the signup phone number as the country code will be put from the form

-- a lot of modifications over the course here



- post routes
- post controllers
-













*/
