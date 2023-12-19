
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

    console.log(body.adminId);
    if ((body.adminId !== "1234") && (body.adminId !== "1111")) {
            return NextResponse.json({error: "not authorized"}, {status: 422});
    }


    const oldUser = await UserModel.findOne({ email: body.email});
    if (oldUser)
    return NextResponse.json(
        { error: "email is already in use!"},
        { status: 422 }
    );

    let role: string;
    (body.adminId !== "1234" && body.adminId === "1111") ? role = "admin" : role = "agent";


    //the body has the name, email etc.. like the NewAgentRequest
    const user = await UserModel.create({
        name: body.name,
        password: body.password,
        email: body.email,
        phone: body.phone,
        role: role,
    });

    //create a dedicated folder for the user to store their data in
    await mkdir(join(process.cwd() + "/public" + "/images/agent-" + user._id), (error)=> {
        console.log(error);
    });

    await mkdir(join(process.cwd() + "/public" + "/images/agent-" + user._id + "/properties"), (error)=> {
        console.log(error);
    });
    await mkdir(join(process.cwd() + "/public" + "/images/agent-" + user._id + "/posts"), (error)=> {
        console.log(error);
    });
    await mkdir(join(process.cwd() + "/public" + "/images/agent-" + user._id + "/profile"), (error)=> {
        console.log(error);
    });

    return NextResponse.json({
        user: {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role,

        },
        signUp: true,
    });
};



