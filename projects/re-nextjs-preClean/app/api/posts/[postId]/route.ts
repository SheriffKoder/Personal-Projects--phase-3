
import { connectToDB } from "@utils/database";
import PostModel from "@models/postModel";

export const GET = async (request, {params}) => {

    try {
        await connectToDB();
        // console.log(params);

        const post = await PostModel.findById(params.postId).populate("userId");
        const posts = await PostModel.find({_id:{$ne:post?._id}}).populate("userId").limit(3);

        // console.log(post);


        return new Response(JSON.stringify({post,posts}), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch the post"), {status: 500});
    }

}