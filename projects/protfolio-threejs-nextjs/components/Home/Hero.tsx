import React from "react"
import {CharCanvas} from "../myModels/CharCanvas"

const Hero = () => {
  return (
        <div className="bg-[#020811] w-full h-screen 
      flex flex-row items-center justify-between
      px-8">    


        {/* Hero text */}
        <div className="flex flex-col uppercase flex-1">
          <span className="text-2xl font-extralight">
            <span className="">Welcome</span> to my page, my name is
          </span> 
          
          <span className="text-5xl font-bold gradient_text_1">Sheriff Koder</span>
          
          <span className="text-2xl font-extralight">i am a 
            <span className="font-bold gradient_text_hover_1"> Web developer</span>
          </span>
        </div>


        <div className="flex-1 items-center justify-center flex h-full">
            {/* Hero */}
            <CharCanvas/>
        </div>



      </div>

  )
}

export default Hero