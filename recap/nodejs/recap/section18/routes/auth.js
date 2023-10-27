"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const authRouter = require("express").Router();
const authController = require("../controllers/auth");
//11
const { check, body } = require("express-validator");
authRouter.get("/login", [
    // //loginEmailOrPhone can be any combination of inputs (phone or email) that will be already checked in the controller
    // body("loginEmailOrPhone")
    // .isEmail()
    // .withMessage("Please enter a valid email address")
    // .normalizeEmail(),
    body("loginPassword", "Password has to be at least 8 characters")
        .isLength({ min: 8 })
        .isAlphanumeric()
        .trim()
], authController.getLogin);
authRouter.post("/login", authController.postLogin);
authRouter.post("/logout", authController.postLogout);
//10.2
authRouter.get('/signup', authController.getSignUp);
authRouter.post('/signup', [
    body("signUpFullName")
        .notEmpty()
        .trim()
        .isString() //isString allows white spaces
        .matches(/^([a-zA-Z]{3,15})\s([a-zA-Z]{3,15})\s?([a-zA-Z]{3,15})?$/)
        .withMessage("full name should consist of two or three separated names each more than 3 alphabetic characters"),
    check("signUpEmail")
        .isEmail()
        .withMessage("Please enter a valid email")
        .custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield user_1.UserClassModel.findOne({ email: value });
        if (user) {
            console.log("this email is already associated with another account");
            return Promise.reject("this email is already associated with another account");
        }
    }))
        .normalizeEmail(),
    body("signUpPhoneNumber")
        .isLength({ min: 10 })
        .isNumeric()
        .trim()
        .withMessage("the phone number should be 10 digits excluding the country code"),
    body("signUpPassword")
        .isLength({ min: 8 })
        .isAlphanumeric()
        .trim()
], authController.postSignUp);
//10.2
authRouter.get("/reset", authController.getReset);
authRouter.post("/reset", authController.postReset);
//10.2
authRouter.get("/reset/:token", authController.getNewPassword);
authRouter.post("/new-password/", authController.postNewPassword);
module.exports = authRouter;
