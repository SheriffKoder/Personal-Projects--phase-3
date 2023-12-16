// import React from 'react'
"use client";

import { bodyScroll, hideEdit } from "@utils/bodyNoScroll";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PropertyDocument } from "@models/propertyModel";

import { ChangeEventHandler, FormEventHandler } from "react";
import { useRouter } from "next/navigation";

interface PropertyDocument_dummy {

    property_images : string[],        
    // property_id : number,

    property_country: string,
    property_city: string,
    property_district: string,

    property_type: string,
    property_area: number,
    property_beds: number,
    property_baths: number,
    
    property_listing_type: string,
    property_availability: boolean,
    property_recommended: boolean,
    property_price: number,

    property_date: string,
    property_update: string,
    property_description: string,
  
  }

let Property_dummy: PropertyDocument_dummy = {
    property_images: [],        
    property_country: "",
    property_city: "",
    property_district: "",

    property_type: "",
    property_area: 0,
    property_beds: 0,
    property_baths: 0,
    
    property_listing_type: "",
    property_availability: false,
    property_recommended: false,
    property_price: 0,

    property_date: "",
    property_update: "",
    property_description: "",
}


const PropertyEdit_Component = () => {


    const clearLocalStorageForProperty = () => {
        localStorage.removeItem("editing");
      
    }


    const [property, setProperty] = useState<PropertyDocument_dummy>({
        property_images: [],        
        property_country: "",
        property_city: "",
        property_district: "",
    
        property_type: "",
        property_area: 0,
        property_beds: 0,
        property_baths: 0,
        
        property_listing_type: "",
        property_availability: false,
        property_recommended: false,
        property_price: 0,
    
        property_date: "",
        property_update: "",
        property_description: "",
    }
    );


    const [showInfo, setShowInfo] = useState(false);


    type inputInterface = HTMLTextAreaElement | HTMLInputElement;
    const handleChange: ChangeEventHandler<inputInterface> = ({ target }) => {
    
        const { name, value } = target;
    
        setProperty({ ...property, [name]:value});
    }


    const router = useRouter();
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const response = await fetch(`/api/properties/edit`, {
            method: "PATCH",
            body: JSON.stringify(property),
        })
        // router.refresh();
        bodyScroll();
        hideEdit("Edit");
        //BUG: the user profile properties component does not refresh after changes made to database




    }

    //change useEffect trigger when the element get visibility
    // document.getElementById("propertyEdit__container")?.addEventListener("pageshow", ()=>{
    //     setShowInfo(true);
    //     console.log("enter");
    // });
    

    useEffect (() => {

        const fetchPropertyInfo = async () => { 

            const editId = localStorage.getItem("editing");
            
            const response = await fetch(`/api/properties/edit`, {
                method: "POST",
                body: JSON.stringify(editId),
            })

            const jsonResponse = await response.json();
            console.log(jsonResponse);

            setProperty(jsonResponse);
            //returns {property info}

        }




        if (showInfo) fetchPropertyInfo();


            
    },[showInfo]);
        

    return (

        <>
        {property !== null ? (
        
            <div className=" myMain2 hidden h-[100vh] flex-col items-center justify-start
            dark:before:bg-[#000000e3] box-shadow-1 lg:mt-0 pb-10 overflow-y-scroll
            pt-24
            
            "
            id="propertyEdit__container">

            <div className="
            z-[3] w-[90%] h-auto
            flex flex-col items-center gap-1 lg:gap-4  p-3 max-w-[500px]
            rounded-[17px] bg-[#ffffffbd]  dark:bg-[#ffffff10]
            border-[rgba(255,255,255,0.02)]
            dark:text-[#ffffffde] shadow-2xl dark:shadow-inner 
            pb-4 lg:pb-7
            ">
            
                    <div className="text-center relative w-full flex flex-row justify-center">
                        <div className="absolute right-0">
                            <button 
                            onClick={()=> {clearLocalStorageForProperty(); setShowInfo(false); hideEdit("Edit"); bodyScroll();}}
                            className="
                            ml-auto bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545] h-5 w-5 rounded-[6px] text-white flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
                            </button>
                        </div>

                        <div className="absolute left-0">
                            <button 
                            onClick={()=> {setShowInfo(true);}}
                            className="
                            ml-auto bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545] h-5 w-5 rounded-[6px] text-white flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
                            </button>
                        </div>


                        <div className="mx-auto pt-0 lg:pt-6 flex flex-col lg:flex-row gap-1 flex-wrap justify-center">
                            <h3 className="mb-2 text_shadow-2 opacity-80">Edit property</h3>
                        </div>
                        
                    </div>

                    <form className="flex flex-col gap-1 lg:gap-4 items-center
                    w-[90%] md:px-[5%]"
                    onSubmit={handleSubmit}>

                        <label className="w-[100%] flex flex-row justify-center text-center
                        label_field
                        bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                        
                        ">
                            <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                Country
                            </span>

                            <input className="w-full input_field border-0 rounded-r-[6px] 
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                border-[rgba(255,255,255,0.02)]" type="text" required
                                name="property_country" value={property.property_country} onChange={handleChange}
                                />
                            
                        </label>

                        <label className="w-[100%] flex flex-row justify-center text-center
                        label_field
                        bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                        
                        ">
                            <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                City
                            </span>

                            <input className="w-full input_field border-0 rounded-r-[6px] 
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                border-[rgba(255,255,255,0.02)]" type="text" required
                                name="property_city" value={property.property_city} onChange={handleChange}
                                />
                            
                        </label>

                        <label className="w-[100%] flex flex-row justify-center text-center
                        label_field
                        bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                        
                        ">
                            <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                District
                            </span>

                            <input className="w-full input_field border-0 rounded-r-[6px] 
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                border-[rgba(255,255,255,0.02)]" type="text" required
                                name="property_district" value={property.property_district} onChange={handleChange}
                                />
                            
                        </label>

                        <br></br>

                        <label className="w-[100%] flex flex-row justify-center text-center
                        label_field
                        bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                        
                        ">
                            <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                Type
                            </span>

                            <input className="w-full input_field border-0 rounded-r-[6px] 
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                border-[rgba(255,255,255,0.02)]" type="text" required
                                placeholder="apartment, villa, office etc."
                                name="property_type" value={property.property_type} onChange={handleChange}

                                />
                            
                        </label>

                        <label className="w-[100%] flex flex-row justify-center text-center
                        label_field
                        bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                        
                        ">
                            <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                Area
                            </span>

                            <input className="w-full input_field border-0 rounded-r-[6px] 
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                border-[rgba(255,255,255,0.02)]" type="text" required
                                placeholder="in sqm"
                                name="property_area" value={property.property_area} onChange={handleChange}

                                />
                            
                        </label>

                        <div className="w-full flex flex-row">
                            <label className="w-[50%] flex flex-row justify-center text-center
                            label_field
                            bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                            
                            ">
                                <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                    Bedrooms
                                </span>

                                <input className="w-full input_field border-0 rounded-r-[6px] 
                                    dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                    border-[rgba(255,255,255,0.02)]" type="number" required
                                    min={1} max={10}
                                    name="property_beds" value={property.property_beds} onChange={handleChange}
                                    />
                                
                            </label>

                            <label className="w-[50%] flex flex-row justify-center text-center
                            label_field
                            bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                        
                        ">
                            <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                Bathrooms
                            </span>

                            <input className="w-full input_field border-0 rounded-r-[6px] 
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                border-[rgba(255,255,255,0.02)]" type="number" required
                                min={1} max={10}
                                name="property_baths" value={property.property_baths} onChange={handleChange}

                                />
                            
                            </label>
                        </div>

                        <br></br>

                        <label className="w-[100%] flex flex-row justify-center text-center
                        label_field
                        bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                        
                        ">
                            <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                Listing Type
                            </span>

                            <input className="w-full input_field border-0 rounded-r-[6px] 
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                border-[rgba(255,255,255,0.02)]" type="text" required
                                placeholder="rent, sale, etc."
                                name="property_listing_type" value={property.property_beds} onChange={handleChange}
                                />
                            
                        </label>

                        <label className="w-[100%] flex flex-row justify-center text-center
                        label_field
                        bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                        
                        ">
                            <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                Price
                            </span>

                            <input className="w-full input_field border-0 rounded-r-[6px] 
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                border-[rgba(255,255,255,0.02)]" type="number" required
                                placeholder=""
                                name="property_price" value={property.property_price} onChange={handleChange}
                                />
                            
                        </label>

                        <div className="flex flex-row label_field 
                        rounded-[7px] w-full border-2  bg-[#ffffff07] border-[#ffffff02]
                        items-center">
                        <span className="text-center min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                Available
                            </span>

                            <label className="flex flex-row justify-center text-center gap-2 px-2
                            
                            ">
                                Yes
                            <input className="
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]
                                border-[rgba(255,255,255,0.02)]" type="radio" required
                                />
                            
                            </label>

                            <label className="flex flex-row justify-center text-center gap-2 px-2
                            ">
                                No
                            <input className="
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]
                                border-[rgba(255,255,255,0.02)]" type="radio" required
                                />
                            
                            </label>
                        </div>

                        <div className="flex flex-row label_field 
                        rounded-[7px] w-full border-2  bg-[#ffffff07] border-[#ffffff02]
                        items-center">
                        <span className="text-center min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                Favorite
                            </span>

                            <label className="flex flex-row justify-center text-center gap-2 px-2
                            
                            ">
                                Yes
                            <input className="
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]
                                border-[rgba(255,255,255,0.02)]" type="radio" required
                                />
                            
                            </label>

                            <label className="flex flex-row justify-center text-center gap-2 px-2
                            ">
                                No
                            <input className="
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]
                                border-[rgba(255,255,255,0.02)]" type="radio" required
                                />
                            
                            </label>
                        </div>

                        <br></br>

                        <label className="w-[100%] flex flex-row justify-center text-center
                        label_field
                        bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                        
                        ">
                            <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                Add Images
                            </span>

                            <input className="w-full input_field border-0 rounded-r-[6px] 
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2
                                border-[rgba(255,255,255,0.02)]" type="file"
                                placeholder=""/>
                            
                        </label>

                        <label className="w-[100%] flex flex-col gap-2
                        
                        ">
                            <span>Property Description</span>
                            <textarea className="w-[100%] label_field px-4 py-2
                            bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                            resize-none"
                            rows={6} placeholder="describe your property"
                            name="property_description" value={property.property_description} onChange={handleChange}

                            >

                            </textarea>
                        </label>


                        <div className="mt-4 w-[80%] flex">
                                <button type="submit" className="
                                bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                                rounded-[9px] py-1 px-3 w-full
                                opacity-80 hover:opacity-90 mx-auto">
                                    Apply Changes
                                </button>
                        </div>

                    </form>


                </div>
    
            
            </div>
        
        
        ) : ("")}
        </>
      )
}

export default PropertyEdit_Component