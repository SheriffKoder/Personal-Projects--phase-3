import React from "react"
import GradientButtonBorderRounded from "../misc/GradientButtonBorderRounded";

const SignUp = () => {
  return (
    // flex-1 as this is a component inside a flex-col parent
    <form className="bg-[#ffffff13] mx-6 rounded-[12px]
    flex flex-col justify-center pt-2 pb-3 px-4 my-auto
    text-sm">

            <h2 className="w-full text-center font-semibold mb-3">Sign-Up</h2>

            <ul className="flex flex-col gap-4">
                <li>
                    <label className="flex flex-row rounded-[5px] overflow-hidden
                    focus-within:outline outline-offset-[3px] outline-2
                     outline-[#0bb97f]">
                        <span className="w-[30%] bg-[#00000053] pt-[1px]
                        text-center">Name</span>
                        <input className="w-[70%] text-[#000000d6]
                        px-2 py-[1px] outline-none selection:bg-[#3c8bc374]
                        bg-[#e3f4ff]" type="text"/>
                    
                    </label>
                </li>

                <li>
                    <label className="flex flex-row rounded-[5px] overflow-hidden
                    focus-within:outline outline-offset-[3px] outline-2
                     outline-[#0bb97f]">
                        <span className="w-[30%] bg-[#00000053] pt-[1px]
                        text-center">Email</span>
                        <input className="w-[70%] text-[#000000d6]
                        px-2 py-[1px] outline-none selection:bg-[#3c8bc374]
                        bg-[#e3f4ff]" type="text"/>
                    
                    </label>
                </li>

                <li>
                    <label className="flex flex-row rounded-[5px] overflow-hidden
                    focus-within:outline outline-offset-[3px] outline-2
                     outline-[#0bb97f]">
                        <span className="w-[30%] bg-[#00000053] pt-[1px]
                        text-center">Password</span>
                        <input className="w-[70%] text-[#000000d6]
                        px-2 py-[1px] outline-none selection:bg-[#3c8bc374]
                        bg-[#e3f4ff]" type="text"/>
                    
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
                        create account
                    </button>

                    {/* rounded gradient button border */}
                    <GradientButtonBorderRounded/>

                </li>

            </ul>

    


    </form>
  )
}

export default SignUp;