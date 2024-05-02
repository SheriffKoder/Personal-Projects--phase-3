

"use client"
import React from 'react'
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";  //needed for the exist option in transition effect to work
import { usePathname } from "next/navigation";


//import into any page, can give a key and wrap inside an <AnimationPresence> there to activate the exit option





//use as variants = {variants}, initial = {full} etc..
const variants = {
    full: { x:"100%", width: "100%"},
    zero: {x: "0%", width: "0%"},
}


const TransitionEffect = () => {


  return (
    <>
    {/* //right full right 100%, screen= viewport,  */}
    {/* //initial x 100%, on right side */}



<motion.div 
    className="fixed top-0 bottom-0 right-full w-screen h-screen z-[100] bg-[#163ce5]"
    initial={{x:"100%", width: "100%"}}    
    animate={{x:"0%", width: "0%"}}
    transition={{delay: 0.1, duration: 1, ease: "easeOut"}}
    exit={{x:["0%", "100%"], width:["0%", "100%"]}}
    />





    <motion.div 
    className="fixed top-0 bottom-0 right-full w-screen h-screen z-[99] bg-[#7f93ec]"
    initial={{x:"100%", width: "100%"}}    
    animate={{x:"0%", width: "0%"}}
    transition={{delay: 0.15, duration: 0.8, ease: "easeOut"}}

    />

    <motion.div
    className="fixed top-0 bottom-0 right-full w-screen h-screen z-[98] bg-[#7e8190]"
    initial={{x:"100%", width: "100%"}}    
    animate={{x:"0%", width: "0%"}}
    transition={{delay: 0.2, duration: 0.8, ease: "easeOut"}}

    />

    </>
)
}

export default TransitionEffect