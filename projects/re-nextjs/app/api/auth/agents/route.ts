
//02X
import AgentModel from "@models/agent";
import { propertyInterface } from "@models/property"
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

// data requested from user on initial render / data from the front-end
interface NewAgentRequest {
    fullName: string,
    phone: number,
    email: string,
    password: string,
    adminId: string,
}

// the data want to send as a response
interface NewAgentResponse {
    id: string;
    fullName: string,
    phone: number,
    email: string,
    // password: string,

    // avatar: string,
    // position: string,
    role: string,
    // properties: propertyInterface[],
    // update: string,

}

//the new response type will depend wether we get an agent or an error
type NewResponse = NextResponse<{agent?: NewAgentResponse; error?: string}>;

//function called post will take the request and return a promise with this new response
export const POST = async (req: Request): Promise<NewResponse> => {

    //await for the request as a json and cast its type
    const body = (await req.json()) as NewAgentRequest;

    await connectToDB();

    if (body.adminId !== "1234") {
        return NextResponse.json({error: "not authorized"}, {status: 422});
    } 

    const exitingAgent = await AgentModel.findOne({email: body.email});
    if (exitingAgent) {
        return NextResponse.json({error: "email is already in use!"}, {status: 422});
    }

    //the body has the name, email etc.. like the NewAgentRequest
    const agent = await AgentModel.create({...body});

    return NextResponse.json({
        agent: {
            id: agent._id.toString(),
            email: agent.email,
            fullName: agent.fullName,
            role: agent.role,
            phone: agent.phone,
        }
    })


}



// //02.02
// import NextAuth from "next-auth/next";

// //02.03
// import { connectToDB } from "@utils/database";
// import Agent from "@models/user";
// // import Auth0Provider from "next-auth/providers/auth0"


// const handler = NextAuth({
//     providers: [
//         // Auth0Provider({
//         //     clientId: process.env.AUTH0_ID,
//         //     clientSecret: process.env.AUTH0_SECRET,
//         //     // @ts-ignore
//         //     domain: process.env.AUTH0_DOMAIN,
//         //   }),
//     ],
//     callbacks: {
//         async session({ session }) {
//             //find user in 
            
//             //02.04
//             const sessionAgent = await Agent.findOne({email: session.agent.email});
//             session.agent.id = sessionAgent._id.toString();
//             return session;

//         },
//         async signIn({ profile }) {
//             //connect to db, check if user exists (if not create a new one)
//             try {

//                 //02.03
//                 await connectToDB();
//                 //check if agent already exists
//                 const agentExists = await Agent.findOne({email: profile.email});

//                 if (!agentExists) {
//                     await Agent.create({
//                         //this is what is needed initially the rest will be setup by the user model file
//                         fullName: profile.fullName,
//                         phone: profile.phone,
//                         email: profile.email.toLowerCase(),
//                         avatar: profile.avatar,
//                         password: profile.password,
//                         role: "Agent",

//                     })
//                 }
//                 return true;


//             } catch (error) {
//                 console.log(error);
//                 return false;

//             }
//         }
//     }
// })

// export {handler as GET, handler as POST};
