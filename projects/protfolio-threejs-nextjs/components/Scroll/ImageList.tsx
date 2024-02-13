"use client"
import React from "react"
import Image from "next/image"
import { useLenis } from "@studio-freight/react-lenis";

import Parallax from "./Parallax"

const ImageList = () => {

    //link jump
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
        // console.log(scroll);
      });
    
    
  return (
    <div className="flex flex-col gap-1">

        <button className="text-white px-3 py-1 font-semibold bg-slate-700"
        onClick={()=>{lenis.scrollTo("#last-image", {lerp: 0.1})}}>
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