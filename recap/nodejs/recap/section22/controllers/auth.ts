
import {Request, Response, NextFunction} from 'express';
import { IUser, UserClassModel } from '../models/user';

//11
//gather validation errors
const {validationResult} = require("express-validator");



//10
const bcrypt = require("bcryptjs");

// (req: Request, res: Response, next: NextFunction) => {

//10.1
//build in library, creating secure/unique random values
const crypto = require("crypto");

const nodemailer = require("nodemailer");
// create a transporter using your STMP credentials
const transporter = nodemailer.createTransport({
    host: process.env.EmailHost,
    port: process.env.EmailPort,
    secure: false, //true for 465, false for other ports
    auth: {
        user: process.env.EmailUser,
        pass: process.env.EmailPass
    }
});

// const mailOptions = {
//     from: "sheriff@gmail.com",
//     to: "sheriff@gmail.com",
//     subject: "My First Email",
//     text: "This is my first email !"
// };

// //Send the email
// transporter.sendMail(mailOptions, (error: any, info: any) => {
//     if (error) {
//         console.log("Email Error: ", error);
//     } else {
//         console.log("Email sent: ", info.response);
//     }
// });



//to use req.user and isLoggedIn
interface Request_With_reqUser extends Request {
    isLoggedIn: boolean;
    user: IUser;
}

interface Error_With_Status extends Error {
    code: number;
}


exports.getLogin = (req: Request_With_reqUser, res: Response, next: NextFunction) => {
    console.log("user is " + req.session.user);

    console.log("getLogin");
    //10
    // let errorMessage;
    // let message = req.flash("error");
    // if ( message[0] !== "" ) {
    //     errorMessage = message[0];
    // } else {
    //     errorMessage = null;
    // }

    if (req.user) {
        
        res.status(403).render("404", {
            myTitle: "404 Page",
            path: "/404",
            text: "You are already logged in"
        });

    } else {
        res.render("auth/login", {
            path: "/login",
            myTitle: "Login to your Amazon account",
            user: req.session.user,
            // isAuthenticated: req.isLoggedIn  //cookies //9.1
            // isAuthenticated: req.session.isLoggedIn //sessions //9.2
            oldInput: {},
            loginErrorMessage: "",
            signUpErrorMessage: "",
            isLogin: true,
            validationErrors: [],
            invalidEmailOrPhone: false,
        })
    }
};


