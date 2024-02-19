import React from "react"
import {CharCanvas} from "../myModels/CharCanvas"

import {motion} from "framer-motion";


import Link from "next/link";
import FadeUp from "../Animations/FadeUp";
import SingleWordUp from "../Animations/SingleWordUp";

const Hero = () => {
  return (
        <div className=" w-full h-screen 
        pt-[8rem] flex px-4 flex-col gap-12 lg:flex-row lg:items-center lg:justify-between max-w-[1600px] mx-auto
      ">    


        {/* Hero text */}
        <FadeUp>
        <div
        className="flex flex-col order-2 lg:order-1 items-center text-center lg:items-start lg:text-start lg:ml-[4rem]">
          
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
          

          <span className="lightHeader mt-2 font-extralight">
            I design and build beautiful and interactive websites<br/>
            with ReactJS, NodeJS, ThreeJS and more...  
          </span>

           <span className="mt-6 flex flex-row gap-4 items-center">

                <Link href="/" className="lg:px-4 px-3 py-1 lg:py-2 text-xs lg:font-semibold uppercase gradientRoundButton focus:opacity-95 hover:opacity-95">
                    contact
                </Link>

                <span className="px-4 py-1 lg:text-base text-sm font-base gradientGreyButton focus:opacity-95 hover:opacity-95">
                    <Link href="/about" className="gradient_text_1 w-full h-full">
                    check out all info about me <span className="hidden xl:contents">(background, education, career...)</span>

                    </Link>
                </span>
            </span>
        
        
        </div>
        </FadeUp>



        {/* <div className="flex-1 items-center justify-center flex lg:h-[70%] overflow-hidden"> */}
        <div className="order-1 h-[40%] lg:h-[80%] lg:w-[40%] lg:order-2">
            {/* Hero */}
            <CharCanvas/>
        </div>



      </div>

  )
}

export default Hero