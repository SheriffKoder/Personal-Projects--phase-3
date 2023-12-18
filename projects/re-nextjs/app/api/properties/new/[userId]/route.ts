
//for handling new property submits 

import PropertyModel from "@models/propertyModel";
import { connectToDB } from "@utils/database"
import { getToday_date } from "@utils/dateGenerate";

//Part 11.01
import { join } from "path";
import { writeFile } from "fs";


//

// interface NewPropertyRequest {
//     country: string;
//     city: string;
//     district: string;

//     type: string;
//     area: number;
//     bedrooms: number;
//     bathrooms: number;

//     listing_type: string;
//     price: number;
//     description: string;

//     userId: string;
//     date: string;
// }


//add a new property
export const POST = async (request: Request, {params}) => {

        // const body = (await req.json());

        //Part 11.01
        //1. will use the formData as we are passing a file in the body
        const newInfo = await request.formData();

        console.log(newInfo);
        console.log(params.userId);

        //Part 11.01 - formData image upload
       //3. store a file if there is and get a path
        const file1: File | null = newInfo.get("file1") as unknown as File;
        const file2: File | null = newInfo.get("file2") as unknown as File;
        const file3: File | null = newInfo.get("file3") as unknown as File;

        const files = [file1, file2, file3];
        let files_url:string[] = [];

 

        files.forEach(async (file) => {
            if (file) {

                const path = join(process.cwd(), "/public", "/images", params.userId, file.name);
                
                let file1_url = ""; 
                file1_url = path.split("/public")[1];
                files_url.push(file1_url);
                
                const bytes = await file.arrayBuffer();
                const buffer = Buffer.from(bytes);
                await writeFile(path, buffer, (err)=>console.log(err));
                console.log(`image ${file.name} is saved in ${path}`);
                
            }
        })


    
        console.log(files_url);


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
                property_images: files_url,

                property_userId: params.userId,
                property_date: getToday_date(),
                property_update: getToday_date(),
            });

            await NewPost.save();

            //[return a new response] where we can stringify the prompt
            //and specify the status
            return new Response(JSON.stringify(NewPost), {status: 201});
           
        
        } catch (error) {
            return new Response("Failed to create a new property", {status: 500});

        }


}


