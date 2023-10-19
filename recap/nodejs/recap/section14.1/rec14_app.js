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
/////////////////////////////////////////////////
////Sessions //9
// const session = require("express-session");
const express_session_1 = __importDefault(require("express-session"));
const mongoDBStore = require("connect-mongodb-session")(express_session_1.default);
const store = new mongoDBStore({
    uri: process.env.MongoDbUri,
    collection: "sessions"
});
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
            req.user = user;
        }
        next();
    }).catch(err => {
        console.log(err);
    });
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
app.use(errorController.get404);
mongoose.connect(process.env.MongoDbUri)
    .then(() => {
    //6
    //gives back the first user it finds
    user_1.UserClassModel
        .findOne()
        .then(user => {
        if (!user) {
            //TS: HydratedDocument<IUser> represents a hydrated Mongoose document, with methods, virtuals, and other Mongoose-specific features.
            //to allow use populate with IUser
            const user = new user_1.UserClassModel({
                name: "Sheriff",
                email: "Sheriff@email.com",
                seller: true,
                UserRating: 0,
                cart: {
                    items: []
                }
            });
            user.save();
        }
    });
    app.listen(3000);
})
    .catch((err) => {
    console.log("mongoose connect error :: " + err);
});
/*








*/
