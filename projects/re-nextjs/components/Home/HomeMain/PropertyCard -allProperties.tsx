"use client";

// used different card components with mostly the same code
// as i wanted each to be responsive in a different way depending on the page
// and using just one component to get the end result without complexity while coding

// used in all properties page

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { bodyNoScroll, showEdit } from "@utils/bodyNoScroll";

import { PropertyDocument } from "@models/propertyModel";

const PropertyCard = ({property1, currentPage}:{property1:PropertyDocument, currentPage:string}) => {

  
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
      
      if (property !== null) {
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
    // if (initialRender !== 0 ) {
        // //stop current timers to not overlap
        // clearInterval(tm.current);

        fadeOutAnimation(slider__container);
        delayAnimation(slider__container); //with handle fade change
        
        fadeInAnimation(slider__container);        
    // }
    // else {
        // setInitialRender(initialRender+1);
    // }
    
    //start the auto animation timer after first render or again after caret click
    // tm.current = window.setInterval(() => {
    //     // console.log("timer");
    //     setPrevFade(fade); setFade(fade-1);
    // }, 6000);
    
    }



    const [prevFade1, setPrevFade1] = useState(1);
    const [fade1, setFade1] = useState(0);

    const [imageReference, setImageReference] = useState(0);


    //Part11
    const [property, setProperty] = useState<PropertyDocument | null>(null);

    let slider__container = document.getElementById(property?._id);        

    
    useEffect(()=> {

      //Part 11 - get out from passed property info's images array only used image slots in a const
      // if (property === null && property1 !== null) {
        const filteredImages = property1.property_images.filter((image: string) => {
          // if (image !== "") {
            return image;
          // }
        });

        // console.log(filteredImages);
  
        const tempProperty:PropertyDocument = property1;
        tempProperty.property_images = filteredImages as string[];
        setProperty(tempProperty);

  });


  return (
    <>
    {property !== null ? (
      <div className={`latest_property bg-[#fffffff3] dark:bg-[rgba(255,255,255,0.03)]
          flex flex-col max-w-[350px]
           
          h-auto w-full
          ${currentPage === 'property' ? 'xl:flex-col' : 'xl:flex-row'} 
          gap-1
          rounded-[17px] box-shadow-1 p-1 relative
          border border-[rgba(255,255,255,0.02)]
          dark:opacity-75 dark:hover:opacity-90 opacity-90 hover:opacity-100
          focus:opacity-100 dark:focus:opacity-90
          ${currentPage === 'AllProperties' ? 'md2:h-[330px] xl:flex-col' : ''}

          `}>
                {/* xl:max-h-[136px] */}
                {/* the property's image and slider buttons */}
                <div className={`relative flex flex-row items-center justify-start text-start
                ${currentPage === 'property' ? '' : 'xl:max-w-[50%]'} 
                max-h-[23vh] rounded-t-[10px] overflow-hidden md:max-h-[22vw] lg:max-h-[18vw]
                
                ${currentPage === 'AllProperties' ? 'xl:min-w-full xl:max-h-[100%]' : ''}

                `}>
                  <button 
                    onClick={()=>{setPrevFade1(fade1); setFade1(fade1-1); animationCombination1(slider__container); }}
                    className="absolute bg-[#0a0a0a7d] left-1 rounded-[3px]
                    bg-[url('/icons/arrow-left.svg')] h-4 w-4 bg-no-repeat bg-contain">
                  </button>

                  <Link href={"/properties/single/"+property._id} key={property._id}
                  className="min-h-[18vw]">
                    <Image src={property.property_images[imageReference]} height={400} width={400} alt={property.property_type+" "+property.property_country+" "+property.property_city+" "+property.property_district+" "+property.property_area+" "+property.property_beds+" bedrooms "+property.property_baths+" bathrooms "+property.property_listing_type}
                    id={property._id}
                    className={`border-0 rounded-t-[10px] min-w-full min-h-[18vw]
                    ${currentPage === 'property' ? '' : 'xl:rounded-l-[10px] xl:rounded-tr-none'}
                    `}
                    style={{objectFit:'cover'}}
                    priority>
                    </Image>
                  </Link>

                  <button
                    onClick={()=>{setPrevFade1(fade1); console.log(prevFade1); setFade1(fade1+1); console.log(fade1); animationCombination1(slider__container); }}
                    className="absolute bg-[#0a0a0a7d] right-1 rounded-[3px]
                    bg-[url('/icons/arrow-right.svg')] h-4 w-4 bg-no-repeat bg-contain">
                  </button>
                </div>
                
                <div className="w-full text_shadow-2">

                  <Link href={"/properties/single/"+property._id} key={property._id}
                  className="w-full">
                    <div className="flex flex-col items-start px-2 pt-1 text-sm text-start xl:pb-1">
                      <div className="dark:text-[#ffffffde] capitalize">{property.property_type} for {property.property_listing_type}</div>
                      {/* <div className="dark:text-[#ffffffde] capitalize">In {property.property_country}, {property.property_city}</div> */}
                      <div className="dark:text-[#ffffffde] capitalize">in {property.property_city}, {property.property_district}</div>
                      <div className="">{property.property_beds} beds / {property.property_baths} bath</div>
                      <div className="">Area: {property.property_area} sqm</div>
                      <div className="font-light text-sm">Price: {property.property_price}</div>


                    </div>
                  </Link>

                </div>




      </div>
    ):("")}
    </>
  )
}

export default PropertyCard;