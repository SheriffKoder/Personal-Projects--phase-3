import React, { Suspense, lazy, useContext, useEffect } from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarInfo from './HomeComponents/CarInfo'
// import CheckCard from './HomeComponents/checkCard'
import Loading from "./HomeComponents/loading";
import { useCarInfoFetch } from "../misc/useCarInfoFetch";

//API 1.0 - edit car
import {Link} from "react-router-dom";


//Part 5
import { userContext } from "../../context";

const CheckCard = lazy(() => import('./HomeComponents/checkCards'));
// const CarInfo = lazy(() => import('./HomeComponents/CarInfo'));
// const CarInfo = lazy(() => {
//     return new Promise(resolve => {
//         setTimeout(()=> {
//             resolve (import('./HomeComponents/CarInfo'))
//         }, 2000);
//     })});


type checksType = {
    addDate: string,    //c     //1     //2
    initialCheck: string,               //2
    nextCheck: string,  //c     //1     //2
    checkedOn: string,  //c     //1     //2
    notes: string,      //c     //1     //2
}

type checkModel = {
    name: string,
    color: string,
    history: checksType[],
    _id: string,
    
};


type carInfoType = {
    brand: string,
    carModel: string,
    lastCheck: string,
    nextCheck: string,
    image: string,
    _id: string,
    checks: checkModel[],

  }




const Home = () => {


    const navigate = useNavigate();

    // const carInfo:carInfoType = {
    // brand: "Mazda",
    // model: "mazda 6",
    // lastCheck: "01/01/2024",
    // nextCheck: "30/01/2024",
    // image: "/images/car1.png",
    // _id: "000",
    // }

    const userCars = useContext(userContext)?.userState.userCars;
    console.log(userCars);

    let checks;
    let carInfo:carInfoType | null = null;

    if (userCars !== null && userCars.length > 0) {
        carInfo = userCars[0];
        checks = carInfo.checks;        
    }


    // if (userCars) carInfo = userCars[0];
    // if (carInfo) checks = carInfo.checks;
    
    // console.log(useContext(userContext));

    // const carInfo: carInfoType = fetch(useCarInfoFetch());
    // const carInfo: carInfoType = useCarInfoFetch();


  return (
    <>
    <div className="px-3 pt-4">

        {/* Car info title, edit button */}

        <div className="w-full flex flex-row justify-center items-center gap-2">

            <h1 className="font-semibold text-center mx-auto relative">
                Your Car's Info
                <Link to={carInfo ? `/carInfo/edit/${carInfo._id}` : ""}>
                <button 
                // onClick={()=>{ carInfo && (navigate(`/carInfo/edit/${carInfo._id}`))}}
                className="rounded-full border border-[#ffffff2a] 
                px-3 text-xs h-[1rem] absolute right-[-50%] top-[15%]
                hover:bg-[#ffffff2a] focus:bg-[#ffffff2a]">
                    edit
                </button>
                </Link>
            </h1>


        </div>
        <Suspense fallback={<Loading/>}>
            {carInfo ? (
            <CarInfo info={carInfo}/>
            ): (
                <Loading/>
            )}
            </Suspense>

        {/* Car check-ups title, add check-up button */}
        <div className="max-w-[1300px] mx-auto">
            <div className="w-full flex flex-row justify-center items-center 
            gap-2 relative mb-[-0.5rem] md2:max-w-[300px] mx-auto">

                <h1 className="font-semibold text-center mx-auto">Your Check-ups</h1>
                
                {/* absolute because want the title before to be in the center and this button then follows it on the right */}
                <Link to={carInfo ? `/${carInfo._id}/checkup/new/` : ""}>
                    <button 
                    // onClick={()=>navigate("/checkup/new")}
                    className="rounded-full border-2 border-[#ffffff2a] px-4 py-[0.125rem]
                        text-xs absolute right-0 font-semibold
                        hover:bg-[#ffffff2a] focus:bg-[#ffffff2a]">
                            add new
                    </button> 
                </Link>

            </div>
            <Suspense fallback={<Loading/>}>
                {checks && carInfo && (
                <CheckCard checks={checks} carId={carInfo?._id}/>
                )}
                </Suspense>
        </div>

    </div>
    </>
    
  )
}

export default Home;