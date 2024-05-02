"use client";

import React, {useEffect, useRef, useState} from "react"
import Image from "next/image";

// import Cube from '@/components/earth';
import dynamic from 'next/dynamic';

//lazy loading because for high textures
const Computer = dynamic(()=> import("@/components/myModels/model-three"), {
  ssr:false,
  loading: () => <p className="absolute top-[50%] right-[50%]">Loading...</p>
})
// const Phone = dynamic(()=> import("@/components/myModels/model-four"), {
//   ssr:false,
//   loading: () => <p className="absolute top-[50%] right-[50%]">Loading...</p>
// })

// const PC = dynamic(()=> import("@/components/myModels/model-five"), {
//   ssr:false,
//   loading: () => <p className="absolute top-[50%] right-[50%]">Loading...</p>
// })

import { orbitType } from "@/constants/constants";





const page = () => {

  const myColor = "linear-gradient(rgba(13, 0, 255, 0.5),rgba(0, 122, 252, 0.5))";
  const myImage = "url('/assets/brickwall.jpg')";
  const blendMode = "multiply"

  // const [Orbit,setOrbit] = useState<orbitType>({
  //   rotation: {x:0, y:-0.5, z:0},
  //   scale: 1,
  //   position: {x: 0, y: 0, z:0},
  // });

  // const rotateModels = () => {
  //   console.log(Orbit);
  //   setOrbit({
  //     rotation: {x:0, y:0, z:0},
  //     scale: 1.5,
  //     position: {x: -1.2, y: 0, z:0},
  //   });
  //   console.log(Orbit);

  // }

  // useEffect(()=> {
  //   console.log(Orbit);
  // },[Orbit])

    const [orbitControl,setOrbitControl] = useState("default");
    const rotateModels = () => {
      setOrbitControl("view");
    
    }

    useEffect(()=> {
      setOrbitControl("default");
    },[]);

  return (

    // relative on large screens then relative on inner div 2 on smaller screens
    <div className="
    w-[100vw] h-[100vh] flex items-center justify-center 
    ">


      {/* at w-1313px make row */}
      <div className="border border-white-100 h-[100%] w-[100%]
      flex flex-col 2xl:flex-row 2xl:relative"> 

        {/* <Image src="/assets/brickwall.jpg" alt="Furniture" width={1200} height={1200}
          className="hero_brush_mask hidden lg:block">
        </Image> */}

        <div style={{backgroundImage: `${myImage}, ${myColor}`, backgroundBlendMode: blendMode}}
            className="hero_brush_mask hidden 2xl:block">
          </div>


        {/* div1 */}
        <div className="border border-white-100 flex-1 2xl:w-[60%] pl-4 pt-4 2xl:pt-[100px] 2xl:pl-10 z-[1]">
            <h1 className="text-[3rem]">
              My Projects
            </h1>
            <p className="text-[2rem]"> 
              Checkout my projects
            </p>
            <button className="py-1 px-2 bg-purple-500 text-white rounded-md"
            onClick={()=>{setOrbitControl("view")}}>
              view
            </button>
            <button className="py-1 px-2 bg-purple-500 text-white rounded-md"
            onClick={()=>{setOrbitControl("back");}}>
              exit
            </button>
        </div>


        {/* div2 */}
        <div className="border border-white-100 2xl:w-[40%] h-[30%] 2xl:h-[70%] my-auto flex items-center justify-center relative overflow-hidden">

          {/* <Image src="/assets/brickwall.jpg" alt="Furniture" width={700} height={900}
            className="hero_brush_mask lg:hidden">
          </Image> */}

          <div style={{backgroundImage: `${myImage}, ${myColor}`, backgroundBlendMode: blendMode}}
            className="hero_brush_mask 2xl:hidden">
          </div>

          <div className="computerModel_Container relative flex items-center justify-center w-full h-full">
            {/* <PC/> */}
            <Computer orbitControl={orbitControl}/>

          </div>

        </div>

      </div>      
    </div>
  )
}

export default page