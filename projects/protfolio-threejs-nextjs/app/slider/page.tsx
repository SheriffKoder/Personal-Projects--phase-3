"use client"

import React, { useEffect } from "react"
import Page from "../projects/page"
import Home from "../contact/page"
import ImageList from "@/components/Scroll/ImageList"


const page = () => {


 

  return (
    <div className="p-32 flex flex-col w-full items-center justify-center">
       <ImageList/>
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