exports.postLogin = (req: Request_With_reqUser, res: Response, next: NextFunction) => {

    console.log("postLogin");
    //9.1 cookie set
    // res.setHeader("Set-Cookie", "isLoggedIn=True");
    // res.redirect("/products");

    const loginEmailOrPhone: string = req.body.loginEmailOrPhone;
    const loginPassword = req.body.loginPassword;

    // const loginEmailOrPhone = "test@test.com"
    // const loginPassword = "12121212";

    //check loginEmailOrPhone
    //find a not a number
    const isEmail: string[] = loginEmailOrPhone.split("").filter((p:any) => {
        return isNaN(p);
    })


    const errors = validationResult(req);
    console.log(errors.errors);
    let loginValidationErrors: object[] = [];
    if (!errors.isEmpty()) {
        loginValidationErrors = errors.errors;
    }


    // //11-start
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(422).render("auth/login", {
    //         myTitle: "Login to your Amazon account",
    //         loginErrorMessage: errors.array()[0].msg,
    //         signUpErrorMessage: "",
    //         oldInput: {
    //             loginEmail: loginEmailOrPhone,
    //             loginPassword: loginPassword
    //         },
    //         validationErrors: errors.errors,
    //         isLogin: true,
    //     });
    // }
    //11-end


    //check if the user input is in an email format
    if (isEmail.length > 0) {
        // console.log("isEmail");
        //9.2 sessions
        //this is the code from app.js
        // UserClassModel.findById("652725974ad26fc2ae8f8433")
        UserClassModel.findOne({email: loginEmailOrPhone.toLowerCase()})
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
                            res.redirect("/");
                        })        
                    } else if (!doMatch) {

                        //if not match
                        console.log("password did not match");
                        // req.flash("error", "incorrect password");
                        // res.redirect("/login");

                        return res.status(422).render("auth/login", {
                            myTitle: "Login to your Amazon account",
                            loginErrorMessage: "incorrect password",
                            signUpErrorMessage: "",
                            oldInput: {
                                loginEmail: loginEmailOrPhone,
                                loginPassword: loginPassword
                            },
                            validationErrors: [{path: "loginPassword"}],
                            invalidEmailOrPhone: true,
                            isLogin: true,

                        });

                    }

                })
                .catch((err: any) => {
                    //error when something goes wrong not if not match
                    console.log(err);
                    return res.redirect("/login"); 
        
                })


            } else if (!user) {
                //user not found
                console.log("not found email for user");

                // req.flash("error", "This email is not associated with an account, please enter a valid email");
                // res.redirect("/login");

                //11- will use validation-messages instead of flash-messages
                return res.status(422).render("auth/login", {
                    myTitle: "Login to your Amazon account",
                    loginErrorMessage: "This email is not associated with an account, please enter a valid email",
                    signUpErrorMessage: "",
                    oldInput: {
                        loginEmail: loginEmailOrPhone,
                        loginPassword: loginPassword
                    },
                    validationErrors: [{path: "loginEmailOrPhone"}],
                    invalidEmailOrPhone: true,
                    isLogin: true

                });

            }


        })
        .catch((err) => {
            console.log(err);
            //11
            const error = new Error(err) as Error_With_Status;
            error.code = 500;
            //throw error - for sync, return next for async then/catch
            return next (error);

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
                            res.redirect("/");
                        })

                    } else if (!doMatch) {

                        //if not match
                        console.log("password did not match");
                        // req.flash("error", " incorrect password");
                        // res.redirect("/login");

                        //11
                        return res.status(422).render("auth/login", {
                            myTitle: "Login to your Amazon account",
                            loginErrorMessage: "incorrect password",
                            signUpErrorMessage: "",
                            oldInput: {
                                loginEmail: loginEmailOrPhone,
                                loginPassword: loginPassword
                            },
                            validationErrors: [{path: "loginPassword"}],
                            invalidEmailOrPhone: true,
                            isLogin: true,
                        });


                    }
    
                })
                .catch((err: any) => {
                    //error when something goes wrong not if not match
                    console.log(err);
                    return res.redirect("/login"); 
        
                })
        
            
            } else if (!user) {
                //user not found
                console.log("not found phone for user");

                // req.flash("error", "This phone number is not associated with an account, please enter a correct account's phone number");
                // res.redirect("/login");

                //11- will use validation-messages instead of flash-messages
                return res.status(422).render("auth/login", {
                    myTitle: "Login to your Amazon account",
                    loginErrorMessage: "This phone number is not associated with an account, please enter a correct account's phone number",
                    oldInput: {
                        loginEmail: loginEmailOrPhone,
                        loginPassword: loginPassword
                    },
                    validationErrors: [{path: "loginEmailOrPhone"}],
                    invalidEmailOrPhone: true,
                    isLogin: true,
                });
                

            }


        })
        .catch(err => {
            console.log(err);
            //11
            const error = new Error(err) as Error_With_Status;
            error.code = 500;
            //throw error - for sync, return next for async then/catch
            return next (error);

        })


    }



};

exports.postLogout = (req: Request, res: Response, next: NextFunction) => {

    console.log("logging out");
    req.session.destroy((err)=> {
        console.log(err);
        res.redirect("/");
    })

};




//10.2
exports.getSignUp = (req: Request_With_reqUser, res: Response, next: NextFunction) => {
    
    // let errorMessage;
    // let message = req.flash("error");
    // if ( message[0] !== "" ) {
    //     errorMessage = message[0];
    // } else {
    //     errorMessage = null;
    // }

    if (req.user) {

        res.status(403).render("404", {
            myTitle: "404 Page",
            path: "/404",
            text: "You are already logged in, please logout to create another account"
        });

    } else {
        res.render("auth/login", {
            myTitle: "Login to Amazon",
            // errorMessage: errorMessage,
            oldInput: {},
            loginErrorMessage: "",
            signUpErrorMessage: "",
            isLogin: false,
            validationErrors: [],
            invalidEmailOrPhone: false,

        })    
    }



};

