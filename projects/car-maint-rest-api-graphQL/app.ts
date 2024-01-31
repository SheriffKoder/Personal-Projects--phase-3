import { NextFunction, Request, Response } from "express";

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

//API 0.3 - GraphQL
const {graphqlHTTP} = require("express-graphql");
const graphqlAuthResolver = require("./graphql/AuthResolvers");
const graphqlAuthSchema = require("./graphql/AuthSchema");

const graphqlCarResolver = require("./graphql/CarResolvers");
const graphqlCarSchema = require("./graphql/CarSchema");

//API 0.3 - GraphQL - Authentication
const auth = require("./middleware/isAuth");
import { clearImage } from "./util/clearImage";

// const feedRoutes = require("./routes/feed.js");
// const authRoutes = require("./routes/auth.js");
const carRoutes = require("./routes/car.js");


//we are writing the back-end routes here
// app.js -> routes -> controllers

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//API 0.2 - images
import multer, { FileFilterCallback } from 'multer';
const path = require("path");

interface IFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    buffer: Buffer;
    size: number;
  }
  
const fileStorage = multer.diskStorage({
    destination: (req: Request, file: IFile, cb) => {
        //null (store image in case of an error?), images(fs folder)
        cb(null, "images");
    },
    filename: (req: Request, file: IFile, cb) => {
        //null, we are fine store it please
        cb(null, new Date().toISOString() + "-" + file.originalname);
    }
})

const fileFilter = (req: Request, file: IFile, cb: FileFilterCallback) => {
    //mimetype, type of file
    if (
        file.mimetype === "image/jpeg"  || 
        file.mimetype=== "image/jpg"    || 
        file.mimetype === "image/png"   ||
        file.mimetype === "image/svg"
        ) {
        //true: want to accept these files
        //no error, return true
        cb(null, true);
    } else {
        //no error, return false
        cb(null, false);
    }
}

//use the configs we defined, 
//tell multer we will fetch a single file in a field name=file in the incoming request
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single("file"));


//any request that goes into /images
app.use("/images", express.static(path.join(__dirname, "images")));

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////




//Access-Control configurations
app.use((req: Request, res:Response, next: NextFunction) => {

    //add a header with each response sent
    //for all domains that will access our server
    //from any client "*" or lock to specific domains, separated by ","
    res.setHeader("Access-Control-Allow-Origin", "*");

    //allow these http methods for these origins' to use 
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");

    //allow these headers to be set on the requests from the front-end
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");


    //API 0.3 - GraphQL
    //as graphql uses the options method, this will make its requests pass the CORS
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }


    //move to the next app.use
    next();

});




//use .json to parse incoming json data
//to be able to extract it on the body as (req.body) in controllers here
app.use(bodyParser.json());


//listen to any request on 8080/feed/(router-url)
// app.use("/feed", feedRoutes);
// app.use("/auth", authRoutes);
// app.use("/car", carRoutes);


//API 0.3 - GraphQL - Authentication
app.use(auth);


//API 0.3 - GraphQL - images

interface Request_With_isAuth extends Request {
    isAuth: boolean;
}
app.put("/post-image", (req: Request_With_isAuth, res: Response, next: NextFunction) => {

    if (!req.isAuth) {
        throw new Error ("Not Authenticated");
    }

    if (!req.file) {
        return res.status(200).json({message: "No file provided"});
    }

    // if (req.body.oldPath) {
    //     clearImage(req.body.oldPath);
    // }

    return res.status(201).json({message: "File stored.", filePath: req.file.path});

})






//API 0.3 - GraphQL
//after all middlewares, .use not post if want to use graphiql
app.use("/graphql/auth", graphqlHTTP({
    schema: graphqlAuthSchema,
    rootValue: graphqlAuthResolver,

    //in case want to use the web tester 8080/graphql, which sends a get request (optional)
    graphiql: true, 

    //change the format of the error thrown in the resolver functions (optional)
    // customFormatErrorFn(error:any) {
        //original error is the error thrown on purpose not the graphql lib errors
        // if (!error.orginalError) {
            // console.log(error.code);
            // return error;
        // } else {
            // const data = error.orginalError.data || "no data";   //data we given to the error object in the resolver
            // const message = error.message || "An error occurred";  //the new Error("message")
            // const code = error.orginalError.code || 500; //code we given to the error object in the resolver
        
            // return {
                // message: message,
                // status: code,
                // data: data,
            // }
        // }
    // },

}));

app.use("/graphql/car", graphqlHTTP({
    schema: graphqlCarSchema,
    rootValue: graphqlCarResolver,
}));

// app.use("/graphql/login", graphqlHTTP({
//     schema: graphqlLoginSchema,
//     rootValue: graphqlAuthResolver,

//     //in case want to use the web tester 8080/graphql, which sends a get request (optional)
//     graphiql: true, 
// }));


///////////////////////////////////////
//API 0.2 - authentication
//error handling middleware
//this will exe whenever an error is throw/next
interface errorType {
    statusCode: number,
    message: string,
    data: string,
}


app.use((error:errorType, req:Request, res:Response, next:NextFunction) => {
    //console any error reached
    console.log(error);
    //status code a custom method defined in the controller
    //having code of 422 or 500
    //give a default of 500 (server-error)
    const status = error.statusCode || 500;
    //exists by default, hold the message passed in the controller validation error handling
    const message = error.message;
    const data = error.data; //(25.2.5)

    res.status(status).json({message: message, data: data});
});

/*
	.catch((err) => {
        //(25.0.8)
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);  //async error handling         //(25.0.8)
	})

*/

///////////////////////////////////////




const connectToDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        app.listen(8000);    
    } catch (error) {
        console.log(error);
    }

}

connectToDB();
