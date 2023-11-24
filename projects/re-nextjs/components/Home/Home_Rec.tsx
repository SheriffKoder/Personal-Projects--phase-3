// import React from 'react'

"use client";

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react";

interface propertyInterface {

    property_image : string,
    property_title : string,

    property_beds : number,
    property_baths : number,
    property_area : number,
    property_location : string,
    property_type : string,
    property_listing_type : string


}


const Home_Rec = () => {

    let slider__container = document.querySelector("#slider__container");

    // let property_image = "/images/furniture.avif"
    // let property_title = "furniture"

    // let property_beds = "3";
    // let property_baths = "2";
    // let property_area = "190";
    // let property_location = "NYC";
    // let property_type = "apartment"
    // let property_listing_type = "rent"

    let properties: propertyInterface[] = [
        {
            property_image : "/images/furniture.avif",
            property_title : "furniture",
        
            property_beds : 3,
            property_baths : 2,
            property_area : 190,
            property_location : "NYC",
            property_type : "apartment",
            property_listing_type : "rent"
        },
        {
            property_image : "/images/furniture.avif",
            property_title : "furniture",
        
            property_beds : 2,
            property_baths : 1,
            property_area : 110,
            property_location : "NYC",
            property_type : "apartment",
            property_listing_type : "sale"
        }
    ];



    let [sliderIndex, setSliderIndex] = useState(0);
    let slider : propertyInterface;
    slider = {...properties[sliderIndex]};
    let clearInitialTimer0: any;
    let clearInitialTimer1 : any;
    let clearInitialTimer2: any;

    clearInitialTimer0 = setTimeout(()=> {
        slider__container?.classList.add("slideAnimation");

        clearInitialTimer1 = setTimeout(()=> {

            // console.log(slider__container);
            slider = {...properties[sliderIndex]};

            if (sliderIndex < properties.length-1) {
                setSliderIndex(sliderIndex+1);
    
            } else {
                setSliderIndex(0);
            }

            clearInitialTimer2 = setTimeout(()=> {
                slider__container?.classList.remove("slideAnimation");
            }, 500);

        }, 650);

    },5000);


    function caretChange() {

        clearTimeout(clearInitialTimer0);
        clearTimeout(clearInitialTimer1);
        clearTimeout(clearInitialTimer2);
        // slider__container?.classList.add("slideAnimation");

        
        setTimeout(()=> {

        },5000);

    }

    useEffect(()=> {

        
    });


  return (
    <div id="rec" className="w-full h-auto border-[#ffffff15] mt-24 px-6">

        <h2 className="text-white text-[min(calc(1rem+2vw),(2.5rem))] font-semibold  mb-12
        text-center">
            Our Recommendations
        </h2>

        <div className="flex flex-row items-center justify-center gap-8">
            <button 
                onClick={()=>{setSliderIndex(sliderIndex-1)}}
                className="bg-[url('/icons/arrow-left.svg')] h-10 w-10 bg-no-repeat bg-contain">
            </button>

            {/* maintain 16:9 aspect ratio */}
            <div className="rounded-[17px] border-0
            w-[calc(16*6vmin)] lg:h-[calc(9*6vmin)] h-[calc(9*5vmin)] 
            max-h-[80%] max-w-[80%]
            relative 
            "
            id="slider__container">
                <Image src={slider.property_image} fill={true} alt={slider.property_title}
                className="rounded-[17px] border-0 opacity-50"></Image>

                <div className=" flex flex-col justify-start absolute bottom-0 left-0 
                w-full bg-[#0000005d] p-[min(calc(1rem+0.5vw),(2rem))] text-white box-shadow-1
                text-[min(calc(0.5rem+0.5vw),(1.25rem))] capitalize rounded-b-[17px]">
                    <div>{slider.property_type} in {slider.property_location} for {slider.property_listing_type} </div>
                    <div>{slider.property_area}m<sup>2</sup>, {slider.property_beds} beds, {slider.property_baths} baths </div>
                </div>

            </div>

            <button 
                onClick={()=>{caretChange();}}
                className="bg-[url('/icons/arrow-right.svg')] h-10 w-10 bg-no-repeat bg-contain">
            </button> 

        </div>
    </div>
  )
}

export default Home_Rec