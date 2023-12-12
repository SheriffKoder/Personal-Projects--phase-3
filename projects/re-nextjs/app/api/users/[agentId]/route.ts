//04.03
import { connectToDB } from "@utils/database";
import PropertyModel from "@models/propertyModel";
import UserModel, { UserDocument } from "@models/userModel";

export const POST = async (req:Request, {params}:any) => {

    try {

        //get the url and the user session
        await connectToDB();
        const pageUrl = params.agentId;
        const sessionId = await req.json();

        // const user = await UserModel.findById(pageUrl);
        // console.log(user);

        let authority : string = "notAuth";

        //if url is also session
        if (pageUrl === sessionId) {
            authority = "owner";

        }

        //if url is not a session, check if session is admin
        if (pageUrl !== sessionId) {
            const userCheck = await UserModel.findById(sessionId);

            if (userCheck?.role === "admin") {
                authority = "viewer";
            } else {
                authority = "notAuth";
                return new Response(JSON.stringify("not authorized"), {status: 500});

            }

        }


        //get the data of the page
        const userInfo = await UserModel.findOne({_id: pageUrl});
        const properties = await PropertyModel.find({property_userId: pageUrl});

        let allAgents :UserDocument[] = [];
        if (userInfo?.role === "admin" ) {
            allAgents = await UserModel.find({_id:{$ne:userInfo?._id}});
        }

        return new Response(JSON.stringify({userInfo, authority, properties, allAgents}), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch all properties"), {status: 500});
    }

}