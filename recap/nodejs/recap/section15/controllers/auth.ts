
import {Request, Response, NextFunction} from 'express';
import { IUser, UserClassModel } from '../models/user';

//10
const bcrypt = require("bcryptjs");
const crypto = require("crypto");




//to use req.user and isLoggedIn
interface Request_With_reqUser extends Request {
    isLoggedIn: boolean;
    user: IUser;
}


exports.getLogin = (req: Request_With_reqUser, res: Response, next: NextFunction) => {
    console.log("user is " + req.session.user);

    console.log("getLogin");
    //10
    let errorMessage;
    let message = req.flash("error");
    if ( message[0] !== "" ) {
        errorMessage = message[0];
    } else {
        errorMessage = null;
    }


    res.render("auth/login", {
        path: "/login",
        myTitle: "Login to your account",
        user: req.session.user,
        // isAuthenticated: req.isLoggedIn  //cookies //9.1
        // isAuthenticated: req.session.isLoggedIn //sessions //9.2
        errorMessage: errorMessage
    })
}


exports.trialLogin = () => {
    console.log("trial");
}

exports.postLogin = (req: Request_With_reqUser, res: Response, next: NextFunction) => {

    console.log("postLogin");
    //9.1 cookie set
    // res.setHeader("Set-Cookie", "isLoggedIn=True");
    // res.redirect("/products");

    // const loginEmailOrPhone: string = req.body.loginEmailOrPhone;
    // const loginPassword = req.body.loginPassword;

    const loginEmailOrPhone = "test@test.com"
    const loginPassword = "12121212";

    //check loginEmailOrPhone
    //find a not a number
    const isEmail: string[] = loginEmailOrPhone.split("").filter((p:any) => {
        return isNaN(p);
    })

    //check if the user input is in an email format
    if (isEmail.length > 0) {
        // console.log("isEmail");
        //9.2 sessions
        //this is the code from app.js
        // UserClassModel.findById("652725974ad26fc2ae8f8433")
        UserClassModel.findOne({email: loginEmailOrPhone})
        .then((user) => {
            console.log("found email for user");

            if (user) {
                // console.log("found email for user2");
                // console.log("password is: "+user.pass);
                // console.log("user: "+ user);

                bcrypt.compare(loginPassword, user.pass)
                .then((doMatch: any) => {
                    if (doMatch) {
                        console.log("user found with email");
                        req.session.isLoggedIn = true;
                        req.session.user = user;
        
                        //redirect when done saving
                        return req.session.save((err) => {
                            console.log(err);
                            res.redirect("/products");
                        })        
                    }

                    //if not match
                    console.log("password did not match");
                    req.flash("error", "This email is not associated with an account, please enter a valid email");
                    res.redirect("/login");

                })


            } else if (!user) {
                //user not found
                console.log("not found email for user");

                req.flash("error", "This email is not associated with an account, please enter a valid email");
                res.redirect("/login");

            }


        })
        .catch(err => {
            console.log(err);
        })

    //check if the user input is in a phone format (numbers only)
    } else if (isEmail.length <= 0) {
        UserClassModel.findOne({phone: loginEmailOrPhone})
        .then((user) => {


            if (user) {
                console.log("found phone for user");

                bcrypt.compare(loginPassword, user.pass)
                .then((doMatch: any) => {
                    if (doMatch) {

                        // console.log("user found with phone");
                        req.session.isLoggedIn = true;
                        req.session.user = user;

                        //redirect when done saving
                        req.session.save((err) => {
                            console.log(err);
                            res.redirect("/products");
                        })
                    }

                    //if not match
                    req.flash("error", "This phone number is not associated with an account, please enter a valid phone number");
                    res.redirect("/login");
    
                });
            
            } else if (!user) {
                //user not found
                console.log("not found phone for user");

                req.flash("error", "This phone number is not associated with an account, please enter a valid phone number");
                res.redirect("/login");

            }


        })
        .catch(err => {
            console.log(err);
        })

    }



};

exports.postLogout = (req: Request, res: Response, next: NextFunction) => {

    console.log("logging out");
    req.session.destroy((err)=> {
        console.log(err);
        res.redirect("/products");
    })

};