import React, { useState } from "react"


import Image from "next/image";
import Link from "next/link";

const page = () => {

    const my3DComponents = [
        {
            name: "Smoke cursor/background",
            img: "/images/cstComponents/smoke.png",
            desc: "Animations made with WebGL. Adds a nice touch to websites backgrounds especially with blur",
            link: "portfolio/cstThree/smoke"
        }
    ];



  return (
        
        <main className="h-full w-full flex flex-row flex-wrap">
            
            <div className="w-[90%] mx-auto
            flex flex-col items-center justify-center
            ">

                <div className="w-full my-[3rem] text-4xl  ">
                    <h1 className="font-semibold">
                        3D Models
                    </h1>
                </div>
                {my3DComponents.map((component) => (
                    <div className="flex flex-row flex-wrap w-full px-8">
                        <div>
                            <div className="rounded-[17px] border ProjectCard_bg
                            flex flex-row p-4 gap-1 fadeIn_animation opacity-0
                            h-[200px] w-[200px] md2:gap-[2rem]
                            items-center justify-center relative"
                            >
                                {/* {component.name} */}
                                <Image src={component.img} fill alt={component.name}
                                className="rounded-[17px] z-[0]"></Image>
                                <div className="absolute top-0 left-0 w-full h-full z-[1] p-1">
                                    <Link href={component.link} className="w-full h-full bg-[#0006]
                                rounded-[15px] hover:opacity-100 opacity-0 transition-all
                                flex items-center justify-center text-center p-4">
                                    <p className="text-sm">{component.desc}</p>
                                    </Link>
                                </div>
                            </div>
                            <h2 className="text-center mt-2 text-xs font-semibold px-2">{component.name}</h2>
                        </div>
                    </div>
                ))}
            
            
            </div>

            {/* <div className="text-center w-full fixed mb-4 bottom-0">
                <Link href="/portfolio" className="mx-auto  border rounded-full px-4 text-sm
                opacity-80 hover:opacity-100 transition-all">
                    Back
                </Link>
            </div> */}
        </main>

     
  )
}

export default page