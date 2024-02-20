"use client"

import React, {useEffect, useState} from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SectionWrapper } from "@/hoc";

import { useContext } from "react"
import { linkContext } from "./context"


const Nav2 = () => {
    const path = usePathname().split("/")[1];
    // console.log(path);

    // const [active, setActive] = useState("");
    const active2 = useContext(linkContext).activeLink;
    const setActive = useContext(linkContext).updateLink;

    const [active, setActive2] = useState(useContext(linkContext).activeLink);

    // const [scrollY, setScrollY] = useState(window.scrollY);
    // let scrollY = window.scrollY;

    // window.addEventListener("scroll", ()=>{
    //     console.log(window.scrollY);
    //     // const active2 = useContext(linkContext).activeLink;
    //     setActive2(useContext(linkContext).activeLink);
    //     // console.log(active2);

    // })
    useEffect(()=> {
        // console.log(useContext(linkContext).activeLink);
        // setActive(useContext(linkContext).activeLink)
        // console.log(active2);
        setActive2(active2);
    },[active2])

  return (
    <nav className="sticky top-0 w-full h-[3rem] bg-[#370a1000] z-[1]
    
    ">

        <div className="h-full flex flex-row items-center justify-between flex-warp
        mt-1
        "
        >
            

            {/* sub links */}
            <span className="centered_centered mt-[3rem] lg:mt-0 pr-4">
                <ul className="flex flex-row gap-12 text-xs font-light">
                
                    <li className={`gradient_text_hover_1 py-4
                    ${active === "about" ? "text-white" : "text-gray-500"}
                    `}
                    key={"about"}
                    onClick={()=> setActive("about")}>
                    
                        <Link href="#about">
                            about
                        </Link>
                    </li>
                    <li className={`gradient_text_hover_1 py-4
                    ${active === "tech" ? "text-white" : "text-gray-500"}
                    `}
                    key={"tech"}
                    onClick={()=> setActive("tech")}>
                    
                        <Link href="#tech">
                            tech
                        </Link>
                    </li>
                    <li className={`gradient_text_hover_1 py-4
                    ${active === "projects" ? "text-white" : "text-gray-500"}
                    `}
                    key={"projects"}
                    onClick={()=> setActive("projects")}>

                        <Link href="#projects">
                            projects
                        </Link>
                    </li>
                    <li className={`gradient_text_hover_1 py-4
                    ${active === "contact" ? "text-white" : "text-gray-500"}
                    `}
                    key={"contact"}
                    onClick={()=> setActive("contact")}>

                        <Link href="#contact">
                            contact
                        </Link>
                    </li>
                    
                    {/* <li className="py-4">
                        <span className="px-4 py-1 text-base font-base gradientGreyButton">
                            <Link href="/" className="gradient_text_1 w-full h-full">
                                Contact
                            </Link>
                        </span>
                    </li> */}

                </ul>
                
            </span>


           

        </div>
    </nav>
  )
}

export default Nav2;
