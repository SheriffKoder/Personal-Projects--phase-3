import { connectToDB } from "@utils/database";
import UserModel from "@models/userModel";
import { getToday_date } from "@utils/dateGenerate";


export const PATCH = async (request, {params}) => {

    // const propertyInfo = (await request.json());

        try {
            await connectToDB();

            // console.log(propertyInfo);
            // console.log(params.propId);
            // const propertyInfo = await PropertyModel.findById(propertyId);

            // console.log(propertyId);
            // // console.log(propertyInfo);

            const currentUser = await UserModel.findById(params.userId);
            // console.log(currentProperty);

            if (currentUser) {
                currentUser.update = getToday_date()

                await currentUser.save();
            }
                
            //[return a new response] where we can stringify the prompt
            //and specify the status
            // return new Response(JSON.stringify(currentProperty), {status: 201});
            return new Response("user last update date updated", {status: 200});


           
        } catch (error) {
            return new Response("Failed to update the user", {status: 500});

        }


}

