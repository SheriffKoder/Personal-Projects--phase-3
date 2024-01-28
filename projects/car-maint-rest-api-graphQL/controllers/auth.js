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
const { validationResult } = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = __importDefault(require("../models/userModel"));
const carModel_1 = __importDefault(require("../models/carModel"));
//API 0.2 - authentication
const jwt = require("jsonwebtoken");
// (req: Request, res:Response, next: NextFunction)
const routeValidationErrors = (req, res) => {
    ////////////////////////////////////////////////////////////////
    //get the validation errors array
    //an array of objects with path, msg
    const routeValidationErrors = validationResult(req).errors;
    // console.log(routeValidationErrors);
    //if there is an error, return back to the FE a response
    if (routeValidationErrors.length > 0) {
        //i want to go over each object in the array
        //for each object return its msg as message
        const errors = routeValidationErrors.map((errorObject) => {
            return {
                message: errorObject.msg
            };
        });
        console.log(errors);
        return errors;
    }
    else {
        return false;
    }
    ////////////////////////////////////////////////////////////////
};
exports.signUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // const user = {
    //     name: "sheriff"
    // }
    // res.status(200).json(user);
    // console.log(await req.json());
    // const body =  req.body;
    // console.log(body);
    // console.log(body.name);
    ////////////////////////////////////////////////////////////////
    const errors = routeValidationErrors(req, res);
    if (errors)
        return res.status(422).json(errors);
    ////////////////////////////////////////////////////////////////
    //create a user if no errors
    try {
        const { name, email, password } = req.body;
        // console.log(name);
        const encryptedPassword = yield bcrypt_1.default.hash(password, 12);
        // console.log(encryptedPassword);
        const newUser = yield new userModel_1.default({
            name: name,
            email: email,
            password: encryptedPassword
        });
        yield newUser.save();
        return res.status(201).json("Account created successfully !");
        // return new Response(JSON.stringify("Account created successfully !"), {status: 201});
    }
    catch (error) {
        // return new Response("Failed to create a new account", {status: 500});
        return res.status(500).json("Failed to create a new account");
    }
    // bcrypt.hash(signUpPassword, 12)
    // .then((hashedPassword : string) => {
    //     const user = new UserClassModel({
    //         name: signUpFullName,
    //         email: signUpEmail.toLowerCase(),
    //         phone: userCountryCode+""+signUpPhoneNumber,
    //         pass: hashedPassword,
    //         country: userCountry,
    //         seller: false,
    //         cart: { items: [] },
    //     })
    //     return user.save();
    // })
});
exports.login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    ////////////////////////////////////////////////////////////////
    const errors = routeValidationErrors(req, res);
    if (errors)
        return res.status(422).json(errors);
    ////////////////////////////////////////////////////////////////
    //find the user if no errors
    try {
        const { email, password } = req.body;
        // console.log(name);
        const user = yield userModel_1.default.findOne({ email });
        //check on user existence with email
        //compare input password with user's password
        //return true if exists and password matches
        if (!user) {
            return res.status(422).json("no user found with this email");
        }
        else if (user) {
            const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json("No user found with this email");
            }
            else {
                //API 0.2 - authentication
                //create a token on a successful login
                //to return its defined contents to the user 
                const token = jwt.sign({
                    email: user.email,
                    userId: user._id.toString(),
                }, "mySecret", { expiresIn: "1h" });
                //return the user's car
                const userCars = yield carModel_1.default.find({ userId: user._id });
                const userInfo = { name: user.name, email: user.email, _id: user._id };
                return res.status(200).json({ userInfo, userCars, token });
            }
        }
    }
    catch (error) {
        // return new Response("Failed to create a new account", {status: 500});
        return res.status(500).json("Failed to find the user account");
    }
    // bcrypt.hash(signUpPassword, 12)
    // .then((hashedPassword : string) => {
    //     const user = new UserClassModel({
    //         name: signUpFullName,
    //         email: signUpEmail.toLowerCase(),
    //         phone: userCountryCode+""+signUpPhoneNumber,
    //         pass: hashedPassword,
    //         country: userCountry,
    //         seller: false,
    //         cart: { items: [] },
    //     })
    //     return user.save();
    // })
});
