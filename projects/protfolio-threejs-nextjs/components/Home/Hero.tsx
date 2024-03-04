import React, { useRef,useEffect } from "react"
import {CharCanvas} from "../myModels/CharCanvas"

import {motion} from "framer-motion";


import Link from "next/link";
import FadeUp from "../Animations/FadeUp";
import SingleWordUp from "../Animations/SingleWordUp";
import CaretDown2 from "@/public/icons/caret-down2";

import { useInView } from "framer-motion";

const Hero = () => {

  // used for the next-component link
  const container = useRef(null);
  const isInView = useInView(container);


  return (
        <div className="max-h-[99vh] h-[99vh]
        flex px-4 
        flex-col gap-6 justify-center items-center pt-[4rem]
        lg:flex-row lg:items-center lg:justify-evenly lg:gap-12 lg:pt-[8rem]
        mx-auto relative min-w-full"
        id="heroContainer_comp">    

          {/* an element at the top of the component used as a trigger for the caret down button
          which transfers to the next component on the page */}
          <span className="w-full h-[1px] bg-transparent absolute top-0" ref={container}></span>

          {/* ///////////////////////////// Hero text  /////////////////////////////*/}
          {/* id's are used for landscape media queries in globals.css */}
          {/* combine text with vw and em's in children for a responsive text size */}
          {/* <FadeUp> */}
          <div className="text-[calc(1rem+0.25vw)]
          flex flex-col order-2 items-center text-center h-[30%]
          lg:order-1 lg:text-start lg:items-start  lg:ml-[4rem] lg:flex-1
          max-w-[460px]
          "
          id="heroText_comp">
            
            <span className="gradient_text_1 text-[min(1.75em,2.25rem)] font-bold uppercase
            lg:text-[text-[min(2em,2.25rem)]" >
              Sheriff Koder
            </span>
            
            
            <span className="text-[min(1em,1.25rem)] font-thin">A full-stack
              <span className="font-semibold uppercase"> Web developer</span>
            </span>
            

            <span className="text-[min(0.75em,1rem)] mt-2 font-extralight">
              I design and build beautiful and interactive websites<br/>
              with ReactJS, NodeJS, ThreeJS and more...  
            </span>

            {/* ////// links ////// */}
            <span className="mt-6 flex flex-row gap-4 items-center
            text-[80%] flex-wrap
            ">

              <Link href="/contact" className="lg:px-4 px-3 py-0
              gradientRoundButton focus:opacity-95 hover:opacity-95
              text-[min(0.9em,1rem)]
              ">
                  contact
              </Link>

              <span className="px-4 py-1 font-base 
              gradientGreyButton focus:opacity-95 hover:opacity-95
              text-[min(0.9em,1rem)]">

                  <Link href="/about" className="gradient_text_1 w-full h-full">
                    check out all info about me 
                    {/* <span className="hidden 2xl:contents">(background, education, career...)</span> */}
                  </Link>
              </span>

            </span>
          
          
          </div>
          {/* </FadeUp> */}

          {/* order-1 h-[60%] lg:h-[80%] lg:min-w-[40%]  */}
          {/* ///////////////////////////// Human 3d model  /////////////////////////////*/}
          <div className="md2:w-[40vw] md2:h-[40vw] w-[40vh] h-[40vh]
          order-1 lg:order-2"
          id="heroChar_comp">
              <CharCanvas/>
          </div>


          {/* display this component-link when the ref is in view, hide when out of this component */}
          {isInView && (
            <div className="absolute bottom-[0.5rem] w-[99%] flex justify-center items-center"
            >
                <a href="#tech-comp" className="border-2 border-white rounded-full w-8 h-8
                flex items-center justify-center opacity-50">
                  <CaretDown2 size={40} color="#ffff"/>
                </a>

            </div>
          )}



      </div>

  )
}

export default Hero