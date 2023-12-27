//for handling fetching properties

//04.03
import { connectToDB } from "@utils/database";
import PropertyModel from "@models/propertyModel";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest, params:any) => {

    console.log(params.params.pageId);
    const page = params.params.pageId - 1; //so page 1 will be 0, page 2 will be 1, page 3 will be 2
    const start = page * 3;
    const end = 3;

    try {
        // await connectToDB();

        const pagesEnd = await PropertyModel.find().countDocuments() / end;          //page X
        const properties = await PropertyModel.find().skip(start).limit(end);          //page X
        // const properties = await PropertyModel.find().skip(0).limit(3);             //page 0
        // const properties = await PropertyModel.find().skip(3).limit(3);             //page 1
        // const properties = await PropertyModel.find().skip(6).limit(3);             //page 2


        return new Response(JSON.stringify({properties, pagesEnd}), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch all properties"), {status: 500});
    }

}