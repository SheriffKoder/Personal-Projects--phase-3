// import React from 'react'

"use client";
import { scrollScroll } from "@utils/bodyNoScroll";
import { useState, useEffect } from "react";




const DarkModeToggle = () => {

    function handleToggle () {

        const toggleBG = document.querySelector("#toggleBG");
        const toggleBT = document.querySelector("#toggleBT");
        const toggleSp = document.querySelector("#mySpan");


        if (sessionStorage.theme === "light") {

            setTheme("dark");
            // sessionStorage.setItem("theme", "dark");
            // window.document.documentElement.classList.remove("light");
            // window.document.documentElement.classList.add("dark");
            // toggleBG?.classList.add("bg-[#8080802e]");
            // toggleBT?.classList.remove("bg-[url('/icons/moon-custom.svg')]");

            // toggleBT?.classList.add("bg-[url('/icons/sun-custom.svg')]");
            // // toggleBT?.classList.remove("toggle-animation-right");

            // // toggleBT?.classList.add("toggle-animation-left");
            // toggleSp?.classList.remove("toggle-animation2");

            // toggleSp?.classList.add("toggle-animation");

            // console.log(sessionStorage.theme);


        } else if (sessionStorage.theme === "dark") {

            setTheme("light");
            // sessionStorage.setItem("theme", "light");
            // window.document.documentElement.classList.remove("dark");
            // window.document.documentElement.classList.add("light");
            // toggleBG?.classList.add("g-gray-200");
            // toggleBT?.classList.remove("bg-[url('/icons/sun-custom.svg')]");

            // toggleBT?.classList.add("bg-[url('/icons/moon-custom.svg')]");
            // // toggleBT?.classList.remove("toggle-animation-left");
            
   
            // // toggleBT?.classList.add("toggle-animation-right");
            // toggleSp?.classList.remove("toggle-animation");

            // toggleSp?.classList.add("toggle-animation2");
      

            
            // console.log(sessionStorage.theme);

        }
    }

    function setTheme (theme: string) {

        // console.log("input is "+theme);
        // const toggleBG = document.querySelector("#toggleBG");
        const toggleBT = document.querySelector("#toggleBT");
        const toggleSp = document.querySelector("#mySpan");
        const body = document.querySelector("html");

        body?.addEventListener("wheel", scrollScroll);

        let nextTheme :string;
        let toggleBGColor: string;

        (theme === "light") ? nextTheme = "dark" : nextTheme = "light";

        if (theme === "light") {

        toggleBT?.classList.remove(`bg-[url('/icons/light-theme-icon.svg')]`);
        toggleBT?.classList.add(`bg-[url('/icons/dark-theme-icon.svg')]`);
        body?.classList.remove("dark_scroll");
        body?.classList.add("light_scroll");




        } else {
            toggleBT?.classList.remove(`bg-[url('/icons/dark-theme-icon.svg')]`);
            toggleBT?.classList.add(`bg-[url('/icons/light-theme-icon.svg')]`); 
            body?.classList.remove("light_scroll");
            body?.classList.add("dark_scroll");

        }

        sessionStorage.setItem("theme", theme);

        window.document.documentElement.classList.remove(nextTheme);
        window.document.documentElement.classList.add(theme);

        // toggleBT?.classList.remove(`bg-[url('/icons/${theme}-theme-icon.svg')]`);
        // toggleBT?.classList.add(`bg-[url('/icons/${nextTheme}-theme-icon.svg')]`);
        // toggleBT?.classList.remove("toggle-animation-right");

        // toggleBT?.classList.add("toggle-animation-left");
        toggleSp?.classList.remove(`toggle-animation-${nextTheme}`);

        toggleSp?.classList.add(`toggle-animation-${theme}`);

        console.log(sessionStorage.theme);
        scrollScroll();

    }

  

    useEffect(() => {

        //not need to cause a re-render
        //on initial render set to light
        // sessionStorage.setItem("theme", "light");

        //use the correct theme from the start of page view
        //based on the inserted theme in jsx or the present session variable to avoid any starting bugs
        if (sessionStorage.theme === "light" || sessionStorage.theme === "dark") {
            window.document.documentElement.classList.add(sessionStorage.theme);
        } 
        else if (sessionStorage.theme ==  undefined && window.document.documentElement.classList.contains("dark")) {
            sessionStorage.theme = "dark";
            console.log("undefined theme");
        } else if (sessionStorage.theme ==  undefined && window.document.documentElement.classList.contains("light")) {
            sessionStorage.theme = "light";
            console.log("undefined theme");

        } else {
            sessionStorage.theme = "light";
            window.document.documentElement.classList.add(sessionStorage.theme);

        }

        setTheme(sessionStorage.theme);
    });

    return (

        <div 
        id="toggleBG"
        className="relative flex flex-row rounded-full border-0 bg-[#bebebe2e] dark:bg-[#4f4f4f2e] h-8 w-16 cursor-pointer p-1">

            <span id="mySpan" className="flex flex-row justify-end w-6">
                <button
                id="toggleBT"
                aria-label="toggle the web site's theme"
                className="hover:brightness-95 dark:hover:brightness-75 h-6 w-6 dark:bg-[#e6e5e57a] bg-white rounded-full dark:invert
                bg-[length:13px_13px] bg-center bg-no-repeat"
                onClick={handleToggle}>
                    
                </button>
            </span>

        </div>

        // <label
        //     htmlFor="AcceptConditions"
        //     className="toggleLabel relative h-7 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
        // >

            // <input
            //     type="checkbox"
            //     id="AcceptConditions"
            //     className=" peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"

            // />


//             {theme === "dark"? (
//             <span
//                 className="absolute inset-y-0 start-0 z-10 inline-flex h-5 w-5 m-1 items-center justify-center rounded-full bg-white text-gray-400 transition-all
//                 peer-checked:start-7 peer-checked:text-gray-400"
//                 onClick={()=>{handleToggle()}}>


//                 <svg 
//                 data-unchecked-icon
//                 xmlns="http://www.w3.org/2000/svg" 
//                 width="14" height="14" 
//                 fill="currentColor" 
//                 className="bi bi-sun" 
//                 viewBox="0 0 16 16"> 
//                     <path 
//                         fill-rule="evenodd"
//                         d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
//                         clip-rule="evenodd"
//                     /> 
//                 </svg>
                

//                 <svg 
//                     data-checked-icon
//                     xmlns="http://www.w3.org/2000/svg" 
//                     width="14" height="14" 
//                     fill="currentColor" 
//                     className="hidden bi bi-moon" 
//                     viewBox="0 0 16 16"

//                 > 
//                     <path 
//                         fill-rule="evenodd"
//                         d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
//                         clip-rule="evenodd"
//                     /> 
//                 </svg>

//             </span>

// ) : (
//             <span
//                 className="absolute inset-y-0 start-7 z-10 inline-flex h-5 w-5 m-1 items-center justify-center rounded-full bg-white text-gray-400 transition-all 
//                 peer-checked:start-0 peer-checked:text-gray-400"
//                 onClick={()=>{handleToggle()}}>


//                 <svg 
//                 data-checked-icon
//                 xmlns="http://www.w3.org/2000/svg" 
//                 width="14" height="14" 
//                 fill="currentColor" 
//                 className="hidden bi bi-sun" 
//                 viewBox="0 0 16 16"> 
//                     <path 
//                         fill-rule="evenodd"
//                         d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
//                         clip-rule="evenodd"
//                     /> 
//                 </svg>
                

//                 <svg 
//                     data-unchecked-icon
//                     xmlns="http://www.w3.org/2000/svg" 
//                     width="14" height="14" 
//                     fill="currentColor" 
//                     className="bi bi-moon" 
//                     viewBox="0 0 16 16"

//                 > 
//                     <path 
//                         fill-rule="evenodd"
//                         d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
//                         clip-rule="evenodd"
//                     /> 
//                 </svg>

//             </span>
//   )} 

//             <span
//                 className="absolute inset-0 rounded-full bg-[#8080802e] transition peer-checked:bg-gray-200"

//             ></span>
//         </label>
    )
}

export default DarkModeToggle;