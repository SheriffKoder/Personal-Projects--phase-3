import React, { Suspense, lazy, useEffect } from "react"
import { useState } from "react";

// import CarInfo from './HomeComponents/CarInfo'
// import CheckCard from './HomeComponents/checkCard'
import Loading from "./HomeComponents/loading";

const CheckCard = lazy(() => import('./HomeComponents/checkCard'));
const CarInfo = lazy(() => import('./HomeComponents/CarInfo'));







const Home = () => {




  return (
    <>
    <div className="px-3">

        {/* Car info title, edit button */}
        <div className="w-full flex flex-row mb-[-1rem] justify-center items-center gap-2">

            <h1 className="font-semibold text-center mx-auto relative">
                Your Car's Info
                <button className="rounded-full border border-[#ffffff2a] 
                px-3 text-xs h-[1rem] absolute right-[-50%] top-[15%]
                hover:bg-[#ffffff2a] focus:bg-[#ffffff2a]">
                    edit
                </button>
            </h1>
            


        </div>
        <Suspense fallback={<Loading/>}>
            <CarInfo brand="Mazda" model="mazda 6" lastCheck="01/01/2024" nextCheck="01/02/2024"/>
        </Suspense>


        {/* Car check-ups title, add check-up button */}
        <div className="w-full flex flex-row justify-center items-center 
        gap-2 relative mb-[-0.5rem]">

            <h1 className="font-semibold text-center mx-auto">Your Check-ups</h1>
            
            <button className="rounded-full border-2 border-[#ffffff2a] px-4 py-[0.125rem]
                text-xs absolute right-0 font-semibold
                hover:bg-[#ffffff2a] focus:bg-[#ffffff2a]">
                    add new
            </button> 

        </div>
        <Suspense fallback={<Loading/>}>
            <CheckCard/>
        </Suspense>


    </div>
    </>
    
  )
}

export default Home;