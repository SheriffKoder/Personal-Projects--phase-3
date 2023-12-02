// import React from 'react'

"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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

    property_date: string,
    property_author: string,
    property_description: string,
  
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

            property_date: "25 Dec 2023",
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
            property_author: "John",
            property_description: "World Class property in a friendly neighborhood contains all facilities"


        },

    ];


    const currentPage : string = "property";

    let thisProperty = properties[0];
  
    let property_title = thisProperty.property_type+" for "+thisProperty.property_listing_type+" in <"+thisProperty.property_country+" "+thisProperty.property_city+" "+thisProperty.property_district+"> "+thisProperty.property_area+"sqm "+thisProperty.property_beds+" bedrooms / "+thisProperty.property_baths+" bathrooms";    

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
    
    if (direction === prevFade1-1) {
        // console.log("left");
        (imageReference > 0) ? setImageReference(imageReference-1) : setImageReference(thisProperty.property_images.length-1);
        // setPrevFade1(fade1);
        // setImageReference(imageReference-1);

    } else if (direction === prevFade1+1) {
        // console.log("right");
        (imageReference < thisProperty.property_images.length-1) ? setImageReference(imageReference+1) : setImageReference(0);

    } else {
        setImageReference(direction)
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
        let slider__container = document.getElementById(thisProperty.property_id.toString());        

        animationCombination1(slider__container);

    },[fade1]);


  return (
    <div className="flex flex-col pb-6 pt-28 px-3">


      <div className="mx-auto max-w-[1230px]">

        <div className="dark:text-white text-black text-shadow-3 w-full text-xs flex flex-row gap-1 opacity-70">
          
          <Link className=""href="/">Home</Link>
          >
          <Link className="" href="/properties">Properties</Link>
          >
          <span className="text-theme-text-brighter capitalize">
            <span>
                {property_title}
            </span>
        </span>
        </div>

        <div className="bg-white rounded-[17px]
        glass-container-background-2 
        border backdrop-blur-10 pt-7 pb-7 px-7 mt-8
      dark:bg-[#68585806] dark:border-[#ffffff05]
      text-[#000000b3] dark:text-[#ffffffb0] text-l flex flex-row flex-wrap gap-6
      
        ">

            <div className="w-full 
            bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
             backdrop-blur-10
            dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
            flex flex-col rounded-[7px] box-shadow-1 p-2 border border-[rgba(255,255,255,0.02)]
            text_shadow-2
            
            ">

                {/* here are the posts */}
                <h4 className="flex flex-row items-baseline font-bold uppercase px-2">
                    <span className="text-start dark:text-[#ffffffde] text_shadow-3 
                    slide_right__text__animation">
                        <span className="inline-block shrink-0 h-3 w-3 bg-red-500 opacity-80 rounded-full mr-4"></span>
                        <span>{property_title}</span>
                    </span>
                </h4>
            </div>        

        {/* post */}
        {thisProperty ? (
            <>

            <div className="flex flex-col gap-6 w-[100%] md2:flex-1">

                <div className="h-auto w-full 
                bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                glass-container-background-2 backdrop-blur-10
                dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                flex flex-col rounded-[17px] box-shadow-1 p-2 border border-[rgba(255,255,255,0.02)]
                text_shadow-2 max-w-[100%]
                ">

                    {/* <div className="">
                        <Image src={thisProperty.property_images[0]} height={600} width={600} alt={property_title}
                        id={thisProperty.property_id.toString()}
                        className="border-0 w-full
                        rounded-[10px]
                        
                        ">
                        </Image>
                    </div> */}

                    <div className="flex flex-row items-center justify-center relative
                    h-[45vw] w-full
                    ">
                        <button 
                            onClick={()=>{setPrevFade1(fade1); setFade1(fade1-1);}}
                            // onClick={()=>{prevFade=fade; fade=fade-1; animationCombination(slider__container);}}
                            className="
                            absolute left-[1rem]
                            bg-[#0a0a0a7d] rounded-[3px]
                            bg-[url('/icons/arrow-left.svg')] 
                            h-[3vw] w-[3vw] max-h-[40px] max-w-[40px] 
                            min-w-[20px] min-h-[20px]
                            bg-no-repeat bg-contain">
                        </button>


                            <Image src={thisProperty.property_images[imageReference]} height={600} width={600} alt={property_title}
                            id={thisProperty.property_id.toString()}
                            className="border-0
                            rounded-[10px] w-full h-[calc(45vw-0.25rem)]"
                            style={{objectFit:'cover'}}
                            >
                            </Image>

                        <button 
                            onClick={()=>{setPrevFade1(fade1); setFade1(fade1+1);}}                            // onClick={()=>{prevFade=fade; fade=fade+1; animationCombination(slider__container);}}
                            className="
                            absolute right-[1rem]
                            bg-[#0a0a0a7d] rounded-[3px]
                            bg-[url('/icons/arrow-right.svg')] 
                            h-[3vw] w-[3vw] max-h-[40px] max-w-[40px] 
                            min-w-[20px] min-h-[20px]
                            bg-no-repeat bg-contain">
                        </button> 

                    </div>
                    
                </div>

                <div className="h-auto w-full 
                bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                glass-container-background-2 backdrop-blur-10
                dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                flex flex-col rounded-[7px] box-shadow-1 p-2 border border-[rgba(255,255,255,0.02)]
                text_shadow-2 max-w-[100%]  mt-[-1rem] mb-[0rem] md2:mt-[-0.5rem] md2:mb-[1rem]
                ">
                    <div className="flex flex-row gap-4 w-full items-center">
                        {thisProperty.property_images.map((image:string) => (
                            
                            
                            <button 
                            className="border-0
                            rounded-[7px] max-w-[50px] w-[10%]
                            h-[99%]"
                            onClick={()=>{setPrevFade1(fade1); setFade1(thisProperty.property_images.findIndex(i => i === image));}}>

                                <Image src={image} height={300} width={300} alt={property_title}
                                className="
                                border-0
                                rounded-[7px] max-w-[50px] w-full
                                h-[100%]
                                "
                                style={{objectFit:'cover'}}
                                >
                                </Image>
                            </button>          
                        ))}
                    </div>
                </div>

                <div className="h-auto w-full 
                bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                glass-container-background-2 backdrop-blur-10
                dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                flex flex-col rounded-[17px] box-shadow-1 p-4 border border-[rgba(255,255,255,0.02)]
                text_shadow-3 max-w-[100%]
                ">

                                <div className="w-full
                                flex flex-col justify-center items-start gap-2 text-sm">

                                    <div>
                                        <div className="font-semibold mb-2 text-base">                             
                                            <span className="inline-block shrink-0 h-3 w-3 bg-green-500 
                                            opacity-80 rounded-full mr-2"></span>
                                            Property Details
                                        </div>
                                        <div>Country: {thisProperty.property_country}</div>
                                        <div>City: {thisProperty.property_city}</div>
                                        <div>District: {thisProperty.property_district}</div>
                                    </div>

                                    <div>  
                                        <div>Type of listing: <span className="capitalize">{thisProperty.property_listing_type}</span></div>
                                        
                                        <div>
                                            <span className="mr-1">
                                                Property is:
                                            </span>
                                            {thisProperty.property_availability ? 
                                                (
                                                <span className="text-[#279b72] dark:text-[#32b084]">
                                                    Available                                
                                                </span>
                                                
                                                ) : (
                                                <span className="dark:text-[#be2e60] text-[#be2e52]">
                                                    Not Available
                                                </span>
                                            )}
                                            </div>
                                    </div>

                                    <div>
                                        <div>Area: {thisProperty.property_area}</div>
                                        <div>Bedrooms: {thisProperty.property_beds}</div>
                                        <div>Bathrooms: {thisProperty.property_baths}</div>

                                        <div>Asking price: {thisProperty.property_price}</div>
                                    </div>

                                    <div>
                                        <div>More Description:</div> 
                                        <div>{thisProperty.property_description}</div>
                                    </div>

                                    <div className="my-2 mx-auto ">
                                        <button className="outline-2 outline-offset-4 dark:hover:outline-[#fffd] outline dark:outline-[#ffffff2b]
                                        outline-[#0000000f] hover:outline-[#0000002a]
                                        px-2 py-1 border-0 rounded-[7px] opacity-70 dark:hover:opacity-90 hover:opacity-100
                                        bg-[#279b72] dark:bg-[#32b084] text-white">
                                        
                                        {thisProperty.property_availability ? 
                                        (

                                            "Book a visit"                 
                                        ) : (

                                            "Contact us for alternatives"
                                        )}                                        
                                        
                                        </button>
                                        {/* <button className="outline-2 outline-offset-4 hover:outline-[#fffd] outline outline-[#ffffff2b]
                                            px-2 py-1 border-0 rounded-[7px] opacity-80 hover:opacity-90
                                        bg-theme-text-brighter dark:bg-theme-text-dark text-white">
                                        Contact us for alternatives
                                        </button> */}
                                    </div>

                                </div>


                </div>

            </div>

            <div className=" w-[100%] md2:w-[20%] min-w-[215px] h-auto
            bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
            glass-container-background-2 backdrop-blur-10
            dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
            flex flex-col rounded-[7px] box-shadow-1 p-2 border border-[rgba(255,255,255,0.02)]
            text_shadow-2 md2:rounded-[17px]
            ">
                <span className="flex flex-col items-baseline p-2 md2:p-2 md2:flex-col">
                    <span className="inline-block shrink-0 h-3 w-3 bg-[rgba(0,89,255,0.7)] rounded-full mr-4"></span>
                    <span className="w-full text-start font-light text-sm
                    lowercase flex flex-row items-center">
                        <span className="opacity-60 mr-2 hidden">{thisProperty.property_date} by {thisProperty.property_author} </span>

                        <div className="flex flex-col gap-4 mt-2 capitalize text-center w-full items-center">


                            <div className="flex flex-col md:flex-row  md2:flex-col items-center justify-center md2:gap-4 gap-4 md:gap-8">
                                <div className="h-[6rem] w-[6rem] bg-white rounded-full flex items-center justify-center dark:text-black">Hi</div>


                                <div className="">
                                    <div>Handled By</div>
                                    <div>{thisProperty.property_author}                                    </div>

                                </div>

                                <div>
                                    <div>Listed On</div>
                                    <div>{thisProperty.property_date}</div>
                                </div>

                            </div>
                            
                            <h4 className="text_shadow-2 opacity-90 md2:mt-8 mt-4 text-black dark:text-white">
                                You may also be interested to look at
                            </h4>

                            <div className="w-full mx-auto lg:w-auto lg:mx-0">
                                <div className="flex flex-row flex-wrap gap-2 md2:flex-col">
                                    {properties.map((property) => (
                                        
                                        <div className="w-[calc(100%*(1/2)-6px)] md:w-[calc(100%*(1/3)-6px)] md2:w-full">
                                            <PropertyCard {...property as propertyInterface} currentPage = "property" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </span>
                </span>            
            </div>

                    
                    </>
                ) : (
                    <><h1 className="text_shadow-3">This post does not exist</h1></>
                )
                }

                </div>
                
        </div>

    </div>

  )
}

export default page