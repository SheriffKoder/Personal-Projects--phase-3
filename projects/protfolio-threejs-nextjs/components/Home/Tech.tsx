"use client"

import React, {useRef} from "react"
import {motion, useInView} from "framer-motion";
// import LaptopCanvas from "./Tech/laptop-canvas";
import { SectionWrapper } from "@/hoc";
import Image from "next/image";

import { technologies1, technologies2, technologies3 } from "@/constants/constants";

//lazy loading because for high textures
import dynamic from 'next/dynamic';
const LaptopCanvas = dynamic(()=> import("./Tech/laptop-canvas"), {
  ssr:false,
  loading: () => 
  <div className="w-full h-full flex items-center justify-center"><span className="loadingSpinner mt-[25vmax]"></span></div>
})


const Tech = () => {

  const containerTech = useRef(null);
  const laptopRef = useRef(null);

  const isInView = useInView(containerTech, { once: true });


  

  return (
       <div className=" w-[100vw] max-w-[1600px] mx-auto
       flex flex-col items-center justify-start relative
       " id="tech-comp"
       >

          
          <div className="absolute w-full h-[50%] md1:h-full flex flex-row items-end justify-center radialBackgroundHero">
          {/* when the ref is in view, the isInView will be true and trigger the laptop animation */}
          <div className="relative md1:h-[4rem] h-[4rem] w-4" 
          ref={containerTech}
           />
          </div>

          <div className="absolute h-full w-full techGradBackground">

          </div>
            

          {/* <div className="absolute top-[40vmin] w-full flex flex-col items-center"> */}

            {/* the laptop 3d model, pass isInView, when its true (ref is in view),
            the laptop animation starts */}
              <div className="absolute top-[0] w-full h-[70vmin] max-w-[1600px]
              
              ">

                <span className="absolute bottom-[calc(2rem+13vw+5vh)] z-[0]
                text-[calc(1rem+1vw)] w-full text-center font-semibold"
                >
                  Technologies Used
                </span>


                <LaptopCanvas openLid={isInView} />
              </div>
          {/* </div> */}


              
          <motion.div className="bg-[#020812e6] 
          w-full flex flex-col justify-start
          rounded-[17px] z-[1]
          "
          // variants={opacity} initial="initial" animate="open"
          style={{
            // transform: !isInView ? "translateY(200px) translateX(-50%)" : "translateY(0px) translateX(-50%)",
            opacity: isInView ? 1 : 0,
            transition: "all 3.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
            // transitionDelay: "2.5s",
            //time-s, delay-s
          }}>

           

            <div className="w-full max-w-[1400px] text-center lg:text-start
            py-10 flex flex-col gap-[1rem] items-start justify-center 
            px-[7vw] lg:mainText_padding_left">
              <span className="mb-8 flex flex-col gap-3 text-[min(1.25rem,calc(0.75rem+0.5vw))]">
                <h4 className="gradientBoldHeader mb-2">About my Skills</h4>
                <span>
                  <p>I am able to give your website an <b className="relative edgeText">edge</b> through thoughtfully designing the front-end according to the latest trends and building it with modern frameworks.</p>
                  <p>Give your website more functionality and user control by having a back-end application connecting the website to a NoSQL database to create/read/update/delete information.</p>
                </span>
                <span>
                  <p>My on-going goal is to get better at building more beautiful, more optimized and more functional websites to make my clients websites standout.</p>
                </span>
                <p className="max-w-[750px]">For every project I may or may not have all the needed tools/skills to do it
                  but my greatest asset to complete a project is my desire and ability to learn
                  what is needed to achieve the end result.
                </p>
              </span>
              <h3 className="lightHeader mb-2 mx-auto lg:mx-0 font-semibold">Skills & Technologies</h3>
              <div className="w-full">
              <h3 className="mb-2 text-center lg:text-start">Front-End</h3>
                <div className="flex flex-row md2:gap-3 gap-1 flex-wrap w-full
                text-[calc(1rem+0.6vw)] justify-center lg:justify-start
                ">
                  {technologies1.map((tech, index)=> (
                    <div className="relative techHover" key={tech.name+ " "+index}>
                      <div className="shadowDiv"></div>
                      <div className={`
                      pr-[min(1.5rem,calc(0.5rem+1.5vw))]
                      pl-[min(1.5rem*0.75,calc(0.5rem+1.5vw)*0.8)]
                      py-[min(0.6rem,0.75vw)]
                      md2:mt-2 mt-1 rounded-[5px] border border-[#ffffff21]
                      flex flex-row items-center justify-start md2:gap-3 gap-2 ${tech.name}_bg
                      text-[calc(1rem+0.6vw)]`}>
                        <div className="opacity-90 w-[min(30px,calc(0.75rem+1vw))] h-[min(30px,calc(0.75rem+1vw))]
                        flex relative">
                          <Image src={tech.icon} fill alt={tech.name}
                          sizes="30px"
                          style={{objectFit:"contain"}}></Image>
                        </div>
                        <h3 className={`opacity-95 ${tech.name}_text
                        text-[min(0.6em,1rem)]`}>
                          {tech.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full">
              <h3 className="mb-2 text-center lg:text-start">Back-End</h3>
                <div className="flex flex-row md2:gap-3 gap-1 flex-wrap w-full justify-center lg:justify-start
                text-[calc(1rem+0.6vw)]">
                  {technologies2.map((tech, index)=> (
                    <div className="relative techHover" key={tech.name+ " "+index}>
                      <div className="shadowDiv"></div>
                      <div  className={`
                      pr-[min(1.5rem,calc(0.5rem+1.5vw))]
                      pl-[min(1.5rem*0.75,calc(0.5rem+1.5vw)*0.8)]
                      py-[min(0.6rem,0.75vw)]
                      md2:mt-2 mt-1 rounded-[5px] border border-[#ffffff21]
                      flex flex-row items-center justify-start md2:gap-3 gap-2 ${tech.name}_bg
                      text-[calc(1rem+0.6vw)]`}>
                        <div className="opacity-90 w-[min(30px,calc(0.75rem+1vw))] h-[min(30px,calc(0.75rem+1vw))]
                        flex relative">
                          <Image src={tech.icon} fill alt={tech.name}
                          sizes="30px"
                          style={{objectFit:"contain"}}></Image>
                        </div>
                        <h3 className={`opacity-95 ${tech.name}_text
                        text-[min(0.6em,1rem)]`}>
                          {tech.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full">
                <h3 className="mb-2 text-center lg:text-start">Other</h3>
                <div className="flex flex-row md2:gap-3 gap-1 flex-wrap w-full justify-center lg:justify-start
                text-[calc(1rem+0.6vw)]">
                  {technologies3.map((tech, index)=> (
                    <div className="relative techHover" key={tech.name+ " "+index}>
                      <div className="shadowDiv"></div>
                      <div className={`
                      relative
                      pr-[min(1.5rem,calc(0.5rem+1.5vw))]
                      pl-[min(1.5rem*0.75,calc(0.5rem+1.5vw)*0.8)]
                      py-[min(0.6rem,0.75vw)]
                      md2:mt-2 mt-1 rounded-[5px] border border-[#ffffff21]
                      flex flex-row items-center justify-start md2:gap-3 gap-2 ${tech.name}_bg
                      text-[calc(1rem+0.6vw)]`}>
                        <div className="opacity-90 w-[min(30px,calc(0.75rem+1vw))] h-[min(30px,calc(0.75rem+1vw))]
                        flex relative">
                          <Image src={tech.icon} fill alt={tech.name}
                          sizes="30px"
                          style={{objectFit:"contain"}}></Image>
                        </div>
                        <h3 className={`opacity-95 ${tech.name}_text
                        text-[min(0.6em,1rem)]`}>
                          {tech.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>



                

           


            
          


       


      </div>

  )
}

// export default Tech;

//wrap the Tech component in the SectionWrapper to use it in it
export default SectionWrapper(Tech, "techx");