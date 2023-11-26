"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRef } from "react";

interface propertyInterface {

    property_images : string[],
    property_title : string,
    property_id : number,
  
    property_beds : number,
    property_baths : number,
    property_area : number,
    property_location : string,
    property_type : string,
    property_listing_type : string,
    property_recommended: boolean,
    property_price: number,
  
  
}

// let properties: propertyInterface[] = [
//     {
//         property_images : ["/images/furniture.avif", "/images/logo.svg"],
//         property_title : "furniture",
//         property_id : 1,
    
//         property_beds : 3,
//         property_baths : 2,
//         property_area : 190,
//         property_location : "NYC",
//         property_type : "apartment",
//         property_listing_type : "rent",
//         property_recommended: true,
  
//     },
//     {
//         property_images : ["/images/furniture.avif", "/images/logo.svg"],
//         property_title : "furniture",
//         property_id : 2,
  
    
//         property_beds : 2,
//         property_baths : 1,
//         property_area : 110,
//         property_location : "NYC",
//         property_type : "apartment",
//         property_listing_type : "sale",
//         property_recommended: true,
//     }
// ];


// import React from 'react'

const PropertyCard = (property: propertyInterface) => {



    // let property = properties[0];

    function fadeOutAnimation (slider__container: any) {


        //[fadeOut]
        slider__container?.classList.add("fadeOut_animation");
        
    }
    
    function delayAnimation (slider__container: any){
    //give [delay], after fadeOut(600ms) finishes
    setTimeout(()=> {
        handleSliderIndex(fade1);
    
    },600);
    }
    
    function handleSliderIndex (direction: number) {
    
    if (direction < prevFade1) {
        // console.log("left");
        (imageReference > 0) ? setImageReference(imageReference-1) : setImageReference(property.property_images.length-1);
        // setPrevFade1(fade1);
        // setImageReference(imageReference-1);

    } else if (direction > prevFade1) {
        // console.log("right");
        (imageReference < property.property_images.length-1) ? setImageReference(imageReference+1) : setImageReference(0);

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
    
    function animationCombination1 (slider__container: any) {
    
    //prevent the animation from playing on the initial render, plays only on caret icon click
    if (initialRender !== 0 ) {
        // //stop current timers to not overlap
        // clearInterval(tm.current);

        fadeOutAnimation(slider__container);
        delayAnimation(slider__container); //with handle fade change
        
        fadeInAnimation(slider__container);        
    }
    else {
        setInitialRender(initialRender+1);
    }
    
    //start the auto animation timer after first render or again after caret click
    // tm.current = window.setInterval(() => {
    //     // console.log("timer");
    //     setPrevFade(fade); setFade(fade-1);
    // }, 6000);
    
    }
    

    const [prevFade1, setPrevFade1] = useState(0);
    const [fade1, setFade1] = useState(0);
    const [initialRender, setInitialRender] = useState(0);
    // slider1 = {...properties[sliderIndex1]};

    // const propertiesRefCount = useRef(0);
    const [imageReference, setImageReference] = useState(0);
    // const [propertiesCounter, setPropertiesCounter] = useState([]);


    useEffect(()=> {
        let slider__container = document.getElementById(property.property_id.toString());        

        animationCombination1(slider__container);

  },[fade1]);

  // hover:outline hover:outline-[#d6003580] hover:outline-2  hover:outline-offset-1
  // focus:outline focus:outline-[#d6003580] focus:outline-2  focus:outline-offset-1
  // dark:hover:outline-[#d600352c] dark:hover:outline-offset-[0px]
  // dark:focus:outline-[#d600352c] dark:focus:outline-offset-[0px] 


  return (
    <div className="latest_property bg-[#fffffff3] dark:bg-[rgba(255,255,255,0.03)]
                flex flex-col justify-between items-center 
                w-[80%] max-w-[390px] h-auto md:w-[45%]
                xl:flex-row lg:w-[45%]
                rounded-[17px] box-shadow-1 p-1 relative
                border border-[rgba(255,255,255,0.02)]
                dark:opacity-75 dark:hover:opacity-90 opacity-90 hover:opacity-100
                focus:opacity-100 dark:focus:opacity-90
                ">

                <div className="relative flex flex-row items-center text-start">
                  <button 
                    onClick={()=>{setPrevFade1(fade1); setFade1(fade1-1);}}
                    className="absolute bg-[#0a0a0a7d] left-1 rounded-[3px]
                    bg-[url('/icons/arrow-left.svg')] h-4 w-4 bg-no-repeat bg-contain">
                  </button>

                  <Link href={"/posts/"+property.property_id} key={property.property_id}>
                    <Image src={property.property_images[imageReference]} height={300} width={300} alt={property.property_title}
                    id={property.property_id.toString()}
                    className="border-0 rounded-t-[10px] w-full max-h-8.5rem
                    xl:rounded-l-[10px] xl:rounded-tr-none
                    ">
                    </Image>
                  </Link>

                  <button
                    onClick={()=>{setPrevFade1(fade1); setFade1(fade1+1);}}
                    className="absolute bg-[#0a0a0a7d] right-1 rounded-[3px]
                    bg-[url('/icons/arrow-right.svg')] h-4 w-4 bg-no-repeat bg-contain">
                  </button>
                </div>
                

                <Link href={"/posts/"+property.property_id} key={property.property_id}
                className="w-full text_shadow-2">
                  <div className="flex flex-col items-start px-2 py-1 text-sm text-start">
                    <div className="dark:text-[#ffffffde] capitalize">{property.property_type} in {property.property_location}</div>
                    <div className="">with {property.property_beds} beds, {property.property_baths} bath</div>
                    <div className="font-light text-sm">Available for Rent for {property.property_price}</div>
                  </div>
                </Link>

              </div>

  )
}

export default PropertyCard;