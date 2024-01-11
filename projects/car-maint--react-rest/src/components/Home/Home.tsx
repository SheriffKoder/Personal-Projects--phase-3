import React from "react"


import CarInfo from './HomeComponents/CarInfo'
import CheckCard from './HomeComponents/checkCard'




const Home = () => {

    const checks = [
        {
            name: "Maintenance",
            lastCheck: "01/01/01",
            nextCheck: "01/01/01",
            remaining: "30",
            notes: "Make sure to check on the replacement part next time!",
        },
        {
            name: "Oil",
            lastCheck: "01/01/01",
            nextCheck: "01/01/01",
            remaining: "30",
            notes: "Make sure to bring a filter next time",
        },
    
    ];

    const carInfo = {
        brand: "Mazda",
        model: "mazda 6",
        lastCheck: "",
        nextCheck: "",
        image: "/images/car1.png",
    }

  return (
    <div className="px-3">

        <h1 className="w-full font-semibold text-center mb-[-1rem]">Your Car's Info</h1>
        <CarInfo carInfo={carInfo}/>

        <h1 className="w-full font-semibold text-center mb-[-1rem]">Your Check-ups</h1>

        <>
        {checks.map((check) => (
            <CheckCard info={check}/>
        ))}
        </>

    </div>
  )
}

export default Home