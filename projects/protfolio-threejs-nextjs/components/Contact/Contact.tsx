import React from "react"

//1.2
import { motion } from "framer-motion";
import {styles} from "../../styles/styles";
import EarthCanvas from "./EarthCanvas";
import { slideIn } from "@/utils/motion";
import StarsCanvas from "./StarsCanvas";
import Cube from "../myModels/index-cube-1";
import Cube2 from "../myModels/index-earth-2";
// import dynamic from "next/dynamic";
// const EarthCanvas = dynamic(()=> import("../../components/Home/EarthCanvas"), {
//     ssr: false,
//     loading: () => <p>Loading...</p>
//     }
// );
import TransitionEffect from "@/components/Scroll/TransitionEffect";


//bg-[#4a19867a]
import Link from "next/link";

const Contact = () => {
  return (

    <div className="flex flex-col gap-10 overflow-hidden
    w-full h-[102vh] relative">
          <TransitionEffect/>

       {/* text div */}
       <div className="absolute inset-0 top-[120px]
       pt-[30vh] pl-10 z-[80]">
           <h1 className="text-[3rem]">
               Welcome to my Profile
           </h1>

           <p className="text-[1.1rem]">
               This is the contact page
           </p>
           <Link 
            href="/slider"
            // onClick={()=>navigate(`/checkup/edit/${check._id}=0`)}
            className="ml-auto rounded-full bg-[#ffffff2a] px-1 py-0
            w-[4.5rem] text-center text-xs hover:scale-105 focus:scale-105"
            // onClick={()=> {setPlay("false")}}>
            >
            Link
                                    
            </Link>
       </div>

       <div className="flex-1 earth-model">
           {/* <EarthCanvas/> */}
           {/* <Cube /> */}
           {/* <Cube2/> */}

       </div>

       {/* adding stars here too would make it denser in the hero area */}
       {/* <StarsCanvas /> */}

    </div>
  )
}

export default Contact