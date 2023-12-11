
import PropertyModel from "@models/propertyModel";
import { connectToDB } from "@utils/database"

//

interface NewPostRequest {
    country: string;
    city: string;
    district: string;

    type: string;
    area: number;
    bedrooms: number;
    bathrooms: number;

    listing_type: string;
    price: number;
    description: string;

    userId: string;
    date: string;
}

export const POST = async (req: Request, res: Response) => {
    const body = (await req.json()) as NewPostRequest;

        try {
            //[connect] to the db, every time because this is a lambda function
            //i.e will end once it does its job
            await connectToDB();
            //once we are connected, we want to create a new property post

            const NewPost = await PropertyModel.create({
                property_country: body.country,
                property_city: body.city,
                property_district: body.district,

                property_type: body.type,
                property_area: body.area,
                property_beds: body.bedrooms,
                property_baths: body.bathrooms,

                property_listing_type: body.listing_type,
                property_price: body.price,
                property_description: body.description,

                property_userId: body.userId,
                property_date: body.date,
            });

            await NewPost.save();

            //[return a new response] where we can stringify the prompt
            //and specify the status
            return new Response(JSON.stringify(NewPost), {status: 201});
        
        } catch (error) {
            return new Response("Failed to create a new property", {status: 500});

        }


}