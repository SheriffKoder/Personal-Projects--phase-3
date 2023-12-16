//for handling fetching properties

//04.03
import { connectToDB } from "@utils/database";
import PropertyModel from "@models/propertyModel";
import PostModel from "@models/postModel";

export const GET = async () => {

    try {
        await connectToDB();

        const properties = await PropertyModel.find().limit(6);
        const posts = await PostModel.find().limit(3).populate("userId");


        return new Response(JSON.stringify({properties,posts}), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch all properties"), {status: 500});
    }

}