
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@utils/database";
import AgentModel from "@models/agent";


export const authOptions: NextAuthOptions = {
    session: {
        //can choose between jwt and database
        strategy: "jwt"
    },
    providers: [
        //will choose the credentials provider as we are using email/
        CredentialsProvider({
            type: "credentials",
            credentials: {},    //empty because we do not want to use their UI
            async authorize(credentials, req) {
                //the credentials will be empty as we use {} but will cast its type anyway
                const {email, password} = credentials as {
                    email: string,
                    password: string,

                };

                await connectToDB();
                const agent = await AgentModel.findOne({email: "11@gmail.com"});

                //if no agent, throw an error
                if (!agent) throw Error("no agent");

                //if agent
                const passwordMatch = await AgentModel.comparePassword(password) ;
                if (!passwordMatch) throw Error("email/password mismatch");

                //if all pass, return the user object
                return {
                    fullName: agent.fullName,
                    email: agent.email,
                    id: agent._id,
                    role: agent.role,
                    avatar: agent.avatar,
                    properties: agent.properties,
                    update: agent.update,
                    position: agent.position,
                    phone: agent.phone
                }
            }
        })
        
    ],
    //if want the exact user response inside the application
    // add the callbacks
    //these functions inside it will run the first time we send the request
    callbacks: {
        jwt(params: any) {
            if (params.agent?.role) {
                //if this is an agent, assign the role and id
                params.token.role = params.agent.role;
                params.token.id = params.agent.id;
            }
            //return final_token
            return params.token;
        },
        session({ session, token}) {
            if (session.user) {
                (session.user as {id: string}).id = token.id as string;
                (session.user as {role: string}).role = token.role as string;
            }
            return session;
        }
    }

};

// create auth handler
const authHandler = NextAuth(authOptions);

// export const GET = authHandler;
// export const POST = authHandler;

export {authHandler as GET, authHandler as POST};
