// import React from 'react'

import Link from "next/link";
import Image from "next/image";

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

                    <div className="">
                        <Image src={thisProperty.property_images[0]} height={600} width={600} alt={property_title}
                        id={thisProperty.property_id.toString()}
                        className="border-0 w-full
                        rounded-[10px]
                        
                        ">
                        </Image>
                    </div>
                    
                </div>

                <div className="h-auto w-full 
                bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                glass-container-background-2 backdrop-blur-10
                dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                flex flex-col rounded-[17px] box-shadow-1 p-2 border border-[rgba(255,255,255,0.02)]
                text_shadow-2 max-w-[100%]
                ">
                    <div className="p-2">
                    
                    <span className="flex flex-row items-baseline">
                        <span className="text-start max-w-[900px] text-sm ">

                                <div className="flex flex-col justify-center items-start gap-2">

                                    <div>
                                        <div className="font-semibold mb-2">                             
                                            <span className="inline-block shrink-0 h-3 w-3 bg-green-500 opacity-80 rounded-full mr-2"></span>
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
                                                <span className="text-green-500">
                                                    Available                                
                                                </span>
                                                ) : (
                                                <span className="text-red-500">
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

                                    <div>
                                        <div>Agent Name: {thisProperty.property_author}</div>
                                        <div>Agent Contact Number: 01054354353</div>
                                    </div>

                                </div>


                        </span>
                    </span>
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