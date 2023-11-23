// import React from 'react'

import Link from "next/link";
import Image from "next/image";


const Hero = () => {
  return (
    
    <div className="main__hero flex flex-col justify-center items-center 
    md:items-start md:px-[5rem] before:opacity-[0.3] dark:before:opacity-[0.05]">

        <div className="main__hero__text-container flex flex-col justify-center items-center md:items-start
        p-7 ">
            <h2 className="text-[min(calc(1rem+2vw),(2.5rem))] text-[#464646] font-semibold uppercase">
                Welcome to
            </h2>

            <h1 className="text-[min(calc(2rem+2vw),(4.5rem))] text-white font-semibold uppercase">
                Richard's <span className="text-[min(calc(2rem+2vw),(4.5rem))] font-light text-center">Real Estate</span>
            </h1>

            <h2 className="text-[min(calc(1rem+0.5vw),(1rem))] text-[#464646] font-normal">
                Your preferred real estate hub
            </h2>

            <Link href="/properties" className=" text-[min(calc(1.0rem+0.2vw),(1.2rem))]
            mt-3 bg-theme-text-brighter dark:bg-theme-text-dark rounded-full py-1.5 px-3 w-fit 
            text-white opacity-80 hover:opacity-90">
                    View all properties
            </Link>

        

        </div>




    </div>
  )
}

export default Hero;