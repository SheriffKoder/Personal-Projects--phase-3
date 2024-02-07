import React from "react"
import Image from "next/image";

// import Cube from '@/components/earth';
import dynamic from 'next/dynamic';

//lazy loading because for high textures
const Computer = dynamic(()=> import("@/components/earth/model-three"), {
  ssr:false,
  loading: () => <p className="absolute top-[50%] right-[50%]">Loading...</p>
})
const Phone = dynamic(()=> import("@/components/earth/model-four"), {
  ssr:false,
  loading: () => <p className="absolute top-[50%] right-[50%]">Loading...</p>
})

const page = () => {
  return (

    // relative on large screens then relative on inner div 2 on smaller screens
    <div className="
    w-[100vw] h-[100vh] flex items-center justify-center 
    ">



      <div className="border border-white-100 h-[80%] w-[100%]
      flex flex-col lg:flex-row lg:relative">

        <Image src="/assets/brickwall.jpg" alt="Furniture" width={1000} height={1200}
          className="hero_brush_mask hidden lg:block">
        </Image>


        {/* div1 */}
        <div className="border border-white-100 flex-1 pl-4 pt-4">
            <h1 className="text-[3rem]">
              My Projects
            </h1>
            <p className="text-[2rem]"> 
              Checkout my projects
            </p>
        </div>


        {/* div2 */}
        <div className="border border-white-100 flex-1 flex items-center justify-center relative overflow-hidden">

          <Image src="/assets/brickwall.jpg" alt="Furniture" width={700} height={900}
            className="hero_brush_mask lg:hidden">
          </Image>

          <div className="computerModel_Container relative flex items-center justify-center w-full h-full">
            <Computer/>
            <Phone />
          </div>

        </div>

      </div>      
    </div>
  )
}

export default page