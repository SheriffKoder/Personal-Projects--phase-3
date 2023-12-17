

import { connectToDB } from "@utils/database";
import PostModel, { PostDocument } from "@models/postModel";
import UserModel, { UserDocument } from "@models/userModel";


export const POST = async (request:Request, {params}:any) => {


    const currentUserPage = params.agentId;
    const newInfo = await request.json();

    console.log(currentUserPage);
    console.log(newInfo);


    try {
        console.log("adding post");
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




export const PATCH = async (request:Request, {params}:any) => {


    const newInfo = await request.json();
    console.log(newInfo);

    try {
        console.log("updating post");
        //[connect] to the db, every time because this is a lambda function
        //i.e will end once it does its job
        await connectToDB();
        //once we are connected, we want to create a new property post

        //if the post already exists, then update
        const currentPost: PostDocument | null = await PostModel.findById(newInfo._id);
            
            if (currentPost) {
                currentPost.title = newInfo.title;
                currentPost.content = newInfo.content; 
                await currentPost.save();   
            }
            return new Response("Successfully updated the post", {status: 200});

            
    } catch (error) {
        return new Response("Failed to create a new post", {status: 500});

    }




};