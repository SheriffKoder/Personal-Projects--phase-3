import { NextFunction, Request, Response } from "express";

interface Error_With_Status extends Error {
    statusCode: number;
}

interface Request_With_UserId extends Request {
    userId: string;
    isAuth: boolean;
    token: string;
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


    if (!authHandler) {
        
        //API 0.3 - GraphQL
        req.isAuth = false;
        return next();

    } else {

        //== get the bearer token in the FE
        const token = authHandler;

        //== verify the token
        let decodedToken;
        try {

            //verify will decode and verify the token
            //also have a decode method, which will only decode and not check if it is valid
            //same secret key used in the auth controller
            decodedToken = jwt.verify(token,"mySecret");

        } catch (err: any) {

            //API 0.3 - GraphQL
            req.isAuth = false;
            return next();

        }

        //decoding worked (no catch error) but unable to verify the token
        if (!decodedToken) {

            //API 0.3 - GraphQL
            req.isAuth = false;
            return next();
        }


        ////Valid token////
        // get the userId from the token to be used on the routes etc.
        // to compare with this userId any front-end userId
        req.userId = decodedToken.userId.toString();

        //API 0.3 - GraphQL - authentication
        req.isAuth = true;
        req.token = token;

        // then forward the request object including the userId
        next();

    }




}