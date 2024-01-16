import { useState } from "react";
import React from "react"
import GradientButtonBorderRounded from "../misc/GradientButtonBorderRounded";
import { ChangeEventHandler } from "react";
import CarInfo from "../Home/HomeComponents/CarInfo";
import BackToHome from "../misc/BackToHome";
import { useNavigate } from "react-router-dom";
const CarInfoNew = () => {

    const navigate = useNavigate();

    // const [carInfo, setCarInfo] = useState({
    //     brand: "Mazda",
    //     model: "mazda 6",
    //     lastCheck: "01/01/2024",
    //     nextCheck: "30/01/2024",
    //     image: "/images/car1.png",
    //     _id: "000",

    // });

    const [carInfo, setCarInfo] = useState({
        brand: "",
        model: "",
        lastCheck: "",
        nextCheck: "",
        image: "",
        _id: "",

    });



    const {brand, model, image} = carInfo;


    const handleChange: ChangeEventHandler<HTMLInputElement|HTMLTextAreaElement> = ({ target }) => {
        const { name, value } = target;

        console.log(value);
        setCarInfo({ ...carInfo, [name]:value});
    }


    return (
        <div className="px-3 flex flex-col flex-1 items-center text_shadow">

            <div className="flex flex-row w-full max-w-[900px] text-xs text_shadow">
                <span onClick={()=>{navigate("/")}} className="cursor-pointer">Home</span>
                <span className="right_caret h-full w-[1rem] text-transparent">.</span>
                <span style={{color:"#00465f"}}>Add Car</span>
            </div>

            <div className="w-full flex flex-row justify-center items-center gap-2">
                <h1 className="font-semibold text-center mx-auto relative">
                    Your Car's Info
                </h1>
            </div>
            <CarInfo info={carInfo} />


            <div className="flex-1 w-full px-6 flex flex-col items-center">
            <form className="bg-[#ffffff13] rounded-[12px]
            flex flex-col justify-center pt-2 pb-3 px-4
            text-sm w-full max-w-[500px]">
        
                    <h2 className="w-full text-center font-semibold mb-3">
                        {carInfo.brand == "" ? ("Add a new car"):("Edit your Car")}
                    </h2>
        
                    <ul className="flex flex-col gap-4">
        
                        <li>
                            <label className="flex flex-row rounded-[5px] overflow-hidden
                            focus-within:outline outline-offset-[3px] outline-2
                            outline-[#0bb97f]">
                                <span className="w-[30%] bg-[#00000053] pt-[1px]
                                text-center">Brand</span>
                                <input className="w-[70%] text-[#000000d6]
                                px-2 py-[1px] outline-none selection:bg-[#3c8bc374]
                                bg-[#e3f4ff]" 
                                type="text"
                                defaultValue={brand}
                                name="brand"
                                onChange={handleChange}
                                />
                            
                            </label>
                        </li>
        
                        <li>
                            <label className="flex flex-row rounded-[5px] overflow-hidden
                            focus-within:outline outline-offset-[3px] outline-2
                            outline-[#0bb97f]">
                                <span className="w-[30%] bg-[#00000053] pt-[1px]
                                text-center">Model</span>
                                <input className="w-[70%] text-[#000000d6]
                                px-2 py-[1px] outline-none selection:bg-[#3c8bc374]
                                bg-[#e3f4ff]" 
                                type="text"
                                defaultValue={model}
                                name="model"
                                onChange={handleChange}
                                />
                            
                            </label>
                        </li>
                        
                        <li>
                            <label className="flex flex-row rounded-[5px] overflow-hidden
                            focus-within:outline outline-offset-[3px] outline-2
                            outline-[#0bb97f]">
                                <span className="w-full bg-[#00000053] pt-[1px]
                                text-center">Add Image</span>
                                <input className="hidden" type="file"/>
                            
                            </label>
                        </li>
        
                        <li className="flex flex-row justify-center items-center">
                            <div className="w-[40%] mx-auto gradient_button z-[0] relative">
                                <button 
                                onClick={()=>{}}
                                type="submit"
                                className="w-full rounded-full px-3 py-1
                                text-xs
                                bg-gradient-to-l from-[#05b5b2]  to-[#226798]
                                ">
                                    {carInfo.brand == "" ? ("Add Car"):("Apply Changes")}
                                </button>

                                {/* rounded gradient button border */}
                                <GradientButtonBorderRounded/>
                            </div>

                            {carInfo.brand !== "" ? (                            
                            <div className="w-[40%] mx-auto gradient_button z-[0] relative">
                                <button 
                                onClick={()=>{}}
                                type="submit"
                                className="w-full rounded-full px-3 py-1
                                text-xs
                                bg-gradient-to-l from-[#81043a]  to-[#226798]
                                ">
                                    Delete Car
                                </button>

                                {/* rounded gradient button border */}
                                <GradientButtonBorderRounded/>
                            </div>
                            ):("")}
                        </li>

                    </ul>
        
            
        
        
            </form>
            </div>

            <div className="mt-auto ml-[-0.5rem] md:mt-8 md:mb-4">
                <BackToHome/>
            </div>
        </div>
      )

}

export default CarInfoNew;