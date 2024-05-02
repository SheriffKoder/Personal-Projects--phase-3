import { connectToDB } from "@utils/database";
import PropertyModel from "@models/propertyModel";

export const POST = async (req: Request, res: Response) => {
    const propertyId = (await req.json());

        try {
            await connectToDB();

            const propertyInfo = await PropertyModel.findById(propertyId);

            console.log(propertyId);
            // console.log(propertyInfo);
           

            //[return a new response] where we can stringify the prompt
            //and specify the status
            return new Response(JSON.stringify(propertyInfo), {status: 201});
        
        } catch (error) {
            return new Response("Failed to fetch this property", {status: 500});

        }


}


export const PATCH = async (req: Request, res: Response) => {
    const propertyInfo = (await req.json());

        try {
            await connectToDB();

            console.log(propertyInfo);
            // const propertyInfo = await PropertyModel.findById(propertyId);

            // console.log(propertyId);
            // // console.log(propertyInfo);

            const currentProperty = await PropertyModel.findById(propertyInfo._id);

            if (currentProperty) {
                currentProperty.property_country = propertyInfo.property_country,
                currentProperty.property_city = propertyInfo.property_city,
                currentProperty.property_district = propertyInfo.property_district,

                currentProperty.property_type = propertyInfo.property_type,
                currentProperty.property_area = propertyInfo.property_area,
                currentProperty.property_beds = propertyInfo.property_beds,
                currentProperty.property_baths = propertyInfo.property_baths,

                currentProperty.property_listing_type = propertyInfo.property_listing_type,
                currentProperty.property_price = propertyInfo.property_price,
                currentProperty.property_description = propertyInfo.property_description,

                currentProperty.property_userId = propertyInfo.property_userId,
                currentProperty.property_date = propertyInfo.property_date,

                await currentProperty.save();
            }
                
            //[return a new response] where we can stringify the prompt
            //and specify the status
            return new Response(JSON.stringify(currentProperty), {status: 201});

           
        } catch (error) {
            return new Response("Failed to fetch this property", {status: 500});

        }


}