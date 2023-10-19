"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogin = (req, res, next) => {
    res.render("auth/login", {
        path: "/login",
        myTitle: "Login to your account",
        isAuthenticated: req.isLoggedIn
    });
};
exports.postLogin = (req, res, next) => {
    res.setHeader("Set-Cookie", "isLoggedIn=True");
    res.redirect("/products");
};
