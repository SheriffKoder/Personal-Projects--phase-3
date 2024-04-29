import { useState } from "react";
import React from "react"
import GradientButtonBorderRounded from "../misc/GradientButtonBorderRounded";
import { ChangeEventHandler } from "react";
import BackToHome from "../misc/BackToHome";
import { useNavigate } from "react-router-dom";


const CheckupEdit = () => {

    const navigate = useNavigate();


    const [checkupInfo, setCheckupInfo] = useState({
        title: "Maint",
        color: "#058885",
        initialCheck: "",
        nextCheck: "",
        notes: "",

    });


    const {title, color, initialCheck, nextCheck, notes} = checkupInfo;


    const handleChange: ChangeEventHandler<HTMLInputElement|HTMLTextAreaElement> = ({ target }) => {
        const { name, value } = target;

        console.log(value);
        setCheckupInfo({ ...checkupInfo, [name]:value});
    }


    return (
        <div className="px-4 flex flex-col flex-1 items-center">

            <div className="flex flex-row w-full max-w-[900px] mb-8 text-xs text_shadow">
                <span onClick={()=>{navigate("/")}} className="cursor-pointer">Home</span>
                <span className="right_caret h-full w-[1rem] text-transparent">.</span>
                <span style={{color:"#00465f"}}>Edit Check-up ( {checkupInfo.title} )</span>
            </div>

            <form className="bg-[#ffffff13] mx-6 rounded-[12px]
            flex flex-col justify-center pt-2 pb-3 px-4 my-auto
            text-sm w-full max-w-[600px]">
        
                    <h2 className="w-full text-center font-semibold mb-3">
                        Edit your checkup details
                    </h2>
        
                    <ul className="flex flex-col gap-5">
        
                        {/* title and color picker */}
                        <li className="flex flex-row gap-2 relative flex-wrap px-2">
                            {/* title */}
                            <label className="flex flex-col gap-2 w-full">
                                
                                <span className="">
                                    Title
                                </span>
                                
                                {/* title input and color */}
                                <div className="relative w-full
                                overflow-hidden rounded-[7px]
                                focus-within:outline outline-offset-[3px] outline-2
                                outline-[#0bb97f]
                                ">
                                    <input className="text-[#ffffff] rounded-[7px]
                                    px-2 py-[1px] outline-none selection:bg-[#3c8bc374]
                                    bg-[#e3f4ff] w-full h-[1.75rem] text-center"
                                    type="text"
                                    defaultValue={title}
                                    name="title"
                                    onChange={handleChange}
                                    style={{background: color}}
                                    placeholder="type your title here"/>
                                
                                    {/* color picker */}
                                    <label className="absolute right-[2px] top-[5%] 
                                    flex flex-row rounded-[5px]">
                                
                                        <span className="bg-white p-[2px] rounded-[7px]" aria-label="choose title color">
                                        🎨
                                        </span>
                                
                                        <input className="w-[0%] text-[#000000d6]
                                        px-1 py-[3px] outline-none selection:bg-[#3c8bc374]
                                        bg-[#0000003f] max-h-[1.5rem] centered_centered
                                        fixed opacity-0" 
                                        type="color"
                                        value={color}
                                        name="color"
                                        onChange={handleChange}
                                        />
                                
                                    </label>
                                    
                                </div>
        
                            </label>
        
        
                        </li>
        
                        {/* previous check (initialCheck) */}
                        {initialCheck !== "" && (
                        <li>
                            <label className="flex flex-row rounded-[5px] overflow-hidden
                            focus-within:outline outline-offset-[3px] outline-2
                                outline-[#0bb97f] mx-2">
                                <span className="flex-1 bg-[#00000000] pt-[1px]
                                text-start">
                                    Previous check 
                                    <span className="ml-1 text-xs opacity-70">
                                        (optional)
                                    </span>
                                </span>
                                <input className="w-[40%] rounded-[5px] text-[#000000d6]
                                px-2 py-[1px] outline-none selection:bg-[#3c8bc374]
                                bg-[#e3f4ff]" 
                                type="date"
                                defaultValue={initialCheck}
                                name="initialCheck"
                                onChange={handleChange}/>
                            
                            </label>
                        </li>
                        )}
        
                        {/* next check */}
                        <li>
                            <label className="flex flex-row rounded-[5px] overflow-hidden
                            focus-within:outline outline-offset-[3px] outline-2
                                outline-[#0bb97f] mx-2">
                                <span className="flex-1 bg-[#00000000] pt-[1px]
                                text-start">
                                    Next Check
                                </span>
                                <input className="w-[40%] rounded-[5px] text-[#000000d6]
                                px-2 py-[1px] outline-none selection:bg-[#3c8bc374]
                                bg-[#e3f4ff]" 
                                type="date"
                                defaultValue={nextCheck}
                                name="nextCheck"
                                onChange={handleChange}/>
                            
                            </label>
                        </li>
        
                        {/* notes */}
                        <li>
                            <label className="flex flex-col gap-2 px-2
                            ">
                                <span className="bg-[#00000000] pt-[1px]
                                text-start">
                                    Notes
                                </span>
                                <textarea className="rounded-[5px] text-[#000000d6]
                                px-2 py-2 selection:bg-[#3c8bc374]
                                bg-[#e3f4ffd9]
                                focus-within:outline outline-offset-[3px] outline-2
                                outline-[#0bb97f]" 
                                rows={3}
                                defaultValue={notes}
                                name="notes"
                                onChange={handleChange}/>
                            
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
                                Apply Changes
                            </button>
        
                            {/* rounded gradient button border */}
                            <GradientButtonBorderRounded/>
                        </li>
        
                    </ul>
        
        
        
        
            </form>

            <div className="mt-auto ml-[-0.5rem] md:mt-8 md:mb-4">
            <BackToHome/>
            </div>

        </div>
        )
}

export default CheckupEdit;