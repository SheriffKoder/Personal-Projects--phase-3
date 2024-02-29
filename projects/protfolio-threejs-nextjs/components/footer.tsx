"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import SocialIcons from "./social"

const Footer = () => {

    const path = usePathname().split("/")[1];
    //single project page check
    const path2 = usePathname().split("/");

    // console.log(path2);
  return (
    <footer className={`w-[100vw] h-[150px] bg-[#00000000] flex items-center justify-center z-[10]
    ${(path === "contact" || (path2.length > 2 && path2[1] === "projects")) ? "bg-[#00000000]" : "bg-[#0000]"} `}>
        <div className="max-w-[1600px] flex flex-col items-center justify-center w-full">

                    <ul className="flex flex-row gap-12 text-xs font-light opacity-90">
                        <li className={`py-4
                        `}>
                            <Link href="/" className={`${path === "" ? "no_select" : "gradient_text_hover_1"}`}>
                                Home
                            </Link>
                        </li>
                        <li className={`py-4
                        `}>
                    
                            <Link href="/about" className={`${path === "about" ? "no_select" : "gradient_text_hover_1"}`}>
                                About
                            </Link>
                        </li>
                        <li className={`py-4
                        `}>
                            <Link href="/projects" className={`${path === "projects" ? "no_select" : "gradient_text_hover_1"}`}>
                                Projects
                            </Link>
                        </li>
                        <li className={` py-4
                        `}>
                            <Link href="/contact" className={`${path === "contact" ? "no_select" : "gradient_text_hover_1"}`}>
                            Contact
                            </Link>
                        </li>
                    </ul>

                    


            {/* z to show on the contact page */}
            <span className="gradient_text_1 flex flex-row z-[0] relative w-full justify-center">
                <span>&#169; SHERIFF KODER</span>

                <span className="w-[17px] flex items-center justify-center mt-[-2px]">
                    <Image src={"/icons/ss-c-logo.png"} height={15} width={17} alt="logo">
                    </Image>
                </span>

                <div className="ml-auto flex flex-row gap-2 absolute right-[2rem]">
                    <SocialIcons/>
                </div>
            </span>
        </div>
        


    </footer>
  )
}

export default Footer