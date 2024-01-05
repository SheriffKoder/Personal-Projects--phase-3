
//sign-up

import UserModel from "@models/userModel";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

//02X.01 - creating files for the user on signup
import { mkdir } from "fs";
import { join } from "path";


// data requested from user on initial render / data from the front-end
//the data will pass to create the user
interface NewUserRequest {
    name: string;
    email: string;
    password: string;
    phone: number;
    adminId: string;
    role:string;
}

// the data want to send as a response
//the console json
interface NewUserResponse {
    id: string;
    name: string;
    email: string;
    role: string;
}

//the new response type will depend wether we get an agent or an error
type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string}>;

//function called post will take the request and return a promise with this new response
export const POST = async (req: Request): Promise<NewResponse> => {

    // await for the request as a json and cast its type
    const body = (await req.json()) as NewUserRequest;

    await connectToDB();

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////Input check

    //will store all the errors will get from the checks in an array
    let errorArray: string[] = [];

    //check - AdminId
    console.log(body.adminId);
    if ((body.adminId !== "1234") && (body.adminId !== "1111")) {
        errorArray.push("not authorized")
    }


    //check - phone
    if (isNaN(body.phone)) {
        errorArray.push("the phone should be in digits only");

    } else if (body.phone.toString().length < 4) {
        errorArray.push("the phone should be more than 4 digits");
    }

    const phoneExists = await UserModel.findOne({ phone: body.phone});
    if (phoneExists) {
        errorArray.push("this phone number is already in use!");
    }
    

    //check - password
    if (body.password.length < 4) {
        errorArray.push("the password should be more than 4 characters");
    }

    
    //check - name
    //should have length, should also have more than one name
    if (body.name.length < 4) {
        errorArray.push("the name should be more than 4 characters");
    }

    if (!body.name.match(/^([a-zA-Z]{3,15}\s[a-zA-Z]{3,15})(\s[a-zA-Z]{3,15})?$/)) {
        errorArray.push("the name should be a full name consisting of first and last names and an optional middle name");
    }


    //check - email
    if (!body.email.match(/^([a-zA-Z\d\.-\_]+)@([a-zA-Z\d-]+)\.([a-z]{2,8})\.?([a-z]{2,8})?$/)) {
        errorArray.push("the email is not in a valid format");
    }

    const oldUser = await UserModel.findOne({ email: body.email});
    if (oldUser) {
        errorArray.push("this email already exists");
    }

    //422: invalid input
    if (errorArray.length > 0) {
        return new NextResponse(JSON.stringify({errorArray}), {status: 422});
    }

    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////


    //check for the adminId to determine the user role on the website
    let role: string;
    (body.adminId !== "1234" && body.adminId === "1111") ? role = "admin" : role = "user";


    //create the user on the database
    //the body has the name, email etc.. like the NewAgentRequest
    const user = await UserModel.create({
        name: body.name,
        password: body.password,
        email: body.email,
        phone: body.phone,
        role: role,
    });


    ////////////////////////////////////////////////////////////////////////////////////
    //create a dedicated folder for the user to store their data in
    //create the main folder first with the user's id
    const mainFolder = await mkdir(join(process.cwd() + "/public" + "/images/agent-" + user._id), (error)=> {
        console.log(error);
    });

    //can await/create all these folders in the same time as they are not dependent on each other's existence
    await Promise.all([
        mkdir(join(process.cwd() + "/public" + "/images/agent-" + user._id + "/properties"), (error)=> {
            console.log(error);
        }),
        mkdir(join(process.cwd() + "/public" + "/images/agent-" + user._id + "/posts"), (error)=> {
            console.log(error);
        }),
        mkdir(join(process.cwd() + "/public" + "/images/agent-" + user._id + "/profile"), (error)=> {
            console.log(error);
        })
    ]);
    ////////////////////////////////////////////////////////////////////////////////////

    //once done with creating the user and the local folders, return the user's data to be console.log
    //will need the signup true to take some action after signup, like login automatically
    // 201: success and created a resource
    return new NextResponse(JSON.stringify({
        user: {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role,

        },
        signUp: true,
    }), {status: 201});
    
};



