// import React from 'react'
"use client";

import { hideDropDownMenu, hideLogin } from "@utils/bodyNoScroll";
import { useState, useEffect } from "react";
import Link from "next/link";

//02X.01
import { ChangeEventHandler, FormEventHandler } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


//02X.07
import type { DefaultSession } from 'next-auth';
import { propertyInterface } from "@models/property";
//02X.07
//to use the user.id in the useEffect
//and also it is public anywhere, do apply on agent page's ts
declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & {
    //   user: object & {
    id: string;
    email: string;
    name: string;
    password: string;
    role: "admin" | "user";
    phone: number;
    avatar: string;
    position: string;
    properties: propertyInterface[];
    update: string;
    //   };
    };
  }
}



const Login_component = () => {

    const { data: session, status } = useSession();      //get the status
   
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////

    //02X.02
    //this is set to true when handling the submit 
    //so it changes the button style if the app is currently busy accessing the database
    const [busy, setBusy] = useState(false);

    const [error, setError] = useState("");
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const router = useRouter();

    //02X.02
    const { email, password } = userInfo;

    //02X.02
    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const { name, value } = target;

        setUserInfo({ ...userInfo, [name]:value});
    }

    //02X.02
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        setBusy(true);
        e.preventDefault();
        //send the request to the backend api
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false, //avoid default redirect
        });
        //if there is an error, update the error state and return the process
        if (res?.error) { 
            setError(res.error)
        } else {
            // console.log(res);
            // console.log("signed in");
            hideLogin();
            hideDropDownMenu();
        }
        setBusy(false);

    };
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////

    //02X.07
    //when the user is logged into session, the useEffect redirects to their page
    //wether after login or the sign-up's login
    useEffect(() => {
        // console.log(session?.user);
        // console.log(session?.user.id);
        if (session?.user.id) {
            let agentId = (session?.user.id);
          router.push(`/agents/${agentId}`);
        }
      }, [session, router]);


        

    return (
        <div className=" myMain2 h-[100vh] hidden items-center justify-center
        dark:before:bg-[#000000e3]  box-shadow-1 mt-9 lg:mt-0
        "
        id="login__container">

        <div className="
            z-[3] w-[90%] h-auto
            flex flex-col items-center gap-1 lg:gap-4  p-3 max-w-[500px]
            rounded-[17px] bg-[#ffffffbd]  dark:bg-[#ffffff10]
            border-[rgba(255,255,255,0.02)]
            dark:text-[#ffffffde] shadow-2xl dark:shadow-inner 
            pb-4 lg:pb-7
            ">
                <div className="text-center relative w-full flex flex-col">
                    <div className="absolute right-0">
                        <button 
                        onClick={()=> {hideLogin();}}
                        className="
                        ml-auto bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545] h-5 w-5 rounded-[6px] text-white flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
                        </button>
                    </div>

                    <div className="mx-auto pt-0 lg:pt-6 flex flex-col lg:flex-row gap-1 flex-wrap justify-center">
                        <span className="opacity-60">Welcome Again. </span>
                        <h3 className="mb-2 text_shadow-2 opacity-80">Sign-in to your account</h3>
                    </div>
                    
                </div>

                <form className="flex flex-col gap-1 lg:gap-4 items-center
                w-[90%] md:px-[5%]
                
                "
                onSubmit={handleSubmit}
                >

                    <label className="w-[100%] flex flex-row justify-center text-center
                    label_field
                    bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                    
                    ">
                        <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">E-Mail</span>
                        <input className="w-full input_field border-0 rounded-r-[6px] 
                            dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                            border-[rgba(255,255,255,0.02)]" type="email"
                        name="email" value={email} onChange={handleChange}
                        />
                        
                    </label>

                    <label className="w-[100%] flex flex-row justify-center text-center
                    label_field
                    bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                    
                    ">
                        <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">password</span>
                        <input className="w-full input_field border-0 rounded-r-[6px] 
                            dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                            border-[rgba(255,255,255,0.02)]" type="password"
                            name="password" value={password} onChange={handleChange}
                        />
                        
                    </label>

                    <div className="w-full pr-2 flex flex-row">
                            <Link href="/" 
                            className="ml-auto text-sm hover:text-[#d33660]">
                                forgot password ?
                            </Link>
                            
                            {error ? (
                                <span>{error}</span>
                            ): (null)}
                    </div>


                    <div className="mt-1 lg:mt-4 w-[80%] flex">
                            <button type="submit" className="
                            bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                            rounded-[9px] py-1 px-3 w-full
                            opacity-80 hover:opacity-90 mx-auto"
                            disabled={busy}
                            style={{opacity: busy? 0.5 : 1}}>
                                Sign in 
                            </button>
                    </div>

                </form>


            </div>
 
        
        </div>
      )
}

export default Login_component