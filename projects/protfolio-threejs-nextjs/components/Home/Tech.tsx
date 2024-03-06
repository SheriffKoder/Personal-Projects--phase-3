"use client"

import React, {useRef} from "react"
import {motion, useInView} from "framer-motion";
import LaptopCanvas from "./Tech/laptop-canvas";
import { SectionWrapper } from "@/hoc";
import Image from "next/image";

import { technologies1, technologies2, technologies3 } from "@/constants/constants";

const Tech = () => {

  const container2 = useRef(null);
  const laptopRef = useRef(null);

  const isInView = useInView(container2, { once: true });


  

  return (
       <div className="w-[100vw] min-h-[100vh] max-w-[1600px] mx-auto
       flex flex-col items-center justify-start relative" id="tech-comp"
       >

          

  



          {/* the laptop 3d model, pass isInView, when its true (ref is in view), 
          the laptop animation starts */}
          <div className="absolute top-[-0vw] w-full h-[60vw] max-h-[100vh] max-w-[1600px]">
            <LaptopCanvas openLid={isInView} />
          </div>



            {/* animate={isInView ? "open" : "closed"}


                

           


            
          
          {/* when the ref is in view, the isInView will be true and trigger the laptop animation */}
          <div className="w-[100px] h-[1px] border border-[#f000] relative"
          ref={container2} />

       


      </div>

  )
}

// export default Tech;

//wrap the Tech component in the SectionWrapper to use it in it
export default SectionWrapper(Tech, "techx");