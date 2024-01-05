import React, {ReactNode} from "react";
import {getServerSession} from "next-auth";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface Props {
    children: ReactNode;
}


//redirect to "/" in case a user is not on session i.e not a logged in user
export default async function PrivateLayout({ children }: Props ) {
    //await for the getServerSession
    const session = await getServerSession(authOptions);
    if (!session?.user) redirect("/");

    //otherwise will going to render the children
    return <>{children}</>

}