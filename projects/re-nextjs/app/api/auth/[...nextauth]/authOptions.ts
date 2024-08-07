import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@utils/database";
import UserModel from "@models/userModel";
import { NextResponse } from "next/server";


//02X.02
// this function is put here in a separate file then imported into route.ts in the same folder
// to overcome an error when building the project and checking for errors before deployment
const authOptions: NextAuthOptions = {
    session: {
        //can choose between jwt and database
        strategy: "jwt"
    },
    providers: [
        //will choose the credentials provider as we are using email/
        CredentialsProvider({
            type: "credentials",
            credentials: {},    //empty because we do not want to use the default UI
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

                //if all pass, return the user object
                //this is the object received from session?.user in front end
                //which is returned from the session callback below,
                return {
                    name: user.name,
                    email: user.email,
                    id: user._id,
                    role: user.role,
                    avatar: user.avatar,
                    properties: user.properties_count,
                    update: user.update,
                    position: user.position,
                    phone: user.phone,
                } as any
                
            }
        })
        
    ],
    //if want the exact user response inside the application
    // add the callbacks
    //these functions inside it will run the first time we send the request
    callbacks: {
        // jwt(params: any) {
        //     if (params.user?.role) {
        //         //if this is an agent, assign the role and id
        //         params.token.role = params.user.role;
        //         params.token.id = params.user.id;

        //     }
        //     //return final_token
        //     return params.token;
        // },
        // async session({ session, token }) {
        //     if (session.user) {
        //         (session.user as {id: string}).id = token.id as string;
        //         (session.user as {role: string}).role = token.role as string;
        //         //02.02
        //         // const sessionUser = await UserModel.findOne({email:session.user.email});
        //         // session.user.id = sessionUser?._id.toString();
        //     }
        //     return session;
        // },
        
        //02X.07
        //https://stackoverflow.com/questions/64576733/where-and-how-to-change-session-user-object-after-signing-in
        //this one provides the whole user, so its properties can be used in the front-end
        jwt: async ({ token, user }) => {
            user && (token.user = user)
            return token;
        },
        session: async ({ session, token }) => {
            if (session) {
                (session.user as object) = token.user as object;
            }
            return session;
        },

    }

};

export default authOptions;