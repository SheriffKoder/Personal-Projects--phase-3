

//fetch all posts, with skip and limit depending on which page (pagination) we are viewing

import { connectToDB } from "@utils/database";
import PostModel from "@models/postModel";
import { NextRequest } from "next/server";


export const GET = async (request:NextRequest, {params}:any) => {

    console.log(params.pageId);
    const page = params.pageId - 1; //so page 1 will be 0, page 2 will be 1, page 3 will be 2
    const end = 3;
    const start = page * end;

    
    try {
        await connectToDB();
        // console.log(params);

        //pagesEnd for the UI to know what "last page" button will be equivalent to
        const pagesEnd = await PostModel.find().countDocuments() / end;                     //page X
        const posts = await PostModel.find().skip(start).limit(end).populate("userId");     //page X
        // const properties = await PropertyModel.find().skip(0).limit(3);                  //page 0
        // const properties = await PropertyModel.find().skip(3).limit(3);                  //page 1
        // const properties = await PropertyModel.find().skip(6).limit(3);                  //page 2


        return new Response(JSON.stringify({posts, pagesEnd}), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch all posts"), {status: 500});
    }

}