// import React from 'react'
"use client";

import { hideDropDownMenu, hideLogin } from "@utils/bodyNoScroll";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

//02X.01
import { ChangeEventHandler, FormEventHandler } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


//02X.07
import type { DefaultSession } from 'next-auth';
import { PropertyDocument } from "@models/propertyModel";

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
    properties: PropertyDocument[];
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


    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    //part 10 - addon input validation
    const errorMessage = useRef({
        email: "",
        password: ""
    })

    const inputCheckHandler : ChangeEventHandler<HTMLInputElement> = ({target}) => {
        // console.log(e.target.value);
        // console.log(target);
        const {name, value} = target;

        //get the input
        //check the input's value from the patterns available
        //

        const patterns: {} = {
            // telephone: /^\d{12}$/ ,         // only, country code+10 digits - login
            // telephoneShort: /^\d{10}$/ ,         // only, 10 digits - sign-up
            // password: /^[\w@-]{8,20}$/,     //the pattern is repeated, looking for (a-z A-Z also 0-9 and _)or @ or -
            email: /^([a-zA-Z\d\.-\_]+)@([a-zA-Z\d-]+)\.([a-z]{2,8})\.?([a-z]{2,8})?$/,               //also dots \.
            //        // domain with . - .. @ .. domain .. dot .. com ..  .uk(optional)
            // name: /^([a-zA-Z]{3,15})\s([a-zA-Z]{3,15})\s?([a-zA-Z]{3,15})?$/,
            
            //8 or more any characters
            // title: /^.{8,}$/,
            password: /^.{4,}$/,
        };
    
        //the error message for each regex
        const errorMessages = {
            email: "be in a valid format",
            // password: "be from 8 to 20 characters"
            password: "be more than 4 characters - test"
        }

        //test the incoming input value with its corresponding regex
        const regex: RegExp = patterns[name as keyof typeof patterns];
        const validInput = regex.test(value);

        // console.log(validInput);


        //// render to the ui the error messages
        const errorText = document.getElementById("errorMsg_login");
        const errorTitle = document.getElementById("errorMsg_login_title");
        
        //if not valid, store the message in the errorMessage Ref
        if(!validInput) {
            //give the ref the text 
            //give the jsx element the ref as a string
            errorMessage.current[name as keyof typeof errorMessage.current] = `<b>${name}:</b> should be ${errorMessages[name as keyof typeof errorMessages]} </br>`;
        //if valid, clear the message of this key-name in the errorMessage Ref
        } else if (validInput) {
            errorMessage.current[name as keyof typeof errorMessage.current] = "";
        }      

        //now clear the message in the ui and store all error messages again
        if (errorText && errorTitle) {
            errorText.innerHTML = "";
            errorTitle.innerText = "Please check the following input fields";
            for (const errorName in errorMessage.current) {
                errorText.innerHTML = errorText.innerHTML + errorMessage.current[errorName as keyof typeof errorMessage.current];
                // console.log(errorName);
            }

            //if the errorText jsx element has some error content
            if(errorText.innerHTML !== "") {
                //show the input jsx container
                document.getElementById("errorMsgContainer_login")!.style.display="flex";
            }
        }


    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////



    //02X.02
    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const { name, value } = target;

        setUserInfo({ ...userInfo, [name]:value});
    }

    //02X.02 submit to the api and check for authentication errors received from the api
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        setBusy(true);
        e.preventDefault();
        //send the request to the backend api
        const apiResponse = await signIn("credentials", {
            email,
            password,
            redirect: false, //avoid default redirect
        });
        
        console.log(apiResponse);

        ////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////
        //part 10 - addon input authentication
        if (apiResponse) {
            setBusy(false);    
        
            //if there is an error, update the error state and return the process
            if (apiResponse.error !== null) { 
                // setError(res.error);
                const errorText = document.getElementById("errorMsg_login");
                const errorTitle = document.getElementById("errorMsg_login_title");

                //now clear the message in the ui and store all error messages again
                if (errorText && errorTitle) {
                    errorText.innerHTML = "";
                    errorTitle.innerText = "Login failed because of the following:";
                    errorText.innerHTML = apiResponse.error;
        
                    //if the errorText jsx element has some error content
                    if(errorText.innerHTML !== "") {
                        //show the input jsx container
                        document.getElementById("errorMsgContainer_login")!.style.display="flex";
                    }
        
                }
                return;

            } else {
                // console.log(res);
                // console.log("signed in");
            //     console.log(session);
            //         let agentId = (session?.user.id);
            //     router.push(`/agents/${agentId}`);
            //         hideLogin();
            //         hideDropDownMenu();
            // let agentId = (session?.user.id);
            // router.push(`/agents/${agentId}`);

            }
        }
        ////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////


    };


    let loggedIn = false;

    //02X.07
    //when the user is logged into session, the useEffect redirects to their page
    //wether after login or the sign-up's login
    useEffect(() => {
        console.log(session?.user);
        // console.log(session?.user.id);
        if (session?.user.id && loggedIn === false && !localStorage.loggedIn) {
            loggedIn = true;
            let agentId = (session?.user.id);
            localStorage.setItem("loggedIn", "true");
            router.push(`/agents/${agentId}`);
            hideLogin();
            hideDropDownMenu();
        }
        document.getElementById("errorMsgContainer_login")!.style.display="none";

      }, [session]);
    // }, []);


        

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

                    {/* the message notification */}
                    <span id="errorMsgContainer_login"
                    className="border-[rgba(255,255,255,0.02)] shadow-lg dark:shadow-inner 
                    absolute z-[2] top-[50%] left-[50%] centered_centered text-theme-text-dark text-xs
                    p-2 dark:bg-[#151515f8] bg-[#fdfdfd] rounded-[7px] flex flex-col">
                        
                        <span className="dark:text-white  text-black flex flex-row">
                            <span className="mt-auto ml-1 opacity-70 mr-2" id="errorMsg_login_title">
                                Please check the following inputs
                            </span>
                            <button 
                                onClick={()=> {document.getElementById("errorMsgContainer_login")!.style.display="none"}}
                                className="
                                ml-auto bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545] h-5 w-5 rounded-[6px] text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
                            </button>
                        </span>

                        <span id="errorMsg_login" className="w-[95%] mx-auto mt-2">

                        </span>
                    </span>
                    
                    {/* close button */}
                    <div className="text-center relative w-full flex flex-col">
                        <div className="absolute right-0">
                            <button 
                            onClick={()=> {hideLogin();}}
                            className="
                            ml-auto bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545] h-5 w-5 rounded-[6px] text-white flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
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

                        {/* email */}
                        <label className="w-[100%] flex flex-row justify-center text-center
                        label_field
                        bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                        ">
                            <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">E-Mail</span>
                            <input className="w-full input_field border-0 rounded-r-[6px] 
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                border-[rgba(255,255,255,0.02)]" type="email"
                            name="email" value={email} onChange={handleChange} onBlur={inputCheckHandler}
                            />
                            
                        </label>

                        {/* password */}
                        <label className="w-[100%] flex flex-row justify-center text-center
                        label_field
                        bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                        
                        ">
                            <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">password</span>
                            <input className="w-full input_field border-0 rounded-r-[6px] 
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                border-[rgba(255,255,255,0.02)]" type="password"
                                name="password" value={password} onChange={handleChange} onBlur={inputCheckHandler}
                            />
                            
                        </label>

                        {/* forgot password */}
                        <div className="w-full pr-2 flex flex-row">
                                <Link href="/" 
                                className="ml-auto text-sm hover:text-[#d33660]">
                                    forgot password ?
                                </Link>
                                
                                {error ? (
                                    <span>{error}</span>
                                ): (null)}
                        </div>

                        {/* the submit button */}
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

export default Login_component;