
import {Request, Response, NextFunction} from 'express';

//to use req.user and isLoggedIn
interface Request_With_reqUser extends Request {
    isLoggedIn: boolean;
}


exports.getLogin = (req: Request_With_reqUser, res: Response, next: NextFunction) => {
    res.render("auth/login", {
        path: "/login",
        myTitle: "Login to your account",
        isAuthenticated: req.isLoggedIn
    })
}


exports.postLogin = (req: Request_With_reqUser, res: Response, next: NextFunction) => {

    res.setHeader("Set-Cookie", "isLoggedIn=True");
    res.redirect("/products");


}
