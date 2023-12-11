//for handling fetching properties

//04.03
import { connectToDB } from "@utils/database";
import PropertyModel from "@models/propertyModel";

export const GET = async () => {

    try {
        await connectToDB();

        const properties = await PropertyModel.find().limit(4);

        return new Response(JSON.stringify(properties), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch all properties"), {status: 500});
    }

}