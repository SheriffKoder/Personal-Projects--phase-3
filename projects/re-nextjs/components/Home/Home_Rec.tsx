// import React from 'react'

"use client";

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import { func } from "prop-types";

interface propertyInterface {

    property_image : string,
    property_title : string,
    property_id : number,

    property_beds : number,
    property_baths : number,
    property_area : number,
    property_location : string,
    property_type : string,
    property_listing_type : string,
    property_recommended: boolean


}


const Home_Rec = () => {

    let properties: propertyInterface[] = [
        {
            property_image : "/images/furniture.avif",
            property_title : "furniture",
            property_id : 1,
        
            property_beds : 3,
            property_baths : 2,
            property_area : 190,
            property_location : "NYC",
            property_type : "apartment",
            property_listing_type : "rent",
            property_recommended: true,

        },
        {
            property_image : "/images/furniture.avif",
            property_title : "furniture",
            property_id : 2,

        
            property_beds : 2,
            property_baths : 1,
            property_area : 110,
            property_location : "NYC",
            property_type : "apartment",
            property_listing_type : "sale",
            property_recommended: true,
        }
    ];

    let slider : propertyInterface;


    function fadeOutAnimation (slider__container: any) {


        //[fadeOut]
        slider__container?.classList.add("fadeOut_animation");
        
    }

    function delayAnimation (slider__container: any){
        //give [delay], after fadeOut(600ms) finishes
        setTimeout(()=> {
            handleSliderIndex(fade);

        },600);
    }

    function handleSliderIndex (direction: number) {

        if (direction < prevFade) {
            // console.log("left");
            (sliderIndex > 0) ? setSliderIndex(sliderIndex-1) : setSliderIndex(properties.length-1);
            setPrevFade(fade);
        } else if (direction > prevFade) {
            // console.log("right");
            (sliderIndex < properties.length-1) ? setSliderIndex(sliderIndex+1) : setSliderIndex(0);

        }

    }




    function fadeInAnimation (slider__container: any) {

        //[fadeIn] after fadeout(600ms) and delay(200ms) finish
        setTimeout(()=> {
            slider__container?.classList.add("fadeIn_animation");
        },800);

        //after fadeOut,delay,fadeIn finish, remove to be re-applied
        setTimeout(()=> {
            slider__container?.classList.remove("fadeOut_animation");
            slider__container?.classList.remove("fadeIn_animation");
        },1400);




    }



    function animationCombination (slider__container: any) {

        // //stop current timers to not overlap
        stopTimer();

        fadeOutAnimation(slider__container);
        delayAnimation(slider__container); //with handle fade change
        
        fadeInAnimation(slider__container);

        //start the auto animation timer after first render or again after caret click
        startTimer();

    }


    function stopTimer () {
        clearInterval(tm.current);

    }

    function startTimer () {
        tm.current = window.setInterval(() => {
            // console.log("timer");
            setPrevFade(fade); setFade(fade-1);
        }, 6000);
    }



    const [prevFade, setPrevFade] = useState(0);
    const [fade, setFade] = useState(0);
    const [sliderIndex, setSliderIndex] = useState(0);
    slider = {...properties[sliderIndex]};
    
    const tm = useRef(0);

    
    useEffect(()=> {
        
        let slider__container = document.querySelector("#slider__container");        
        animationCombination(slider__container);

    },[fade]);


  return (
    <div id="rec" className="w-full h-auto border-[#ffffff15] mt-24 px-6"
    aria-label="recommended properties">

        <h2 className="text-white text-[min(calc(1rem+2vw),(2.5rem))] font-semibold  mb-12
        text-center text_shadow-2">
            Our Recommendations
        </h2>

        <div className="flex flex-row items-center justify-center gap-8">
            <button 
                onClick={()=>{setPrevFade(fade); setFade(fade-1);}}
                // onClick={()=>{prevFade=fade; fade=fade-1; animationCombination(slider__container);}}
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
                onMouseEnter={stopTimer} onMouseLeave={startTimer}
                className="rounded-[17px] border-0 opacity-90 hover:opacity-100 dark:opacity-75 dark:hover:opacity-90"></Image>

                <div className=" flex flex-col justify-start absolute bottom-0 left-0 
                w-full bg-[#0000005d] p-[min(calc(1rem+0.5vw),(2rem))] text-white box-shadow-1
                text-[min(calc(0.5rem+0.5vw),(1.25rem))] capitalize rounded-b-[17px]">
                    <div>{slider.property_type} in {slider.property_location} for {slider.property_listing_type} </div>
                    <div>{slider.property_area}m<sup>2</sup>, {slider.property_beds} beds, {slider.property_baths} baths </div>
                </div>

            </div>

            <button 
                onClick={()=>{setPrevFade(fade); setFade(fade+1);}}
                // onClick={()=>{prevFade=fade; fade=fade+1; animationCombination(slider__container);}}
                className="bg-[url('/icons/arrow-right.svg')] h-10 w-10 bg-no-repeat bg-contain">
            </button> 

        </div>
    </div>
  )
}

export default Home_Rec