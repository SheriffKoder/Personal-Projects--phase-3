"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { socials } from "@/constants/constants"
import SocialIcons from "./Helpers/social"

const Footer = () => {

    const path = usePathname().split("/")[1];
    //single project page check
    const path2 = usePathname().split("/");

    // console.log(path2);
  return (
    <footer className={`w-[100vw] h-[150px] bg-[#00000000] flex items-center justify-center z-[10]
    ${(path === "contact" || (path2.length > 2 && path2[1] === "projects")) ? "h-[100px] fixed bottom-0 bg-[#00000000]" : "bg-[#0000]"} `}
    id="footer">
        <div className="max-w-[1600px] flex flex-col items-center justify-center w-full">

            <div className="w-full flex flex-row justify-center items-center relative">
                <ul className="flex flex-row gap-12 text-xs font-light opacity-90">
                    <li className={`py-2
                    `}>
                        <Link href="/" className={`${path === "" ? "no_select" : "gradient_text_hover_1"}`}>
                            Home
                        </Link>
                    </li>
                    <li className={`py-2
                    `}>
                
                        <Link href="/about" className={`${path === "about" ? "no_select" : "gradient_text_hover_1"}`}>
                            About
                        </Link>
                    </li>
                    <li className={`py-2
                    `}>
                        <Link href="/projects" className={`${path === "projects" ? "no_select" : "gradient_text_hover_1"}`}>
                            Projects
                        </Link>
                    </li>
                    <li className={` py-2
                    `}>
                        <Link href="/contact" className={`${path === "contact" ? "no_select" : "gradient_text_hover_1"}`}>
                        Contact
                        </Link>
                    </li>
                </ul>


            </div>


            {/* z to show on the contact page */}
            <span className="w-full max-w-[800px] gradient_text_1 flex flex-col items-center justify-center gap-2 z-[0] relative">
                
                <span className="flex flex-row">
                    <span>&#169; SHERIFF KODER</span>

                    <span className="w-[17px] flex items-center justify-center mt-[-2px]">
                        <Image src={"/icons/ss-c-logo.png"} height={15} width={17} alt="sheriffkoder.com website's logo"
                        style={{height: "17px", width: "19px"}}>
                        </Image>
                    </span>
                </span>


                {
                    path !== "contact" && (
                            
                    <div className="mdx:ml-auto flex flex-row gap-2 mdx:absolute right-[1.5rem]">
                        <SocialIcons radius={"0.3rem"} size={"1.5rem"} background={"#ffffffdb"}
                        size2={24} padding={"0.3rem"}/>
                        
                    </div>
                )}
            </span>


        </div>
        


    </footer>
  )
}

export default Footer