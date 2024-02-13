"use client"
import React from "react"
import Image from "next/image"
import { useLenis } from "@studio-freight/react-lenis";

import Parallax from "./Parallax"
import Link from "next/link";
import TransitionEffect from "./TransitionEffect";
import { useState } from "react"
import { usePathname } from "next/navigation"


const ImageList = () => {

    //link jump
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
        // console.log(scroll);
      });
    

      const path = usePathname().split("/")[1];

    
  return (
    <div className="flex flex-col gap-1">
        
        <TransitionEffect/>
        <Link 
            href="/contact"
            // onClick={()=>navigate(`/checkup/edit/${check._id}=0`)}
            className="ml-auto rounded-full bg-[#ffffff2a] px-1 py-0
            w-[4.5rem] text-center text-xs hover:scale-105 focus:scale-105"
            // onClick={()=> {setPlay1("false")}}>
            >

                Link
                                    
        </Link>

        <button className="text-white px-3 py-1 font-semibold bg-slate-700"
        onClick={()=>{lenis.scrollTo("#last-image", {delay: 0.5})}}>
            Move
        </button>

        <Image src={"/assets/brickwall.jpg"} alt="image" width={300} height={200}/>
        <Image src={"/assets/brickwall.jpg"} alt="image" width={300} height={200}/>
        {/* <Parallax speed={-1} className="self-start overflow-hidden"> */}
        <Image src={"/assets/brickwall.jpg"} alt="image" width={300} height={200} />
        {/* </Parallax> */}
        <Image src={"/assets/brickwall.jpg"} alt="image" width={300} height={200}
                id="last-image"/>

        {/* <Parallax speed={-1} className="self-start overflow-hidden"> */}
        <Image src={"/assets/brickwall.jpg"} alt="image" width={300} height={200} />
        {/* </Parallax> */}

        <Image src={"/assets/brickwall.jpg"} alt="image" width={300} height={200}/>
        <Image src={"/assets/brickwall.jpg"} alt="image" width={300} height={200}/>
        <Image src={"/assets/brickwall.jpg"} alt="image" width={300} height={200}/>
        <Image src={"/assets/brickwall.jpg"} alt="image" width={300} height={200}/>

    </div>
  )
}

export default ImageList