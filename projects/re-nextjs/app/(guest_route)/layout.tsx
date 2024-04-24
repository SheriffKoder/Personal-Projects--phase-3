import React, {ReactNode} from "react";
import {getServerSession} from "next-auth";
import authOptions from "@app/api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";

interface Props {
    children: ReactNode;
}

//render specific page.jsx in case of normal users
//we did not put a page.jsx here as we did not want to use this functionality
export default async function PrivateLayout({ children }: Props ) {
    //await for the getServerSession
    const session = await getServerSession(authOptions);
    if (session?.user) redirect("/profile");

    //otherwise will going to render the children
    return <>{children}</>

}