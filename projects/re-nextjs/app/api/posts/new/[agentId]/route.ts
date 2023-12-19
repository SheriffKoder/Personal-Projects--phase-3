

import { connectToDB } from "@utils/database";
import PostModel, { PostDocument } from "@models/postModel";
import UserModel, { UserDocument } from "@models/userModel";
import { getToday_date } from "@utils/dateGenerate";

//Part 11.01
import { join } from "path";
import { writeFile } from "fs";


export const POST = async (request:Request, {params}:any) => {


    const currentUserPage = params.agentId;
    // const newInfo = await request.json();

    //Part 11.01
    //1. will use the formData as we are passing a file in the body
    const newInfo = await request.formData();


    console.log(currentUserPage);
    console.log(newInfo);

    //Part 11.01
    //3. store a file if there is and get a path
    const file: File | null = newInfo.get("file") as unknown as File;
    let postImage = "";
    if (file) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const path = join(process.cwd(), `/public/images/agent-${currentUserPage}/posts`, file.name);
        await writeFile(path, buffer, (err)=>console.log(err));
        console.log(`image ${file.name} is saved in ${path}`);
        postImage = path.split("/public")[1];
    } else if (!file) {
        // postImage = newInfo.get("image") as string;
        postImage = "/images/logo.svg";

    }


    try {
        console.log("adding post");
        //[connect] to the db, every time because this is a lambda function
        //i.e will end once it does its job
        await connectToDB();
        //once we are connected, we want to create a new property post

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

        await NewPost.save();

        //[return a new response] where we can stringify the prompt
        //and specify the status
        return new Response(JSON.stringify(NewPost), {status: 201});
    
    } catch (error) {
        return new Response("Failed to create a new post", {status: 500});

    }




};




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
    if (file) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const path = join(process.cwd(), `/public/images/agent-${currentUserPage}/posts`, file.name);
        await writeFile(path, buffer, (err)=>console.log(err));
        console.log(`image ${file.name} is saved in ${path}`);
        postImage = path.split("/public")[1];
    } else if (!file) {
        postImage = newInfo.get("image") as string;
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
            return new Response("Successfully updated the post", {status: 200});

            
    } catch (error) {
        return new Response("Failed to create a new post", {status: 500});

    }




};