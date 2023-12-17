
"use client";


// import React from 'react'
import DarkModeToggle from "./DarkModeToggle"


//01.03
import Link, { LinkProps } from "next/link";
import Image from "next/image";
import {useState, useEffect} from "react";

import { bodyNoScroll } from "@utils/bodyNoScroll";

//02X.04
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Nav = () => {

  //02X.04
  //get the session object
  //destructure out the data and status the data will be the user (if successfully signed in)
  // according to different status can render different UI
  const { data: session, status } = useSession();      //get the status
  const isAuth = status === "authenticated";  //use the status
  const router = useRouter();


  function handleDropDownIcon (input : string) {
      document.querySelector(".nav-user-icon")?.classList.toggle("agentNavIcon_background");
      
      if( input === "leave" ) {
        document.querySelector(".nav-user-menu")?.classList.remove("flex");
        document.querySelector(".nav-user-menu")?.classList.add("hidden");

      } else if ( input === "enter" ) {
        document.querySelector(".nav-user-menu")?.classList.add("flex");
        document.querySelector(".nav-user-menu")?.classList.remove("hidden");

      }
      

      // setToggleDropDown((prev)=>!prev);
  }


  function showLogin () {
    let loginComponent = document.getElementById("login__container");
    let signUpComponent = document.getElementById("signUp__container");

    if (signUpComponent?.style.display === "flex") {
      signUpComponent!.style.display = "none";
    }

    loginComponent!.style.display = "flex";

    document.querySelector(".nav-user-menu")?.classList.remove("flex");
    document.querySelector(".nav-user-menu")?.classList.add("hidden");

  }

  function showSignUp () {
    let signUpComponent = document.getElementById("signUp__container");
    let loginComponent = document.getElementById("login__container");

    if (loginComponent?.style.display === "flex") {
      loginComponent!.style.display = "none";
    }

    signUpComponent!.style.display = "flex";

    document.querySelector(".nav-user-menu")?.classList.remove("flex");
    document.querySelector(".nav-user-menu")?.classList.add("hidden");

  }


  //01.04
  // const [providers, setProviders] = useState(null);


  
  const [toggleDropDown, setToggleDropDown] = useState(true);
  // let isUserLoggedIn = false;




  return (
    <nav className="w-full px-2 md:px-12  max-w-7xl absolute z-[9] my-8">
      {/* <ul className="bg-[#ffffffd3] text-[#d6003580] flex flex-row gap-3 border-0 border-[] 
      rounded-2xl py-2 px-4 w-full backdrop-blur-sm shadow-l 
      ">
        <li>Text1</li>
        <li>Text2</li>

      </ul> */}

      <span className=" dark:bg-[#31313175] bg-[#ffffffd3]
       text-theme-text-bright dark:text-theme-text-dark 
       flex flex-row gap-3 
      rounded-full px-2 backdrop-blur-sm shadow-l  text-sm mx-auto
      glass-container-background-3
      ">
        <ul className="flex flex-row items-center gap-3 ml-2 h-12">
        <li className="h-full">
            <Link href="/" className=" flex items-center h-full nav-icon gap-2 flex-center" aria-label="back to the home page">
              <svg className="hover:opacity-80 bi bi-house" xmlns="http://www.w3.org/2000/svg" 
              width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                
                <path className="dark:fill-[#cc2750d3] fill-[#d6003580]" fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z">
                </path> 
                
                <path className="dark:fill-[#cc2750d3] fill-[#d6003580]" fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z">
                </path> 
              </svg>
              {/* <p>RE Company</p> */}
            </Link>

          </li>

          <li className="h-full">
            <Link href="/properties" aria-label="check our properties" className="hover:opacity-80 flex items-center h-full">
              Properties
            </Link>
          </li>

          <li className="h-full">
            <Link href="/posts" aria-label="news about the real estate market" className="hover:opacity-80 flex items-center h-full">
              News
            </Link>
          </li>

          <li className="h-full">
            <Link href="/about#about-us" aria-label="more information about our company" className="hover:opacity-80 flex items-center h-full">
              About
            </Link>
          </li>
        </ul>

        <span className="bg-red ml-auto flex flex-row gap-3 items-center relative">

          <span onMouseEnter={()=>handleDropDownIcon("enter")}>
            <Link href="/" className=" nav-user-icon flex gap-2 flex-center rounded-full border-0 hover:bg-gray-200 dark:hover:bg-[#4f4f4f2e] h-7 w-7"
            >

                  <svg xmlns="http://www.w3.org/2000/svg" 
                  width="16" height="16" fill="currentColor" 
                  className="bi bi-person " viewBox="0 0 16 16"> 
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/> 
                  </svg>

                  {/* <p>RE Company</p> */}
            </Link>
          </span >


          {/* {isAuth && ( */}
          {session?.user && (
            <div className="nav-user-menu  hidden bg-gray-200 dark:bg-[#4f4f4f5d]"
            // onMouseLeave={()=>handleDropDownIcon("leave")}
            onMouseLeave={()=>{handleDropDownIcon("leave"); console.log(session?.user);}}
            >
                <ul className=" flex flex-col items-center justify-center w-full">

                  <li className=" py-2 border-b-[1px] dark:border-[#151515a1] border-[#dbdbdb]
                  w-full text-center dark:hover:bg-[#ffffff16] rounded-t-[17px]  hover:bg-[#dbdee5]">
                    <Link href={"/agents/"+session?.user.id} className="w-full flex justify-center">
                      Go to Profile
                    </Link>
                  </li>

                  
                  {/* <li className=" py-2 border-b-[1px] dark:border-[#151515a1] border-[#dbdbdb] w-full text-center dark:hover:bg-[#ffffff16]  hover:bg-[#dbdee5]">
                    <Link href="agent/add-property" className="w-full flex justify-center">
                      Add Property
                    </Link>
                  </li> */}
                  
                  {/* 02X.4 */}
                  {/* //02X.07 */}
                  <li className=" py-2 w-full text-center dark:hover:bg-[#ffffff16]  hover:bg-[#dbdee5] rounded-b-[17px] ">
                  <button type="button" className="w-full flex justify-center"
                  onClick={()=>{signOut({ redirect: false }).then(()=> {router.push("/");})}}
                  // onClick={()=>signOut()}

                  >
                      Sign out
                    </button>
                  </li>

                </ul>
            </div>
          )}

          {/* {!isAuth && ( */}
          {!session?.user && (
            <div className="nav-user-menu hidden bg-gray-200 dark:bg-[#4f4f4f5d]"
            onMouseLeave={()=>handleDropDownIcon("leave")}
            >
                <ul className="flex flex-col items-center justify-center w-full">

                  <li className=" py-2 w-full text-center dark:hover:bg-[#ffffff16]  hover:bg-[#dbdee5] rounded-t-[17px]">
                    <button onClick={() => {bodyNoScroll(); showLogin()}} className="w-full flex justify-center">
                      Login
                    </button>
                  </li>

                  <li className=" py-2 w-full text-center dark:hover:bg-[#ffffff16]  hover:bg-[#dbdee5] rounded-b-[17px]">
                    <button onClick={() => {bodyNoScroll(); showSignUp()}} className="w-full flex justify-center">
                      Sign up
                    </button>
                  </li>

                </ul>
            </div>
            )}

          <DarkModeToggle/>
        </span>

      </span>



    </nav>
  )
}

export default Nav