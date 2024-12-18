

import { connectToDB } from "@utils/database";
import PostModel, { PostDocument } from "@models/postModel";
import UserModel, { UserDocument } from "@models/userModel";
import { getToday_date } from "@utils/dateGenerate";

//Part 11.01
import { join } from "path";
import { writeFile } from "fs";
import { increaseUserScore } from "@utils/userScore";
import { NextRequest } from "next/server";

import { storeImages } from "@components/Helpers/ImageUpload";


//to fill the "edit post inputs" on edit (yes used the GET to fetch info to be returned to the form element)
export const GET = async (request:NextRequest, {params}:any) => {

    try {
        await connectToDB();
        console.log(params);

        //agentId here will actually act like a postId to fetch from
        const thisPost = await PostModel.findById(params.agentId);
    
        
        return new Response(JSON.stringify(thisPost), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch this post"), {status: 500});
    }

}


//create a new post
export const POST = async (request:Request, {params}:any) => {


    const currentUserPage = params.agentId;
    // const newInfo = await request.json();

    //Part 11.01
    //1. will use the formData as we are passing a file in the body
    const newInfo = await request.formData();

    //Part 11.01
    //3. store a file if there is, and get a path for the image url in the database
    const file: File | null = newInfo.get("file") as unknown as File;

    let postImage = "";

    if (file) {
        // const path = join(process.cwd(), `/public/images/agent-${currentUserPage}/posts`, file.name);
        
        // postImage = path.split("/public")[1];

        // const bytes = await file.arrayBuffer();
        // const buffer = Buffer.from(bytes);
        // await writeFile(path, buffer, (err)=>console.log(err));
        // console.log(`image ${file.name} is saved in ${path}`);

        // store the image url in a string and wait till this process ends to use the url
        postImage = await storeImages(file) as string;
        
    } else if (!file) {
        // postImage = newInfo.get("image") as string;
        postImage = "/images/defaultPost.jpg";

    }


    try {
        console.log("adding post");
        //[connect] to the db, every time because this is a lambda function
        //i.e will end once it does its job
        await connectToDB();
        //once we are connected, we want to create a new property post

        //create post with dates
        //userId will be of the current page, if an admin adding for another agent, this agent will have the post with their id
        const NewPost = await PostModel.create({

            // title: newInfo.title,
            // content: newInfo.content,
            // date_add: getToday_date(),
            // date_update: getToday_date(),
            // userId: currentUserPage,

            title: newInfo.get("title") as string,
            content: newInfo.get("content") as string,
            date_add: getToday_date(),
            date_update: getToday_date(),
            image: postImage,
            userId: currentUserPage,

        });

        //after saving, increase the agent's post score, local function
        await Promise.all([
            await NewPost.save(),
            await increaseUserScore("post", currentUserPage)    
        ]);


        //[return a new response] where we can stringify the prompt
        //and specify the status
        return new Response(JSON.stringify(NewPost), {status: 201});
    
    } catch (error) {
        return new Response("Failed to create a new post", {status: 500});

    }




};


//update an existing post
export const PATCH = async (request:Request, {params}:any) => {

    const currentUserPage = params.agentId;

    //Part 11.01 - formData image upload
    //1. will use the formData as we are passing a file in the body
    const newInfo = await request.formData();

    // const newInfo = await request.json();
    console.log(newInfo);


    //Part 11.01 - formData image upload
    //3. store a file if there is and get a path
    const file: File | null = newInfo.get("file") as unknown as File;
    let postImage = "";

    //type string means the image has not been changed, it is the old url not a new file
    if (typeof file !== "string" && file !== null) {

        // const bytes = await file.arrayBuffer();
        // const buffer = Buffer.from(bytes);
        // const path = join(process.cwd(), `/public/images/agent-${currentUserPage}/posts`, file.name);
        // await writeFile(path, buffer, (err)=>console.log(err));
        // console.log(`image ${file.name} is saved in ${path}`);
        // postImage = path.split("/public")[1];

        // store the image url in a string and wait till this process ends to use the url
        postImage = await storeImages(file) as string;

    } else if (typeof file == "string") {
        postImage = newInfo.get("file") as string;
    }


    try {
        console.log("updating post");
        //[connect] to the db, every time because this is a lambda function
        //i.e will end once it does its job
        await connectToDB();
        //once we are connected, we want to create a new property post

        //if the post already exists, then update
        // const currentPost: PostDocument | null = await PostModel.findById(newInfo._id);
        //Part 11.01 - formData image upload
        const currentPost: PostDocument | null = await PostModel.findById(newInfo.get("_id"));

        
        if (currentPost) {
            // currentPost.title = newInfo.title;
            // currentPost.content = newInfo.content;
            // currentPost.date_update = getToday_date();

            //Part 11.01 - formData image upload
            currentPost.title = newInfo.get("title") as string;
            currentPost.content = newInfo.get("content") as string;
            currentPost.date_update = getToday_date();
            currentPost.image = postImage;

            await currentPost.save();
        }
        
        return new Response("Successfully updated this post", {status: 201});

            
    } catch (error) {
        return new Response("Failed to update this post", {status: 500});

    }




};