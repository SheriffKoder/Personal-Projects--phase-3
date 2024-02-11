"use client";

import React, {useEffect, useRef, useState} from "react"
import Image from "next/image";

// import Cube from '@/components/earth';
import dynamic from 'next/dynamic';
import Neon from "./Neon";





const page = () => {

  const myColor = "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))";
  const myImage = "url('/assets/brickwall.jpg')";
  const blendMode = "darken"
  return (

    // relative on large screens then relative on inner div 2 on smaller screens
    <div className="
    w-[100vw] h-[100vh] flex items-center justify-center 
    ">


      {/* at w-1313px make row */}
      <div className="border border-white-100 h-[100%] w-[100%]
      flex flex-col 2xl:flex-row 2xl:relative"> 



        {/* div1 */}
        <div className="border border-white-100 flex-1 2xl:w-[60%] pl-4 pt-4 2xl:pt-[100px] 2xl:pl-10 z-[1]">
            <h1 className="text-[3rem]">
              Welcome
            </h1>
            <p className="text-[2rem]"> 
              To my profile
            </p>
        </div>


        {/* div2 */}
        <div className="border border-white-100 2xl:w-[40%] h-[30%] 2xl:h-[70%] my-auto flex items-center justify-center relative overflow-hidden">

        
          <div className="
          computerModel_Container relative flex items-center justify-center w-full h-full
          "
          style={{backgroundImage: `${myImage}, ${myColor}`, backgroundBlendMode: blendMode}}
          >

            {/* <Computer orbitControl={orbitControl}/> */}
            <Neon/>

          </div>

        </div>

      </div>      
    </div>
  )
}

export default page