"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
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
    secure: false,
    auth: {
        user: process.env.EmailUser,
        pass: process.env.EmailPass
    }
});
exports.getLogin = (req, res, next) => {
    console.log("user is " + req.session.user);
    console.log("getLogin");
    //10
    let errorMessage;
    let message = req.flash("error");
    if (message[0] !== "") {
        errorMessage = message[0];
    }
    else {
        errorMessage = null;
    }
    if (req.user) {
        res.status(403).render("404", {
            myTitle: "404 Page",
            path: "/404",
            text: "You are already logged in"
        });
    }
    else {
        res.render("auth/login", {
            path: "/login",
            myTitle: "Login to your account",
            user: req.session.user,
            // isAuthenticated: req.isLoggedIn  //cookies //9.1
            // isAuthenticated: req.session.isLoggedIn //sessions //9.2
            errorMessage: errorMessage,
            isLogin: true,
        });
    }
};
exports.postLogin = (req, res, next) => {
    console.log("postLogin");
    //9.1 cookie set
    // res.setHeader("Set-Cookie", "isLoggedIn=True");
    // res.redirect("/products");
    const loginEmailOrPhone = req.body.loginEmailOrPhone;
    const loginPassword = req.body.loginPassword;
    // const loginEmailOrPhone = "test@test.com"
    // const loginPassword = "12121212";
    //check loginEmailOrPhone
    //find a not a number
    const isEmail = loginEmailOrPhone.split("").filter((p) => {
        return isNaN(p);
    });
    //check if the user input is in an email format
    if (isEmail.length > 0) {
        // console.log("isEmail");
        //9.2 sessions
        //this is the code from app.js
        // UserClassModel.findById("652725974ad26fc2ae8f8433")
        user_1.UserClassModel.findOne({ email: loginEmailOrPhone.toLowerCase() })
            .then((user) => {
            console.log("found email for user");
            if (user) {
                // console.log("found email for user2");
                // console.log("password is: "+user.pass);
                // console.log("user: "+ user);
                bcrypt.compare(loginPassword, user.pass)
                    .then((doMatch) => {
                    if (doMatch) {
                        console.log("user found with email");
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        //redirect when done saving
                        return req.session.save((err) => {
                            console.log(err);
                            res.redirect("/products");
                        });
                    }
                    else if (!doMatch) {
                        //if not match
                        console.log("password did not match");
                        req.flash("error", "incorrect password");
                        res.redirect("/login");
                    }
                });
            }
            else if (!user) {
                //user not found
                console.log("not found email for user");
                req.flash("error", "This email is not associated with an account, please enter a valid email");
                res.redirect("/login");
            }
        })
            .catch(err => {
            console.log(err);
        });
        //check if the user input is in a phone format (numbers only)
    }
    else if (isEmail.length <= 0) {
        user_1.UserClassModel.findOne({ phone: loginEmailOrPhone })
            .then((user) => {
            if (user) {
                console.log("found phone for user");
                bcrypt.compare(loginPassword, user.pass)
                    .then((doMatch) => {
                    if (doMatch) {
                        // console.log("user found with phone");
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        //redirect when done saving
                        req.session.save((err) => {
                            console.log(err);
                            res.redirect("/products");
                        });
                    }
                    else if (!doMatch) {
                        //if not match
                        console.log("password did not match");
                        req.flash("error", " incorrect password");
                        res.redirect("/login");
                    }
                });
            }
            else if (!user) {
                //user not found
                console.log("not found phone for user");
                req.flash("error", "This phone number is not associated with an account, please enter a correct account's phone number");
                res.redirect("/login");
            }
        })
            .catch(err => {
            console.log(err);
        });
    }
};
exports.postLogout = (req, res, next) => {
    console.log("logging out");
    req.session.destroy((err) => {
        console.log(err);
        res.redirect("/products");
    });
};
//10.2
exports.getSignUp = (req, res, next) => {
    let errorMessage;
    let message = req.flash("error");
    if (message[0] !== "") {
        errorMessage = message[0];
    }
    else {
        errorMessage = null;
    }
    if (req.user) {
        res.status(403).render("404", {
            myTitle: "404 Page",
            path: "/404",
            text: "You are already logged in, please logout to create another account"
        });
    }
    else {
        res.render("auth/login", {
            myTitle: "Login to Amazon",
            isLogin: false,
            errorMessage: errorMessage,
        });
    }
};
exports.postSignUp = (req, res, next) => {
    const signUpFullName = req.body.signUpFullName;
    const signUpEmail = req.body.signUpEmail;
    const signUpPhoneNumber = req.body.signUpPhoneNumber;
    const signUpPassword = req.body.signUpPassword;
    const countryCode = req.body.countryCode;
    console.log(countryCode);
    const userCountry = countryCode.split(" ")[0].trim();
    const userCountryCode = Number(countryCode.split(" ")[1].substring(1).trim());
    console.log("userCountry : ", userCountry);
    console.log("userCountryCode : ", userCountryCode);
    user_1.UserClassModel.findOne({ email: signUpEmail })
        .then((user) => {
        if (user) {
            req.flash("error", "Email already exists, please choose a different email");
            console.log("this email is already associated with another account");
            return res.redirect("/signup");
        }
        //if no user, create user
        return bcrypt.hash(signUpPassword, 12)
            .then((hashedPassword) => {
            const user = new user_1.UserClassModel({
                name: signUpFullName,
                email: signUpEmail.toLowerCase(),
                phone: userCountryCode + "" + signUpPhoneNumber,
                pass: hashedPassword,
                country: userCountry,
                seller: false,
                cart: { items: [] },
            });
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
            .catch((err) => {
            console.log("transporter returns: " + err);
        });
    })
        .catch((err) => {
        console.log("user login err: " + err);
    });
};
//10.2
exports.getReset = (req, res, next) => {
    res.render("auth/reset", {
        myTitle: "Reset your password",
    });
};
//give a random and unique token for this iteration
//save token to user
//send token with the email url
exports.postReset = (req, res, next) => {
    console.log("Reset submitted");
    crypto.randomBytes(32, (err, buffer) => {
        if (err) {
            console.log(err);
            return res.redirect("/reset");
        }
        const token = buffer.toString("hex");
        user_1.UserClassModel.findOne({ email: req.body.email })
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
            console.log("sending mail");
            const mailOptions = {
                from: "kodersheriff@gmail.com",
                to: "kodersheriff@gmail.com",
                subject: "(TEST) NODE AMZ: Password Reset!",
                html: `
                    <p> You requested a password reset </p>
                    <p> The link below can be used to change the password, valid for 15 minutes </p>
                    <a href="http://localhost:3000/reset/${token}"> Change Password </a>
                    `
            };
            //Send the email
            return transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log("Email Error: ", error);
                }
                else {
                    console.log("Email sent: ", info.response);
                }
            });
        })
            .catch((err) => {
            console.log(err);
        });
    });
};
//= (req: Request, res: Response, next: NextFunction) =>
//the token in the url will get the user to new-password page
//a user can access /reset url is from the link
//find a user with this token and still a valid expiry
//if so view the reset page 
//with passed userId/token - used when posting to find this user
exports.getNewPassword = (req, res, next) => {
    const token = req.params.token;
    //$gt special sign operator stands for greater than
    //find a user with expiration time space still greater than Date.now()
    console.log("getting new password page");
    user_1.UserClassModel.findOne({ resetToken: token })
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
            res.status(403).render("404", {
                myTitle: "Reset Password",
                text: "This link is not usable. Please request a new password change link"
            });
        }
    })
        .catch((err) => {
        console.log(err);
    });
};
//find user with token, expiration and id
//if found, hash the new req.body.password
//save into user variable and save
exports.postNewPassword = (req, res, next) => {
    const newPassword = req.body.password;
    const userId = req.body.userId;
    const passwordToken = req.body.passwordToken;
    let resetUser;
    user_1.UserClassModel.findOne({
        resetToken: passwordToken,
        // resetTokenExpiration: {$gt: Date.now()},
        _id: userId
    })
        .then((user) => {
        if (user) {
            if (user.resetTokenExpiration >= Date.now()) {
                resetUser = user;
                return bcrypt.hash(newPassword, 12);
            }
            else if (user.resetTokenExpiration < Date.now()) {
                res.status(403).render("404", {
                    myTitle: "Reset Password",
                    text: "The reset Link has been expired, Please request another reset email with a new link"
                });
            }
        }
    })
        .then((hashedPassword) => {
        console.log("hashed password: " + hashedPassword);
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
        .catch((err) => {
        console.log(err);
    });
};
