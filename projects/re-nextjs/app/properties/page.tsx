"use client";
// import React from 'react'

import Link from "next/link";
import Image from "next/image";

import PropertyCard from "@components/Home/HomeMain/PropertyCard";
import { PropertyDocument } from "@models/propertyModel";
import { useState, useEffect } from "react";

// interface propertyInterface {

//     property_images : string[],        
//     property_id : number,

//     property_country: string,
//     property_city: string,
//     property_district: string,

//     property_type: string,
//     property_area: number,
//     property_beds: number,
//     property_baths: number,
    
//     property_listing_type: string,
//     property_availability: boolean,
//     property_recommended: boolean,
//     property_price: number,
  
//   }

  
const page = () => {


    // let properties: propertyInterface[] = [
    //     {
    //         property_images : ["/images/furniture.avif", "/images/logo.svg"],        
    //         property_id : 1,

    //         property_country: "Egypt",
    //         property_city: "Giza",
    //         property_district: "Zayed",

    //         property_type: "Apartment",
    //         property_area: 110,
    //         property_beds: 2,
    //         property_baths: 1,
            
    //         property_listing_type: "rent",
    //         property_availability: true,
    //         property_recommended: true,
    //         property_price: 6000,

    //     },
     
    //     {
    //         property_images : ["/images/furniture.avif", "/images/logo.svg"],        
    //         property_id : 1,

    //         property_country: "Egypt",
    //         property_city: "Giza",
    //         property_district: "Zayed",

    //         property_type: "Apartment",
    //         property_area: 110,
    //         property_beds: 2,
    //         property_baths: 1,
            
    //         property_listing_type: "rent",
    //         property_availability: true,
    //         property_recommended: true,
    //         property_price: 6000,

    //     },

    //     {
    //         property_images : ["/images/furniture.avif", "/images/logo.svg"],        
    //         property_id : 1,

    //         property_country: "Egypt",
    //         property_city: "Giza",
    //         property_district: "Zayed",

    //         property_type: "Apartment",
    //         property_area: 110,
    //         property_beds: 2,
    //         property_baths: 1,
            
    //         property_listing_type: "rent",
    //         property_availability: true,
    //         property_recommended: true,
    //         property_price: 6000,

    //     },

    //     {
    //         property_images : ["/images/furniture.avif", "/images/logo.svg"],        
    //         property_id : 1,

    //         property_country: "Egypt",
    //         property_city: "Giza",
    //         property_district: "Zayed",

    //         property_type: "Apartment",
    //         property_area: 110,
    //         property_beds: 2,
    //         property_baths: 1,
            
    //         property_listing_type: "rent",
    //         property_availability: true,
    //         property_recommended: true,
    //         property_price: 6000,

    //     },

    //     {
    //         property_images : ["/images/furniture.avif", "/images/logo.svg"],        
    //         property_id : 1,

    //         property_country: "Egypt",
    //         property_city: "Giza",
    //         property_district: "Zayed",

    //         property_type: "Apartment",
    //         property_area: 110,
    //         property_beds: 2,
    //         property_baths: 1,
            
    //         property_listing_type: "rent",
    //         property_availability: true,
    //         property_recommended: true,
    //         property_price: 6000,

    //     },

    // ];

// let properties: propertyInterface[] = [
  //   {
  //       property_images : ["/images/furniture.avif", "/images/logo.svg"],        
  //       property_id : 1,

  //       property_country: "Egypt",
  //       property_city: "Giza",
  //       property_district: "Zayed",

  //       property_type: "Apartment",
  //       property_area: 110,
  //       property_beds: 2,
  //       property_baths: 1,
        
  //       property_listing_type: "rent",
  //       property_availability: true,
  //       property_recommended: true,
  //       property_price: 6000,

  //   },
 
  //   {
  //       property_images : ["/images/furniture.avif", "/images/logo.svg"],        
  //       property_id : 1,

  //       property_country: "Egypt",
  //       property_city: "Giza",
  //       property_district: "Zayed",

  //       property_type: "Apartment",
  //       property_area: 110,
  //       property_beds: 2,
  //       property_baths: 1,
        
  //       property_listing_type: "rent",
  //       property_availability: true,
  //       property_recommended: true,
  //       property_price: 6000,

  //   },

  //   {
  //       property_images : ["/images/furniture.avif", "/images/logo.svg"],        
  //       property_id : 1,

  //       property_country: "Egypt",
  //       property_city: "Giza",
  //       property_district: "Zayed",

  //       property_type: "Apartment",
  //       property_area: 110,
  //       property_beds: 2,
  //       property_baths: 1,
        
  //       property_listing_type: "rent",
  //       property_availability: true,
  //       property_recommended: true,
  //       property_price: 6000,

  //   },

  //   {
  //       property_images : ["/images/furniture.avif", "/images/logo.svg"],        
  //       property_id : 1,

  //       property_country: "Egypt",
  //       property_city: "Giza",
  //       property_district: "Zayed",

  //       property_type: "Apartment",
  //       property_area: 110,
  //       property_beds: 2,
  //       property_baths: 1,
        
  //       property_listing_type: "rent",
  //       property_availability: true,
  //       property_recommended: true,
  //       property_price: 6000,

  //   },

  //   {
  //       property_images : ["/images/furniture.avif", "/images/logo.svg"],        
  //       property_id : 1,

  //       property_country: "Egypt",
  //       property_city: "Giza",
  //       property_district: "Zayed",

  //       property_type: "Apartment",
  //       property_area: 110,
  //       property_beds: 2,
  //       property_baths: 1,
        
  //       property_listing_type: "rent",
  //       property_availability: true,
  //       property_recommended: true,
  //       property_price: 6000,

  //   },

  // ];
    
  
  
  // let property = properties[0];
  
  

  // function fadeOutAnimation (slider__container: any) {


  //   //[fadeOut]
  //   slider__container?.classList.add("fadeOut_animation");
    
  // }
  
  // function delayAnimation (slider__container: any){
  //   //give [delay], after fadeOut(600ms) finishes
  //   setTimeout(()=> {
  //       handleSliderIndex(fade1);
  
  //   },600);
  // }
  
  // function handleSliderIndex (direction: number) {
  
  //   if (direction < prevFade1) {
  //       // console.log("left");
  //       (imageReference > 0) ? setImageReference(imageReference-1) : setImageReference(property.property_images.length-1);
  //       // setPrevFade1(fade1);
  //       // setImageReference(imageReference-1);

  //   } else if (direction > prevFade1) {
  //       // console.log("right");
  //       (imageReference < property.property_images.length-1) ? setImageReference(sliderIndex1+1) : setImageReference(0);

  //   }
  
  // }
  
  // function fadeInAnimation (slider__container: any) {
  
  //   //[fadeIn] after fadeout(600ms) and delay(200ms) finish
  //   setTimeout(()=> {
  //       slider__container?.classList.add("fadeIn_animation");
  //   },800);
  
  //   //after fadeOut,delay,fadeIn finish, remove to be re-applied
  //   setTimeout(()=> {
  //       slider__container?.classList.remove("fadeOut_animation");
  //       slider__container?.classList.remove("fadeIn_animation");
  //   },1400);
  
  
  
  
  // }
  
  
  
  // function animationCombination1 (slider__container: any) {
  
  //   // //stop current timers to not overlap
  //   // clearInterval(tm.current);
  
  //   fadeOutAnimation(slider__container);
  //   delayAnimation(slider__container); //with handle fade change
    
  //   fadeInAnimation(slider__container);
  
  //   //start the auto animation timer after first render or again after caret click
  //   // tm.current = window.setInterval(() => {
  //   //     // console.log("timer");
  //   //     setPrevFade(fade); setFade(fade-1);
  //   // }, 6000);
  
  // }
  
  

  // let slider1 : propertyInterface;

  // const [prevFade1, setPrevFade1] = useState(0);
  // const [fade1, setFade1] = useState(0);
  // const [sliderIndex1, setSliderIndex1] = useState(0);
  // // slider1 = {...properties[sliderIndex1]};

  // // const propertiesRefCount = useRef(0);
  // const [imageReference, setImageReference] = useState([]);
  // // const [propertiesCounter, setPropertiesCounter] = useState([]);

  // useEffect(()=> {
    
  //   let slider__container = document.querySelector("#property_slider__container");        
  //   animationCombination1(slider__container);

  // },[fade1]);


  
  const [properties, setProperties] = useState<PropertyDocument[]>([]);

  //04.01
  useEffect(()=> {

    const fetchProperties = async () => {
      const response = await fetch("/api/properties/homePage");
      const jsonResponse = await response.json();
      // console.log(jsonResponse);

      setProperties(jsonResponse);
    }

    fetchProperties();
  }, []);



  return (


    <div className="flex flex-col pb-6 pt-28 px-4 md2:px-8 items-center">


    <div className="max-w-[1230px] w-full">

    <div className="dark:text-white text-black text-shadow-3 w-full text-xs flex flex-row gap-1 opacity-70">
        
        <Link className=""href="/">Home</Link>
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
        <div className="flex flex-row gap-6 my-6 flex-wrap justify-center md:justify-start mx-auto last-of-type:mr-auto">

            {/* post */}
            {properties.length > 0 ? (
            <>
                {properties.map((property) => (
                <div className="h-auto w-full max-w-[390px] md:w-[calc(50%-16px)] md2:w-[calc(33.3%-16px)]">
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