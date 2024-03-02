"use client"

import React, {useEffect, useRef, useState} from "react"
import {CharCanvas} from "../myModels/CharCanvas"

import {motion, useInView} from "framer-motion";


import Link from "next/link";
import FadeUp from "../Animations/FadeUp";
import SingleWordUp from "../Animations/SingleWordUp";

import LaptopCanvas from "./Tech/laptop-canvas";

const phrase = "Hello world, this is a new world"
import { slideUp, opacity } from "./Tech/anim";
import { fadeIn, zoomIn } from "@/utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "@/hoc";
import { staggerContainer } from "@/utils/motion";


import { useContext } from "react"
import { linkContext } from "../context";

import { technologies1, technologies2, technologies3 } from "@/constants/constants";
import Image from "next/image";

const Tech = () => {

  const container2 = useRef(null);
  const laptopRef = useRef(null);

  const isInView = useInView(container2, { once: true });
  const isInView2 = useInView(laptopRef);


  const active = useContext(linkContext).activeLink;
  const setActive = useContext(linkContext).updateLink;

    useEffect(()=> {
      // console.log(active);
      setActive("tech")
      // console.log(active);
  }, [isInView]);

  useEffect(()=>{
    document.getElementById("tech-comp")?.addEventListener("mouseover", ()=> {
      setActive("tech")
      // console.log(active);

    })
  },[]);
  

  return (
       <div className="w-full max-w-[1600px] h-[90vh] mx-auto
       flex flex-col items-center justify-center relative" id="tech"
       >

        {/* <p>
          {
            phrase.split(" ").map((word, index) => {
              return <span key={index} className="">
                <motion.span custom={index}
                variants={slideUp} initial="initial" animate={isInView ? "open" : "closed"}>
                  {word}
                </motion.span></span>
            })
          }
          </p>

          <motion.p variants={opacity} initial="initial" animate={isInView ? "open" : "closed"}>
          Hello worldx, this is a new worldx
          </motion.p> */}


          {/* <div className="w-[100px] h-[1px] border border-red-600 relative"/> */}

          {/* id for the link in the hero to scroll to */}
          <div className="h-[50%] lg:h-full w-full px-4" id="tech-comp" ref={laptopRef} >
            {/* when the ref is in view, the isInView will be true and trigger the laptop animation */}


              <span className="absolute text-4xl font-semibold centered_centered2">
                Technologies Used
              </span>

              <LaptopCanvas openLid={isInView} />


              
              <motion.div className="bg-[#020812e6] 
              w-full h-full max-w-[1400px]
              centered_centered rounded-[17px]
              py-10 flex flex-col gap-[1rem] items-start justify-center mainText_padding_left
              "
              // variants={opacity} initial="initial" animate="open"
              style={{
                // transform: !isInView ? "translateY(200px) translateX(-50%)" : "translateY(0px) translateX(-50%)",
                opacity: isInView ? 1 : 0,
                transition: "all 3.5s cubic-bezier(0.17, 0.55, 0.55, 1) 3s",
                // transitionDelay: "2.5s",
                //time-s, delay-s
              }}>

                <span className="mb-8 flex flex-col gap-3">
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

                <h3 className="lightHeader mb-2">Highly practiced Skills</h3>
                <div>
                <h3 className="mb-2">Front-End</h3>
                  <div className="flex flex-row gap-3 flex-wrap w-full justify-start">
                    {technologies1.map((tech, index)=> (
                      <div key={index} className={`px-6 py-2 mt-2 rounded-[5px] border border-[#ffffff21]
                      flex items-center justify-center gap-3 pl-[1rem] ${tech.name}_bg`}>
                        <div className="opacity-90">
                          <Image src={tech.icon} height={30} width={30} alt={tech.name}
                          style={{objectFit:"contain"}}></Image>
                        </div>
                        <h3 className={`opacity-95 ${tech.name}_text`}>{tech.name}</h3>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                <h3 className="mb-2">Back-End</h3>
                  <div className="flex flex-row gap-3 flex-wrap w-full justify-start">
                    {technologies2.map((tech, index)=> (
                      <div key={index} className={`px-6 py-2 mt-2 rounded-[5px] border border-[#ffffff21]
                      flex items-center justify-center gap-3 pl-[1rem] ${tech.name}_bg`}>
                        <div className="opacity-90">
                          <Image src={tech.icon} height={30} width={30} alt={tech.name}
                          style={{objectFit:"contain"}}></Image>
                        </div>
                        <h3 className={`opacity-95 ${tech.name}_text`}>{tech.name}</h3>
                      </div>
                    ))}
                  </div>
                </div>


                <h3 className="lightHeader mt-[1rem]">Lightly practiced Skills</h3>
                <div className="">
                  <div className="flex flex-row gap-3 flex-wrap w-full justify-start">
                    {technologies3.map((tech, index)=> (
                      <div key={index} className={`px-6 py-2 rounded-[5px] border border-[#ffffff21]
                      flex items-center justify-center gap-3 pl-[1rem] ${tech.name}_bg`}>
                        <div className="opacity-90">
                          <Image src={tech.icon} height={30} width={30} alt={tech.name}
                          style={{objectFit:"contain"}}></Image>
                        </div>
                        <h3 className={`opacity-95 ${tech.name}_text`}>{tech.name}</h3>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>

                {/* animate={isInView ? "open" : "closed"} */}


                

           

          </div>

            
          

          <div className="w-[100px] h-[1px] border border-[#f000] relative"
          ref={container2} />

       


      </div>

  )
}

// export default Tech;

//wrap the Tech component in the SectionWrapper to use it in it
export default SectionWrapper(Tech, "techx");