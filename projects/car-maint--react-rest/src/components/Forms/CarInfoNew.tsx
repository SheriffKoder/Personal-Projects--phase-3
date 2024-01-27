import { useEffect, useState } from "react";
import React from "react"
import GradientButtonBorderRounded from "../misc/GradientButtonBorderRounded";
import CarInfo from "../Home/HomeComponents/CarInfo";
import BackToHome from "../misc/BackToHome";
import { useNavigate } from "react-router-dom";

//API 0.1
import { ChangeEventHandler } from "react";
import { FormEventHandler } from "react";
import { useContext } from "react";
import { userContext } from "../../context";

import {useParams} from "react-router-dom";
import { getFormData_multiple } from "../../util/formDataGenerate";


const CarInfoNew = () => {

    const navigate = useNavigate();
    const setUser = useContext(userContext)?.updateUser;
    const userInfo = useContext(userContext)?.userState.userInfo
    const userCars = useContext(userContext)?.userState.userCars;

    const {carId} = useParams();
    const token = useContext(userContext)?.userState.token;

    // console.log(carId);

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
        carModel: "",
        lastCheck: "",
        nextCheck: "",
        image: "",
        _id: "",
        userId: useContext(userContext).userState.userInfo?._id,
        checks: [
            {
                name: "",
                color: "",
                _id: "",
                history: [
                    {
                        addDate: "",
                        initialCheck: "",
                        nextCheck: "",
                        checkedOn: "",
                        notes: "",
                    },
      
                ]
    
    
            },
            
        ]

    });

    const {brand, carModel, image} = carInfo;

    //API 0.2 - images
    const [imageFile, setImageFile] = useState<File | string>("");

   
    //display info for the car to be edited, and avoid many re-renders
    useEffect(()=> {
        if (carId) {
            const currentCar = userCars?.filter((car) => car._id === carId )[0];
            // setCarInfo(currentCar);
            // console.log(currentCar);
    
            if (currentCar) {
              const  { brand, carModel, image, userId, _id, checks} = currentCar;
            
              setCarInfo({
                brand: brand,
                carModel: carModel,
                lastCheck: "",
                nextCheck: "",
                image: image,
                _id: _id,
                userId: userId,
                checks: checks
        
            })
    
            
    
            } 
        }
    },[]);




    const handleChange: ChangeEventHandler<HTMLInputElement|HTMLTextAreaElement> = ({ target }) => {
        const { name, value } = target;

        console.log(value);
        setCarInfo({ ...carInfo, [name]:value});
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        //API 0.2 - images /////
        let formData = new FormData();
        if (carInfo) formData = getFormData_multiple(formData, null, null, carInfo);
        //add the image with out a key (as we have a single image) to the formData that also now has information
        if (imageFile !== "" || imageFile !== null) formData = getFormData_multiple(formData, imageFile, "", null);
        ///////////////////////


        console.log(formData);
        const url = process.env.REACT_APP_CURRENT_URL!;

        //Add a new car route
        if (carInfo._id === "") {
        
            const apiResponse = await fetch(url+"/car/new", {
                method: "POST",
                headers: {
                    // "Content-type": "application/json",
                    "Authorization": token
                  },
                body: formData,
    
            })
            const res = await apiResponse.json();
            console.log(res);
            console.log(apiResponse.status);
    
            const userCars = [res];
            setUser({userInfo,userCars, token});
            navigate("/");    
        
        //Edit car route
        } else {
        
            const apiResponse = await fetch(url+"/car/edit", {
                method: "PATCH",
                headers: {
                    // "Content-type": "application/json",
                    "Authorization": token
                  },
                body: formData,
    
            })
            const res = await apiResponse.json();
            console.log(res);
            console.log(apiResponse.status);
    
            const userCars = [res];
            setUser({userInfo,userCars, token});
            navigate("/");    
        
        }
    }


    const handleDelete = async () => {
        const url = process.env.REACT_APP_CURRENT_URL!;

        const apiResponse = await fetch(url+"/car/delete", {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization": token
              },
            body: JSON.stringify(carInfo),

        })
        const res = await apiResponse.json();
        console.log(res);
        console.log(apiResponse.status);

        // const userCars = [res];
        setUser({userInfo,userCars:[], token});
        navigate("/");
    }

    /////////////////////////////////////////////////////////////


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
            text-sm w-full max-w-[500px]"
            onSubmit={handleSubmit}>
        
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
                                value={brand}
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
                                defaultValue={carModel}
                                name="carModel"
                                onChange={handleChange}
                                />
                            
                            </label>
                        </li>
                        
                        {/* //API 0.2 - images */}
                        <li>
                            <label className="flex flex-row rounded-[5px] overflow-hidden
                            focus-within:outline outline-offset-[3px] outline-2
                            outline-[#0bb97f]">
                                <span className="w-full bg-[#00000053] pt-[1px]
                                text-center">Add Image</span>
                                <input className="hidden" type="file"
                                name="file" id="file" onChange={(e)=> setImageFile(e.target.files?.[0]!)}
                                />
                            
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
                                    {carInfo._id == "" ? ("Add Car"):("Apply Changes")}
                                </button>

                                {/* rounded gradient button border */}
                                <GradientButtonBorderRounded/>
                            </div>

                            {carInfo._id !== "" ? (                            
                            <div className="w-[40%] mx-auto gradient_button z-[0] relative">
                                <button 
                                onClick={handleDelete}
                                type="button"
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