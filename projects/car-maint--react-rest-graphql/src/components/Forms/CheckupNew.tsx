import { useEffect, useState, useRef } from "react";
import React from "react"
import GradientButtonBorderRounded from "../misc/GradientButtonBorderRounded";
import { ChangeEventHandler } from "react";
import BackToHome from "../misc/BackToHome";
import { useNavigate } from "react-router-dom";
import { FormEventHandler } from "react";

import { useContext } from "react";
import { userContext } from "../../context";
import {useParams} from "react-router-dom";

//this component operates on url /:carId/checkup/:checkIndex/:historyIndex/edit
const CheckupNew = () => {

    const navigate = useNavigate();
    const setUser = useContext(userContext)?.updateUser;
    const userInfo = useContext(userContext)?.userState;
    const {carId} = useParams();    //will send the carId to find the car, with the checkupInfo
    
    const {checkIndex} = useParams();
    const {historyIndex} = useParams();
    const userCars = userInfo.cars;

    const token = useContext(userContext)?.userState.token;

    const user_action = useRef("add");


    //if the check history has more than one item, we will not want to view the previous check input
    // let oldCheck;
    // if (userCars && checkIndex) {
    //     const currentCar = userCars?.filter((car) => car._id === carId)[0];
    //     oldCheck = currentCar?.checks[+checkIndex].history.length > 1;
    // }
    
    //want to allow editing the initial check only if this is the last item in the history (first one added)
    let oldCheck;
    if (userCars && checkIndex && historyIndex) {
        const currentCar = userCars?.filter((car) => car._id === carId)[0];
        const checkHistory = currentCar?.checks[+checkIndex].history; 
        oldCheck = checkHistory[checkHistory.length-1] === checkHistory[+historyIndex];
    }
    

    console.log(oldCheck);

    const [checkupInfo, setCheckupInfo] = useState({
        title: "",
        color: "#058885",
        initialCheck: "",
        nextCheck: "",
        notes: "",
        checkedOn: "",

    });

    



    const {title, color, initialCheck, nextCheck, notes, checkedOn} = checkupInfo;


    const handleChange: ChangeEventHandler<HTMLInputElement|HTMLTextAreaElement> = ({ target }) => {
        const { name, value } = target;

        console.log(value);
        setCheckupInfo({ ...checkupInfo, [name]:value});
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const url = process.env.REACT_APP_CURRENT_URL!;

        //Decide to add or edit
        //Add: push the check info to the API to add it to the car
        //edit check if there are indexes of a current check in the url
        (!checkIndex && !historyIndex) ? user_action.current = "add" : user_action.current = "edit";


        const graphqlQuery = {
            query: `
                mutation updateCheck (
                    $checkupInfo: checksTypeInput,
                    $carId: String!,
                    $action: String!,
                    $checkIndex: Int,
                    $historyIndex: Int,
                ) {
                    addEditDeleteCheck(checkInput: {
                        checkupInfo: $checkupInfo,
                        carId: $carId,
                        action: $action,
                        checkIndex: $checkIndex,
                        historyIndex: $historyIndex,

                        })
                        {
                            _id
                            email
                            name
                            token
                            cars {
                                _id
                                brand
                                carModel
                                image
                                lastCheck
                                nextCheck
                                userId
                                checks {
                                    name
                                    color
                                    history {
                                        addDate
                                        initialCheck
                                        nextCheck
                                        checkedOn
                                        notes
                                    }
                                }
                                createdAt
                                updatedAt
                            }
                            
                        }
                }

            `,      
            variables: {
                checkupInfo: {...checkupInfo},
                carId: carId,
                action: user_action.current,
                checkIndex: (checkIndex)? parseInt(checkIndex): "",
                historyIndex: (historyIndex) ? parseInt(historyIndex) : "",                
            }
        }
            

        const apiResponse = await fetch(url+"/graphql/check", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": token
                },
                body: JSON.stringify(graphqlQuery),

        });


        const res = await apiResponse.json();
        console.log(res);
        console.log(apiResponse.status);

        setUser(res.data.addEditDeleteCheck);
        navigate("/");    

            // const apiResponse = await fetch(url+"/car/check/new", {
            //     method: "PATCH",
            //     headers: {
            //         "Content-type": "application/json",
            //         "Authorization": token
            //       },
            //     body: JSON.stringify({...checkupInfo,carId}),
    
            // })
            // const res = await apiResponse.json();
            // console.log(res);
            // console.log(apiResponse.status);
    
            // const userCars = [res];
            // setUser(res.data.checkNew);
            // navigate("/");    
        
        
        //edit check if there are indexes of a current check in the url
        // } else {

        //     const apiResponse = await fetch(url+"/car/check/edit", {
        //         method: "PATCH",
        //         headers: {
        //             "Content-type": "application/json",
        //             "Authorization": token
        //           },
        //         body: JSON.stringify({...checkupInfo, carId, checkIndex, historyIndex}),
    
        //     })
        //     const res = await apiResponse.json();
        //     console.log(res);
        //     console.log(apiResponse.status);
    
        //     const userCars = [res];
        //     setUser(res.data.checkEdit);
        //     navigate("/");    


        // }
        
            
   
    }

    //set the info if we are editing, only on first render
    useEffect(()=> {
        //if we are on an editing url (given from the button link and the react route)
        //take the checkup information and set to the state
        if (userCars && checkIndex && historyIndex) {
            const thisCar = userCars.filter((car) => car._id === carId)[0];
            const thisCheck = thisCar.checks[+checkIndex];

            setCheckupInfo({
                title: thisCheck.name,
                color: thisCheck.color,
                nextCheck: thisCheck.history[+historyIndex].nextCheck,
                initialCheck: thisCheck.history[+historyIndex].initialCheck,
                notes: thisCheck.history[+historyIndex].notes,
                checkedOn: thisCheck.history[+historyIndex].checkedOn,
            })
        }

    },[]);


    return (
    <div className="flex flex-col flex-1 items-center px-4 text_shadow">

        <div className="flex flex-row w-full max-w-[900px] mb-8 text-xs text_shadow">
            <span onClick={()=>{navigate("/")}} className="cursor-pointer">Home</span>
            <span className="right_caret h-full w-[1rem] text-transparent">.</span>
            
            {/* view a link to the previous page if came from history if this is a checkHistory other than 0 (last added), {+checkedOn !== ""} can also work */}
            {historyIndex && parseInt(historyIndex) > 0 && (
            <>
                <span onClick={()=>{navigate(`/${carId}/checkup/${checkIndex}`)}} className="cursor-pointer">History</span>
                <span className="right_caret h-full w-[1rem] text-transparent">.</span>
            </>
            )}
            
            <span style={{color:"#00465f"}}>
                {checkIndex ? "Edit Checkup" : "New Check-up" }
            </span>
        </div>

        <form className="bg-[#ffffff13] mx-6 rounded-[12px]
        flex flex-col justify-center pt-2 pb-3 px-4 my-auto
        text-sm w-full max-w-[600px]"
        onSubmit={handleSubmit}>

                <h2 className="w-full text-center font-semibold mb-3 ">
                    
                    {checkIndex ? "Edit This Checkup" : "Create a new checkup" }

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
                                <label className="absolute right-[2px] top-[10%] 
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
                    {oldCheck && (
                    <li>
                        <label className="flex flex-row rounded-[5px] overflow-hidden
                        focus-within:outline outline-offset-[3px] outline-2
                            outline-[#0bb97f] mx-2">
                            <span className="flex-1 bg-[#00000000] pt-[1px]
                            text-start">
                                Initial check 
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
                            value={nextCheck}
                            name="nextCheck"
                            onChange={handleChange}/>
                        
                        </label>
                    </li>

                    {/* checked on edit, will be "" unless the check is marked as complete by user */}
                    {checkedOn !== "" && (
                    <li>
                        <label className="flex flex-row rounded-[5px] overflow-hidden
                        focus-within:outline outline-offset-[3px] outline-2
                            outline-[#0bb97f] mx-2">
                            <span className="flex-1 bg-[#00000000] pt-[1px]
                            text-start">
                                Checked on
                            </span>
                            <input className="w-[40%] rounded-[5px] text-[#000000d6]
                            px-2 py-[1px] outline-none selection:bg-[#3c8bc374]
                            bg-[#e3f4ff]" 
                            type="date"
                            defaultValue={checkedOn}
                            name="checkedOn"
                            onChange={handleChange}/>
                        
                        </label>
                    </li>
                    )}


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
                            {checkIndex ? "Apply Changes" : "Add Checkup" }

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

export default CheckupNew;