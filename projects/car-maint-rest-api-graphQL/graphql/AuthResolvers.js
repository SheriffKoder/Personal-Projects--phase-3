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
//API 0.3 - GraphQl - Validation
const validator = require("validator");
module.exports = {
    //arguments objects, request
    //to be used as args.userInput or {userInput} right away
    signUp: function (args, req) {
        return __awaiter(this, void 0, void 0, function* () {
            // try {
            const { name, email, password } = args.userInput;
            ////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////
            //validation
            const errors = [];
            if (!validator.isEmail(email)) {
                errors.push("invalid email format");
            }
            if (validator.isEmpty(password) || !validator.isLength(password, { min: 2, max: 8 })) {
                errors.push("password should be from 2 to 8 characters");
            }
            if (errors.length > 0) {
                const error = new Error("Invalid Input");
                error.data = errors;
                error.code = 422;
                throw error;
            }
            ////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////
            //find an existing user with this email
            const existingUser = yield userModel_1.default.findOne({ email: email });
            if (existingUser) {
                const error = new Error("User already exists");
                throw error;
            }
            ////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////
            const encryptedPassword = yield bcrypt_1.default.hash(password, 12);
            const newUser = yield new userModel_1.default({
                name: name,
                email: email,
                password: encryptedPassword
            });
            const userCreated = yield newUser.save();
            // return res.status(201).json("Account created successfully !");
            ////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////
            // ._doc return the user data without the metadata mongoose would create
            //with changing this user's id to
            console.log(userCreated);
            return Object.assign(Object.assign({}, userCreated._doc), { _id: userCreated._id.toString(), cars: [], token: "" });
            // return new Response(JSON.stringify("Account created successfully !"), {status: 201});
            // } catch {
            //     // return new Response("Failed to create a new account", {status: 500});
            //     // return res.status(500).json("Failed to create a new account");
            //     const error = new Error("Failed to create a new user account");
            //     throw error;
            // }
        });
    },
    login: function (args, req) {
        return __awaiter(this, void 0, void 0, function* () {
            //find the user if no errors
            // try {
            const { email, password } = args.userInput;
            // console.log(name);
            const user = yield userModel_1.default.findOne({ email });
            //check on user existence with email
            //compare input password with user's password
            //return true if exists and password matches
            if (!user) {
                const error = new Error("User not found");
                throw error;
            }
            else if (user) {
                const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
                if (!passwordMatch) {
                    const error = new Error("Incorrect Password");
                    throw error;
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
                    // const userInfo = {name: user.name, email: user.email, _id: user._id};
                    return Object.assign(Object.assign({}, user._doc), { _id: user._id.toString(), cars: userCars, token: token });
                }
            }
            // } catch {
            // return new Response("Failed to create a new account", {status: 500});
            // const error = new Error("Failed to find the user account");
            // throw error;
            // }
        });
    }
};
