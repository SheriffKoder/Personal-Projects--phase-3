import React, {ReactNode} from "react";
import {getServerSession} from "next-auth";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface Props {
    children: ReactNode;
}


//to render specific page.jsx in case the session user is admin only
//we did not put a page.jsx here as we did not want to use this functionality
export default async function PrivateLayout({ children }: Props ) {
    //await for the getServerSession
    const session = await getServerSession(authOptions);

    const user = session?.user as { role: string } | undefined;
    const isAdmin = user?.role === "admin";

    //if not admin - which will in return redirect the user if is already logged in, as done in the guest_route
    if (!isAdmin) redirect("/");

    //if admin render the children
    return <>{children}</>

}