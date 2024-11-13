// import React from 'react'

// this is the recommended properties slider on the home page

"use client";

import Image from "next/image"
import { useEffect, useRef, useState } from "react";


import { PropertyDocument } from "@models/propertyModel";
import Link from "next/link";


const Home_Rec = () => {

    // remove the class after a slight delay to avoid remove/add overlap
    function FadeControl (element:Element) {
        element.classList.add("fade");

        setTimeout(()=>{
            element.classList.remove("fade");

        },1000);

    }

    function changeImageForward () {
        let slider = document.querySelector(".LunSlider");

        if (slider) {
          let img = slider.querySelector("a:first-child");
          if (img) {
            slider.append(img);

            // add fade animation to the content that will be displayed
            let currentImg = slider.querySelector("a:first-child");
            if (currentImg) FadeControl(currentImg);

        }
        }
      }
        
      function changeImageBackward () {
        let slider = document.querySelector(".LunSlider");
        if (slider) {
          let img = slider.querySelector("a:last-child");
          if (img) {
            slider.prepend(img); 
            let currentImg = slider.querySelector("a:first-child");
            if (currentImg) FadeControl(currentImg);
          };
        }
      }

      function animationCombination () {

        // //stop current timers to not overlap
        stopTimer();

        //start the auto animation timer after first render or again after caret click
        startTimer();

    }


    function stopTimer () {
        clearInterval(tm.current);

    }

    function startTimer () {
        tm.current = window.setInterval(() => {
            // console.log("timer");
            changeImageForward();
        }, 5000);
    }

    

    //04.01
    const [propertiesRec, setPropertiesRec] = useState<PropertyDocument[] | []>([]);
    // const [sliderIndex, setSliderIndex] = useState(0);

    const tm = useRef(0);
    const forwardButton = useRef(null);
    const backButton = useRef(null);


    // fetch recommended properties on component load
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

            // console.log("Rec Properties");
            // console.log(jsonResponseRec);
            setPropertiesRec(jsonResponseRec);
        
        }

        //as the useEffect triggers on first load AND fade state (set by timer or buttons)
        //we do not want to fetch properties again if there are
        //if there are properties, just set the timer to animate and change the property index
        if (propertiesRec.length < 1) {
            fetchProperties();  
            animationCombination();
        }

        if (propertiesRec.length > 1) {
            animationCombination();    
        } 



    // },[fade]);

    // return stopTimer();
    },[]);


  return (
    <>
    {propertiesRec?.length > 0 ? (
    <div id="rec" className="relative w-full md:mx-auto h-auto border-[#ffffff15]
    md2:pb-20
    "
    aria-label="recommended properties">

        {/* title */}
        <h2 className="text-white text-[min(calc(1rem+2vw),(2.5rem))] font-semibold
        text-center text_shadow-2">
        </h2>

        <h2 className=" text-[min(calc(1rem+2vw),(3.5rem))] font-semibold
            text-center text_shadow-3 mb-[1.5rem] text-[#000000b3] dark:text-[#ffffffb0]">
            Our Recommendations
        </h2>

        <div className="md2:p-2 bg-[#fffffff3] relative dark:bg-[rgba(255,255,255,0.03)] rounded-[17px]
        w-full md2:w-[80vw] mx-auto">

            <div className="absolute w-full h-full rounded-b-[10px] top-0 left-0 z-[0] opacity-10"
            style={{backgroundImage: "url('/images/deco.png')", backgroundSize: "", backgroundPosition: "10px -40px" }}>

            </div>

            {/* arrows and image with info */}
            <div className="h-[70vh] relative flex flex-row gap-4 items-center justify-between 
             mx-auto bg-white rounded-[17px]
            ">
                
                {/* <div className="absolute w-full h-full rounded-b-[10px] top-0 left-0 z-[0] opacity-[0.03]"
                style={{backgroundImage: "url('/images/deco.png')", backgroundSize: "", backgroundPosition: "-10px -40px" }}>

                </div> */}

                <div className="absolute z-[0] h-full w-full
                flex overflow-hidden  LunSlider"
                onMouseEnter={stopTimer} onMouseLeave={animationCombination}
                >
                
                {propertiesRec.map((prop, sliderIndex)=> (
                    //  w-[90vw] rounded-[17px] p-[2px]
                    //  bg-[#ffffff9c] dark:bg-[#68585806] dark:border-[#ffffff05] 
                    //   backdrop-blur-10
                    <Link key={sliderIndex} className="
                    relative min-w-full 
                    "
                    id="slider__container"
                    href={`/properties/single/${propertiesRec[sliderIndex]._id}`}>
                        {/* image */}
                        <Image 
                        src={propertiesRec[sliderIndex].property_images[0]} 
                        fill={true} priority alt={propertiesRec[sliderIndex].property_city}
                        // sizes="(max-width: 470px) 100vw, (max-width: 850px) 100vw"
                        // onMouseEnter={stopTimer} onMouseLeave={startTimer}
                        className=" hover:opacity-95 dark:opacity-100 dark:hover:opacity-95
                        md2:rounded-[10px]
                    "
                        style={{objectFit:'cover'}}></Image>
                        {/* property summarized info */}
                        {/*  */}
                        <div className="absolute bottom-0 left-0 w-full flex items-center justify-start">
                            <div className="  rounded-[10px] mb-4 mx-4
                            dark:bg-[#0000005d] bg-[#f5f5f586] md:bg-transparent md:dark:bg-transparent
                            w-full max-w-[1000px]   text-white
                            text-[min(calc(0.5rem+0.5vw),(1.25rem))] font-normal capitalize">
                                <div className="flex flex-row flex-wrap relative w-full h-full p-3 md:p-[min(calc(1rem+0.5vw),(2rem))]">
                                    {/* <div className="z-[1] relative">{propertiesRec[sliderIndex].property_type} in {propertiesRec[sliderIndex].property_city} for {propertiesRec[sliderIndex].property_listing_type} </div> */}
                                    {/* <div className="z-[1] relative">{propertiesRec[sliderIndex].property_area}m<sup>2</sup>, {propertiesRec[sliderIndex].property_beds} beds, {propertiesRec[sliderIndex].property_baths} baths </div> */}

                                    <div className="md:hidden absolute w-full h-full rounded-b-[5px] top-0 left-0 opacity-20 z-[0]"
                                    style={{backgroundImage: "url('/images/deco.png')", backgroundSize: "", backgroundPosition: "0 -60px" }}>
                                    </div>

                                    <div className="relative flex flex-row flex-wrap gap-[5px] justify-start items-center">
                                        <span className="rounded-full pr-2 flex flex-row h-[1.5rem] md2:h-[2rem] items-center justify-center bg-[#ffffffc1] dark:bg-[#252525] text-black dark:text-[#e0e0e0]">
                                            <span className="rounded-full h-full pl-1 py-[0.125rem] lg:pt-0 lg:pb-[0.25rem] px-2 md2:px-4 lg:flex flex-col justify-center bg-[#ab2546] dark:bg-[#171717] text-white dark:text-white">{propertiesRec[sliderIndex].property_city}</span>
                                            <span className="pl-1 py-[0.125rem] lg:pt-0 lg:pb-[0.25rem] pr-1 md2:px-2 lg:flex flex-col justify-center">{propertiesRec[sliderIndex].property_district}</span>
                                        </span>

                                        {/* <div className="mt-1 lg:mt-0 lg:flex flex-row justify-center lg:ml-2"> */}
                                        <span className="rounded-full pr-2 flex flex-row h-[1.5rem] md2:h-[2rem] items-center justify-center bg-[#ffffffc1] dark:bg-[#252525af] text-black dark:text-[#e0e0e0]">
                                            <span className="rounded-full h-full pl-1 py-[0.125rem] lg:pt-0 lg:pb-[0.25rem] px-2 md2:px-4 lg:flex flex-col justify-center bg-[#ab2546] dark:bg-[#171717] text-white dark:text-white">{propertiesRec[sliderIndex].property_type}</span>
                                            <span className="pl-1 py-[0.25rem] lg:pt-0 lg:pb-[0.25rem] lg:flex flex-col justify-center pr-1 md2:px-2">{propertiesRec[sliderIndex].property_listing_type}</span>
                                        </span>
                                            <span className="flex flex-row">
                                                <span className="h-[1.5rem] md2:h-[2rem] rounded-full pl-1 py-[0.125rem] lg:pt-0 lg:pb-[0.25rem] px-2 md2:px-4 lg:flex flex-col justify-center bg-[#ab2546] dark:bg-[#171717] text-white dark:text-white mr-1">Beds {propertiesRec[sliderIndex].property_beds}</span>
                                                <span className="h-[1.5rem] md2:h-[2rem] rounded-full pl-1 py-[0.125rem] lg:pt-0 lg:pb-[0.25rem] px-2 md2:px-4 lg:flex flex-col justify-center bg-[#ab2546] dark:bg-[#171717] text-white dark:text-white">Baths {propertiesRec[sliderIndex].property_baths}</span>
                                            </span>
                                        {/* </div> */}
                                    </div>


                                </div>

                            </div>
                        </div>

                    </Link>
                ))}


                    
                </div>


                    <button ref={backButton}
                    onClick={changeImageBackward}
                    onMouseEnter={stopTimer} onMouseLeave={animationCombination}
                    className="relative z-[1] ml-6 md2:ml-12 bg-[#0a0a0a7d]  rounded-[3px]
                    bg-[url('/icons/arrow-left.svg')] md2:h-14 md2:w-14 h-7 w-7 bg-no-repeat bg-contain">
                    </button>

                    
                    <button ref={forwardButton}
                    onClick={changeImageForward}
                    onMouseEnter={stopTimer} onMouseLeave={animationCombination}
                    className="relative z-[1] mr-6 md2:mr-12 bg-[#0a0a0a7d] rounded-[3px]
                    bg-[url('/icons/arrow-right.svg')] md2:h-14 md2:w-14 h-7 w-7 bg-no-repeat bg-contain">
                    </button>
    

    






            </div>
        </div>

    </div>
    ) : ("")}
    </>
  )
}

export default Home_Rec;