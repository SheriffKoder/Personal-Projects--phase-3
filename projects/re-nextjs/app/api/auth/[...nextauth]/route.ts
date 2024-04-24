
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@utils/database";
import UserModel from "@models/userModel";
import { NextResponse } from "next/server";


import authOptions from "./authOptions";

// create auth handler
const authHandler = NextAuth(authOptions);

//// another way of exporting GET and POST
// export const GET = authHandler;
// export const POST = authHandler;

export {authHandler as GET, authHandler as POST};
