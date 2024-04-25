"use client";

import React, { MutableRefObject } from 'react'

import Image from "next/image";
import { useState, useEffect, MouseEventHandler } from "react";
import { useRef } from "react";

import { PropertyDocument } from "@models/propertyModel";

type pagePropertyType = {
    thisProperty: PropertyDocument,
    recProperties: PropertyDocument[]
}

const PropertyImage = ({pageProperty, property_title}: {
    pageProperty: pagePropertyType,
    // property_title: MutableRefObject<string>, //then use property_title.current in the jsx below
    property_title: string,
}) => {



    //the src value for the image slider
    const [imageReference, setImageReference] = useState(0);

   ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    //animation for the page's property image slider
    function fadeOutAnimation (slider__container: any) {


        //[fadeOut]
        slider__container?.classList.add("fadeOut_animation");
        
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

    function animationCombination2 (slider__container: any, imageIndex: number, imageArrayLength: number) {
  
        fadeOutAnimation(slider__container); 

        setTimeout(()=> {
            //if we got less than 0, view last image
            if (imageIndex < 0) setImageReference(imageArrayLength-1);

            //if we got more than images.length -1
            if (imageIndex > imageArrayLength-1) setImageReference(0);

            if (imageIndex >= 0 && imageIndex < imageArrayLength) setImageReference(imageIndex);        
        },600);

        // sliderWait(imageIndex);
        fadeInAnimation(slider__container);
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////





  return (
    <>
                            {/* the property image and change image buttons */}
                            <div className="h-auto w-full 
                            bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                            glass-container-background-2 backdrop-blur-10
                            dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                            flex flex-col rounded-[17px] box-shadow-1 p-2 border border-[rgba(255,255,255,0.02)]
                            text_shadow-2 max-w-[100%]
                            ">


                                <div className="flex flex-row items-center justify-center relative
                                h-[45vw] w-full max-h-[600px]
                                ">
                                    {/* left button */}
                                    <button 
                                        onClick={()=>{animationCombination2(document.getElementById(pageProperty!.thisProperty._id.toString()), imageReference-1, pageProperty!.thisProperty.property_images.length)}}                            // onClick={()=>{prevFade=fade; fade=fade+1; animationCombination(slider__container);}}
                                        // onClick={()=>{prevFade=fade; fade=fade-1; animationCombination(slider__container);}}
                                        className="
                                        absolute left-[1rem]
                                        bg-[#0a0a0a7d] rounded-[3px]
                                        bg-[url('/icons/arrow-left.svg')] 
                                        h-[3vw] w-[3vw] max-h-[40px] max-w-[40px] 
                                        min-w-[20px] min-h-[20px]
                                        bg-no-repeat bg-contain">
                                    </button>


                                    <Image src={pageProperty.thisProperty.property_images[imageReference]} height={600} width={600} alt={property_title}
                                    id={pageProperty.thisProperty._id.toString()}
                                    className="border-0
                                    rounded-[10px] w-full h-[calc(45vw-0.25rem)] max-h-[100%]"
                                    style={{objectFit:'cover'}}
                                    priority>
                                    </Image>

                                    {/* right button */}
                                    <button 
                                        onClick={()=>{animationCombination2(document.getElementById(pageProperty!.thisProperty._id.toString()), imageReference+1, pageProperty!.thisProperty.property_images.length)}}                            // onClick={()=>{prevFade=fade; fade=fade+1; animationCombination(slider__container);}}
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

                            {/* other images thumbnails to click and switch the image to their reference */}
                            <div className="h-auto w-full 
                            bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                            glass-container-background-2 backdrop-blur-10
                            dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                            flex flex-col rounded-[7px] box-shadow-1 p-2 border border-[rgba(255,255,255,0.02)]
                            text_shadow-2 max-w-[100%]  mt-[-1rem] mb-[0rem] md2:mt-[-0.5rem] md2:mb-[1rem]
                            ">
                                <div className="flex flex-row gap-4 w-full items-center">
                                    {pageProperty.thisProperty.property_images.map((image:string, index) => {
                                                
                                        const thisImageReference = pageProperty!.thisProperty.property_images.findIndex(i => i === image);

                                        return (
                                        <button type="button" key={pageProperty.thisProperty._id+" thumbnail image #"+index}
                                        className="border-0
                                        rounded-[7px] max-w-[50px] w-[10%]
                                        h-[99%]"
                                        onClick={()=>{animationCombination2(document.getElementById(pageProperty!.thisProperty._id.toString()), thisImageReference, pageProperty!.thisProperty.property_images.length); }}>

                                            {/* if the current image index is the same as imageReference value, darken */}
                                            <Image src={image} height={300} width={300} alt={property_title}
                                            style={{objectFit:'cover'}}
                                            className={`${(thisImageReference === imageReference? "brightness-50" : "")} 
                                            border-0 rounded-[7px] max-w-[50px] w-full h-[40px]`}
                                            >
                                            </Image>
                                        </button>
                                    ) 
                                })}
                                </div>
                            </div>
    </>
)
}

export default PropertyImage