exports.postSignUp = (req: Request, res: Response, next: NextFunction) => {
    
    const signUpFullName = req.body.signUpFullName;
    const signUpEmail = req.body.signUpEmail;
    const signUpPhoneNumber = req.body.signUpPhoneNumber;
    const signUpPassword = req.body.signUpPassword;
    const countryCode = req.body.countryCode;

    console.log(countryCode);
    const userCountry = countryCode.split(" ")[0].trim();
    const userCountryCode = Number(countryCode.split(" ")[1].substring(1).trim())
    console.log("userCountry : ", userCountry);
    console.log("userCountryCode : ", userCountryCode);


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        
        // console.log(errors.errors);
        //errors array of objects each has a path, msg
        return res.status(422).render("auth/login", {
            myTitle: "Sign up to Amazon",
            oldInput: {
                name: signUpFullName,
                signUpEmail: signUpEmail,
                signUpPassword: signUpPassword,
                phone: signUpPhoneNumber,
                country: userCountry,
            },
            loginErrorMessage: "",
            // signUpErrorMessage: errors,
            isLogin: false,
            validationErrors: errors.errors,
            invalidEmailOrPhone: false,

        })
    }



    //11 - removed this part as it is used in the route validation
    // UserClassModel.findOne({email: signUpEmail})
    // .then((user) => {

    //     if (user) {
    //         req.flash("error", "Email already exists, please choose a different email");
    //         console.log("this email is already associated with another account");
    //         return res.redirect("/signup");
    //     }
    
    //     //if no user, create user
    //     return 
        bcrypt.hash(signUpPassword, 12)
        .then((hashedPassword : string) => {
            
            const user = new UserClassModel({
                name: signUpFullName,
                email: signUpEmail.toLowerCase(),
                phone: userCountryCode+""+signUpPhoneNumber,
                pass: hashedPassword,
                country: userCountry,
                seller: false,
                cart: { items: [] },
            })
            return user.save();
        })
        .then(() => {
            console.log("user created, now sending email");
            res.redirect("/login");

            // const mailOptions = {
            //     from: process.env.MyEmail,
            //     to: process.env.MyEmail,
            //     subject: "AMZ sign-up Email",
            //     html: `<h1>Hello ${signUpFullName} and Welcome to Amazon, your account has been created!</h1>`
            // };
            
            // //Send the email
            // return transporter.sendMail(mailOptions, (error: any, info: any) => {
            //     if (error) {
            //         console.log("Email Error: ", error);
            //     } else {
            //         console.log("Email sent: ", info.response);
            //     }
            // });
            
            


        })
        .catch((err: any) => {
            console.log("transporter returns: " + err);
            //11
            const error = new Error(err) as Error_With_Status;
            error.code = 500;
            //throw error - for sync, return next for async then/catch
            return next (error);
            
        })


    // })
    // .catch((err: any) => {
    //     console.log("user login err: " + err);
    // })
    











};


//10.2
exports.getReset = (req: Request, res: Response, next: NextFunction) => {

    res.render("auth/reset", {
        myTitle: "Reset your password",
    })

};


