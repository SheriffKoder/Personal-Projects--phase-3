

import {Request, Response, NextFunction} from 'express';



//10
//check if the user accessing is logged in
module.exports = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.isLoggedIn) {
        return res.redirect("/login");
    }

    //otherwise
    //allow the request to continue to where ever the route want to go to
    next();

}