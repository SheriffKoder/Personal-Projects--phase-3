
import {Request, Response, NextFunction} from 'express';


interface Request_With_reqUser extends Request {
    isLoggedIn: boolean;
}


exports.get404 = (req: Request_With_reqUser, res: Response, next: NextFunction) => {
    res.status(404).render("404", 
    {
        myTitle: "404 Page", 
        path: "/404",
        // isAuthenticated: req.isLoggedIn  //cookies //9.1
        isAuthenticated: req.session.isLoggedIn //sessions //9.2
    });
};