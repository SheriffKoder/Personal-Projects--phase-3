// import React from 'react'
"use client";

import { bodyScroll } from "@utils/bodyNoScroll";
import { useEffect } from "react";

const SignUp_component = () => {



    function hideSignUp () {
        let signUpComponent = document.getElementById("signUp__container");

        signUpComponent!.style.display = "none";
        }

    useEffect (() => {
        // let LoginComponent = document.getElementById("signIn__container");

        // LoginComponent!.style.display = "flex";
            
    },[])
        

    return (
        <div className="w-[100%] h-[100vh]
        items-center justify-center
        myMain2 dark:before:bg-[#000000e3] hidden
        box-shadow-1
        "
        id="signUp__container">

            {/* the box */}
            <div className="z-[6] flex items-center justify-center">
                <div className="flex items-center flex-col
                rounded-[17px] w-[500px] h-auto pb-10
                bg-[#fffffff0] dark:bg-[#ffffff10]
                p-2 border border-[rgba(255,255,255,0.02)]
                dark:text-[#ffffffde] shadow-2xl dark:shadow-inner
                ">
                    <div className="flex w-full">
                        <button 
                        onClick={()=> {hideSignUp(); bodyScroll();}}
                        className="
                        ml-auto bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545] h-5 w-5 rounded-[6px] text-white flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
                        </button>
                    </div>

                    <form className=" mt-2 flex flex-col items-center w-full gap-4">
                        <span className="flex flex-row gap-1">
                            <span className="opacity-60">Welcome. </span>
                            <h3 className="mb-2 text_shadow-w">Sign-up to a new Account</h3>
                        </span>
                        
                        <label className="label_field flex flex-row items-center gap-6 w-[80%]
                        bg-[#ffffff07] rounded-[6px] border-2 border-[#ffffff02] pl-4
                        h-10">
                            <span className="w-[20%] text_shadow-2 opacity-80 dark:opacity-90">username</span>
                            <input className="input_field border-0 flex-1 rounded-r-[6px] 
                            dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2
                            h-full border-[rgba(255,255,255,0.02)]" type="text" />
                        </label>

                        <label className="label_field flex flex-row items-center gap-6 w-[80%]
                        bg-[#ffffff07] rounded-[6px] border-2 border-[#ffffff02] pl-4
                        h-10">
                            <span className="w-[20%] text_shadow-2 opacity-80 dark:opacity-90">e-mail</span>
                            <input className="input_field border-0 flex-1 rounded-r-[6px]
                            dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2                                                    
                            h-full border-[rgba(255,255,255,0.02)]" type="text" />
                        </label>


                        <label className="label_field flex flex-row items-center gap-6 w-[80%]
                        bg-[#ffffff07] rounded-[6px] border-2 border-[#ffffff02] pl-4
                        h-10">
                            <span className="w-[20%] text_shadow-2 opacity-80 dark:opacity-90">password</span>
                            <input className="input_field border-0 flex-1 rounded-r-[6px]
                            dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2
                            h-full border-[rgba(255,255,255,0.02)]" type="password" />
                        </label>


                        <label className="label_field flex flex-row items-center gap-6 w-[80%]
                        bg-[#d6002709] rounded-[6px] border-2 border-[#ffffff02] pl-4
                        h-10">
                            <span className="w-[20%] text_shadow-2 opacity-80 dark:opacity-90">Admin no.</span>
                            <input className="input_field border-0 flex-1 rounded-r-[6px]
                            dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2
                            h-full border-[rgba(255,255,255,0.02)]" type="password" />
                        </label>

                        <div className="mt-4 w-[80%] flex">
                            <button type="submit" className="
                            bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                            rounded-[6px] py-1.5 px-3 w-full
                            opacity-80 hover:opacity-90 mx-auto">
                                Sign in 
                            </button>
                        </div>


                    </form>


                </div>

            </div>
 
        
        </div>
      )
}

export default SignUp_component