import React from "react"
import {CharCanvas} from "../myModels/CharCanvas"

import {motion} from "framer-motion";


import Link from "next/link";
import FadeUp from "../Animations/FadeUp";
import SingleWordUp from "../Animations/SingleWordUp";
import CaretDown2 from "@/public/icons/caret-down2";

import { useContext,useRef,useEffect } from "react";
import { linkContext } from "../context";
import { useInView } from "framer-motion";

const Hero = () => {

  
  const container = useRef(null);
  const isInView = useInView(container);

  const active = useContext(linkContext).activeLink;
  const setActive = useContext(linkContext).updateLink;

    useEffect(()=> {
        setActive("about")
        // console.log(active);
    }, [isInView])

    useEffect(()=>{
        document.getElementById("home-comp")?.addEventListener("mouseover focus", ()=> {
          setActive("about")
          // console.log(active);

        })
    },[]);


  return (
        <div className=" w-full h-[92vh] 
        pt-[8rem] flex px-4 flex-col gap-12 lg:flex-row lg:items-center lg:justify-between max-w-[1600px] mx-auto
        relative"
      id="home-comp">    

        <span className="w-full h-[1px] bg-transparent absolute top-0" ref={container}></span>

        {/* Hero text */}
        <FadeUp>
        <div
        className="flex flex-col order-2 lg:order-1 items-center text-center lg:items-start lg:text-start lg:ml-[4rem]
        "
        >
          
          <span className="lightHeader">
            {/* Welcome to my page,
            <span className="pl-[0.5rem]"> my name is</span>  */}
          </span> 
          
          <span>
            {/* <span className="BoldHeader mr-1 uppercase font-light opacity-60">Hi, i'm</span> */}
            <span className="gradientBoldHeader uppercase" >
              Sheriff Koder
            </span>
          
          </span>
          
          <span className="lightHeader font-thin">A full-stack
            <span className="font-semibold uppercase"> Web developer</span>
          </span>
          

          <span className="lightHeader mt-2 font-extralight">
            I design and build beautiful and interactive websites<br/>
            with ReactJS, NodeJS, ThreeJS and more...  
          </span>

           <span className="mt-6 flex flex-row gap-4 items-center">

                <Link href="/" className="lg:px-4 px-3 py-1
                 gradientRoundButton focus:opacity-95 hover:opacity-95
                lg:text-base text-sm">
                    contact
                </Link>

                <span 
                className="px-4 py-1 lg:text-base text-sm font-base gradientGreyButton focus:opacity-95 hover:opacity-95">
                    <Link href="/about" className="gradient_text_1 w-full h-full">
                    check out all info about me <span className="hidden 2xl:contents">(background, education, career...)</span>

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

        {/* <div className="">
            <a href="#tech">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2">
                <motion.dev
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="w-3 h-3 rounded-full bg-white mb-1"
                />

              </div>
            </a>
        </div> */}
        {isInView && (

          <div className="absolute bottom-0 w-[99%] flex justify-center items-center mb-8"
          >
            {/* <div className="border-2 rounded-full w-10 h-10 mb-8"> */}
              <a href="#tech-comp" className="border-2 border-white rounded-full w-8 h-8  z-[1]
              flex items-center justify-center opacity-50">
                <CaretDown2 size={40} color="#ffff"/>
              </a>

            {/* </div> */}
          </div>
        )}

        {/* <div className="absolute bottom-0 left-[2rem]
        rounded-full bg-[#ffffff0c] mb-8 px-4 w-[300px] overflow-hidden whitespace-nowrap"
          >
              <span className=" font-extralight gradient_text_1 w-[30%] mr-2">
                status: 
              </span>
              <span className="overflow-hidden w-[70%] gradient_text_1 font-extralight">
                <span className="status_animation">fixing and deploying practice projects</span>
              </span>
          </div> */}



      </div>

  )
}

export default Hero