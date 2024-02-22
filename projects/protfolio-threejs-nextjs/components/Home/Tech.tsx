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
    document.getElementById("tech")?.addEventListener("mouseover", ()=> {
      setActive("tech")
      // console.log(active);

    })
  },[]);
  

  return (
       <div className="w-full max-w-[1600px] h-[90vh] mx-auto
       flex flex-col items-center justify-center relative" id="tech-comp"
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
          <div className="h-[50%] lg:h-full w-full px-4" id="tech" ref={laptopRef} >
            {/* when the ref is in view, the isInView will be true and trigger the laptop animation */}


              <span className="absolute text-4xl font-semibold centered_centered2">
                Technologies Used
              </span>

              <LaptopCanvas openLid={isInView} />

              <motion.div className="bg-[#020812e6] 
              w-full h-full max-w-[1400px]
              centered_centered rounded-[17px]
              py-10 flex flex-col gap-[1rem] items-center justify-center
              "
              // variants={opacity} initial="initial" animate="open"
              style={{
                // transform: !isInView ? "translateY(200px) translateX(-50%)" : "translateY(0px) translateX(-50%)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 8.5s",
                // transitionDelay: "2.5s",
                //time-s, delay-s
              }}>

                <div>
                <h3 className="text-center lightHeader mb-2">Primary Skills</h3>
                  <div className="flex flex-row gap-3 flex-wrap w-full justify-center">
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
                  <div className="flex flex-row gap-3 flex-wrap w-full justify-center">
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

                  
                <div className="mt-[1rem]">
                  <h3 className="text-center lightHeader mb-2">Secondary Skills</h3>
                  <div className="flex flex-row gap-3 flex-wrap w-full justify-center">
                    {technologies3.map((tech, index)=> (
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

              </motion.div>

                {/* animate={isInView ? "open" : "closed"} */}


                {/* tilt card */}
                {/* <Tilt className="w-[250px]">
                    <div 
                    // variants={fadeIn("right", "spring", 0.5, 0.75)}
                    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">

                      <div
                      className="bg-red-800 rounded-[20px] py-5 px-12 min-h-[280px]
                      flex justify-evenly items-center flex-col"
                      options={{
                        max:0,
                        scale: 0,
                        speed: 450
                      }}
                      >
                          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                          <h3>hi</h3>
                      </div>

                    </div>
                </Tilt> */}

           

          </div>

            
          

          <div className="w-[100px] h-[1px] border border-[#f000] relative"
          ref={container2} />

       


      </div>

  )
}

// export default Tech;

//wrap the Tech component in the SectionWrapper to use it in it
export default SectionWrapper(Tech, "techx");