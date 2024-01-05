

//for handling fetching properties, the pageId is used for pagination
//for handling search and filter on the properties

//04.03
import { connectToDB } from "@utils/database";
import PropertyModel, { PropertyDocument } from "@models/propertyModel";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest, {params}:any) => {


    console.log(params.pageId);
    const page = params.pageId - 1; //so page 1 will be 0, page 2 will be 1, page 3 will be 2
    const end = 3;
    const start = page * end;

    try {
        await connectToDB();

        const pagesEnd = await PropertyModel.find().countDocuments() / end;            //page X
        const properties = await PropertyModel.find().skip(start).limit(end);          //page X
        // const properties = await PropertyModel.find().skip(0).limit(3);             //page 0
        // const properties = await PropertyModel.find().skip(3).limit(3);             //page 1
        // const properties = await PropertyModel.find().skip(6).limit(3);             //page 2


        return new Response(JSON.stringify({properties, pagesEnd}), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch all properties"), {status: 500});
    }

}


//for a search/filter submit - receive search keywords, filter values
export const POST = async (request: NextRequest, {params}:any) => {

    console.log(params.pageId);
    const page = params.pageId - 1; //so page 1 will be 0, page 2 will be 1, page 3 will be 2
    const end = 3;
    const start = page * end;


    const body = await request.json();
    const search_text = body.searchText;

    ////Get filter values
    //return the filter values in an object iterate on when finding on the database
    const myFilter = search_text.split(" ").map((filterValue:string)=> {
        return {
            property_description: {
                $regex: filterValue,
                $options: "i"
            }
        }
    })


    //// overwrite not entered values in the To/From filter inputs, as user can enter to and leave from
    //Steps:
    //get the keys
    //if the key contains From or To
    //check for the value if empty ""
    //make it 0 in the body (if From)
    //same for To, make it 999999999
    for (let key in body) {
        // console.log(key);
        if (key.search("From") > -1 ) {
            if (body[key] === "") {
                body[key] = 0;
            }
        }
        if (key.search("To") > -1 ) {
            if (body[key] === "") {
                body[key] = 999999999;
            }
        }
    }

    ////Find in the database
    //regex to match the string - a way of doing things
    // const filteredProperties = await PropertyModel.find({property_description: {$regex: '^' + search_text, $options: 'i'}});
    
    //greater/less than equal $gte/$lte or not equal $gt/$lt
    //with previous logic we will always have Number values
    const filteredProperties = await PropertyModel.find({
        $or: myFilter, 
        //greater/less than equal $gte/$lte or not equal $gt/$lt
        property_beds: {$gte: Number(body.bedroomsFrom), $lte: Number(body.bedroomsTo)},
        property_price: {$gte: Number(body.priceFrom), $lte: Number(body.priceTo)},
        property_area: {$gte: Number(body.areaFrom), $lte: Number(body.areaTo)},
        //if country is "" it will still give results for all, but if specified, will choose only this country
        property_country: {$regex: body.country},
        property_type: {$regex: body.type},
        property_listing_type: {$regex: body.listing_type}

    }).skip(start).limit(end);
    //now we have the posts we need but will limit our results count

    ////after we find, we also want the count for all matching posts for pagination
    const pagesEnd = await PropertyModel.find({
        $or: myFilter, 
        property_beds: {$gte: Number(body.bedroomsFrom), $lte: Number(body.bedroomsTo)},
        property_price: {$gte: Number(body.priceFrom), $lte: Number(body.priceTo)},
        property_area: {$gte: Number(body.areaFrom), $lte: Number(body.areaTo)},
        //if country is "" it will still give results for all, but if specified, will choose only this country
        property_country: {$regex: body.country},
        property_type: {$regex: body.type},
        property_listing_type: {$regex: body.listing_type}
    }).countDocuments() / end;


    try {
        return new Response(JSON.stringify({filteredProperties, pagesEnd}), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch all properties"), {status: 500});

    }


}