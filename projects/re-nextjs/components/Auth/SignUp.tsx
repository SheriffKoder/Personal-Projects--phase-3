// import React from 'react'
"use client";

import { hideDropDownMenu, hideSignUp } from "@utils/bodyNoScroll";
import { useState } from "react";

//02X
import { ChangeEventHandler, FormEventHandler } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignUp_component = () => {

     //02X
    //this is set to true when handling the submit 
    //so it changes the button style if the app is currently busy accessing the database
    const [busy, setBusy] = useState(false);

    //02X
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        adminId: "",
    });

    const { name, email, password, phone, adminId } = userInfo;

    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const { name, value } = target;
        setUserInfo({ ...userInfo, [name]:value});
    }

    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        setBusy(true);

        e.preventDefault();
        const res = await fetch("/api/auth/users", {
            method: "POST",
            body: JSON.stringify(userInfo),

        }).then((res) => res.json());
        console.log(res);
        setBusy(false);

        //02X.07
        //login automatically after a successful sign-up
        if (res) {
            console.log("we can sign in");
            //send the request to the backend api
            const res = await signIn("credentials", {
            email,
            password,
            redirect: false, //avoid default redirect
            });
            console.log("signed in");
        }
        hideSignUp();
        hideDropDownMenu();
    }


        

    return (
        <div 
        id="signUp__container"
        className="h-[100vh] hidden items-center justify-center
        myMain2
        dark:before:bg-[#000000e3]  box-shadow-1 mt-9 lg:mt-0
        ">
            <div className="
            z-[2] w-[90%] h-auto
            flex flex-col items-center gap-1 lg:gap-4 p-3 max-w-[500px]
            rounded-[17px] bg-[#ffffffbd]  dark:bg-[#ffffff10]
            border-[rgba(255,255,255,0.02)]
            dark:text-[#ffffffde] shadow-2xl dark:shadow-inner pb-4 lg:pb-7
            
            ">
                <div className="text-center relative w-full flex flex-row
                lg:flex-col">
                    <div className="absolute right-0">
                        <button 
                        onClick={()=> {hideSignUp();}}
                        className="
                        ml-auto bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545] h-5 w-5 rounded-[6px] text-white flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
                        </button>
                    </div>

                    <div className="mx-auto pt-0 lg:pt-6 flex flex-col lg:flex-row lg:gap-1 flex-wrap justify-center">
                        <span className="opacity-60">Welcome. </span>
                        <h3 className="mb-0 lg:mb-2 text_shadow-2 opacity-80">Sign-up to a new Account</h3>
                    </div>
                    
                </div>

                <form className="flex flex-col gap-1 lg:gap-4 items-center
                w-[90%] md:px-[5%]
                "
                onSubmit={handleSubmit}>
                {/* //02X */}

                    <label className="w-[100%] flex flex-row justify-center text-center
                    label_field
                    bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                    
                    ">
                        <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">username</span>
                        <input className="w-full input_field border-0 rounded-r-[6px] 
                            dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                            border-[rgba(255,255,255,0.02)]" type="text"
                            name="name" value={name} onChange={handleChange}
                        />
                        
                    </label>

                    <label className="w-[100%] flex flex-row justify-center text-center
                    label_field
                    bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                    
                    ">
                        <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">Phone</span>
                        <input className="w-full input_field border-0 rounded-r-[6px] 
                            dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                            border-[rgba(255,255,255,0.02)]" type="tel"
                            name="phone" value={phone} onChange={handleChange}
                        />
                        
                    </label>

                    <label className="w-[100%] flex flex-row justify-center text-center
                    label_field
                    bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                    
                    ">
                        <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">email</span>
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

                    <label className="w-[100%] flex flex-row justify-center text-center
                    label_field
                     rounded-[7px] border-2 border-[#ffffff02]
                    dark:bg-[#d6002709] bg-[#d6002715] 
                    
                    ">
                        <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">ID#</span>
                        <input className="w-full input_field border-0 rounded-r-[6px] 
                            dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                            border-[rgba(255,255,255,0.02)]
                            " type="password"
                            name="adminId" value={adminId} onChange={handleChange}
                        />
                        
                    </label>

                    <div className="mt-1 lg:mt-4 w-[80%] flex">
                            <button type="submit" 
                            className="
                            bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                            rounded-[9px] py-1 px-3 w-full
                            opacity-80 hover:opacity-90 mx-auto"
                            disabled={busy}
                            style={{opacity: busy? 0.5 : 1}}
                            >
                                Create Account
                            </button>
                    </div>

                </form>


            </div>

        </div>

      )
}

export default SignUp_component