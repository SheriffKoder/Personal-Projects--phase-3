


//02.02
import NextAuth from "next-auth/next";

//02.03
import { connectToDB } from "@utils/database";
import Agent from "@models/user";
// import Auth0Provider from "next-auth/providers/auth0"


const handler = NextAuth({
    providers: [
        // Auth0Provider({
        //     clientId: process.env.AUTH0_ID,
        //     clientSecret: process.env.AUTH0_SECRET,
        //     // @ts-ignore
        //     domain: process.env.AUTH0_DOMAIN,
        //   }),
    ],
    callbacks: {
        async session({ session }) {
            //find user in 
            
            //02.04
            const sessionAgent = await Agent.findOne({email: session.agent.email});
            session.agent.id = sessionAgent._id.toString();
            return session;

        },
        async signIn({ profile }) {
            //connect to db, check if user exists (if not create a new one)
            try {

                //02.03
                await connectToDB();
                //check if agent already exists
                const agentExists = await Agent.findOne({email: profile.email});

                if (!agentExists) {
                    await Agent.create({
                        //this is what is needed initially the rest will be setup by the user model file
                        fullName: profile.fullName,
                        phone: profile.phone,
                        email: profile.email.toLowerCase(),
                        avatar: profile.avatar,
                        password: profile.password,
                        role: "Agent",

                    })
                }
                return true;


            } catch (error) {
                console.log(error);
                return false;

            }
        }
    }
})

export {handler as GET, handler as POST};
