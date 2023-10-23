"use strict";
const authRouter = require("express").Router();
const authController = require("../controllers/auth");
authRouter.get("/login", authController.getLogin);
authRouter.post("/login", authController.postLogin);
authRouter.post("/logout", authController.postLogout);
//10.2
authRouter.get('/signup', authController.getSignUp);
authRouter.post('/signup', authController.postSignUp);
//10.2
authRouter.get("/reset", authController.getReset);
authRouter.post("/reset", authController.postReset);
//10.2
authRouter.get("/reset/:token", authController.getNewPassword);
authRouter.post("/new-password/", authController.postNewPassword);
module.exports = authRouter;
