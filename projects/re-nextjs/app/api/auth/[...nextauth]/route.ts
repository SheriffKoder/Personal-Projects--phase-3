
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@utils/database";
import UserModel from "@models/userModel";
import { NextResponse } from "next/server";

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
            async authorize(credentials, req){
                //the credentials will be empty as we use {} but will cast its type anyway
                const {email, password} = credentials as {
                    email: string,
                    password: string,

                };

                await connectToDB();
                const user = await UserModel.findOne({email});

                //if no agent, throw an error
                if (!user) throw Error("no user found with this email");

                //if agent
                const passwordMatch = await user.comparePassword(password) ;
                if (!passwordMatch) throw Error("email/password mismatch");

                //if all pass, return the user object?
                return {
                    name: user.name,
                    email: user.email,
                    id: user._id,
                    role: user.role,
                    avatar: user.avatar,
                    properties: user.properties,
                    update: user.update,
                    position: user.position,
                    phone: user.phone
                }
                
            }
        })
        
    ],
    //if want the exact user response inside the application
    // add the callbacks
    //these functions inside it will run the first time we send the request
    callbacks: {
        jwt(params: any) {
            if (params.user?.role) {
                //if this is an agent, assign the role and id
                params.token.role = params.user.role;
                params.token.id = params.user.id;
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