//give a random and unique token for this iteration
//save token to user
//send token with the email url
exports.postReset = (req: Request, res: Response, next: NextFunction) => {

    let userEmail = req.body.email;

    console.log(`Reset submitted to ${req.body.email}`);
    crypto.randomBytes(32, (err: any, buffer: any) => {

        if (err) {
            console.log(err);
            return res.redirect("/reset");
        }

        const token = buffer.toString("hex");

        UserClassModel.findOne({email: req.body.email})
        .then((user) => {

            //give random token to user
            if (user) {
                console.log("reset user found with email");
                user.resetToken = token;
                //+1 hour from now
                user.resetTokenExpiration = Date.now() + 90000;
                return user.save();
            }

        })
        .then(() => {
            res.redirect("/");
            console.log("sending mail")

            const mailOptions = {
                from: "kodersheriff@gmail.com",
                to: userEmail,
                subject: "(TEST) NODE AMZ: Password Reset!",
                html: `
                    <p> You requested a password reset </p>
                    <p> The link below can be used to change the password, valid for 15 minutes </p>
                    <a href="http://localhost:3000/reset/${token}"> Change Password </a>
                    `
            };
            
            //Send the email
            return transporter.sendMail(mailOptions, (error: any, info: any) => {
                if (error) {
                    console.log("Email Error: ", error);
                } else {
                    console.log("Email sent: ", info.response);
                }
            });


        })
        .catch((err) => {
            // console.log(err);
            //11
            const error = new Error(err) as Error_With_Status;
            error.code = 500;
            //throw error - for sync, return next for async then/catch
            return next (error);
            
        })
    });
};


//= (req: Request, res: Response, next: NextFunction) =>


//the token in the url will get the user to new-password page
//a user can access /reset url is from the link
//find a user with this token and still a valid expiry
//if so view the reset page 
    //with passed userId/token - used when posting to find this user
exports.getNewPassword = (req: Request, res: Response, next: NextFunction) => {

    const token = req.params.token;
    //$gt special sign operator stands for greater than
    //find a user with expiration time space still greater than Date.now()

    console.log("getting new password page");
    UserClassModel.findOne({ resetToken: token})
    .then((user) => {

        if (user) {
            if (user.resetTokenExpiration >= Date.now()) {
                console.log("user requesting password change found");
                res.render("auth/new-password", {
                    myTitle: "Reset Password",
                    userId: user._id.toString(),
                    passwordToken: token
                });

            } 
            else if (user.resetTokenExpiration < Date.now()) {
                res.status(403).render("404", 
                {
                    myTitle: "Reset Password", 
                    text: "The reset link has been expired, Please request a new reset email"
                });                        
            }
    
        }
        else if (!user) {
            console.log("user requesting password change not found");
                res.status(403).render("404", 
                {
                    myTitle: "Reset Password", 
                    text: "This link is not usable. Please request a new password change link"
                });                        
        }
    })
    .catch((err) => {
        // console.log(err);
        //11
        const error = new Error(err) as Error_With_Status;
        error.code = 500;
        //throw error - for sync, return next for async then/catch
        return next (error);
        
    })


};




//to use .save on resetUser
import { HydratedDocument } from 'mongoose';    //used in connect and create user
import { count } from 'console';


//find user with token, expiration and id
//if found, hash the new req.body.password
//save into user variable and save
exports.postNewPassword = (req: Request, res: Response, next: NextFunction) => {

    const newPassword = req.body.password;
    const userId = req.body.userId;
    const passwordToken = req.body.passwordToken;

    let resetUser: HydratedDocument<IUser>;

    UserClassModel.findOne({
        resetToken: passwordToken,
        // resetTokenExpiration: {$gt: Date.now()},
        _id: userId
    })
    .then((user) => {

        if (user) {

            //just in case the page was open and not used for some time
            if (user.resetTokenExpiration >= Date.now()) {
                resetUser = user;
                return bcrypt.hash(newPassword, 12);    
            } else if (user.resetTokenExpiration < Date.now()) {
                res.status(403).render("404", 
                {
                    myTitle: "Reset Password", 
                    text: "The reset link has been expired, Please request a new reset email"
                });                        
            }
        }

    })
    .then ((hashedPassword) => {
        console.log("hashed password: "+ hashedPassword);
        resetUser.pass = hashedPassword;
        resetUser.resetToken = "";
        resetUser.resetTokenExpiration = Date.now();
        return resetUser.save();
    })
    .then(() => {
        console.log("password has been reset");
        //send mail
        res.redirect("/login");
    })
    .catch((err: any) => {
        // console.log(err);
        //11
        const error = new Error(err) as Error_With_Status;
        error.code = 500;
        //throw error - for sync, return next for async then/catch
        return next (error);
        
    })


}