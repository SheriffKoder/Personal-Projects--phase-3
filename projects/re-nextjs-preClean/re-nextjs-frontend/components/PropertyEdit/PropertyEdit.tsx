// import React from 'react'
"use client";

import { bodyScroll, hideEdit } from "@utils/bodyNoScroll";
import { useEffect } from "react";
import Link from "next/link";

interface propertyInterface {

    property_images : string[],        
    property_id : number,

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
    property_author: string,
    property_description: string,
  
  }


const PropertyEdit_Component = () => {

    let properties: propertyInterface[] = [
        {
            property_images : ["/images/furniture.avif", "/images/logo.svg"],        
            property_id : 1,

            property_country: "Egypt",
            property_city: "Giza",
            property_district: "Zayed",

            property_type: "Apartment",
            property_area: 110,
            property_beds: 2,
            property_baths: 1,
            
            property_listing_type: "rent",
            property_availability: true,
            property_recommended: true,
            property_price: 6000,

            property_date: "25 Dec 2023",
            property_update: "26 Dec 2023",
            property_author: "John",
            property_description: "World Class property in a friendly neighborhood contains all facilities"

        },
        
        {
            property_images : ["/images/furniture.avif", "/images/logo.svg"],        
            property_id : 1,

            property_country: "Egypt",
            property_city: "Giza",
            property_district: "Zayed",

            property_type: "Apartment",
            property_area: 110,
            property_beds: 2,
            property_baths: 1,
            
            property_listing_type: "rent",
            property_availability: true,
            property_recommended: true,
            property_price: 7000,

            property_date: "25 Dec 2023",
            property_update: "26 Dec 2023",
            property_author: "John",
            property_description: "World Class property in a friendly neighborhood contains all facilities"


        },

        {
            property_images : ["/images/furniture.avif", "/images/logo.svg"],        
            property_id : 1,

            property_country: "Egypt",
            property_city: "Giza",
            property_district: "Zayed",

            property_type: "Apartment",
            property_area: 110,
            property_beds: 2,
            property_baths: 1,
            
            property_listing_type: "rent",
            property_availability: true,
            property_recommended: true,
            property_price: 8000,

            property_date: "25 Dec 2023",
            property_update: "26 Dec 2023",
            property_author: "John",
            property_description: "World Class property in a friendly neighborhood contains all facilities"


        },

        {
            property_images : ["/images/furniture.avif", "/images/logo.svg"],        
            property_id : 1,

            property_country: "Egypt",
            property_city: "Giza",
            property_district: "Zayed",

            property_type: "Apartment",
            property_area: 110,
            property_beds: 2,
            property_baths: 1,
            
            property_listing_type: "rent",
            property_availability: true,
            property_recommended: true,
            property_price: 9000,

            property_date: "25 Dec 2023",
            property_update: "26 Dec 2023",
            property_author: "John",
            property_description: "World Class property in a friendly neighborhood contains all facilities"


        },

        {
            property_images : ["/images/furniture.avif", "/images/logo.svg"],        
            property_id : 1,

            property_country: "Egypt",
            property_city: "Giza",
            property_district: "Zayed",

            property_type: "Apartment",
            property_area: 110,
            property_beds: 2,
            property_baths: 1,
            
            property_listing_type: "rent",
            property_availability: true,
            property_recommended: true,
            property_price: 10000,

            property_date: "25 Dec 2023",
            property_update: "26 Dec 2023",
            property_author: "John",
            property_description: "World Class property in a friendly neighborhood contains all facilities"


        },

    ];



    useEffect (() => {
        // let LoginComponent = document.getElementById("signIn__container");

        // LoginComponent!.style.display = "flex";
            
    },[])
        

    return (
        
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
                            onClick={()=> {hideEdit("Edit"); bodyScroll();}}
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
                    w-[90%] md:px-[5%]">

                        <label className="w-[100%] flex flex-row justify-center text-center
                        label_field
                        bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                        
                        ">
                            <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                Country
                            </span>

                            <input className="w-full input_field border-0 rounded-r-[6px] 
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                border-[rgba(255,255,255,0.02)]" type="text" required/>
                            
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
                                border-[rgba(255,255,255,0.02)]" type="text" required/>
                            
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
                                border-[rgba(255,255,255,0.02)]" type="text" required/>
                            
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
                                placeholder="apartment, villa, office etc."/>
                            
                        </label>

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
                                placeholder="in sqm"/>
                            
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
                                placeholder="rent, sale, etc."/>
                            
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
                                placeholder=""/>
                            
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
                                border-[rgba(255,255,255,0.02)]" type="file" required
                                placeholder=""/>
                            
                        </label>

                        <label className="w-[100%] flex flex-col gap-2
                        
                        ">
                            <span>Property Description</span>
                            <textarea className="w-[100%] label_field px-4 py-2
                            bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                            resize-none"
                            rows={6} placeholder="describe your property"
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
      )
}

export default PropertyEdit_Component