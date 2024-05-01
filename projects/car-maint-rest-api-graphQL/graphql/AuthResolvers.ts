
import { NextFunction, Request, Response } from "express";


const {validationResult} = require("express-validator");
import bcrypt from "bcrypt";
import UserModel from "../models/userModel";
import CarModel from "../models/carModel";

//API 0.2 - authentication
const jwt = require("jsonwebtoken");

//API 0.3 - GraphQl - Validation
const validator = require("validator");


/*
the resolver function returns all the data
but graphql on the server will filter the data for the client


*/

interface customError extends Error {
    data: string[]
    code: number
}


module.exports = {

    //arguments objects, request
    //to be used as args.userInput or {userInput} right away
    signUp: async function (args:any, req:Request) {


        // try {

            const {name, email, password} = args.userInput;

            ////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////
            //validation
            const errors = [];
            if (!validator.isEmail(email)) {
                errors.push("invalid email format");
            }
            if (validator.isEmpty(password) || !validator.isLength(password, {min:2, max:8})) {
                errors.push("password should be from 2 to 8 characters");
            }
            if (errors.length > 0) {
                const error = new Error("Invalid Input") as customError;
                error.data = errors;
                error.code = 422;
                throw error;

            }
            ////////////////////////////////////////////////////////////////



            ////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////
            //find an existing user with this email
            const existingUser = await UserModel.findOne({email: email});
            if (existingUser) {
                const error = new Error("User already exists");
                throw error;
            }
            ////////////////////////////////////////////////////////////////



            ////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////
            const encryptedPassword = await bcrypt.hash(password, 12);
                
            const newUser = await new UserModel({
                name: name,
                email: email,
                password: encryptedPassword
            });
        
            const userCreated = await newUser.save();
            // return res.status(201).json("Account created successfully !");
            ////////////////////////////////////////////////////////////////
            console.log(userCreated);

            //API 0.2 - authentication
            //create a token on a successful login
            //to return its defined contents to the user 
            const token = jwt.sign({
                email: userCreated.email,
                userId: userCreated._id.toString(),
            },
            "mySecret", 
            { expiresIn: "1h"}
            );


            //return the user's car
            const userCars = await CarModel.find({userId: userCreated._id});
            // const userInfo = {name: user.name, email: user.email, _id: user._id};

            return {...userCreated._doc, _id: userCreated._id.toString(), cars:[] ,token: token};

            ////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////
            // ._doc return the user data without the metadata mongoose would create
            //with changing this user's id to
            // return {...userCreated._doc, _id: userCreated._id.toString(), cars:[], token: ""};

            // return new Response(JSON.stringify("Account created successfully !"), {status: 201});
        
        // } catch {
        //     // return new Response("Failed to create a new account", {status: 500});
        //     // return res.status(500).json("Failed to create a new account");
        //     const error = new Error("Failed to create a new user account");
        //     throw error;
        // }

    },


    login: async function (args: any, req:Request) {

        //find the user if no errors
        // try {

            const {email, password} = args.userInput;
            // console.log(name);
        
            const user = await UserModel.findOne({email});

            //check on user existence with email
            //compare input password with user's password
            //return true if exists and password matches
            if (!user) {

                const error = new Error("User not found");
                throw error;

            } else if (user) {

                const passwordMatch = await bcrypt.compare(password, user.password);

                if (!passwordMatch) {
                    const error = new Error("Incorrect Password");
                    throw error;
                } else {


                    //API 0.2 - authentication
                    //create a token on a successful login
                    //to return its defined contents to the user 
                    const token = jwt.sign({
                        email: user.email,
                        userId: user._id.toString(),
                    },
                    "mySecret", 
                    { expiresIn: "1h"}
                    );


                    //return the user's car
                    const userCars = await CarModel.find({userId: user._id});
                    // const userInfo = {name: user.name, email: user.email, _id: user._id};

                    return {...user._doc, _id: user._id.toString(), cars:userCars ,token: token};
                }
                
            }
            
            
        // } catch {
            // return new Response("Failed to create a new account", {status: 500});
            // const error = new Error("Failed to find the user account");
            // throw error;

        // }
    }


    

}