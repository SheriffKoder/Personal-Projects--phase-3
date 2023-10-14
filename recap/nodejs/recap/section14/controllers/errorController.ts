
import {Request, Response, NextFunction} from 'express';


exports.get404 = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).render("404", {myTitle: "404 Page", path: "/404"});
};