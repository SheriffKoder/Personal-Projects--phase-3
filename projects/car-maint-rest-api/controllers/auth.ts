
import { NextFunction, Request, Response } from "express";


const {validationResult} = require("express-validator");
import bcrypt from "bcrypt";
import UserModel from "../models/userModel";
import CarModel from "../models/carModel";

//API 0.2 - authentication
const jwt = require("jsonwebtoken");


// (req: Request, res:Response, next: NextFunction)


const routeValidationErrors = (req:Request, res:Response) => {
////////////////////////////////////////////////////////////////
    //get the validation errors array
    //an array of objects with path, msg
    const routeValidationErrors = validationResult(req).errors;
    // console.log(routeValidationErrors);
    //if there is an error, return back to the FE a response

    if (routeValidationErrors.length > 0) {
        //i want to go over each object in the array
        //for each object return its msg as message
        const errors = routeValidationErrors.map((errorObject:any) => {
            return {
                message: errorObject.msg
            }
        });
        console.log(errors);
        return errors;
    } else {
        return false;
    }
    ////////////////////////////////////////////////////////////////

};

exports.signUp = async (req: Request, res:Response, next: NextFunction) => {

    // const user = {
    //     name: "sheriff"
    // }

    // res.status(200).json(user);

    // console.log(await req.json());

    // const body =  req.body;
    // console.log(body);
    // console.log(body.name);

    ////////////////////////////////////////////////////////////////
    const errors = routeValidationErrors(req,res);
    if (errors) return res.status(422).json(errors);
    ////////////////////////////////////////////////////////////////


    //create a user if no errors
    try {

        const {name, email, password} = req.body;
        // console.log(name);
    
        const encryptedPassword = await bcrypt.hash(password, 12);
    
        // console.log(encryptedPassword);
    
        const newUser = await new UserModel({
            name: name,
            email: email,
            password: encryptedPassword
        });
    
        await newUser.save();

        // sign in after the user has been successfully created
        //API 0.2 - authentication
        //create a token on a successful login
        //to return its defined contents to the user 
        const token = jwt.sign({
            email: newUser.email,
            userId: newUser._id.toString(),
        },
        "mySecret", 
        { expiresIn: "1h"}
        );

        const userCars = await CarModel.find({userId: newUser._id});
        const userInfo = {name: newUser.name, email: newUser.email, _id: newUser._id};

        return res.status(200).json({userInfo, userCars, token});

        // return new Response(JSON.stringify("Account created successfully !"), {status: 201});
    
    } catch (error) {
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


}

exports.login = async (req: Request, res:Response, next: NextFunction) => {


    ////////////////////////////////////////////////////////////////
    const errors = routeValidationErrors(req,res);
    if (errors) return res.status(422).json(errors);
    ////////////////////////////////////////////////////////////////

    //find the user if no errors
    try {

        const {email, password} = req.body;
        // console.log(name);
    
        const user = await UserModel.findOne({email});

        //check on user existence with email
        //compare input password with user's password
        //return true if exists and password matches
        if (!user) {

            return res.status(422).json("no user found with this email");

        } else if (user) {

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).json("No user found with this email");
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
                const userInfo = {name: user.name, email: user.email, _id: user._id};

                return res.status(200).json({userInfo, userCars, token});
            }
            
        }
        
        
    } catch (error) {
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


}