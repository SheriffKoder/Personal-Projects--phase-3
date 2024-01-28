import { NextFunction, Request, Response } from "express";

const {validationResult} = require("express-validator");

// (req: Request, res:Response, next: NextFunction)


exports.getPosts = (req: Request, res:Response, next: NextFunction) => {

    const user = {
        name: "sheriff"
    }

    res.status(200).json(user);

}