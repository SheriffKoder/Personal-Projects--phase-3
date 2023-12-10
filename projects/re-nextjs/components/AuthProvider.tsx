"use client"

//02X.03
import { SessionProvider } from "next-auth/react";
import React, {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

export default function AuthProvider ({ children }: Props) {
    return <SessionProvider>{children}</SessionProvider>
};

