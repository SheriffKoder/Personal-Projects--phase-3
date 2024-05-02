"use client"

import React, { useEffect, useState } from "react"
import Page from "../projects/page"
import Home from "../contact/page"
import ImageList from "@/components/Scroll/ImageList"

import Link from "next/link"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

const page = () => {
   
  //for the exit animation of the transition effect
  const path = usePathname().split("/")[1];
  const [play1, setPlay1] = useState("false");
 

  return (
    <div className="p-32 flex flex-col w-full items-center justify-center">
     <AnimatePresence mode="wait">
   

      {/* <ImageList key={play1} setPlay1={setPlay1} play1={play1}/> */}
      <ImageList/>

      </AnimatePresence>
       

    </div>
  )
}

export default page



// <div className="w-full min-h-[100vh] bg-[#242424] data-scroll-section">
// <h1 className="text-xl color-white mt-[30vh] data-scroll">
//     Hello and welcome
// </h1>

// </div>

// <div className="w-full min-h-[100vh] bg-[#515151] data-scroll-section">
// <h1 className="text-xl color-white mt-[30vh] data-scroll">
//     Hello and welcome
// </h1>

// </div>