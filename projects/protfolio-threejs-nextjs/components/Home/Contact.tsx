import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image";
const Contact = () => {

  const myImage = "url('/images/icons/click.png')";
  const [image, setImage] = useState("/icons/click-n.png")

  
  return (
    <div className="max-w-[1600px] flex flex-col items-center justify-center gap-4 py-[4rem]
    md2:flex-row text-[5vw] md:text-2xl lg:text-3xl"
    onMouseEnter={()=>{setImage("/icons/click-c.png")}}
    onMouseLeave={()=>{setImage("/icons/click-n.png")}}>
        <h1 className="text-[1em]">What about we have a talk ? </h1>
        <div>
            <Link className="py-[0.1rem] px-4
            text-[0.75em]
            bg-gradient-to-r from-[#387ca4] to-[#39d0b7b4]
            rounded-full font-medium text-[#ffffff]
            focus:opacity-90 hover:opacity-90
            relative"
            href="/contact">
                contact me
                <Image className="
                absolute h-[min(70px,calc(1rem+5vw))] w-[min(70px,calc(1rem+5vw))] 
                top-0 right-0"
                src={image} height={40} width={40} alt={""}
                style={{transform: "translate(60%, -5%)"}}
                >

                </Image>
            </Link>
            
        </div>
    </div>
  )
}

export default Contact