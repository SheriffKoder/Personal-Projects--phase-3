
//this is used for the propertiesContainer component on the profile page to display the user's properties in propertyCardAdmin components

import { connectToDB } from "@utils/database";
import { NextRequest } from "next/server";
import PropertyModel, { PropertyDocument } from "@models/propertyModel";

export const GET = async (request:NextRequest, {params}:any) => {

    // console.log(params);
    const page = params.pageId - 1; //so page 1 will be 0, page 2 will be 1, page 3 will be 2
    const end = 2;  //how many items per each view
    const start = page * end;

    
    try {
        // await connectToDB();
        // console.log(params);

        const pagesEnd = await PropertyModel.find({property_userId: params.userId}).countDocuments() / end;          //page X
        const properties = await PropertyModel.find({property_userId: params.userId}).sort({SortDate:-1})
        .skip(start).limit(end);
        //sort by reverse after adding SortDate in the products model's schema

        // const posts = await PropertyModel.find().skip(start).limit(end).populate("userId");  //page X
        // const properties = await PropertyModel.find().skip(0).limit(3);                      //page 0
        // const properties = await PropertyModel.find().skip(3).limit(3);                      //page 1
        // const properties = await PropertyModel.find().skip(6).limit(3);                      //page 2


        // const posts = await PostModel.find().populate("userId");

 
        return new Response(JSON.stringify({properties, pagesEnd}), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch the properties"), {status: 500});
    }

}