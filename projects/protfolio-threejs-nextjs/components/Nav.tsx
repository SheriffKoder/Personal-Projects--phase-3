import React from "react"
import Image from "next/image"
import Link from "next/link"



const Nav = () => {


  return (
    <nav className="sticky top-0 w-full h-[3rem] bg-[#370a1000]
    
    ">

        <div className="h-[2px] w-full gradient_nav_animation
        bg-gradient-to-r from-[#5398bf] from-20% via-[#39d0b753] via-60% to-transparent"/>

        <div className="h-full flex flex-row items-center justify-between flex-warp
        mt-1
        "
        >
            <span className="pl-6">
                <Image src="/icons/ss-w-logo.png" height={22} width={22} alt="logo">

                </Image>
            </span>

            {/* list or a menu button */}
            <span className="pr-2">
                <ul className="flex flex-row gap-4">
                    <li className="gradient_text_hover_1 p-4">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="gradient_text_hover_1 p-4">
                        <Link href="/">
                            About
                        </Link>
                    </li>
                    <li className="gradient_text_hover_1 p-4">
                        <Link href="/">
                            Projects
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link className="rounded-[1rem] py-1 px-3
                        bg-gradient-to-r from-[#387ca4] to-[#39d0b7b4]" 
                        
                        href="/">
                            Contact
                        </Link>
                    </li>
                </ul>
                
            </span>
        </div>
    </nav>
  )
}

export default Nav