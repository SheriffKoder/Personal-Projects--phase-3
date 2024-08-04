
//the api for fetching information for the "profile-page"

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


// get the data for the user, we needed to pass some body(sessionId) so used post
export const POST = async (req:Request, {params}:any) => {

    try {

        //get the url and the user session
        await connectToDB();
        const pageUrl = params.agentId;
        const sessionId = await req.json();


        let authority : string = "notAuth";

        const userCheck = await UserModel.findById(sessionId);

        //if the page's url matches the sessionId, then the user viewing the page is its owner
        if (pageUrl === sessionId) {
            if (userCheck?.role === "dummyVisitor") {
                authority = "dummyVisitorOwner";
            } else {
                authority = "owner";
            }
        }

        //if the page's url does not match the sessionId, then the user viewing the page is not its owner but a viewer admin
        if (pageUrl !== sessionId) {
            if (userCheck?.role === "admin") {
                authority = "viewer";
            }
            if (userCheck?.role === "dummyVisitor") {
                authority = "dummyVisitorViewer";
            }
            else {
                authority = "notAuth";
                return new Response(JSON.stringify("not authorized"), {status: 402});
            }
        }


        //get the data of the page
        //the page's agent information like name, email etc...
        const userInfo = await UserModel.findOne({_id: pageUrl});

        //we used to fetch these from here, but now we are using a separate component to fetch the page's user's properties and posts
        // const properties = await PropertyModel.find({property_userId: pageUrl});
        // const posts = await PostModel.find({userId: pageUrl});

        //the admin users do need to have all the agents to view in agentCards
        let allAgents :UserDocument[] = [];
        if (userInfo?.role === "admin" || userInfo?.role === "dummyVisitor" ) {
            allAgents = await UserModel.find({_id:{$ne:userInfo?._id}});
        }

        return new Response(JSON.stringify({userInfo, authority, allAgents}), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch agent's info"), {status: 500});
    }

}


// edit the user's info
export const PATCH = async (request:Request, {params}:any) => {

    const currentUserPage = params.agentId;
    // const newInfo = await request.json();
    
    //Part 11.01 - formData image upload
    //1. will use the formData as we are passing a file in the body
    const newInfo = await request.formData();

    // console.log(currentUserPage);
    // console.log("newInfo");
    // console.log(newInfo);

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
        console.log("userAvatar");
        console.log(userAvatar);
    } else if (!file) {
        userAvatar = newInfo.get("avatar") as string;
    }

    await connectToDB();


    try {
        let userInfo = await UserModel.findById(currentUserPage);

        // console.log(userInfo);
        console.log("userAvatar");
        console.log(userAvatar);

        if (userInfo && newInfo != null) {
            // // we have info object from json, want to overwrite its keys with userInfo
            // userInfo.name = newInfo.name;
            // userInfo.avatar = newInfo.avatar;
            // userInfo.email = newInfo.email;
            // userInfo.password = newInfo.password;
            // userInfo.phone = newInfo.phone;
            // userInfo.position = newInfo.position;

            //Part 11.01 - formData image upload
            //2. the fromData items are fetched differently
            userInfo.avatar = userAvatar;
            userInfo.name = newInfo.get("name") as string;
            userInfo.email = newInfo.get("email") as string;
            if (userInfo.role !== "dummyVisitor") userInfo.password = newInfo.get("password") as string;
            userInfo.phone = Number(newInfo.get("phone") as unknown as number);
            userInfo.position = newInfo.get("position") as string;

            await userInfo.save();

        }

        return new Response(JSON.stringify({userInfo}), {status: 200});



    } catch (error) {
        return new Response(JSON.stringify("Failed to update the user's info"), {status: 500});

    }

    // return new Response(JSON.stringify("Done"), {status: 200});
}


// if an admin deleted a user
export const DELETE = async (request:Request, {params}:any) => {
    
    try {

        console.log("deleting");
        // await connectToDB();
        // const {sessionId, removableUserId} = await request.json();



        // //Delete and clear user items from the database
        // await UserModel.findOneAndDelete({_id:removableUserId}),
        // await PostModel.deleteMany({userId: removableUserId});
        // await PropertyModel.deleteMany({property_userId: removableUserId});


        // ////////////////////////////////////////////////////////////////////////////////////
        // //// Clear and delete user local folder
        // //define the paths in the folder as we created them when adding a new user
        // const myPathFolders = [
        //     "/properties",
        //     "/posts",
        //     "/profile",
        // ];
        // const userPath = `/public/images/agent-${removableUserId}`;

        // //local function, that iterates over folders to clear their contents
        // //then deletes these sub folders
        // //then delete the userPath/main agent folder
        // removeFolder(userPath, myPathFolders);
        // ////////////////////////////////////////////////////////////////////////////////////




        // return new Response(JSON.stringify("Delete User success"), {status: 200});

    } catch (error) {
        console.log(error);        
        return new Response(JSON.stringify("Failed to delete the user"), {status: 500});

    }

}