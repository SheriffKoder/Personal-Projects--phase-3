import React, { useState, useEffect } from "react"




type carInfoType = {
  brand: string,
  model: string,
  lastCheck: string,
  nextCheck: string,
  image: string,
  _id: string
}


// const fetchCarInfo: ()=>Promise<carInfoType> = () => {
//   return  new Promise ((resolve) => {
      
//       const carInfo:carInfoType = {
//           brand: "Mazda",
//           model: "mazda 6",
//           lastCheck: "",
//           nextCheck: "",
//           image: "/images/car1.png",
//       }

//       setTimeout(()=> {
//           resolve(carInfo);
//       },2000);
//   })
// }



const CarInfo =  ({info}: {
  info: carInfoType,
}) => {


  // const carInfo:carInfoType = {
  //   brand: "Mazda",
  //   model: "mazda 6",
  //   lastCheck: "",
  //   nextCheck: "",
  //   image: "/images/car1.png",
  //   _id: "000",
  // }


  
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

            <img src={info.image}
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
        <ul className="text-sm font-light pl-3 flex flex-col gap-0 md:gap-1 items-center
        md:items-start">
          <li>
            Brand: {info.brand}
          </li>

          <li>
            Model: {info.model}
          </li>

          <li className="flex flex-col">
            <span>Last Check</span> 
            <span>{info.lastCheck}</span>
          </li>

          <li className="flex flex-col">
            <span>Next Check</span> 
            <span>{info.nextCheck}</span>
          </li>
        </ul>
      </div>

    </div>
    </>
  )
  


}

export default CarInfo