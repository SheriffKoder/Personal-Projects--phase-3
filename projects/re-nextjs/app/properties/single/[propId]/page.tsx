// import React from 'react'

"use client"

//single property page

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, MouseEventHandler } from "react";
import { useRef } from "react";
import PropertyCard from "@components/Home/HomeMain/PropertyCard-singleProperty";

import { PropertyDocument } from "@models/propertyModel";
import { useRouter } from "next/navigation";
import PropertyImage from "@components/propertySingle/propertyImage";


//async because we will fetch outside a use effect for the loading.tsx to work
const page = async () => {

    const router = useRouter();
    const currentPage : string = "property";

    let property_title = useRef("");    //the text that will be sent to the sessionStorage to fill the inquiry form in the about-contact page

    type pagePropertyType = {
        thisProperty: PropertyDocument,
        recProperties: PropertyDocument[]
    }

    //send the property info to the sessionStorage to be taken in the about-contact page form -- and redirect to there
    const handleInquiry = (property: PropertyDocument) => {
        sessionStorage.setItem("propertyInquiry", JSON.stringify(property))
        router.push("/about/#contact");
    }


    let pageProperty: pagePropertyType | null = null;

    //to overcome the window is not defined error when the page is reloaded
    if(typeof window !== 'undefined') {
    
        //the current_url contains the property in question id that we will fetch by
        let current_url = window.location.href.toString().split("/single/")[1];

        //get this page's property
        const response = await fetch(`/api/properties/single/${current_url}`);
            pageProperty = await response.json();
        
        if (pageProperty) {
            //set a title for the property manually
            property_title.current = `${pageProperty.thisProperty.property_type} for ${pageProperty.thisProperty.property_listing_type} in <${pageProperty.thisProperty.property_country} ${pageProperty.thisProperty.property_city} ${pageProperty.thisProperty.property_district} ${pageProperty.thisProperty.property_area}sqm ${pageProperty.thisProperty.property_beds} bedrooms / ${pageProperty.thisProperty.property_baths} bathrooms`;

            //Part 11 - filter out empty strings in the images array in the property (i.e not used image slots)
            pageProperty.thisProperty.property_images = pageProperty.thisProperty.property_images
            .filter((image: string) => {
                if (image !== "") {
                    return image;
                }
            });
        }
    }




  return (
    <>
    {pageProperty !== null ? (

    <div className="flex flex-col pb-6 pt-28 px-3">


        <div className="mx-auto max-w-[1230px]">

            {/* navigation current location links that has the property title */}
            <div className="dark:text-white text-black text-shadow-3 w-full text-xs flex flex-row gap-1 opacity-70 ml-2">
            
            <Link className=""href="/">Home</Link>
            &#62;
            <Link className="" href="/properties">Properties</Link>
            &#62;
            <span className="text-theme-text-brighter capitalize">
                <span>
                    {property_title.current}
                </span>
            </span>
            </div>

            {/* the property information */}
            <div className="bg-white rounded-[17px]
            glass-container-background-2 
            border backdrop-blur-10 pt-7 pb-7 px-7 mt-8
            dark:bg-[#68585806] dark:border-[#ffffff05]
            text-[#000000b3] dark:text-[#ffffffb0] text-l flex flex-row flex-wrap gap-6
            ">
                {/* the property title */}
                <div className="w-full 
                bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                backdrop-blur-10
                dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                flex flex-col rounded-[7px] box-shadow-1 p-2 border border-[rgba(255,255,255,0.02)]
                text_shadow-2
                
                ">

                    <h4 className="flex flex-row items-baseline font-bold uppercase px-2">
                        <span className="text-start dark:text-[#ffffffde] text_shadow-3 
                        slide_right__text__animation">
                            <span className="inline-block shrink-0 h-3 w-3 bg-red-500 opacity-80 rounded-full mr-4"></span>
                            <span>{property_title.current}</span>
                        </span>
                    </h4>
                </div>        

                {/* post */}
                {pageProperty.thisProperty ? (
                    <>
                        {/* the main part of the page, this property image and information parts */}
                        <div className="flex flex-col gap-6 w-[100%] md2:flex-1">

                            <PropertyImage pageProperty={pageProperty} property_title={property_title}/>

                            {/* property text information container */}
                            <div className=" w-full 
                            bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                            glass-container-background-2 backdrop-blur-10
                            dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                            flex flex-col rounded-[17px] box-shadow-1 p-4 border border-[rgba(255,255,255,0.02)]
                            text_shadow-3 max-w-[100%] h-full
                            ">

                                <div className="w-full h-full
                                flex flex-col items-start gap-2 text-sm">

                                    <div className="w-full">

                                        {/* container title and inquiry button */}
                                        <div className="font-semibold mb-2 text-base flex flex-col w-full items-baseline md:flex-row">                             
                                            <div>
                                                <span className="inline-block shrink-0 h-3 w-3 bg-green-500 
                                                opacity-80 rounded-full mr-2
                                                "></span>
                                                <span>Property Details</span>
                                            </div>

                                            {/* property inquiry button, placed here as it shows on small view ports at the beginning and large view ports will display another button */}
                                            {pageProperty ? (
                                            <button className="hidden md:inline
                                            md:ml-auto mx-auto md:mx-0 my-4 md:my-0 md:mt-1
                                            outline-2 outline-offset-4 dark:hover:outline-[#fffd] outline dark:outline-[#ffffff2b]
                                            outline-[#0000000f] hover:outline-[#0000002a]
                                            px-2 py-1 border-0 rounded-[7px] opacity-70 dark:hover:opacity-90 hover:opacity-100
                                            bg-[#279b72] dark:bg-[#32b084] text-white"
                                            type="button" onClick={()=>handleInquiry(pageProperty!.thisProperty)}>
                                            
                                            {pageProperty.thisProperty.property_availability === "Yes" ? 
                                            (

                                                "Book a visit"                 
                                            ) : (

                                                "Contact us for alternatives"
                                            )}                                        
                                            
                                            </button>
                                            ):("")}

                                        </div>

                                        <div>Country: {pageProperty.thisProperty.property_country}</div>
                                        <div>City: {pageProperty.thisProperty.property_city}</div>
                                        <div>District: {pageProperty.thisProperty.property_district}</div>
                                    </div>

                                    {/* listing type and availability */}
                                    <div>  
                                        <div>Type of listing: <span className="capitalize">{pageProperty.thisProperty.property_listing_type}</span></div>
                                        
                                        {/* availability */}
                                        <div>
                                            <span className="mr-1">
                                                Property is:
                                            </span>
                                            {pageProperty.thisProperty.property_availability === "Yes" ? 
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

                                    {/* area, room, price */}
                                    <div>
                                        <div>Area: {pageProperty.thisProperty.property_area}</div>
                                        <div>Bedrooms: {pageProperty.thisProperty.property_beds}</div>
                                        <div>Bathrooms: {pageProperty.thisProperty.property_baths}</div>

                                        <div>Asking price: {pageProperty.thisProperty.property_price}</div>
                                    </div>

                                    {/* property description */}
                                    <div>
                                        <div>More Description:</div> 
                                        <div>{pageProperty.thisProperty.property_description}</div>
                                    </div>

                                    {/* inquiry button shown at the end on larger view-ports, tried other ways, this was the simplest and does the job */}
                                    <div className="mt-auto mx-auto mb-2 md:hidden">
                                    {pageProperty ? (
                                            <button className="
                                            md:ml-auto mx-auto md:mx-0 mt-auto md:my-0 md:mt-1
                                            outline-2 outline-offset-4 dark:hover:outline-[#fffd] outline dark:outline-[#ffffff2b]
                                            outline-[#0000000f] hover:outline-[#0000002a]
                                            px-2 py-1 border-0 rounded-[7px] opacity-70 dark:hover:opacity-90 hover:opacity-100
                                            bg-[#279b72] dark:bg-[#32b084] text-white"
                                            type="button" onClick={()=>{
                                                if (pageProperty != null) handleInquiry(pageProperty.thisProperty)
                                            }}>
                                            
                                            {pageProperty.thisProperty.property_availability === "Yes" ? 
                                            (

                                                "Book a visit"                 
                                            ) : (

                                                "Contact us for alternatives"
                                            )}                                        
                                            
                                            </button>
                                            ):("")}
                                        {/* <button className="outline-2 outline-offset-4 hover:outline-[#fffd] outline outline-[#ffffff2b]
                                            px-2 py-1 border-0 rounded-[7px] opacity-80 hover:opacity-90
                                        bg-theme-text-brighter dark:bg-theme-text-dark text-white">
                                        Contact us for alternatives
                                        </button> */}
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* the side part of the page, author, add date and the related? properties */}
                        <div className=" w-[100%] md2:w-[20%] min-w-[215px] h-auto
                        bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                        glass-container-background-2 backdrop-blur-10
                        dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                        flex flex-col rounded-[7px] box-shadow-1 p-2 border border-[rgba(255,255,255,0.02)]
                        text_shadow-2 md2:rounded-[17px]
                        ">
                            <span className="flex flex-col items-baseline p-2 md2:p-2 md2:flex-col h-full">
                                <span className="inline-block shrink-0 h-3 w-3 bg-[rgba(0,89,255,0.7)] rounded-full mr-4"></span>
                                <span className="h-full w-full text-start font-light text-sm
                                lowercase flex flex-row items-center">
                                    <span className="opacity-60 mr-2 hidden">{pageProperty.thisProperty.property_date} by {pageProperty.thisProperty.property_userId.name} </span>

                                    <div className="h-full flex flex-col gap-4 mt-2 capitalize text-center w-full items-center">
                                        <div className="flex flex-col md:flex-row  md2:flex-col items-center justify-center md2:gap-4 gap-4 md:gap-8">
                                            <div className="overflow-hidden h-[6rem] w-[6rem] bg-white rounded-full flex items-center justify-center dark:text-black">
                                            <Image src={pageProperty.thisProperty.property_userId.avatar} height={100} width={100} alt="agent's photo"
                                            className="
                                            border-0
                                            rounded-[7px] w-full
                                            h-[100%]
                                            "
                                            style={{objectFit:'cover'}}
                                            >
                                            </Image>
                                            </div>


                                            <div className="">
                                                <div>Handled By</div>
                                                <div>{pageProperty.thisProperty.property_userId.name}</div>

                                            </div>

                                            <div>
                                                <div>Listed On</div>
                                                <div>{pageProperty.thisProperty.property_date}</div>
                                            </div>

                                        </div>
                                        
                                        <h4 className="text_shadow-2 opacity-90 md2:mt-8 mt-4 text-black dark:text-white">
                                            You may also be interested to look at
                                        </h4>

                                        <div className="w-full mx-auto lg:w-auto lg:mx-0 mt-auto md2:mt-0 mb-2">
                                            <div className="flex flex-row flex-wrap gap-4 md2:gap-8 md2:flex-col mt-auto">
                                                {pageProperty.recProperties.map((property) => (
                                                    
                                                    <div className="w-[calc(100%*(1/2)-8px)] md:w-[calc(100%*(1/3)-11px)] md2:w-full">
                                                        <PropertyCard property1={property} currentPage="property" />
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
                    <>
                    <h1 className="text_shadow-3">This property does not exist</h1>
                    </>
                )
                }

            </div>
                
        </div>

    </div>

    ) : ("")}
    </>

  )
}

export default page;