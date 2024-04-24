
//used to fetch properties marked with "recommended = yes" by agents on the home page image slider

//04.03
import { connectToDB } from "@utils/database";
import PropertyModel from "@models/propertyModel";

export const GET = async () => {

    try {
        await connectToDB();

        const properties = await PropertyModel.find({property_recommended: "Yes"}).limit(4);
        return new Response(JSON.stringify(properties), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch recommended properties"), {status: 500});
    }

}