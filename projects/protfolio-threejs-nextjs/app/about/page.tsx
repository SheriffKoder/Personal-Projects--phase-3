"use client"
import Career from '@/components/About/Career'
import Education from '@/components/About/Education'
import Introduction from '@/components/About/Introduction'
import Learning from '@/components/About/Learning'

import TransitionEffect from '@/components/Animations/TransitionEffect'

import {motion, useInView} from "framer-motion";

import React, {useEffect, useRef, useState} from "react"
import { SectionWrapper } from "@/hoc";


const page = () => {



  return (

    <div className="w-full min-h-screen h-auto ambientBackground pb-[10rem]">
        <TransitionEffect/>
        <div className="lg:pt-[8rem] pt-[2rem] flex flex-col gap-14 px-4 lg:px-[7rem]
        max-w-[1600px] mx-auto">
            
            <Introduction/>
            <ul className="flex flex-col gap-4 lg:gap-14 min-h-[360px]">
              <motion.li
              initial={{y:200, opacity: 0}}
              whileInView={{y:0, opacity:1, transition: {duration: 0.5, ease: "easeInOut"} }}
              viewport={{once: true}}>
                <Education/>
              </motion.li>
            
              <motion.li
            initial={{y:200, opacity: 0}}
            whileInView={{y:0, opacity:1, transition: {duration: 0.5, ease: "easeInOut"} }}
              viewport={{once: true}}>
                <Career/>
              </motion.li>

              <motion.li
               initial={{y:200, opacity: 0}}
               whileInView={{y:0, opacity:1, transition: {duration: 0.5, ease: "easeInOut"} }}
              viewport={{once: true}}>
                <Learning/>
              </motion.li>


            </ul>
            

        </div>
    </div>
  )
}

export default SectionWrapper(page, "about");