//04.03
import { connectToDB } from "@utils/database";
import PropertyModel from "@models/propertyModel";
import PostModel from "@models/postModel";
import UserModel, { UserDocument } from "@models/userModel";

export const POST = async (req:Request, {params}:any) => {

    try {

        //get the url and the user session
        await connectToDB();
        const pageUrl = params.agentId;
        const sessionId = await req.json();

        // const user = await UserModel.findById(pageUrl);
        // console.log(user);

        let authority : string = "notAuth";

        //if url is also session
        if (pageUrl === sessionId) {
            authority = "owner";

        }

        //if url is not a session, check if session is admin
        if (pageUrl !== sessionId) {
            const userCheck = await UserModel.findById(sessionId);

            if (userCheck?.role === "admin") {
                authority = "viewer";
            } else {
                authority = "notAuth";
                return new Response(JSON.stringify("not authorized"), {status: 500});

            }

        }


        //get the data of the page
        const userInfo = await UserModel.findOne({_id: pageUrl});
        const properties = await PropertyModel.find({property_userId: pageUrl});
        const posts = await PostModel.find({userId: pageUrl});

        let allAgents :UserDocument[] = [];
        if (userInfo?.role === "admin" ) {
            allAgents = await UserModel.find({_id:{$ne:userInfo?._id}});
        }

        return new Response(JSON.stringify({userInfo, authority, properties, allAgents, posts}), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch agent's info"), {status: 500});
    }

}


export const PATCH = async (request:Request, {params}:any) => {


    const currentUserPage = params.agentId;
    const newInfo = await request.json();

    console.log(currentUserPage);
    console.log(newInfo);

    try {
        await connectToDB();
        const userInfo = await UserModel.findById(currentUserPage);

        console.log(userInfo);
        
        //we have info object from json, want to overwrite its keys with userInfo

        if (userInfo) {
            userInfo.name = newInfo.name;
            userInfo.avatar = newInfo.avatar;
            userInfo.email = newInfo.email;
            userInfo.password = newInfo.password;
            userInfo.phone = newInfo.phone;
            userInfo.position = newInfo.position;
            
            console.log(userInfo);

            await userInfo?.save();
        
            return new Response(JSON.stringify(userInfo), { status: 200});

        }

    } catch (error) {
        return new Response(JSON.stringify("Failed to update the user's info"), {status: 500});

    }

    
    





    return new Response(JSON.stringify("Done"), {status: 200});

}



export const DELETE = async (request, {params}) => {
    
    try {

        await connectToDB();

        const {sessionId, removableUserEmail} = await request.json();

        console.log(sessionId);
        console.log(removableUserEmail);


        await UserModel.findOneAndDelete({email:removableUserEmail});

        // let allAgents :UserDocument[] = [];
        
        // allAgents = await UserModel.find({_id:{$ne:sessionId}});

        // return new Response(JSON.stringify({allAgents}), {status: 200});
        return new Response(JSON.stringify("Delete User success"), {status: 200});

    } catch (error) {
        
        return new Response(JSON.stringify("Failed to delete the user"), {status: 500});

    }

}