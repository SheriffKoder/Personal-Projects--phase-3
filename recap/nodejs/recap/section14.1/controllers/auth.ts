
import {Request, Response, NextFunction} from 'express';
import { IUser, UserClassModel } from '../models/user';

//to use req.user and isLoggedIn
interface Request_With_reqUser extends Request {
    isLoggedIn: boolean;
    user: IUser;
}


exports.getLogin = (req: Request_With_reqUser, res: Response, next: NextFunction) => {
    console.log("user is " + req.session.user);
    res.render("auth/login", {
        path: "/login",
        myTitle: "Login to your account",
        user: req.session.user,
        // isAuthenticated: req.isLoggedIn  //cookies //9.1
        isAuthenticated: req.session.isLoggedIn //sessions //9.2
    })
}


exports.postLogin = (req: Request_With_reqUser, res: Response, next: NextFunction) => {

    //9.1 cookie set
    // res.setHeader("Set-Cookie", "isLoggedIn=True");
    // res.redirect("/products");


    //9.2 sessions
    //this is the code from app.js
    UserClassModel.findById("652725974ad26fc2ae8f8433")
    .then(user => {

        if (user) {
            console.log("user found");
            req.session.isLoggedIn = true;
            req.session.user = user;

            //redirect when done saving
            req.session.save((err) => {
                console.log(err);
                res.redirect("/products");
            })

        }


    })
    .catch(err => {
        console.log(err);
    })

};

exports.postLogout = (req: Request, res: Response, next: NextFunction) => {

    console.log("logging out");
    req.session.destroy((err)=> {
        console.log(err);
        res.redirect("/products");
    })

};