import React, { Suspense, lazy, useEffect } from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import CarInfo from './HomeComponents/CarInfo'
// import CheckCard from './HomeComponents/checkCard'
import Loading from "./HomeComponents/loading";

const CheckCard = lazy(() => import('./HomeComponents/checkCard'));
const CarInfo = lazy(() => import('./HomeComponents/CarInfo'));




type carInfoType = {
    brand: string,
    model: string,
    lastCheck: string,
    nextCheck: string,
    image: string,
    _id: string
  }

  


const Home = () => {


    const navigate = useNavigate();

    const carInfo:carInfoType = {
    brand: "Mazda",
    model: "mazda 6",
    lastCheck: "01/01/2024",
    nextCheck: "30/01/2024",
    image: "/images/car1.png",
    _id: "000",
  }

  return (
    <>
    <div className="px-3 pt-4">

        {/* Car info title, edit button */}
        <div className="w-full flex flex-row justify-center items-center gap-2">

            <h1 className="font-semibold text-center mx-auto relative">
                Your Car's Info
                <button 
                onClick={()=>navigate(`/carInfo/edit/${carInfo._id}`)}
                className="rounded-full border border-[#ffffff2a] 
                px-3 text-xs h-[1rem] absolute right-[-50%] top-[15%]
                hover:bg-[#ffffff2a] focus:bg-[#ffffff2a]">
                    edit
                </button>
            </h1>
            


        </div>
        <Suspense fallback={<Loading/>}>
            <CarInfo info={carInfo}/>
        </Suspense>


        {/* Car check-ups title, add check-up button */}
        <div className="max-w-[1300px] mx-auto">
            <div className="w-full flex flex-row justify-center items-center 
            gap-2 relative mb-[-0.5rem] md2:max-w-[300px] mx-auto">

                <h1 className="font-semibold text-center mx-auto">Your Check-ups</h1>
                
                {/* absolute because want the title before to be in the center and this button then follows it on the right */}
                <button onClick={()=>navigate("/checkup/new")}
                className="rounded-full border-2 border-[#ffffff2a] px-4 py-[0.125rem]
                    text-xs absolute right-0 font-semibold
                    hover:bg-[#ffffff2a] focus:bg-[#ffffff2a]">
                        add new
                </button> 

            </div>
            <Suspense fallback={<Loading/>}>
                <CheckCard/>
            </Suspense>
        </div>

    </div>
    </>
    
  )
}

export default Home;