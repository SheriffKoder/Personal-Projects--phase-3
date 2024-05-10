// import React from 'react'

// this is the hero image component with the "speak to an agent button"

import Link from "next/link";
import Image from "next/image";


const Hero = () => {
  return (

    <div className="relative flex flex-col items-center">
        <div className="absolute w-full h-full">

        <div className="absolute w-full h-full rounded-b-[10px] top-0 left-0 z-[-1] dark:opacity-[0.03] opacity-[0.07]"
            style={{backgroundImage: "url('/images/deco.png')", backgroundSize: "", backgroundPosition: "-10px -40px" }}>

            </div>

            <div className="glass-container-background-1 hero-brush-mask w-full h-full mt-[-10px] dark:brightness-50">

            </div>

            <div className="absolute top-0 left-0 w-full h-full z-[2] opacity-[0.2]">
                <Image src="/images/furniture.avif" alt="Furniture" fill={true} priority
                className="mt-[-10px] hero-brush-mask w-full">
                </Image>
            </div>
           
        </div>
        
        <div className="main__hero flex flex-col justify-center
        before:opacity-[0.3] dark:before:opacity-[0.05] max-w-[1550px] max-h-[1000px]
        z-[2]">
            <header className="main__hero__text-container
            flex flex-col justify-center items-center lg:items-start
            py-7 lg:ml-[5%]"> 

                <h1 className="text-[1.5rem] md:text-[min(calc(1rem+2vw),(2.5rem))] dark:text-[#7d7c7c] text-[#464646] font-semibold uppercase">
                    Welcome to
                </h1>

                <h1 className="text_shadow text-[1.8rem] md:text-[min(calc(2rem+2vw),(4.5rem))] text-white font-semibold uppercase">
                    Richard's <span className="text-[1.8rem] md:text-[min(calc(2rem+2vw),(4.5rem))] font-light text-center">Real Estate</span>
                </h1>

                <h1 className="text-[1rem] md:text-[min(calc(1rem+0.5vw),(1rem))] dark:text-[#7d7c7c] text-[#464646] font-normal">
                    Your preferred real estate hub
                </h1>

                <Link href="/about#contact" className=" text-[min(calc(1.0rem+0.2vw),(1.2rem))]
                mt-3 bg-[#ab2546] dark:bg-[#ab2546] text-white 
                rounded-full py-1.5 pr-3 pl-4 w-fit flex flex-row items-center justify-center
                opacity-90 hover:opacity-100">
                        Speak to an Agent 
                        <span className="bg-[url('/icons/arrow-right.svg')] ml-2 h-4 w-4 bg-no-repeat bg-contain inline-block"></span>
                </Link>
            </header>
        </div>

    </div>

  )
}

export default Hero;