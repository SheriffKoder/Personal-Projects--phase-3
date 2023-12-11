

//i want the agent info
//i want properties related to this agent


//04.03
// import { connectToDB } from "@utils/database";
// import UserModel from "@models/userModel";

// export const GET = async (request, {params}) => {

//     try {
//         await connectToDB();

//         //the params would be the [agentId] or [agentId] if path is [agentId]/posts also
//         const user = await UserModel.findById({params.agentId});

//         return new Response(JSON.stringify(user), {status: 200});

//     } catch {
//         return new Response(JSON.stringify("Failed to fetch all properties"), {status: 500});
//     }

// }