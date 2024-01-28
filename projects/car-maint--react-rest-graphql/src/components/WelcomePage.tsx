import React from "react"
import GradientButtonBorderRounded from "./misc/GradientButtonBorderRounded";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {

    const navigate = useNavigate();


    return (

        <div className="flex-1 flex flex-col items-center justify-center">
            <div className="ml-4 md2:ml-auto flex flex-row w-full max-w-[90vw] md2:max-w-[900px] text-xs text_shadow mx-auto">
                <span style={{color:"#00465f"}}>Welcome</span>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 px-4
            gap-16">
            {/* // flex-1 as this is a component inside a flex-col parent */}

                <div className="bg-[#ffffff13] mx-6 rounded-[12px]
                flex flex-col justify-center pt-2 pb-3 px-4
                text-sm max-w-[500px] w-full">
            
                    <h2 className="w-full text-center font-semibold mb-3 text-lg">
                        Welcome to your personal Car Maintenance App
                    </h2>

                    <div>
                        <div className="font-semibold mb-1">With this application you can</div>
                        <ul className="list-disc pl-4">
                            <li>
                                Add a Car to your garage
                            </li>
                            <li>
                                Add many checkups for your car
                            </li>
                            <li>
                                be reminded on when the next due date is on
                            </li>
                            <li>
                                view your checkup history
                            </li>
                        </ul>
                    </div>
            
                </div>

                <div className="w-full flex flex-col gap-4 mx-6 items-center">
                    <div className="bg-[#ffffff13]  rounded-[12px]
                    flex flex-col justify-center pt-2 pb-3 px-4
                    text-sm max-w-[500px] w-full">
                
                            <h2 className="w-full text-center font-semibold mb-3">Have an account ?</h2>
                
                            <ul className="flex flex-col gap-4">
                                
                
                                <li className="w-[70%] mx-auto gradient_button z-[0] relative">
                                    <button 
                                    onClick={()=>navigate("/login")}
                                    type="submit"
                                    className="w-full rounded-full px-3 py-1
                                    text-xs
                                    bg-gradient-to-l from-[#05b5b2]  to-[#226798]
                                    ">
                                        Login here
                                    </button>

                                    {/* rounded gradient button border */}
                                    <GradientButtonBorderRounded/>
                                </li>
                
                            </ul>
                
                    
                
                
                    </div>

                    <div className="bg-[#ffffff13] rounded-[12px]
                    flex flex-col justify-center pt-2 pb-3 px-4
                    text-sm max-w-[500px] w-full">
                
                            <h2 className="w-full text-center font-semibold mb-3">
                                Do not have an account yet ?
                                </h2>
                
                            <ul className="flex flex-col gap-4">
                                
                
                                <li className="w-[70%] mx-auto gradient_button z-[0] relative">
                                    <button 
                                    onClick={()=>navigate("/signup")}
                                    type="submit"
                                    className="w-full rounded-full px-3 py-1
                                    text-xs
                                    bg-gradient-to-l from-[#05b5b2]  to-[#226798]
                                    ">
                                        Sign up here
                                    </button>

                                    {/* rounded gradient button border */}
                                    <GradientButtonBorderRounded/>
                                </li>
                
                            </ul>
                
                    
                
                
                    </div>
                </div>


            </div>
        </div>
      )
}

export default WelcomePage