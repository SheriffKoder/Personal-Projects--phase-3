//for handling fetching for single property page, the page's property and the side properties

//04.03
import { connectToDB } from "@utils/database";
import PropertyModel from "@models/propertyModel";
import { getToday_date } from "@utils/dateGenerate";


//to fill the edit property inputs
export const GET = async (request, {params}) => {

    try {
        await connectToDB();
        console.log(params);

        const thisProperty = await PropertyModel.findById(params.propId);
    
        
        return new Response(JSON.stringify(thisProperty), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch all properties"), {status: 500});
    }

}


//edit property apply
export const PATCH = async (request, {params}) => {

    const propertyInfo = (await request.json());

        try {
            await connectToDB();

            console.log(propertyInfo);
            console.log(params.propId);
            // const propertyInfo = await PropertyModel.findById(propertyId);

            // console.log(propertyId);
            // // console.log(propertyInfo);

            const currentProperty = await PropertyModel.findById(params.propId);
            console.log(currentProperty);

            if (currentProperty) {
                currentProperty.property_country = propertyInfo.country,
                currentProperty.property_city = propertyInfo.city,
                currentProperty.property_district = propertyInfo.district,

                currentProperty.property_type = propertyInfo.type,
                currentProperty.property_area = propertyInfo.area,
                currentProperty.property_beds = propertyInfo.beds,
                currentProperty.property_baths = propertyInfo.baths,

                currentProperty.property_listing_type = propertyInfo.listing_type,
                currentProperty.property_price = propertyInfo.price,
                currentProperty.property_description = propertyInfo.description,

                // currentProperty.property_userId = propertyInfo.property_userId,
                currentProperty.property_update = getToday_date(),

                await currentProperty.save();
            }
                
            //[return a new response] where we can stringify the prompt
            //and specify the status
            // return new Response(JSON.stringify(currentProperty), {status: 201});
            return new Response("success to fetch this property", {status: 500});


           
        } catch (error) {
            return new Response("Failed to fetch this property", {status: 500});

        }


}


//Part 8
export const DELETE = async (request, {params}) => {
    
    try {

        await connectToDB();

        // const {propertyId} = await request.json();

        // console.log(propertyId);
        console.log(params.propId);



        await PropertyModel.findByIdAndDelete(params.propId);

        return new Response(JSON.stringify("Delete property success"), {status: 200});

    } catch (error) {
        
        return new Response(JSON.stringify("Failed to delete the property"), {status: 500});

    }

}