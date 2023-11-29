// import React from 'react'

import Link from "next/link";
import Image from "next/image";

import PropertyCard from "@components/Home/HomeMain/PropertyCard";

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
  
  }

  
const page = () => {


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
            property_price: 6000,

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
            property_price: 6000,

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
            property_price: 6000,

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
            property_price: 6000,

        },

    ];
        
  return (


    <div className="flex flex-col pb-6 pt-28 px-4 md2:px-8 items-center">


    <div className="max-w-[1230px] w-full">

    <div className="dark:text-white text-black text-shadow-3 w-full text-xs flex flex-row gap-1 opacity-70">
        
        <Link className=""href="/#home-news">Home</Link>
        >
        <span className="text-theme-text-brighter">Properties</span>
    </div>

    <div className="bg-white rounded-[17px]
    glass-container-background-2 min-w-[100%]
    border backdrop-blur-10 pt-4 pb-4 px-4 mt-8
    dark:bg-[#68585806] dark:border-[#ffffff05]
    text-[#000000b3] dark:text-[#ffffffb0] text-center text-l flex flex-row gap-2
    items-center text-sm
    ">

        <label className="w-[100%] flex flex-row justify-center text-center
        label_field
        bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
        
        ">
            <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                search
            </span>
            
            <input className="w-full border-0 rounded-r-[6px] 
                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                border-[rgba(255,255,255,0.02)]" type="password"
            />
            
        </label>
        <span className="ml-2 px-2 py-1 dark:bg-text-accent-dark bg-theme-text-brighter opacity-75 text-white rounded-[3px] flex items-center justify-center">
            Filter
        </span>

        {/* <div className="flex flex-row gap-1 uppercase text-sm">
            <span className="px-2 bg-text-accent-dark rounded-[3px] flex items-center justify-center">Type</span>
            <span className="px-2 bg-text-accent-dark rounded-[3px] flex items-center justify-center">Bedrooms</span>
            <span className="px-2 bg-text-accent-dark rounded-[3px] flex items-center justify-center">Area</span>
            <span className="px-2 bg-text-accent-dark rounded-[3px] flex items-center justify-center">Country</span>
            <span className="px-2 bg-text-accent-dark rounded-[3px] flex items-center justify-center">City</span>
            <span className="px-2 bg-text-accent-dark rounded-[3px] flex items-center justify-center">District</span>
            <span className="px-2 bg-text-accent-dark rounded-[3px] flex items-center justify-center">Price</span>

        </div> */}
    </div>

    <div className="bg-white rounded-[17px]
    glass-container-background-2 min-w-[100%]
    border backdrop-blur-10 pt-7 pb-8 px-4 mt-8
    dark:bg-[#68585806] dark:border-[#ffffff05]
    text-[#000000b3] dark:text-[#ffffffb0] text-center text-l flex flex-col gap-1
    ">
        
        {/* here are the posts */}
        <h4 className="text_shadow-3">All properties</h4>

        {/* posts container */}
        <div className="flex flex-row gap-6 my-6 flex-wrap justify-center md:justify-start mx-auto">

            {/* post */}
            {properties ? (
            <>
                {properties.map((property) => (
                <div className="h-auto w-full max-w-[375px] md:w-[47%] md2:w-[31.5%] xl:max-w-[390px] xl:w-[31.9%]">
                    <PropertyCard {...property}/>
                </div>
                )
                )}
            </>
            ) : (
            <><h1 className="text_shadow-3">No Properties</h1></>
            )
            }

        </div>
        
    </div>

    </div>

    </div>

)
}

export default page