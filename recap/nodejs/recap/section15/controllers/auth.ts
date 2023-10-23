
import {Request, Response, NextFunction} from 'express';
import { IUser, UserClassModel } from '../models/user';

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




//10.2
exports.getSignUp = (req: Request, res: Response, next: NextFunction) => {
    
    res.render("auth/login", {
        myTitle: "Login to Amazon",
    })



};

exports.postSignUp = (req: Request, res: Response, next: NextFunction) => {
    
    const signUpFullName = req.body.signUpFullName;
    const signUpEmail = req.body.signUpEmail;
    const signUpPhoneNumber = req.body.signUpPhoneNumber;
    const signUpPassword = req.body.signUpPassword;

    UserClassModel.findOne({email: signUpEmail})
    .then((user) => {

        if (user) {
            req.flash("error", "Email already exists, please choose a different email");
            return res.redirect("/login");
        }
    
        //if no user, create user
        return bcrypt.hash(signUpPassword, 12)
        .then((hashedPassword : string) => {
            
            const user = new UserClassModel({
                name: signUpFullName,
                email: signUpEmail,
                phone: signUpPhoneNumber,
                pass: hashedPassword,
                cart: { items: [] },
            })
            return user.save();
        })
        .then(() => {
            console.log("user created, now sending email");
            res.redirect("/login");

            const mailOptions = {
                from: process.env.MyEmail,
                to: process.env.MyEmail,
                subject: "AMZ sign-up Email",
                html: `<h1>Hello ${signUpFullName} and Welcome to Amazon, your account has been created!</h1>`
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
        .catch((err: any) => {
            console.log("transporter returns: " + err);
        })


    })
    .catch((err: any) => {
        console.log("user login err: " + err);
    })
    











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

    console.log("Reset submitted");
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
                user.resetTokenExpiration = Date.now() + 360000;
                return user.save();
            }

        })
        .then(() => {
            res.redirect("/");
            console.log("sending mail")

            const mailOptions = {
                from: "kodersheriff@gmail.com",
                to: "kodersheriff@gmail.com",
                subject: "(TEST) NODE AMZ: Password Reset!",
                html: `
                    <p> You requested a password reset </p>
                    <a href="http://localhost:3000/reset/${token}"> Reset your password link </a>
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
            console.log(err);
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

            console.log("user requesting password change found");
            res.render("auth/new-password", {
                myTitle: "Reset Password",
                userId: user._id.toString(),
                passwordToken: token
            });
        }
        else {
            console.log("user requesting password change not found");
        }
    })
    .catch((err) => {
        console.log(err);
    })


};




//to use .save on resetUser
import { HydratedDocument } from 'mongoose';    //used in connect and create user


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
            resetUser = user;
            return bcrypt.hash(newPassword, 12);
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
        console.log(err);
    })


}