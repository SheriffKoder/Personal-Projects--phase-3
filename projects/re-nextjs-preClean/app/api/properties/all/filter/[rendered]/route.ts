//for handling fetching properties

//04.03
import { connectToDB } from "@utils/database";
import PropertyModel, { PropertyDocument } from "@models/propertyModel";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest, {params}:any) => {


    // console.log(params.rendered);

    try {
        let allProperties: PropertyDocument[] | [];
        if (params.rendered === "false") {
            allProperties = await PropertyModel.find();          //page X
        } else {
            allProperties = [];
        }

        return new Response(JSON.stringify({allProperties}), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch all properties"), {status: 500});
    }

}

