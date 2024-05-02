import React, { useState, useEffect, useCallback } from "react"

import { useCarInfoFetch } from "../../misc/useCarInfoFetch";
import { getNearestDay, getNearestDay2 } from "../../../util/daysDiff";


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
  // _id: string,
  
};

type carInfoType = {
  brand: string,
  carModel: string,
  lastCheck: string,
  nextCheck: string,
  image: string,
  checks: checkModel[] | []
}





const CarInfo =  ({info}: {
  info: carInfoType;
}) => {


  // const carInfo:carInfoType = {
  //   brand: "Mazda",
  //   model: "mazda 6",
  //   lastCheck: "",
  //   nextCheck: "",
  //   image: "/images/car1.png",
  //   _id: "000",
  // }

  
    //we have the car, want to find in its checks the last check
  //we have many checks, with their last being the last check date
  //so we can differentiate between each car.checks.map((check)=> {}).history[0].

  const CarNextChecks = info.checks.map((check)=> {
    return check.history[0].nextCheck;
  }).filter(p => p !== "");

  const CarLastChecks = info.checks.map((check)=> {
    return check.history[check.history.length-1].checkedOn;
  }).filter(p => p !== "");
  // console.log(CarNextChecks);
  // const NearestNextCheck = "";
  const NearestNextCheck = getNearestDay(CarNextChecks)
  // console.log(NearestNextCheck);

  // const NearestLastCheck = ""
  const NearestLastCheck = getNearestDay2(CarLastChecks)
  // console.log(NearestLastCheck);
  
  // console.log(info.checks);
    
  const url = process.env.REACT_APP_CURRENT_URL!;



  return (


    <>
    <div className="flex flex-row items-center justify-center
    w-full flex-wrap border border-[#ffffff00]
    px-4
    mb-10 max-w-[1000px] mx-auto max-h-[433px]
    ">

      {/* car's image */}
      <div className="border border-[#ffffff00] w-[60%] h-full 
      flex items-center justify-center
      md2:flex-1 md:ml-auto">
        {typeof info.image == "string" && info.image !== "" ? (

            <img src={url+""+info.image}
            className="md:ml-auto border_image">
            </img>

        ) : (
          <div className="relative md:ml-auto">
            <img src="/images/car1.png"
            className="border_image opacity-25 ">
            </img>
            <span className="absolute top-[calc(50%-1rem)] left-[calc(50%-1rem)] h-[2rem] w-[2rem]">
              <img src={info.image === "" ? ("/images/notFound.svg") :("/images/success.svg")} className="w-full h-full"></img>
            </span>
          </div>
        )}


      </div>

      {/* car's info */}
      <div className="border border-[#ffffff00] w-[40%] my-auto
      md:w-[20vw] md:min-w-[160px] max-w-[300px]">
        {/* <h2 className="pl-2 text-base">Car Details</h2> */}
        <ul className="text-sm font-light pl-3 flex flex-col gap-1 md:gap-1 items-center
        md:items-start text-center md:text-start">
          <li className="flex flex-col">
          <span className="font-medium">Brand & Model</span> 
          {info.brand} {info.carModel}
          </li>

          <li className="flex flex-col">
          <span className="font-medium">Last Check</span> 
            <span>{NearestLastCheck}</span>
          </li>

          <li className="flex flex-col">
            <span className="font-medium">Next Check</span> 
            <span>{NearestNextCheck ? NearestNextCheck : "not set"}</span>
          </li>
        </ul>
      </div>

    </div>
    </>

  )

  


}

export default CarInfo