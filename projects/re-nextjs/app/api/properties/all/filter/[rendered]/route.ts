
////Filter options values
//used to return all properties in order to get all the
//filter values of our whole database properties
//for the filter options

//04.03
import { connectToDB } from "@utils/database";
import PropertyModel, { PropertyDocument } from "@models/propertyModel";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest, {params}:any) => {


    // console.log(params.rendered);

    //if the params received is rendered="false", then we do not have the properties yet stored on the webpage, so get them
    //if the params received is rendered="true", then we already have fetched the properties on the webpage
    try {
        let allProperties: PropertyDocument[] | [];
        if (params.rendered === "false") {
            allProperties = await PropertyModel.find();
        } else {
            allProperties = [];
        }

        return new Response(JSON.stringify({allProperties}), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch all properties for the filter values"), {status: 500});
    }

}

