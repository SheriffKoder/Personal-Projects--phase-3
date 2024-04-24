
//fetch this page's id post and some other posts to display on the side

import { connectToDB } from "@utils/database";
import PostModel from "@models/postModel";
import { NextRequest } from "next/server";

export const GET = async (request:NextRequest, {params}:any) => {

    try {
        await connectToDB();

        const post = await PostModel.findById(params.postId).populate("userId");

        //recommended posts
        const posts = await PostModel.find({_id:{$ne:post?._id}})
        .sort({SortDate:-1}).populate("userId").limit(3);
        //sort by reverse after adding SortDate in the products model's schema


        return new Response(JSON.stringify({post,posts}), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch this post"), {status: 500});
    }

}