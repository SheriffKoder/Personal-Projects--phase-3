

//used to fetch the latest properties and posts on the home page

//04.03
import { connectToDB } from "@utils/database";
import PropertyModel from "@models/propertyModel";
import PostModel from "@models/postModel";

export const GET = async () => {

    try {
        await connectToDB();

        const properties = await PropertyModel.find().limit(6).sort({SortDate:-1}) //sort by reverse after adding SortDate in the products model's schema;
        const posts = await PostModel.find().limit(5).populate("userId").sort({SortDate:-1}) //sort by reverse after adding SortDate in the products model's schema;   //we need to display the author's name


        return new Response(JSON.stringify({properties,posts}), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch the latest properties and posts for the home page "), {status: 500});
    }

}