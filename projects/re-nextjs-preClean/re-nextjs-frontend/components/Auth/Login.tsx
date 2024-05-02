// import React from 'react'
"use client";

import { bodyScroll } from "@utils/bodyNoScroll";
import { useEffect } from "react";
import Link from "next/link";

const Login_component = () => {



    function hideLogin () {
        let LoginComponent = document.getElementById("login__container");

        LoginComponent!.style.display = "none";
        }

    useEffect (() => {
        // let LoginComponent = document.getElementById("signIn__container");

        // LoginComponent!.style.display = "flex";
            
    },[])
        

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
                        onClick={()=> {hideLogin(); bodyScroll();}}
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
                
                ">

                    <label className="w-[100%] flex flex-row justify-center text-center
                    label_field
                    bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                    
                    ">
                        <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">username</span>
                        <input className="w-full input_field border-0 rounded-r-[6px] 
                            dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                            border-[rgba(255,255,255,0.02)]" type="text"
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
                        />
                        
                    </label>

                    <div className="flex w-full pr-2">
                            <Link href="/" 
                            className="ml-auto text-sm hover:text-[#d33660]">
                                forgot password ?
                            </Link>
                    </div>

                    <div className="mt-1 lg:mt-4 w-[80%] flex">
                            <button type="submit" className="
                            bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                            rounded-[9px] py-1 px-3 w-full
                            opacity-80 hover:opacity-90 mx-auto">
                                Sign in 
                            </button>
                    </div>

                </form>


            </div>
 
        
        </div>
      )
}

export default Login_component