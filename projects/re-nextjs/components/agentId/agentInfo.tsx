
// display the user information and photo on their profile page

//Part 7
import React from 'react'
import { ChangeEventHandler, FormEventHandler } from 'react';
import { useState } from 'react';

import { UserDocument } from "@models/userModel";



function allowInput (e:any) {
    console.log(e.target.previousSibling);
    e.target.previousSibling.removeAttribute("readOnly");

    if (e.target.previousSibling.getAttribute("type") === "password") {
        e.target.previousSibling.setAttribute("type", "text");
    }
    // e.target.previousSibling.removeAttribute("value");
    e.target.previousSibling.focus();
    document.getElementById("infoApply_button")!.style.display = "block";
    document.getElementById("infoCancel_button")!.style.display = "block";

}

function disableInput (e:any) {
    const inputs = e.target.parentNode.parentNode.parentNode.querySelectorAll("input");

    inputs.forEach((input:HTMLInputElement) => {
        if (!input.getAttribute("readOnly")) {
            input.setAttribute("readOnly", "true");
        }
        if (input.previousElementSibling?.textContent === "Password:") {
            input.previousElementSibling.setAttribute("type", "password");
        }

    })
    document.getElementById("infoApply_button")!.style.display = "none";
    document.getElementById("infoCancel_button")!.style.display = "none";

}

type userInterface = {
        authority: string;
        userInfo: UserDocument;
        allAgents: UserDocument[];
}





