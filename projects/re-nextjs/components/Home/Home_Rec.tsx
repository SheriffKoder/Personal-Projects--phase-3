// import React from 'react'

// this is the recommended properties slider on the home page

"use client";

import Image from "next/image"
import { useEffect, useRef, useState } from "react";


import { PropertyDocument } from "@models/propertyModel";

const Home_Rec = () => {


    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

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
            if (propertiesRec !== null)
            (sliderIndex > 0) ? setSliderIndex(sliderIndex-1) : setSliderIndex(propertiesRec.length-1);
            setPrevFade(fade);
        } else if (direction > prevFade) {
            // console.log("right");
            if (propertiesRec !== null)
            (sliderIndex < propertiesRec.length-1) ? setSliderIndex(sliderIndex+1) : setSliderIndex(0);

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
            setPrevFade(fade); setFade(fade+1);
        }, 6000);
    }

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////


    const [prevFade, setPrevFade] = useState(0);
    const [fade, setFade] = useState(0);
    const [sliderIndex, setSliderIndex] = useState(0);
    
    const tm = useRef(0);

    //04.01
    const [propertiesRec, setPropertiesRec] = useState<PropertyDocument[] | []>([]);


    useEffect(()=> {
        
        let slider__container = document.querySelector("#slider__container"); 

        const fetchProperties = async () => {
        const responseRec = await fetch("/api/properties/homePage_rec");
        const jsonResponseRec = await responseRec.json();


        //filter out un-used images slots in every property in the json response
        jsonResponseRec.forEach((property: PropertyDocument) => {
            property.property_images = property.property_images.filter((image: string) => {
                if (image !== "") {
                return image;
                }
            });
        })


        setPropertiesRec(jsonResponseRec);
        

        }

        //as the useEffect triggers on first load AND fade state (set by timer or buttons)
        //we do not want to fetch properties again if there are
        //if there are properties, just set the timer to animate and change the property index
        if (propertiesRec.length < 1) fetchProperties();  animationCombination(slider__container);   

        if (propertiesRec.length > 1) {
            animationCombination(slider__container);    
        } 



    },[fade]);


  return (
    <>
    {propertiesRec?.length > 0 ? (
    <div id="rec" className="w-full md:w-[97vw] md:mx-auto h-auto border-[#ffffff15] mt-24 px-6"
    aria-label="recommended properties">

        {/* title */}
        <h2 className="text-white text-[min(calc(1rem+2vw),(2.5rem))] font-semibold  mb-12
        text-center text_shadow-2">
            Our Recommendations
        </h2>

        {/* arrows and image with info */}
        <div className="flex flex-row items-center justify-center gap-2 md:gap-8 h-[50vw] max-h-[500px] ">
            
            {/* prevFade to determine direction in the animation function */}
            <button 
                onClick={()=>{setPrevFade(fade); setFade(fade-1);}}
                // onClick={()=>{prevFade=fade; fade=fade-1; animationCombination(slider__container);}}
                className="bg-[url('/icons/arrow-left.svg')] h-[3vw] w-[3vw] max-h-[40px] max-w-[40px] 
                min-w-[20px] min-h-[20px] bg-no-repeat bg-contain">
            </button>

            {/* maintain 16:9 aspect ratio */}
            {/* the image and the property summarized info */}
            <div className="rounded-[17px] border-0
            w-full h-[calc(50vw)] max-h-[500px] max-w-[833px]
            relative 
            "
            id="slider__container">

                {/* image */}
                <Image src={propertiesRec[sliderIndex].property_images[0]} fill={true} alt={propertiesRec[sliderIndex].property_city}
                onMouseEnter={stopTimer} onMouseLeave={startTimer}
                className="rounded-[17px] border-0 opacity-90 hover:opacity-100 dark:opacity-75 dark:hover:opacity-90 
                w-full h-[calc(50vw)] max-h-[500px] max-w-[833px]"
                style={{objectFit:'cover'}}></Image>

                {/* property summarized info */}
                <div className=" flex flex-col justify-start absolute bottom-0 left-0 
                w-full bg-[#0000005d] p-[min(calc(1rem+0.5vw),(2rem))] text-white box-shadow-1
                text-[min(calc(0.5rem+0.5vw),(1.25rem))] capitalize rounded-b-[17px]">
                    <div>{propertiesRec[sliderIndex].property_type} in {propertiesRec[sliderIndex].property_city} for {propertiesRec[sliderIndex].property_listing_type} </div>
                    <div>{propertiesRec[sliderIndex].property_area}m<sup>2</sup>, {propertiesRec[sliderIndex].property_beds} beds, {propertiesRec[sliderIndex].property_baths} baths </div>
                </div>

            </div>

            <button 
                onClick={()=>{setPrevFade(fade); setFade(fade+1);}}
                // onClick={()=>{prevFade=fade; fade=fade+1; animationCombination(slider__container);}}
                className="bg-[url('/icons/arrow-right.svg')]                             h-[3vw] w-[3vw] max-h-[40px] max-w-[40px] 
                min-w-[20px] min-h-[20px] bg-no-repeat bg-contain">
            </button> 

        </div>


    </div>
    ) : ("")}
    </>
  )
}

export default Home_Rec;