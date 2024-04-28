import React, { useState } from "react"
import GradientButtonBorderRounded from "../misc/GradientButtonBorderRounded";
import { useNavigate } from "react-router-dom";

//API 0.1
import { ChangeEventHandler } from "react";
import { FormEventHandler } from "react";

import { useContext } from "react";
import { userContext } from "../../context";

const SignUp = () => {

    const navigate = useNavigate();
    const setUser = useContext(userContext)?.updateUser;


    /////////////////////////////////////////////////////////////
    //API 0.1
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: ""
    });
    /////////////////////////////////////////////////////////////



    const {name, email, password} = userInfo;

    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const { name, value } = target;
        setUserInfo({ ...userInfo, [name]:value});
    }
    
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const url = process.env.REACT_APP_CURRENT_URL!;

        const apiResponse = await fetch(url+"/auth/signup", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
              },
            body: JSON.stringify(userInfo),

        })
        const res = await apiResponse.json();
        console.log(res);
        console.log(apiResponse.status);
        setUser(res);
        navigate("/");    

    }

    /////////////////////////////////////////////////////////////


  return (

    <div className="px-4 flex flex-col flex-1">
        
        <div className="ml-4 md2:ml-auto flex flex-row w-full max-w-[900px] text-xs text_shadow mx-auto">
            <span onClick={()=>{navigate("/")}} className="cursor-pointer">Welcome</span>
            <span className="right_caret h-full w-[1rem] text-transparent">.</span>
            <span style={{color:"#00465f"}}>Sign-up</span>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 px-4">

        {/* // flex-1 as this is a component inside a flex-col parent */}
        <form className="bg-[#ffffff13] mx-6 rounded-[12px]
            flex flex-col justify-center pt-2 pb-3 px-4 my-auto
            text-sm max-w-[500px] w-full"
            onSubmit={handleSubmit}>

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
                            bg-[#e3f4ff]" type="text"
                            name="name" value={name} onChange={handleChange}/>
                        
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
                            bg-[#e3f4ff]" type="text"
                            name="email" value={email} onChange={handleChange}/>
                        
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
                            bg-[#e3f4ff]" type="text"
                            name="password" value={password} onChange={handleChange}/>
                        
                        </label>
                    </li>

                    <li className="w-[70%] mx-auto gradient_button z-[0] relative">
                        <button 
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
        </div>
    </div>

  )
}

export default SignUp;