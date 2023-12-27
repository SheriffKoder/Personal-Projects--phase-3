//04.03
import { connectToDB } from "@utils/database";
import PropertyModel from "@models/propertyModel";
import PostModel from "@models/postModel";
import UserModel, { UserDocument } from "@models/userModel";

//Part 11.01
import { getToday_date } from "@utils/dateGenerate";
import { join, resolve } from "path";
import { writeFile , unlink, readdir, rmdir} from "fs";
import { removeFolder } from "@utils/deleteFolder";

//Part 10.2



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
    // const newInfo = await request.json();
    
    //Part 11.01 - formData image upload
    //1. will use the formData as we are passing a file in the body
    const newInfo = await request.formData();

    // console.log(currentUserPage);
    console.log(newInfo);

    //Part 11.01 - formData image upload
    //3. store a file if there is and get a path
    const file: File | null = newInfo.get("file") as unknown as File;
    let userAvatar = "";
    if (file) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const path = join(process.cwd(), `/public/images/agent-${currentUserPage}/profile`, file.name);
        await writeFile(path, buffer, (err)=>console.log(err));
        console.log(`image ${file.name} is saved in ${path}`);
        userAvatar = path.split("/public")[1];
    } else if (!file) {
        userAvatar = newInfo.get("avatar") as string;
    }

    

    try {
        await connectToDB();
        const userInfo = await UserModel.findById(currentUserPage);

        console.log(userInfo);
        

        if (userInfo && newInfo !== null) {
            // // we have info object from json, want to overwrite its keys with userInfo
            // userInfo.name = newInfo.name;
            // userInfo.avatar = newInfo.avatar;
            // userInfo.email = newInfo.email;
            // userInfo.password = newInfo.password;
            // userInfo.phone = newInfo.phone;
            // userInfo.position = newInfo.position;

            //Part 11.01 - formData image upload
            //2. the fromData items are fetched differently
            userInfo.name = newInfo.get("name") as string;
            userInfo.avatar = userAvatar;
            userInfo.email = newInfo.get("email") as string;
            userInfo.password = newInfo.get("password") as string;
            // userInfo.phone = newInfo.get("phone") as number;
            userInfo.position = newInfo.get("position") as string;
            // console.log(userInfo);

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
        const {sessionId, removableUserId} = await request.json();

        console.log(sessionId);
        console.log(removableUserId);



        //Delete and clear user items from the database
        await UserModel.findOneAndDelete({_id:removableUserId}),
        await PostModel.deleteMany({userId: removableUserId});
        await PropertyModel.deleteMany({property_userId: removableUserId});


        //Clear and delete user local folder
        const myPathFolders = [
            "/properties",
            "/posts",
            "/profile",
        ];
        const userPath = `/public/images/agent-${removableUserId}`;
        removeFolder(userPath, myPathFolders);




        return new Response(JSON.stringify("Delete User success"), {status: 200});

    } catch (error) {
        console.log(error);        
        return new Response(JSON.stringify("Failed to delete the user"), {status: 500});

    }

}