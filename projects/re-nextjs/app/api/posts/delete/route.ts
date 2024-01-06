import { connectToDB } from "@utils/database";
import PostModel from "@models/postModel";
import { decreaseUserScore } from "@utils/userScore";


//Part 9.1
export const DELETE = async (request) => {
    
    try {

        await connectToDB();

        const {postId} = await request.json();

        await Promise.all([
            //the user has a posts or properties counter, this local function decreased the score
            //score is used to display for each user how many of each they have on the admin's profile page
            await decreaseUserScore("post", postId),    //decrease checks on the post, if found will decrease, so call first
            await PostModel.findByIdAndDelete(postId)

        ]);

        return new Response(JSON.stringify("Delete post success"), {status: 200});

    } catch (error) {
        
        return new Response(JSON.stringify("Failed to delete the post"), {status: 500});

    }

}