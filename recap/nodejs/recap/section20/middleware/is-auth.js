"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//10
//check if the user accessing is logged in
module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect("/login");
    }
    //otherwise
    //allow the request to continue to where ever the route want to go to
    next();
};
