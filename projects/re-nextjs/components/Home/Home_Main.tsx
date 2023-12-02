// import React from 'react'

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRef } from "react";

type postsType = postsInterface[];

interface postsInterface {
    id: number,
    title: string,
    content: string,
    author: string,
    date: string,
}



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

}



import PropertyCard from "./HomeMain/PropertyCard";









const Home_Main = () => {

  let posts: postsType = [
    {
      id : 1,
      title: "A new release on houses",
      content: "This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better",
      author: "John",
      date: "Thu, 19 Sept 23",
      
    },
    {
      id : 2,
      title: "A new release on houses",
      content: "This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better",
      author: "John",
      date: "Thu, 19 Sept 23",
      
    },
    {
      id : 3,
      title: "A new release on houses",
      content: "This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better",
      author: "John",
      date: "Thu, 19 Sept 23",
      
    }
  ]
  
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
        property_price: 6000,

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
        property_price: 6000,

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
        property_price: 6000,

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
        property_price: 6000,

    },

  ];
    
  
  
  // let property = properties[0];
  
  

  // function fadeOutAnimation (slider__container: any) {


  //   //[fadeOut]
  //   slider__container?.classList.add("fadeOut_animation");
    
  // }
  
  // function delayAnimation (slider__container: any){
  //   //give [delay], after fadeOut(600ms) finishes
  //   setTimeout(()=> {
  //       handleSliderIndex(fade1);
  
  //   },600);
  // }
  
  // function handleSliderIndex (direction: number) {
  
  //   if (direction < prevFade1) {
  //       // console.log("left");
  //       (imageReference > 0) ? setImageReference(imageReference-1) : setImageReference(property.property_images.length-1);
  //       // setPrevFade1(fade1);
  //       // setImageReference(imageReference-1);

  //   } else if (direction > prevFade1) {
  //       // console.log("right");
  //       (imageReference < property.property_images.length-1) ? setImageReference(sliderIndex1+1) : setImageReference(0);

  //   }
  
  // }
  
  // function fadeInAnimation (slider__container: any) {
  
  //   //[fadeIn] after fadeout(600ms) and delay(200ms) finish
  //   setTimeout(()=> {
  //       slider__container?.classList.add("fadeIn_animation");
  //   },800);
  
  //   //after fadeOut,delay,fadeIn finish, remove to be re-applied
  //   setTimeout(()=> {
  //       slider__container?.classList.remove("fadeOut_animation");
  //       slider__container?.classList.remove("fadeIn_animation");
  //   },1400);
  
  
  
  
  // }
  
  
  
  // function animationCombination1 (slider__container: any) {
  
  //   // //stop current timers to not overlap
  //   // clearInterval(tm.current);
  
  //   fadeOutAnimation(slider__container);
  //   delayAnimation(slider__container); //with handle fade change
    
  //   fadeInAnimation(slider__container);
  
  //   //start the auto animation timer after first render or again after caret click
  //   // tm.current = window.setInterval(() => {
  //   //     // console.log("timer");
  //   //     setPrevFade(fade); setFade(fade-1);
  //   // }, 6000);
  
  // }
  
  

  // let slider1 : propertyInterface;

  // const [prevFade1, setPrevFade1] = useState(0);
  // const [fade1, setFade1] = useState(0);
  // const [sliderIndex1, setSliderIndex1] = useState(0);
  // // slider1 = {...properties[sliderIndex1]};

  // // const propertiesRefCount = useRef(0);
  // const [imageReference, setImageReference] = useState([]);
  // // const [propertiesCounter, setPropertiesCounter] = useState([]);

  // useEffect(()=> {
    
  //   let slider__container = document.querySelector("#property_slider__container");        
  //   animationCombination1(slider__container);

  // },[fade1]);


  return (

    <div className="w-[95%] lg:flex lg:flex-row justify-center mx-auto ">

      <div className=" bg-white rounded-[17px]
      glass-container-background-2 
      border backdrop-blur-10 py-7 px-7 w-[95%] mx-auto lg:ml-6 my-20
      dark:bg-[#68585806] dark:border-[#ffffff05]
      text-[#000000b3] dark:text-[#ffffffb0] text-center text-l flex flex-col gap-1
      lg:max-w-[300px] lg:order-2 h-fit
      "
      id="home-news">
            {/* here are the posts */}
            <h4 className="text_shadow-3">Latest market news</h4>

            {/* posts container */}
            <div className="flex flex-col gap-6 my-6">

              {/* post */}
              {posts ? (
                <>
                  {posts.map((post) => (

                    <Link href={"/posts/"+post.id} key={post.id} className="h-auto max-w-full 
                    bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                    dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                    flex flex-col rounded-[17px] box-shadow-1 p-4 border border-[rgba(255,255,255,0.02)]
                    text_shadow-2
                    ">
                        <p className="flex flex-row items-baseline font-bold uppercase">
                          <span className="inline-block shrink-0 h-3 w-3 bg-red-500 opacity-80 rounded-full mr-4"></span>
                          <span className="text-start dark:text-[#ffffffde]">
                            {post.title}
                          </span>
                        </p>
                        
                        <span className="flex flex-row items-baseline mt-2">
                          <span className="inline-block  shrink-0 h-3 w-3 bg-green-500 opacity-80 rounded-full mr-4"></span>
                          <span className="text-start max-h-[4rem] max-w-[900px] text-sm dot-text line-clamp-3">
                            {post.content}
                          </span>
                        </span>

                        <span className="flex flex-row items-baseline mt-2">
                          <span className="inline-block shrink-0 h-3 w-3 bg-[rgba(0,89,255,0.7)] rounded-full mr-4"></span>
                          <span className="w-full text-start font-light text-sm
                          lowercase flex flex-row items-center">
                            <span className="opacity-60 ">{post.date} by {post.author} </span>
                            <p className="ml-auto mr-2 bg-theme-text-bright h-5 w-5 right_caret rounded-[5px] border-0"> </p>
                          </span>
                        </span>            
                    </Link>

                  ))}
                </>
              ) : (
                <><h1 className="text_shadow-3">No Posts</h1></>
              )
              }

            </div>
            <Link href="/news" className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                rounded-full py-1.5 px-3 w-[80%] max-w-[200px] text_shadow-3
                opacity-80 hover:opacity-90 mx-auto mt-auto">
                        Check all news 
          </Link>

            
      </div>


      <div className=" bg-white rounded-[17px] h-auto
          glass-container-background-2 
          border backdrop-blur-10 py-7 px-7 my-20
          dark:bg-[#68585806] dark:border-[#ffffff05] 
          text-[#000000b3] dark:text-[#ffffffb0] text-center text-l flex flex-col gap-1
          lg:max-w-[930px] w-[95%] mx-auto lg:mx-0 lg:ml-auto
      ">
            {/* here are the properties */}
            <h4 className="text_shadow-3">Check out our latest properties</h4>

          {/* latest properties container */}
          <div className="flex flex-row gap-6 my-6 flex-wrap justify-center lg:justify-start mx-auto">

          {/* property */}
          {properties ? (
            <>
              {properties.map((property) => (
                <div className="
                
                h-auto xl:w-[48%] md:w-[46%] lg:w-[47%] w-[100%] max-w-[390px] xl:max-w-[900px]">
                  <PropertyCard {...property}/>
                </div>
              )
              )}
            </>
            ) : (
              <><h1 className="text_shadow-3">No Properties</h1></>
            )
          }



          </div>
          <Link href="/properties" className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                rounded-full py-1.5 px-3 w-[80%] max-w-[200px]
                opacity-80 hover:opacity-90 mx-auto mt-auto">
                        view all properties 
          </Link>

      </div>

    </div>





  )
}

export default Home_Main;