import React from "react"

//1.2
import { motion } from "framer-motion";
import {styles} from "../../styles/styles";
import EarthCanvas from "./EarthCanvas";
import { slideIn } from "@/utils/motion";

// import dynamic from "next/dynamic";
// const EarthCanvas = dynamic(()=> import("../../components/Home/EarthCanvas"), {
//     ssr: false,
//     loading: () => <p>Loading...</p>
//     }
// );


//bg-[#4a19867a]


const Hero = () => {
  return (

    <div className="flex flex-col gap-10 overflow-hidden
     w-full h-[90vh] relative">

        {/* text div */}
        <div className="absolute inset-0 top-[120px]
        pt-[30vh] pl-10">
            <h1 className="text-[3rem]">
                Welcome to my Profile
            </h1>

            <p className="text-[1.1rem]">
                This is the main page
            </p>
        </div>

        <div className="flex-1 earth-model z-[1]">
            <EarthCanvas/>

        </div>

    </div>
  )
}

export default Hero