"use client";
//used in aside properties in a single property page

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRef } from "react";

import { bodyNoScroll, showEdit } from "@utils/bodyNoScroll";

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
  property_update: string,
  property_author: string,
  property_description: string,

}

import { PropertyDocument } from "@models/propertyModel";
import Slider from "@components/Helpers/Slider";

const PropertyCard = ({property1, currentPage}:{property1:PropertyDocument, currentPage:string}) => {

    // let currentPage = props.currentPage;
    // let property: propertyInterface = props.property;
    // let currentPage = "property";

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
    const [initialRender, setInitialRender] = useState(0);
    // slider1 = {...properties[sliderIndex1]};

    // const propertiesRefCount = useRef(0);
    const [imageReference, setImageReference] = useState(0);
    // const [propertiesCounter, setPropertiesCounter] = useState([]);



    //Part 8
    const handlePropertyDelete = async (propertyId:string) => {

      // e.preventDefault();
      const current_url = window.location.href.toString().split("/agents/")[1];
      console.log(current_url);

      const response = await fetch(`/api/properties`, {
          method: "DELETE",
          body: JSON.stringify({propertyId}),

      })


      const jsonResponse = await response.json();
      console.log(jsonResponse);
  }


    //Part11
    const [property, setProperty] = useState<PropertyDocument | null>(null);

    let slider__container = document.getElementById(property?._id);        

    
    useEffect(()=> {

      // console.log(property1);
      //Part 11 - get out from passed property info's images array only used image slots in a const
      // if (property === null && property1 !== null) {
        const filteredImages = property1.property_images.filter((image: string) => {
          // if (image !== "") {
            return image;
          // }
        });

        console.log("filteredImages");
        // console.log(filteredImages);
  
        const tempProperty:PropertyDocument = property1;
        tempProperty.property_images = filteredImages as string[];
        setProperty(tempProperty);

      // } else if (property !== null) {

         
      // }


  });

  // hover:outline hover:outline-[#d6003580] hover:outline-2  hover:outline-offset-1
  // focus:outline focus:outline-[#d6003580] focus:outline-2  focus:outline-offset-1
  // dark:hover:outline-[#d600352c] dark:hover:outline-offset-[0px]
  // dark:focus:outline-[#d600352c] dark:focus:outline-offset-[0px] 

  // let page = "property";

  return (
    <>
    {property !== null ? (
      <div className={`latest_property bg-[#fffffff3] dark:bg-[rgba(255,255,255,0.03)]
          flex flex-col 
           
          h-auto w-full
          xl:flex-col
          gap-1
          rounded-[17px] box-shadow-1 p-1 relative
          border border-[rgba(255,255,255,0.02)]
          dark:opacity-75 dark:hover:opacity-90 opacity-90 hover:opacity-[0.999]
          focus:opacity-100 dark:focus:opacity-90
          `}>

                {/* md:h-[15vw]  */}
                <div className={`relative flex flex-row items-center justify-start text-start
                ${currentPage === 'property' ? '' : 'xl:max-w-[50%]'} 
                h-[7vh] rounded-t-[10px] overflow-hidden 
                sm:h-[22vw] 
                md2:h-[10vw] 
                lg:h-[10vw]
                xl:max-h-[120px]

                `}>
                                    <Slider property={property}/>

                </div>
                
                <div className="w-full text_shadow-2 relative">


                  <Link href={"/properties/single/"+property._id} key={property._id}
                  className="w-full">
                    <div className="flex flex-col items-start px-2 pt-1 text-sm text-start">
                      <div className="dark:text-[#ffffffde] capitalize">{property.property_type}</div>
                      <div className="dark:text-[#ffffffde] capitalize">for {property.property_listing_type}</div>
                      {/* <div className="dark:text-[#ffffffde] capitalize">In {property.property_country}, {property.property_city}</div> */}
                      <div className="dark:text-[#ffffffde] capitalize
                      h-[60px] md:h-[40px] md2:h-auto">in {property.property_city}, {property.property_district}</div>
                      <div className="">{property.property_beds} beds / {property.property_baths} bath</div>
                      <div className="">Area: {property.property_area} sqm</div>
                      <div className="font-light text-sm">Price: £{property.property_price.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>

                      <div className="absolute w-full h-full rounded-b-[10px] top-0 left-0 z-[-1] opacity-10"
                      style={{backgroundImage: "url('/images/deco.png')", backgroundSize: "110% 200%", backgroundPosition: "10px -40px" }}>

                      </div>

                    </div>
                  </Link>

                </div>




      </div>
    ):("")}
    </>
  )
}

export default PropertyCard;