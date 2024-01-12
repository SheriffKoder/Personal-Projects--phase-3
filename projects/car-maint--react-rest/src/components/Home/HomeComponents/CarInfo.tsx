import React, { useState, useEffect } from "react"




type carInfoType = {
  brand: string,
  model: string,
  lastCheck: string,
  nextCheck: string,
  image: string,
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



const CarInfo =  () => {


  const carInfo:carInfoType = {
    brand: "Mazda",
    model: "mazda 6",
    lastCheck: "",
    nextCheck: "",
    image: "/images/car1.png",
  }


  
  return (

    <>
    <div className="flex flex-row items-center justify-center
    w-full flex-wrap border border-[#ffffff00]
    px-4
    mb-10
    ">

      {/* car's image */}
      <div className="border border-[#ffffff00] w-[60%] h-full 
      flex items-center justify-center
      ">
        <img src={carInfo.image}
        className="border_image">
        </img>
      
      </div>

      {/* car's info */}
      <div className="border border-[#ffffff00] w-[40%] my-auto">
        {/* <h2 className="pl-2 text-base">Car Details</h2> */}
        <ul className="text-sm font-light pl-3 flex flex-col gap-1">
          <li>
            Brand: {carInfo.brand}
          </li>

          <li>
            Model: {carInfo.model}
          </li>

          <li>
            Last Check: {carInfo.lastCheck}
          </li>

          <li>
            Next Check: {carInfo.nextCheck}
          </li>
        </ul>
      </div>

    </div>
    </>
  )
  


}

export default CarInfo