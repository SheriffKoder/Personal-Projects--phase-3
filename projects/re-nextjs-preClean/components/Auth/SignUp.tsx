// import React from 'react'
"use client";

import { hideDropDownMenu, hideSignUp } from "@utils/bodyNoScroll";
import { useState, useRef, useEffect } from "react";

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



    //////////////////////////////////
    //part 10 - addon input validation
    const errorMessage = useRef({
        name: "",
        phone: "",
        email: "",
        password: "",
        adminId: "",
    })
    const inputCheckHandler = ({target}) => {
        // console.log(e.target.value);
        // console.log(target);
        const {name, value} = target;

        // console.log({name, value});

        //get the input
        //check the input's value from the patterns available
        //

        const patterns: {} = {
            // telephone: /^\d{12}$/ ,         // only, country code+10 digits - login
            // telephoneShort: /^\d{10}$/ ,         // only, 10 digits - signup
            // password: /^[\w@-]{8,20}$/,     //the pattern is repeated, looking for (a-z A-Z also 0-9 and _)or @ or -
            email: /^([a-zA-Z\d\.-\_]+)@([a-zA-Z\d-]+)\.([a-z]{2,8})\.?([a-z]{2,8})?$/,               //also dots \.
            //        // domain with . - .. @ .. domain .. dot .. com ..  .uk(optional)
            // name: /^([a-zA-Z]{3,15})\s([a-zA-Z]{3,15})\s?([a-zA-Z]{3,15})?$/,
            
            //8 or more any characters
            // title: /^.{8,}$/,
            name: /^.{4,}$/,
            phone: /^.{4,}$/,
            password: /^.{4,}$/,
            adminId: /^.{4,}$/,
        };
    
        //the error message for each regex
        const errorMessages = {
            email: "be in a valid format",
            // password: "be from 8 to 20 characters"
            name: "be more than 4 characters - test",
            phone: "be more than 4 characters - test",
            password: "be more than 4 characters - test",
            adminId: "be more than 4 characters - test",
        }

        //test the incoming input value with its corresponding regex
        const regex: RegExp = patterns[name as keyof typeof patterns];
        const validInput = regex.test(value);

        // console.log(validInput);


        //// render to the ui the error messages
        const errorText = document.getElementById("errorMsg_signUp");
        const errorTitle = document.getElementById("errorMsg_signUp_title");

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
            errorTitle.innerText = "Please check the following input fields:";
            for (const errorName in errorMessage.current) {
                errorText.innerHTML = errorText.innerHTML + errorMessage.current[errorName as keyof typeof errorMessage.current];
                // console.log(errorName);
            }

            //if the errorText jsx element has some error content
            if(errorText.innerHTML !== "") {
                //show the input jsx container
                document.getElementById("errorMsgContainer_signUp")!.style.display="flex";
            }
        }


    }
    //////////////////////////////////



    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const { name, value } = target;
        setUserInfo({ ...userInfo, [name]:value});
    }

    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        setBusy(true);

        e.preventDefault();
        const apiResponse = await fetch("/api/auth/users", {
            method: "POST",
            body: JSON.stringify(userInfo),

        })
        // .then((res) => res.json());

        const res = await apiResponse.json();
        console.log(res);
        setBusy(false);

        if (res.errorArray) {
            console.log("server error "+res.errorArray);

            const errorText = document.getElementById("errorMsg_signUp");
            const errorTitle = document.getElementById("errorMsg_signUp_title");

            //now clear the message in the ui and store all error messages again
            if (errorText && errorTitle) {
                errorText.innerHTML = "";
                errorTitle.innerText = "SignUp failed because of the following:";
                res.errorArray.forEach((error:string)=>{
                    errorText.innerHTML = errorText.innerHTML + error + "</br>";
                })
    
                //if the errorText jsx element has some error content
                if(errorText.innerHTML !== "") {
                    //show the input jsx container
                    document.getElementById("errorMsgContainer_signUp")!.style.display="flex";
                }
    
            }

            return;
        }

        //02X.07
        //login automatically after a successful sign-up
        if (res.signUp) {
            console.log("we can sign in");
            //send the request to the backend api
            const res = await signIn("credentials", {
            email,
            password,
            redirect: false, //avoid default redirect
            });
            console.log("signed in");
            hideSignUp();
            hideDropDownMenu();    
        }
   }


    useEffect(() => {

        document.getElementById("errorMsgContainer_signUp")!.style.display="none";

    },[]);



        

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

                <span id="errorMsgContainer_signUp"
                className="border-[rgba(255,255,255,0.02)] shadow-lg dark:shadow-inner 
                absolute z-[2] top-[50%] left-[50%] centered_centered text-theme-text-dark text-xs
                p-2 dark:bg-[#151515f8] bg-[#fdfdfd] rounded-[7px] hidden flex-col">
                    
                    <span className="dark:text-white  text-black flex flex-row">
                        <span className="mt-auto ml-1 mr-2 opacity-70" id="errorMsg_signUp_title">
                            Please check the following inputs
                        </span>
                        <button 
                            onClick={()=> {document.getElementById("errorMsgContainer_signUp")!.style.display="none"}}
                            className="
                            ml-auto bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545] h-5 w-5 rounded-[6px] text-white flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
                        </button>
                    </span>

                    <span id="errorMsg_signUp" className="w-[95%] mx-auto mt-2">

                    </span>
                </span>

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
                            name="name" value={name} onChange={handleChange} onBlur={inputCheckHandler}
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
                            name="phone" value={phone} onChange={handleChange} onBlur={inputCheckHandler}
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
                            name="email" value={email} onChange={handleChange} onBlur={inputCheckHandler}
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
                            name="password" value={password} onChange={handleChange} onBlur={inputCheckHandler}
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
                            " type="password" placeholder="Admins: 1111, Agents:1234"
                            name="adminId" value={adminId} onChange={handleChange} onBlur={inputCheckHandler}
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