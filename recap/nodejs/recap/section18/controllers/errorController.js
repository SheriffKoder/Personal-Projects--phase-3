"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get404 = (req, res, next) => {
    res.status(404).render("404", {
        myTitle: "404 Page",
        path: "/404",
        text: "404, Page is not found"
        // isAuthenticated: req.isLoggedIn  //cookies //9.1
        // isAuthenticated: req.session.isLoggedIn //sessions //9.2
    });
};
exports.get500 = (req, res, next) => {
    res.status(500).render("500", {
        myTitle: "500 Page",
        text: "We are having some trouble at the moment"
        // isAuthenticated: req.isLoggedIn  //cookies //9.1
        // isAuthenticated: req.session.isLoggedIn //sessions //9.2
    });
};
