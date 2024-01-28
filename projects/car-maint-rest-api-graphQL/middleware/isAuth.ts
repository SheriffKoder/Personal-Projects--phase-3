import { NextFunction, Request, Response } from "express";

interface Error_With_Status extends Error {
    statusCode: number;
}

interface Request_With_UserId extends Request {
    userId: string;
}

//the token is given the a user for 1h when the user login
//the token is sent again from the FE to the backend API (when requesting)
//to decode and verify the token before going to the next route middleware (viewing)

//package to validate incoming tokens
const jwt = require("jsonwebtoken");


module.exports = (req:Request_With_UserId, res:Response, next:NextFunction) => {

    //req.get returns a request header contents
    //== extract the authorization header from the incoming request
    const authHandler = req.get("Authorization");
    // console.log("New Token");
    // console.log(authHandler);
    // console.log("xx Token");


    //if no authorization header, throw an error
    if (!authHandler) {
        const error = new Error("Not Authenticated") as Error_With_Status;
        error.statusCode = 401;
        // throw error;
        // console.log("error 34");
    } else {

        //== get the bearer token in the FE
        //interested in the value that comes after the white space of bearer
        const token = authHandler;

        // console.log("token is");
        // console.log(token);
        //== verify the token
        let decodedToken;
        try {
            // console.log("error 46");

            //verify will decode and verify the token
            //also have a decode method, which will only decode and not check if it is valid
            //same secret key used in the auth controller
            decodedToken = jwt.verify(token,"mySecret");

        } catch (err: any) {

            // console.log("error 55");

            err.statusCode = 500;
            throw err;

        }

        //decoding worked (no catch error) but unable to verify the token
        if (!decodedToken) {
            console.log("error 64");

            const error = new Error("Not Authenticated") as Error_With_Status;
            error.statusCode = 401;
            throw error;
        }


        ////Valid token////
        // get the userId from the token to be used on the routes etc.
        // to compare with this userId any front-end userId
        req.userId = decodedToken.userId.toString();


        // then forward the request object including the userId
        next();

    }




}