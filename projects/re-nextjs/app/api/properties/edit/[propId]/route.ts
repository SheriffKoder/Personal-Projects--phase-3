
//for handling fetching for single property page, the page's property and the side properties

//04.03
import { connectToDB } from "@utils/database";
import PropertyModel from "@models/propertyModel";
import { getToday_date } from "@utils/dateGenerate";

//Part 11.01
import { join } from "path";
import { writeFile } from "fs";

import { decreaseUserScore } from "@utils/userScore";


//to fill the edit property form inputs
export const GET = async (request, {params}) => {

    try {
        await connectToDB();
        console.log(params);

        const thisProperty = await PropertyModel.findById(params.propId);
    
        
        return new Response(JSON.stringify(thisProperty), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch this property"), {status: 500});
    }

}


//edit property apply, edit properties image files
export const PATCH = async (request, {params}) => {

    // const propertyInfo = (await request.json());

    //Part 11.01
    //1. will use the formData as we are passing a file in the body
    const newInfo = await request.formData();

    try {
        await connectToDB();

        const currentProperty = await PropertyModel.findById(params.propId);

        //Part 11.01 - formData image upload
        //1. get the files, can be a file, nothing (deleted image), string (image not changed)
        const file1: File | null | string = newInfo.get("file1") as unknown as File;
        const file2: File | null | string = newInfo.get("file2") as unknown as File;
        const file3: File | null | string = newInfo.get("file3") as unknown as File;

        const files = [file1, file2, file3];
        let files_url:string[] = [];    //will store the files paths in this array once stored locally

        //2. store a file if there is and get a path
        //if the file is a string type then it has not been changed
        //push the string as a url already, and add/push the new string for new files
        files.forEach(async (file) => {
            if (typeof file !== "string" && file !== null) {

                const path = join(process.cwd(), `/public/images/agent-${currentProperty?.property_userId.toString()}/properties`, file.name);
                
                let file1_url = ""; 
                file1_url = path.split("/public")[1];
                files_url.push(file1_url);

                const bytes = await file.arrayBuffer();
                const buffer = Buffer.from(bytes);

                await writeFile(path, buffer, (err)=>console.log(err));
                // console.log(`image ${file.name} is saved in ${path}`);
                
            } else if (typeof file == "string") {
                files_url.push(file);
            }
        })

        if (currentProperty) {
        // //     currentProperty.property_country = propertyInfo.country,
        // //     currentProperty.property_city = propertyInfo.city,
        // //     currentProperty.property_district = propertyInfo.district,

        // //     currentProperty.property_type = propertyInfo.type,
        // //     currentProperty.property_area = propertyInfo.area,
        // //     currentProperty.property_beds = propertyInfo.beds,
        // //     currentProperty.property_baths = propertyInfo.baths,

        // //     currentProperty.property_listing_type = propertyInfo.listing_type,
        // //     currentProperty.property_price = propertyInfo.price,
        // //     currentProperty.property_description = propertyInfo.description,

        // //     // currentProperty.property_userId = propertyInfo.property_userId,
        // //     currentProperty.property_update = getToday_date(),

            currentProperty.property_country = newInfo.get("country") as string;
            currentProperty.property_city = newInfo.get("city") as string;
            currentProperty.property_district = newInfo.get("district") as string;

            currentProperty.property_type = newInfo.get("type") as string;
            currentProperty.property_area = newInfo.get("area");
            currentProperty.property_beds = newInfo.get("bedrooms");
            currentProperty.property_baths = newInfo.get("bathrooms");

            currentProperty.property_listing_type = newInfo.get("listing_type") as string;
            currentProperty.property_price = newInfo.get("price");
            currentProperty.property_description =  newInfo.get("description") as string;

            //the images paths to be stored as an array to the database
            currentProperty.property_images = files_url;

            currentProperty.property_update = getToday_date();
            currentProperty.property_availability = newInfo.get("availability") as string,
            currentProperty.property_recommended = newInfo.get("recommended") as string,


            await currentProperty.save();
        }
            
        //[return a new response] where we can stringify the prompt
        //and specify the status
        // return new Response(JSON.stringify(currentProperty), {status: 201});
        return new Response("the property was updated successfully", {status: 201});


        
    } catch (error) {
        return new Response("Failed to update this property", {status: 500});

    }


}


//Part 8
export const DELETE = async (request, {params}) => {
    
    try {

        await connectToDB();

        console.log(params.propId);

        //decrease user's properties score when deleting, which is used to display agent's scores on an admin profile
        await Promise.all([
            await decreaseUserScore("property", params.propId),
            await PropertyModel.findByIdAndDelete(params.propId)
        ]);

        return new Response(JSON.stringify("Delete property success"), {status: 200});

    } catch (error) {
        
        return new Response(JSON.stringify("Failed to delete the property"), {status: 500});

    }

}