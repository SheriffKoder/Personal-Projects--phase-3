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
       <div className="w-full min-h-[100vh] max-w-[1600px] mx-auto
       flex flex-col items-center justify-start relative" id="tech"
       >

          

  


          <span className="absolute top-[5vw]
          text-[calc(1.5rem+1vw)] w-full text-center font-semibold">
            Technologies Used
          </span>

          {/* the laptop 3d model, pass isInView, when its true (ref is in view), 
          the laptop animation starts */}
          <div className="absolute top-[-20vw] w-[100vw] h-[60vw]">
            <LaptopCanvas openLid={false} />
          </div>


              
          <motion.div className="bg-[#020812e6] 
          w-[90vw] h-full max-w-[1400px] text-center lg:text-start
          centered_centered rounded-[17px]
          py-10 flex flex-col gap-[1rem] items-start justify-center 
          px-[7vw] lg:mainText_padding_left
          "
          // variants={opacity} initial="initial" animate="open"
          style={{
            // transform: !isInView ? "translateY(200px) translateX(-50%)" : "translateY(0px) translateX(-50%)",
            opacity: isInView ? 1 : 0,
            transition: "all 3.5s cubic-bezier(0.17, 0.55, 0.55, 1) 3s",
            // transitionDelay: "2.5s",
            //time-s, delay-s
          }}>

            <span className="mb-8 flex flex-col gap-3 text-[min(1.25rem,calc(0.75rem+0.5vw))]">
              <h4 className="gradientBoldHeader mb-2">About my Skills</h4>
              <span>
                <p>By now i am able to design and build websites with modern front-end frameworks.</p>
                <p>and design and build backend routes to connect these websites to a NoSQL database if needed.</p>
              </span>

              <span>
                <p>My on-going goal is to get better at building more beautiful, more optimized and more functional websites.</p>
              </span>

              <p className="max-w-[750px]">For every project I may or may not have all the needed tools/skills to do it
                but my greatest asset to complete a project is my desire and ability to learn
                what is needed to achieve the end result.
              </p>
            </span>

            <h3 className="lightHeader mb-2 mx-auto lg:mx-0">Highly practiced Skills</h3>
            <div className="w-full text-[calc(1rem+0.25vw)]">
            <h3 className="mb-2 text-center lg:text-start">Front-End</h3>
              <div className="flex flex-row md2:gap-3 gap-1 flex-wrap w-full
              text-[calc(1rem+0.6vw)] justify-center lg:justify-start
              ">
                {technologies1.map((tech, index)=> (
                  <div key={tech.name+ " "+index} className={`
                  pr-[min(1.5rem,calc(0.5rem+1.5vw))] 
                  pl-[min(1.5rem*0.75,calc(0.5rem+1.5vw)*0.8)]
                  py-[min(0.6rem,0.75vw)] 
                  md2:mt-2 mt-1 rounded-[5px] border border-[#ffffff21]
                  flex flex-row items-center justify-start md2:gap-3 gap-2 ${tech.name}_bg
                  text-[calc(1rem+0.6vw)]`}>
                    <div className="opacity-90 w-[min(30px,calc(0.75rem+1vw))] h-[min(30px,calc(0.75rem+1vw))] 
                    flex relative">
                      <Image src={tech.icon} fill alt={tech.name}
                      style={{objectFit:"contain"}}></Image>
                    </div>
                    <h3 className={`opacity-95 ${tech.name}_text
                    text-[min(0.6em,1rem)]`}>
                      {tech.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full">
            <h3 className="mb-2 text-center lg:text-start">Back-End</h3>
              <div className="flex flex-row md2:gap-3 gap-1 flex-wrap w-full justify-center lg:justify-start
              text-[calc(1rem+0.6vw)]">
                {technologies2.map((tech, index)=> (
                  <div key={tech.name+ " "+index} className={`
                  pr-[min(1.5rem,calc(0.5rem+1.5vw))] 
                  pl-[min(1.5rem*0.75,calc(0.5rem+1.5vw)*0.8)]
                  py-[min(0.6rem,0.75vw)] 
                  md2:mt-2 mt-1 rounded-[5px] border border-[#ffffff21]
                  flex flex-row items-center justify-start md2:gap-3 gap-2 ${tech.name}_bg
                  text-[calc(1rem+0.6vw)]`}>
                    <div className="opacity-90 w-[min(30px,calc(0.75rem+1vw))] h-[min(30px,calc(0.75rem+1vw))] 
                    flex relative">
                      <Image src={tech.icon} fill alt={tech.name}
                      style={{objectFit:"contain"}}></Image>
                    </div>
                    <h3 className={`opacity-95 ${tech.name}_text
                    text-[min(0.6em,1rem)]`}>
                      {tech.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>


            <h3 className="lightHeader mt-[1rem] mx-auto lg:mx-0">Lightly practiced Skills</h3>
            <div className="w-full">
              <div className="flex flex-row md2:gap-3 gap-1 flex-wrap w-full justify-center lg:justify-start
              text-[calc(1rem+0.6vw)]">
                {technologies3.map((tech, index)=> (
                  <div key={tech.name+ " "+index} className={`
                  pr-[min(1.5rem,calc(0.5rem+1.5vw))] 
                  pl-[min(1.5rem*0.75,calc(0.5rem+1.5vw)*0.8)]
                  py-[min(0.6rem,0.75vw)] 
                  md2:mt-2 mt-1 rounded-[5px] border border-[#ffffff21]
                  flex flex-row items-center justify-start md2:gap-3 gap-2 ${tech.name}_bg
                  text-[calc(1rem+0.6vw)]`}>
                    <div className="opacity-90 w-[min(30px,calc(0.75rem+1vw))] h-[min(30px,calc(0.75rem+1vw))] 
                    flex relative">
                      <Image src={tech.icon} fill alt={tech.name}
                      style={{objectFit:"contain"}}></Image>
                    </div>
                    <h3 className={`opacity-95 ${tech.name}_text
                    text-[min(0.6em,1rem)]`}>
                      {tech.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

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