const AgentInfo = ({user, setReload}:{
    user:userInterface,   
    setReload: React.Dispatch<React.SetStateAction<boolean>>,
}) => {


    //fill the state by default with user.userInfo
    const [updatedUserInfo, setUpdatedUserInfo] = useState({
        name: user?.userInfo.name,
        avatar: user?.userInfo.avatar,
        email: user?.userInfo.email,
        password: "",
        phone: user?.userInfo.phone,
        position: user?.userInfo.position,
    });

    //get the values from the state to fill the input values
    const { name, avatar, email, password, phone, position } = updatedUserInfo;

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const { name, value } = target;
        setUpdatedUserInfo({ ...updatedUserInfo, [name]:value});
    }

    ////////////////////////////////////////////////////////////////////////////////////
    //Part 11.01
    //a file or undefined - file is the user's photo
    const [file, setFile] = useState<File>();

    //Part 11.01
    function getFormData(object:any, file:File|null) {
        const formData = new FormData();
        Object.keys(object).forEach(key => formData.append(key, object[key]));
        if (file !== null) {
            formData.append("file", file);
        }
        return formData;
    }

    const handleUserEditSubmit: FormEventHandler<HTMLFormElement> = async (e) => {

        //Part 11.01
        let data;
        console.log(updatedUserInfo);
        if (file) {
            data = getFormData(updatedUserInfo, file);
        } else if (!file) {
            data = getFormData(updatedUserInfo, null);
        }

        if (data) {


            // console.log(data.get("phone"));
            // console.log(data.get("file"));

            e.preventDefault();
            const current_url = window.location.href.toString().split("/agents/")[1];
            // console.log(current_url);

            const response = await fetch(`/api/users/${current_url}`, {
                method: "PATCH",
                // body: JSON.stringify(updatedUserInfo),
                body: data,
            })

            const newUserInfo = await response.json();
            // console.log(newUserInfo);

            document.getElementById("infoApply_button")!.style.display = "none";
            document.getElementById("infoCancel_button")!.style.display = "none";
            setUpdatedUserInfo(newUserInfo);
            setReload(true);


        }

    }
    ////////////////////////////////////////////////////////////////////////////////////


  return (
    <>
        <form className="w-full flex flex-col md:gap-2 gap-4 justify-center
        items-center max-w-[500px]"
        onSubmit={handleUserEditSubmit}
        id="infoForm">

            <h2 className="text_shadow-3 font-semibold text-xl  w-full
            text-center md2:text-start mb-2 mt-2 text-[#000000c7] dark:text-[#ffffffe2]">
                { user.authority === "viewer" ? (`${user.userInfo.name}'s Information`): ("Your information")}
            </h2>

            {/* full name */}
            <div className="capitalize
            flex flex-row flex-wrap w-full justify-center md2:justify-start items-baseline">

                <span className="
                font-medium  text-start mb-2 mr-4 w-full md:w-[6rem]">
                    full name:
                </span>
                
                    <div className="flex flex-row w-full md:w-[70%]">
                        <input readOnly={true} className="bg-transparent caret-theme-text-bright focus:outline-theme-text-bright 
                        focus:outline focus:outline-2 outline-offset-1 rounded-[7px]
                        mr-2 max-w-[65%] px-2 text-[#0000007d] dark:text-[#ffffff9e]
                        " 
                        value={name} name="name" onChange={handleInputChange} />

                        <button type="button" onClick={(e)=>allowInput(e)} 
                        className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                        rounded-full min-w-[100px]
                        opacity-40 hover:opacity-90 text-center ml-auto">
                            edit
                        </button>
                    </div>
            </div>

            {/* user's photo, which is displayed also on their items on the website */}
            <div className="
            flex flex-row flex-wrap w-full justify-center md2:justify-start items-baseline">

                <span className="
                font-medium capitalize text-start mb-2 mr-4 w-full md:w-[6rem]">
                    Photo:
                </span>
                
                    <div className="flex flex-row w-full md:w-[70%]">
                        <input readOnly={true} className="bg-transparent caret-theme-text-bright focus:outline-theme-text-bright 
                        focus:outline focus:outline-2 outline-offset-1
                        mr-2 max-w-[65%] text-[#0000007d] dark:text-[#ffffff9e]
                        " 
                        type="file" name="file" onChange={(e)=> setFile(e.target.files?.[0])}/>

                        <button type="button" onClick={(e)=>allowInput(e)} 
                        className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                        rounded-full min-w-[100px] max-h-[24px]
                        opacity-40 hover:opacity-90 text-center ml-auto">
                            edit
                        </button>
                    </div>


            </div>

            {/* phone */}
            <div className="
            flex flex-row flex-wrap w-full justify-center md2:justify-start items-baseline">

                <span className="
                font-medium capitalize text-start mb-2 mr-4 w-full md:w-[6rem]">
                    Phone:
                </span>
                
                    <div className="flex flex-row w-full md:w-[70%]">
                        <input readOnly={true} className="bg-transparent caret-theme-text-bright focus:outline-theme-text-bright 
                        focus:outline focus:outline-2 outline-offset-1 rounded-[7px]
                        mr-2 max-w-[65%] px-2 text-[#0000007d] dark:text-[#ffffff9e]
                        " 
                        value={phone} name="phone" onChange={handleInputChange} />

                        <button type="button" onClick={(e)=>allowInput(e)} 
                        className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                        rounded-full min-w-[100px]
                        opacity-40 hover:opacity-90 text-center ml-auto">
                            edit
                        </button>
                </div>
            </div>

            
            {/* email */}
            <div className="
            flex flex-row flex-wrap w-full justify-center md2:justify-start items-baseline">

                <span className="
                font-medium capitalize text-start mb-2 mr-4 w-full md:w-[6rem]">
                    E-mail:
                </span>
                
                    <div className="flex flex-row w-full md:w-[70%]">
                        <input readOnly={true} className="bg-transparent caret-theme-text-bright focus:outline-theme-text-bright 
                        focus:outline focus:outline-2 outline-offset-1 rounded-[7px]
                        mr-2 max-w-[65%] px-2 text-[#0000007d] dark:text-[#ffffff9e]
                        " 
                        value={email} name="email" onChange={handleInputChange} />

                        <button type="button" onClick={(e)=>allowInput(e)} 
                        className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                        rounded-full min-w-[100px]
                        opacity-40 hover:opacity-90 text-center ml-auto">
                            edit
                        </button>
                    </div>


            </div>

            {/* password */}
            <div className="
            flex flex-row flex-wrap w-full justify-center md2:justify-start items-baseline">

                <span className="
                font-medium capitalize text-start mb-2 mr-4 w-full md:w-[6rem]">
                    Password:
                </span>
                
                    <div className="flex flex-row w-full md:w-[70%]">
                        <input readOnly={true} className="bg-transparent caret-theme-text-bright focus:outline-theme-text-bright 
                        focus:outline focus:outline-2 outline-offset-1 rounded-[7px]
                        mr-2 max-w-[65%] px-2 text-[#0000007d] dark:text-[#ffffff9e]
                        " 
                        value={password} name="password" onChange={handleInputChange}
                        type="password"/>

                        <button type="button" onClick={(e)=>allowInput(e)} 
                        className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                        rounded-full min-w-[100px]
                        opacity-40 hover:opacity-90 text-center ml-auto">
                            edit
                        </button>
                    </div>
            </div>

            {/* position, changed by admins only */}
            <div className="capitalize
            flex flex-row flex-wrap w-full justify-center md2:justify-start items-baseline">

                <span className="
                font-medium  text-start mb-2 mr-4 w-full md:w-[6rem]">
                    Position:
                </span>
                
                    <div className="flex flex-row w-full md:w-[70%]">
                        <input readOnly={true} className="bg-transparent caret-theme-text-bright focus:outline-theme-text-bright 
                        focus:outline focus:outline-2 outline-offset-1 rounded-[7px]
                        mr-2 max-w-[65%] px-2 text-[#0000007d] dark:text-[#ffffff9e]
                        " 
                        value={position} name="position" onChange={handleInputChange} />

                        { user.userInfo.role === "admin" ? (

                            <button type="button" onClick={(e)=>allowInput(e)} 
                            className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                            rounded-full min-w-[100px]
                            opacity-40 hover:opacity-90 text-center ml-auto">
                                edit
                            </button>
                            
                        ): ("")}

                    </div>
            </div>

            {/* cancel and apply edits buttons */}
            <div className="mt-8 md2:mt-0 h-[1.5rem]
            flex flex-row flex-wrap w-full justify-center md2:justify-end items-baseline md2:mr-[4.65rem]">


                        <button type="button" id="infoCancel_button"
                        onClick={(e)=>disableInput(e)} 
                        className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                        rounded-full min-w-[100px]
                        opacity-80 hover:opacity-90 text-center mt-6 md:mt-0 mr-[16px] hidden">
                            cancel
                        </button>

                        <button type="submit" id="infoApply_button" 
                        className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                        rounded-full min-w-[100px]
                        opacity-80 hover:opacity-90 text-center  mt-6 md:mt-0 hidden"
                        >
                            apply
                        </button>


            </div>

        </form>

    </>

)
}

export default AgentInfo;