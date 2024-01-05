
//fetch this page's id post and some other posts to display on the side

import { connectToDB } from "@utils/database";
import PostModel from "@models/postModel";

export const GET = async (request, {params}) => {

    try {
        await connectToDB();

        const post = await PostModel.findById(params.postId).populate("userId");
        const posts = await PostModel.find({_id:{$ne:post?._id}}).populate("userId").limit(3);

        return new Response(JSON.stringify({post,posts}), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch this post"), {status: 500});
    }

}