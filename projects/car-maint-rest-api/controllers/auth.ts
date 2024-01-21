import { NextFunction, Request, Response } from "express";

const {validationResult} = require("express-validator");

// (req: Request, res:Response, next: NextFunction)


exports.signUp = async (req: Request, res:Response, next: NextFunction) => {

    // const user = {
    //     name: "sheriff"
    // }

    // res.status(200).json(user);

    // console.log(await req.json());

    const body =  req.body;
    console.log(body);
    console.log(body.name);

}