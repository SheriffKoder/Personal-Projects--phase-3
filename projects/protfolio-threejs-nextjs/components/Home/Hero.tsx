import React from "react"
import {CharCanvas} from "../myModels/CharCanvas"

import Link from "next/link";

const Hero = () => {
  return (
        <div className="ambientBackground w-full h-screen 
      flex flex-row items-center justify-between
      ">    


        {/* Hero text */}
        <div className="flex flex-col  flex-1 mainText_padding_left">
          <span className="lightHeader">
            {/* Welcome to my page,
            <span className="pl-[0.5rem]"> my name is</span>  */}
          </span> 
          
          <span className="gradientBoldHeader uppercase">
            Sheriff Koder
            </span>
          
          <span className="lightHeader font-thin">A full-stack
            <span className="font-semibold uppercase"> Web developer</span>
          </span>
          {/* <span className="lightHeader uppercase">
            Web developer 
          </span> */}

          <span className="lightHeader mt-2 text-xl font-extralight">
            I design and build beautiful and interactive sites<br/>
            on the web with ReactJS, NodeJS, ThreeJS and more...  
          </span>

           <span className="mt-6 flex flex-row gap-4">

                <Link href="/" className="px-4 py-2 text-xs font-semibold uppercase gradientRoundButton focus:opacity-95 hover:opacity-95">
                    contact
                </Link>

                <span className="px-4 py-1 text-base font-base gradientGreyButton focus:opacity-95 hover:opacity-95">
                    <Link href="/about" className="gradient_text_1 w-full h-full">
                    check out all info about me (background, education, career...)

                    </Link>
                </span>
            </span>
        
        
        </div>



        <div className="flex-1 items-center justify-center flex h-[70%] overflow-hidden">
            {/* Hero */}
            <CharCanvas/>
        </div>



      </div>

  )
}

export default Hero