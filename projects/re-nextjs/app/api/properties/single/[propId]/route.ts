
//for handling fetching for single property page, the page's property and the side properties

//04.03
import { connectToDB } from "@utils/database";
import PropertyModel from "@models/propertyModel";
import { NextRequest } from "next/server";

export const GET = async (request:NextRequest, {params}:any) => {

    console.log(params);
    try {
        await connectToDB();
        // console.log(params);

        const thisProperty = await PropertyModel.findById(params.propId).populate("property_userId");
        console.log(thisProperty);
        //return recommended side container properties but not including the current thisProperty 
        const recProperties = await PropertyModel.find({_id:{$ne:thisProperty?._id}}).limit(3);
    
        
        return new Response(JSON.stringify({thisProperty,recProperties}), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch this property and side properties"), {status: 500});
    }

}