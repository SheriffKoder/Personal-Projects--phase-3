import { useState } from "react";
import React from "react"
import GradientButtonBorderRounded from "../misc/GradientButtonBorderRounded";
import { ChangeEventHandler } from "react";
import CarInfo from "../Home/HomeComponents/CarInfo";
import BackToHome from "../misc/BackToHome";

const CarInfoNew = () => {


    const [checkupInfo, setCheckupInfo] = useState({
        brand: "Mazda",
        model: "mazda 6",
        image: "",

    });


    const {brand, model, image} = checkupInfo;


    const handleChange: ChangeEventHandler<HTMLInputElement|HTMLTextAreaElement> = ({ target }) => {
        const { name, value } = target;

        console.log(value);
        setCheckupInfo({ ...checkupInfo, [name]:value});
    }


    return (
        <div className="px-3 flex flex-col flex-1 items-center">

            <div className="w-full flex flex-row mb-[-1rem] justify-center items-center gap-2">
                <h1 className="font-semibold text-center mx-auto relative">
                    Your Car's Info
                </h1>
            </div>
            <CarInfo brand={brand} model={model} lastCheck="01" nextCheck="01" />



            <form className="bg-[#ffffff13] mx-6 rounded-[12px]
            flex flex-col justify-center pt-2 pb-3 px-4
            text-sm">
        
                    <h2 className="w-full text-center font-semibold mb-3">
                        Add a new car
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
        
                        <li className="w-[70%] mx-auto gradient_button z-[0] relative">
                            <button 
                            onClick={()=>{}}
                            type="submit"
                            className="w-full rounded-full px-3 py-1
                            text-xs
                            bg-gradient-to-l from-[#05b5b2]  to-[#226798]
                            ">
                                Add Car
                            </button>

                            {/* rounded gradient button border */}
                            <GradientButtonBorderRounded/>
                        </li>
        
                    </ul>
        
            
        
        
            </form>

            <div className="mt-auto ml-[-0.5rem]">
                <BackToHome/>
            </div>
        </div>
      )

}

export default CarInfoNew;