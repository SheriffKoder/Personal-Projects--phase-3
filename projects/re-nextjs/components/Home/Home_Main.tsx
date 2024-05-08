// import React from 'react'

//this is the main area of the home page
//contains two components,
// the latest properties and the latest posts

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import PropertyCard from "./HomeMain/PropertyCard-home";
import { PropertyDocument } from "@models/propertyModel";
import { PostDocument } from "@models/postModel";

type properties_andPosts = {
  properties: PropertyDocument[],
  posts: PostDocument[],
}



const Home_Main = () => {

  // let posts: postsType = [
  //   {
  //     id : 1,
  //     title: "A new release on houses",
  //     content: "This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better",
  //     author: "John",
  //     date: "Thu, 19 Sept 23",
      
  //   },
  //   {
  //     id : 2,
  //     title: "A new release on houses",
  //     content: "This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better",
  //     author: "John",
  //     date: "Thu, 19 Sept 23",
      
  //   },
  //   {
  //     id : 3,
  //     title: "A new release on houses",
  //     content: "This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better",
  //     author: "John",
  //     date: "Thu, 19 Sept 23",
      
  //   }
  // ]
  
  //04.01
  // let properties: propertyInterface[] = [
  //   {
  //       property_images : ["/images/furniture.avif", "/images/logo.svg"],        
  //       property_id : 1,

  //       property_country: "Egypt",
  //       property_city: "Giza",
  //       property_district: "Zayed",

  //       property_type: "Apartment",
  //       property_area: 110,
  //       property_beds: 2,
  //       property_baths: 1,
        
  //       property_listing_type: "rent",
  //       property_availability: true,
  //       property_recommended: true,
  //       property_price: 6000,

  //   },
 
  //   {
  //       property_images : ["/images/furniture.avif", "/images/logo.svg"],        
  //       property_id : 1,

  //       property_country: "Egypt",
  //       property_city: "Giza",
  //       property_district: "Zayed",

  //       property_type: "Apartment",
  //       property_area: 110,
  //       property_beds: 2,
  //       property_baths: 1,
        
  //       property_listing_type: "rent",
  //       property_availability: true,
  //       property_recommended: true,
  //       property_price: 6000,

  //   },

  //   {
  //       property_images : ["/images/furniture.avif", "/images/logo.svg"],        
  //       property_id : 1,

  //       property_country: "Egypt",
  //       property_city: "Giza",
  //       property_district: "Zayed",

  //       property_type: "Apartment",
  //       property_area: 110,
  //       property_beds: 2,
  //       property_baths: 1,
        
  //       property_listing_type: "rent",
  //       property_availability: true,
  //       property_recommended: true,
  //       property_price: 6000,

  //   },

  //   {
  //       property_images : ["/images/furniture.avif", "/images/logo.svg"],        
  //       property_id : 1,

  //       property_country: "Egypt",
  //       property_city: "Giza",
  //       property_district: "Zayed",

  //       property_type: "Apartment",
  //       property_area: 110,
  //       property_beds: 2,
  //       property_baths: 1,
        
  //       property_listing_type: "rent",
  //       property_availability: true,
  //       property_recommended: true,
  //       property_price: 6000,

  //   },

  //   {
  //       property_images : ["/images/furniture.avif", "/images/logo.svg"],        
  //       property_id : 1,

  //       property_country: "Egypt",
  //       property_city: "Giza",
  //       property_district: "Zayed",

  //       property_type: "Apartment",
  //       property_area: 110,
  //       property_beds: 2,
  //       property_baths: 1,
        
  //       property_listing_type: "rent",
  //       property_availability: true,
  //       property_recommended: true,
  //       property_price: 6000,

  //   },

  // ];
    
  
  
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


  //04.01
  const [properties_andPosts, setProperties_andPosts] = useState<properties_andPosts>({
    properties: [],
    posts: [],
  });

  //text that will be in place of properties or posts when loading or no items returned from the DB
  const [dataPropertiesCondition,setDataPropertiesCondition] = useState("Loading properties...");
  const [dataPostsCondition,setDataPostsCondition] = useState("Loading posts...");


  //fetch latest posts and properties
  useEffect(()=> {

    setDataPropertiesCondition("Loading properties...");
    setDataPostsCondition("Loading posts...");


    const fetchProperties_andPosts = async () => {
      const response = await fetch("/api/properties/homePage_main");
      const jsonResponse = await response.json();
      console.log(jsonResponse);

      if (jsonResponse.properties.length <= 0) {
        setDataPropertiesCondition("no properties found...");
      }

      if (jsonResponse.posts.length <= 0) {
        setDataPostsCondition("no posts found...");
      }

      setProperties_andPosts(jsonResponse);

    }


    fetchProperties_andPosts();
  }, []);


  return (

    <div className="w-[95%] lg:flex lg:flex-row justify-center mx-auto ">


      {/* latest posts */}
      <div className=" bg-white rounded-[17px]
      glass-container-background-2 
      border backdrop-blur-10 py-7 px-7 w-[95%] mx-auto lg:ml-6 my-20
      dark:bg-[#68585806] dark:border-[#ffffff05]
      text-[#000000b3] dark:text-[#ffffffb0] text-center text-l flex flex-col gap-1
      lg:max-w-[300px] lg:order-2 h-fit xl:min-h-[700px] lg:min-h-[1200px]
      "
      id="home-news">
            {/* here are the posts */}
            <h4 className="text_shadow-3 font-semibold text-lg mb-[1.5rem]">Latest market news</h4>

            {/* posts container */}
            <div className="flex flex-col gap-6 xl:my-0">

              {/* post */}
              {properties_andPosts?.posts.length > 0 ? (
                <>
                  {properties_andPosts.posts.map((post, index) => (

                    <Link href={"/posts/"+post._id} key={post._id} className={`max-w-full 
                    bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                    dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                    flex flex-col rounded-[17px] box-shadow-1 p-4 md:p-3 border border-[rgba(255,255,255,0.02)]
                    text_shadow-2 h-[174px] md:h-[150px] lg:h-[184px]
                    relative z-[1]
                    ${index > 2 && 'hidden lg:flex xl:hidden'}
                    
                    `}
                    >
                        <div className="absolute top-0 left-0 w-full h-full z-[-1] rounded-[17px] 
                        dark:opacity-10 opacity-20"
                        style={{backgroundImage: `url(${post.image}`}}>
                        </div>

                        <p className="flex flex-row items-baseline font-bold uppercase">
                          <span className="inline-block shrink-0 h-3 w-3 bg-red-500 opacity-80 rounded-full mr-4"></span>
                          <span className="text-start dark:text-[#ffffffde] dot-text line-clamp-1">
                            {post.title}
                          </span>
                        </p>
                        
                        <span className="flex flex-row items-baseline mt-2">
                          <span className="inline-block  shrink-0 h-3 w-3 bg-green-500 opacity-80 rounded-full mr-4"></span>
                          <span className="text-start max-h-[4rem] max-w-[900px] text-sm dot-text line-clamp-3">
                            {post.content}
                          </span>
                        </span>

                        <span className="flex-1 flex flex-col justify-end">
                        <span className="flex flex-row items-center mt-auto">
                          <span className="mt-[1rem] inline-block shrink-0 h-3 w-3 bg-[rgba(0,89,255,0.7)] rounded-full mr-4"></span>
                          <span className="w-full text-start font-light text-sm
                          lowercase flex flex-row items-center">
                            <span className="opacity-60 lg:mt-auto">{post.date_update} by {post.userId.name} </span>
                            <p className="ml-auto mr-2 lg:mr-[-0.1rem] lg:mt-4 bg-theme-text-bright h-5 w-5 right_caret rounded-[5px] border-0"> </p>
                          </span>
                        </span>
                        </span>
                    </Link>

                  ))}

                {/* go to the all-posts page button */}
                <Link href="/posts/all" className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                rounded-full py-1.5 px-3 w-[80%] max-w-[200px] text_shadow-3
                opacity-80 hover:opacity-90 mx-auto mt-auto">
                        Check all news 
                </Link>

                </>
              ) : (
                <>
                  <h1 className="text_shadow-3 w-full text-center">            
                    {dataPostsCondition}
                  </h1>
                </>
                )
              }

            </div>


            
      </div>


      {/* latest properties */}
      <div className=" bg-white rounded-[17px] h-auto
          glass-container-background-2 
          border backdrop-blur-10 py-7 px-7 my-20
          dark:bg-[#68585806] dark:border-[#ffffff05] 
          text-[#000000b3] dark:text-[#ffffffb0] text-center text-l flex flex-col gap-1
          lg:max-w-[930px] w-[95%] mx-auto lg:mx-0 lg:ml-auto
      ">
            {/* here are the properties */}
            <h4 className="text_shadow-3 font-semibold text-lg">Check out our latest properties</h4>

            {/* latest properties container */}
            <div className="flex flex-col h-full">

          {/* property */}
            {properties_andPosts?.properties.length > 0 ? (
            <>
              <div className="flex flex-row gap-6 my-6 flex-wrap justify-center lg:justify-start mx-auto">

              {properties_andPosts.properties.map((property: PropertyDocument) => (
                <div key={property._id} className="
                
                h-auto xl:w-[48%] md:w-[46%] lg:w-[47%] w-[100%] max-w-[390px] xl:max-w-[900px]">
                  <PropertyCard property1={property} currentPage="home"/>
                </div>
              )
              )}
              </div>

                {/* go to the all-properties page button */}
              <Link href="/properties/all" className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                    rounded-full py-1.5 px-3 w-[80%] max-w-[200px]
                    opacity-80 hover:opacity-90 mx-auto mt-auto">
                            view all properties 
              </Link>
            </>
            ) : (
              <>
                <h1 className="text_shadow-3 w-full text-center">            
                  {dataPropertiesCondition}
                </h1>
              </>            )
            }



          </div>
         

      </div>

    </div>





  )
}

export default Home_Main;