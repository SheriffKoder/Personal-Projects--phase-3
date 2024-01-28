import React from "react"
import { useNavigate } from "react-router-dom";
import GradientButtonBorderRounded from "../misc/GradientButtonBorderRounded";


const NewUserCar = () => {

    const navigate = useNavigate();

    return (
        <div className="flex-1 flex flex-col items-center mt-[20vh]">
            
            <div className="">
                You are now signed in
            </div>

            <div className="text-sm mt-2">
                but you do not have any cars yet in your garage
            </div>

            <div className="text-sm mt-10">
                Add a new car to start
            </div>

            <div className="w-[70%] mx-auto gradient_button z-[0] relative mt-2">
                <button 
                onClick={()=>navigate(`/carInfo/new/`)}
                type="button"
                className="w-full rounded-full px-3 py-1
                text-xs
                bg-gradient-to-l from-[#05b5b2]  to-[#226798]
                ">
                    Add Car
                </button>

            </div>
        
        </div>
    )
}

export default NewUserCar