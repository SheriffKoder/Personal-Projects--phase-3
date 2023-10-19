"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
exports.getLogin = (req, res, next) => {
    console.log("user is " + req.session.user);
    res.render("auth/login", {
        path: "/login",
        myTitle: "Login to your account",
        user: req.session.user,
        // isAuthenticated: req.isLoggedIn  //cookies //9.1
        isAuthenticated: req.session.isLoggedIn //sessions //9.2
    });
};
exports.postLogin = (req, res, next) => {
    //9.1 cookie set
    // res.setHeader("Set-Cookie", "isLoggedIn=True");
    // res.redirect("/products");
    //9.2 sessions
    //this is the code from app.js
    user_1.UserClassModel.findById("652725974ad26fc2ae8f8433")
        .then(user => {
        if (user) {
            console.log("user found");
            req.session.isLoggedIn = true;
            req.session.user = user;
            //redirect when done saving
            req.session.save((err) => {
                console.log(err);
                res.redirect("/products");
            });
        }
    })
        .catch(err => {
        console.log(err);
    });
};
exports.postLogout = (req, res, next) => {
    console.log("logging out");
    req.session.destroy((err) => {
        console.log(err);
        res.redirect("/products");
    });
};
