
//for handling new property submits 

import PropertyModel from "@models/propertyModel";
import { connectToDB } from "@utils/database"
import { getToday_date } from "@utils/dateGenerate";

//Part 11.01
import { join } from "path";
import { writeFile } from "fs";

//Part 10
import { increaseUserScore } from "@utils/userScore";
import { NextRequest } from "next/server";


//add a new property
export const POST = async (request:NextRequest, {params}:any) => {

        // const body = (await req.json());

        //Part 11.01
        //1. will use the formData as we are passing a file in the body
        const newInfo = await request.formData();

        //Part 11.01 - formData image upload
        //1. get the files, can be a file, nothing (deleted image), string (image not changed)
        const file1: File | null = newInfo.get("file1") as unknown as File;
        const file2: File | null = newInfo.get("file2") as unknown as File;
        const file3: File | null = newInfo.get("file3") as unknown as File;

        const files = [file1, file2, file3];
        let files_url:string[] = [];    //will store the files paths in this array once stored locally

 
        //2. store a file if there is and get a path
        //there are either a file or no file (null), no pre existing files of course
        //push the string as a url already, and add/push the new string for new files
        files.forEach(async (file) => {
            try {

                if (file) {
                    const path = join(process.cwd(), `/public/images/agent-${params.userId}/properties`, file.name);
    
                    let file1_url = ""; 
                    file1_url = path.split("/public")[1];
                    files_url.push(file1_url);
    
                    const bytes = await file.arrayBuffer();
                    const buffer = Buffer.from(bytes);
                    await writeFile(path, buffer, (err)=>console.log(err));
                    // console.log(`image ${file.name} is saved in ${path}`);
                }    

            } catch (error) {
                console.log(error);
            }
        })


        //// create a new property and save
        try {
            //[connect] to the db, every time because this is a lambda function
            //i.e will end once it does its job
            await connectToDB();
            //once we are connected, we want to create a new property post

            const NewPost = await PropertyModel.create({
                property_country: newInfo.get("country") as string,
                property_city: newInfo.get("city") as string,
                property_district: newInfo.get("district") as string,

                property_type: newInfo.get("type") as string,
                property_area: newInfo.get("area") as string,
                property_beds: newInfo.get("bedrooms") as string,
                property_baths: newInfo.get("bathrooms") as string,

                property_listing_type: newInfo.get("listing_type") as string,
                property_price: newInfo.get("price") as string,
                property_description: newInfo.get("description") as string,

                //store the property path's array on to the database
                property_images: files_url,

                property_userId: params.userId,
                property_date: getToday_date(),
                property_update: getToday_date(),
                property_availability: newInfo.get("availability") as string,
                property_recommended: newInfo.get("recommended") as string,
            });

            //once property added, update the user's properties score (used in the admin's profile page when viewing all users)
            await Promise.all([
                await NewPost.save(),
                await increaseUserScore("property", params.userId)
            ]);


            // 200: operation succeeded
            return new Response(JSON.stringify(NewPost), {status: 201});
           
        
        } catch (error) {
            return new Response("Failed to create a new property", {status: 500});

        }


}


