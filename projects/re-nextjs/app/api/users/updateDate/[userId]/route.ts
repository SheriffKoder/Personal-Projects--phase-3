import { connectToDB } from "@utils/database";
import UserModel from "@models/userModel";
import { getToday_date } from "@utils/dateGenerate";


export const PATCH = async (request, {params}) => {


        try {
            await connectToDB();

            const currentUser = await UserModel.findById(params.userId);

            if (currentUser) {
                currentUser.update = getToday_date()

                await currentUser.save();
            }
                
 
            return new Response("user last update date updated", {status: 200});


           
        } catch (error) {
            return new Response("Failed to update the user", {status: 500});

        }


}

