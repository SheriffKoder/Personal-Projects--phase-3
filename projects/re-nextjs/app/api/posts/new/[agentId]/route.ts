

import { connectToDB } from "@utils/database";
import PostModel from "@models/postModel";
import UserModel, { UserDocument } from "@models/userModel";


export const POST = async (request:Request, {params}:any) => {


    const currentUserPage = params.agentId;
    const newInfo = await request.json();

    console.log(currentUserPage);
    console.log(newInfo);


    try {
        //[connect] to the db, every time because this is a lambda function
        //i.e will end once it does its job
        await connectToDB();
        //once we are connected, we want to create a new property post

        const NewPost = await PostModel.create({
            title: newInfo.title,
            content: newInfo.content,
            date_add: newInfo.date_add,
            date_update: newInfo.date_update,
            userId: currentUserPage,

        });

        await NewPost.save();

        //[return a new response] where we can stringify the prompt
        //and specify the status
        return new Response(JSON.stringify(NewPost), {status: 201});
    
    } catch (error) {
        return new Response("Failed to create a new post", {status: 500});

    }




};