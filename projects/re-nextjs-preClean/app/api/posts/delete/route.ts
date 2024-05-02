import { connectToDB } from "@utils/database";
import PostModel from "@models/postModel";
import { decreaseUserScore } from "@utils/userScore";


//Part 9.1
export const DELETE = async (request) => {
    
    try {

        await connectToDB();

        const {postId} = await request.json();

        // console.log(propertyId);

        await Promise.all([
            await decreaseUserScore("post", postId),
            await PostModel.findByIdAndDelete(postId)

        ]);

        return new Response(JSON.stringify("Delete post success"), {status: 200});

    } catch (error) {
        
        return new Response(JSON.stringify("Failed to delete the post"), {status: 500});

    }

}