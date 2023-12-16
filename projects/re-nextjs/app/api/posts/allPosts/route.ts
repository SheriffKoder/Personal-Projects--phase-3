

import { connectToDB } from "@utils/database";
import PostModel from "@models/postModel";


export const GET = async (request, {params}) => {

    try {
        await connectToDB();
        // console.log(params);

        const posts = await PostModel.find().populate("userId");


        return new Response(JSON.stringify(posts), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch the post"), {status: 500});
    }

}