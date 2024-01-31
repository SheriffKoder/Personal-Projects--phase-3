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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_auth = require("express");
const router_auth = express_auth.Router();
const { body: body_auth } = require("express-validator");
const authController = require("../controllers/auth");
const userModel_1 = __importDefault(require("../models/userModel"));
/* in the tsconfig.json put, for the User model --jsx error to resolve
{
    "compilerOptions": {
        "jsx": "react"
      }
    }
*/
/////////////////////////////////////////////
//Routes
router_auth.post("/signup", [
    body_auth("name")
        .trim()
        .isLength({ min: 4 })
        .withMessage("Name should be more than 4 characters"),
    body_auth("email")
        .isEmail()
        .withMessage("Please enter a valid email")
        .custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userModel_1.default.findOne({ email: value });
        if (user) {
            console.log("this email is already associated with another account");
            return Promise.reject("this email is already associated with another account");
        }
    }))
        .normalizeEmail(),
    body_auth("password")
        .isLength({ min: 4 })
        .isAlphanumeric()
        .trim()
        .withMessage("Password should be more than 4 characters"),
], authController.signUp);
router_auth.post("/login", [
    body_auth("email")
        .isEmail()
        .withMessage("Please enter a valid email")
        .custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userModel_1.default.findOne({ email: value });
        if (!user) {
            console.log("this email is not associated with any account");
            return Promise.reject("this email is not associated with any account");
        }
    }))
        .normalizeEmail(),
    body_auth("password")
        .isLength({ min: 4 })
        .isAlphanumeric()
        .trim()
        .withMessage("Password should be more than 4 characters"),
], authController.login);
/////////////////////////////////////////////
module.exports = router_auth;
