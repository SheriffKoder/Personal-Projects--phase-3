
const express_auth = require("express");
const router_auth = express_auth.Router();

const {body: body_auth} = require("express-validator");

const authController = require("../controllers/auth");

import UserModel from "../models/userModel";
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
    .isLength({min:4})
    .withMessage("Name should be more than 4 characters"),

    body_auth("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .custom(async (value: string) => {
        const user = await UserModel.findOne({email: value})
    
        if (user) {
            console.log("this email is already associated with another account");
            return Promise.reject("this email is already associated with another account");
        }
    })
    .normalizeEmail()
    ,

    body_auth("password")
    .isLength({min:4})
    .isAlphanumeric()
    .trim()
    .withMessage("Password should be more than 4 characters"),


], authController.signUp);

router_auth.post("/login", [

    body_auth("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .custom(async (value: string) => {
        const user = await UserModel.findOne({email: value})
    
        if (!user) {
            console.log("this email is not associated with any account");
            return Promise.reject("this email is not associated with any account");
        }
    })
    .normalizeEmail()
    ,

    body_auth("password")
    .isLength({min:4})
    .isAlphanumeric()
    .trim()
    .withMessage("Password should be more than 4 characters"),


], authController.login);




/////////////////////////////////////////////





module.exports = router_auth;
