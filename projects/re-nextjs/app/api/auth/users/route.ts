
import UserModel from "@models/userModel";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

//02X.01

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

    //////////////////////////////////////////////////////////////////////////////////
    ////Input check

    let errorArray: string[] = [];

    //AdminId
    console.log(body.adminId);
    if ((body.adminId !== "1234") && (body.adminId !== "1111")) {
            errorArray.push("not authorized")
    }

    //phone
    if (isNaN(body.phone)) {
        errorArray.push("the phone should be in digits only");

    } else if (body.phone.toString().length < 4) {
        errorArray.push("the phone should be more than 4 digits");
    }

    const phoneExists = await UserModel.findOne({ phone: body.phone});
    if (phoneExists) {
        errorArray.push("this phone number is already in use!");
    }
    
    //password
    if (body.password.length < 4) {
        errorArray.push("the password should be more than 4 characters");
    }

    //name
    if (body.name.length < 6) {
        errorArray.push("the name should be more than 4 characters");
    }

    if (!body.name.match(/^([a-zA-Z]{3,15}\s[a-zA-Z]{3,15})(\s[a-zA-Z]{3,15})?$/)) {
        errorArray.push("the name should be a full name consisting of first and last names and an optional middle name");
    }

    //email
    if (!body.email.match(/^([a-zA-Z\d\.-\_]+)@([a-zA-Z\d-]+)\.([a-z]{2,8})\.?([a-z]{2,8})?$/)) {
        errorArray.push("the email is not in a valid format");
    }

    const oldUser = await UserModel.findOne({ email: body.email});
    if (oldUser) {
        errorArray.push("this email already exists");
    }

    if (errorArray.length > 0) {
        // return NextResponse.json(errorArray,{ status: 422 });
        return new NextResponse(JSON.stringify({errorArray}), {status: 422});

            
    }

    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////


    let role: string;
    (body.adminId !== "1234" && body.adminId === "1111") ? role = "admin" : role = "user";


    //the body has the name, email etc.. like the NewAgentRequest
    const user = await UserModel.create({
        name: body.name,
        password: body.password,
        email: body.email,
        phone: body.phone,
        role: role,
    });

    //create a dedicated folder for the user to store their data in
    // await mkdir(join(process.cwd() + "/public" + "/images/agent-" + user._id), (error)=> {
    //     console.log(error);
    // });

    // await mkdir(join(process.cwd() + "/public" + "/images/agent-" + user._id + "/properties"), (error)=> {
    //     console.log(error);
    // });
    // await mkdir(join(process.cwd() + "/public" + "/images/agent-" + user._id + "/posts"), (error)=> {
    //     console.log(error);
    // });
    // await mkdir(join(process.cwd() + "/public" + "/images/agent-" + user._id + "/profile"), (error)=> {
    //     console.log(error);
    // });

    const mainFolder = await mkdir(join(process.cwd() + "/public" + "/images/agent-" + user._id), (error)=> {
        console.log(error);
    });

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
    ])

    return new NextResponse(JSON.stringify({
        user: {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role,

        },
        signUp: true,
    }), {status: 200});
    
};



