"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Nav = () => {
    const path = usePathname().split("/")[1];


  return (
    <nav className="sticky top-0 w-full h-[3rem] bg-[#370a1000] z-[10]
    
    ">

        <div className="h-[2px] w-full gradient_nav_animation
        bg-gradient-to-r from-[#5398bf] from-20% via-[#39d0b753] via-60% to-transparent"/>

        <div className="h-full flex flex-row items-center justify-between flex-warp
        mt-1
        "
        >
            <span className="pl-6">
                <Link href="/">
                <Image src="/icons/ss-w-logo.png" height={22} width={22} alt="logo">

                </Image>
                </Link>
            </span>

     


            {/* list or a menu button */}
            <span className="pr-4">
                <ul className="flex flex-row gap-[min(5vw,3rem)] uppercase text-xs font-semibold">
                    <li className={`py-4 ${path === "" ? "active no_select" : "gradient_text_hover_1"}
                    `}>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className={`py-4 ${path === "about" ? "active no_select" : "gradient_text_hover_1"}
                    `}>
                    
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li className={` py-4 ${path === "projects" ? "active no_select" : "gradient_text_hover_1"}
                    `}>

                        <Link href="/projects">
                            Projects
                        </Link>
                    </li>
                    <li className={`py-4 ${path === "contact" ? "no_select text-[#d8d8d8]" : null}
                    `}>
                        <Link className="gradientRoundButton py-[0.1rem] px-3
                        focus:opacity-90 hover:opacity-90" 
                        
                        href="/contact">
                            Contact
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

export default Nav
