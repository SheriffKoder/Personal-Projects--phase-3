"use client";

// used in home-main properties

import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "@components/Helpers/Slider";


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

const PropertyCard = ({property1, currentPage}:{property1:PropertyDocument, currentPage:string}) => {
   
    //Part11
    const [property, setProperty] = useState<PropertyDocument | null>(null);

    
    useEffect(()=> {

      // console.log(property1);
      //Part 11 - get out from passed property info's images array only used image slots in a const
      // if (property === null && property1 !== null) {
        const filteredImages = property1.property_images.filter((image: string) => {
          // if (image !== "") {
            return image;
          // }
        });


  
        const tempProperty:PropertyDocument = property1;
        tempProperty.property_images = filteredImages as string[];
        setProperty(tempProperty);



  });



  return (
    <>
    {property !== null ? (
      <div className={`latest_property bg-[#fffffff3] dark:bg-[rgba(255,255,255,0.03)]
          flex flex-col 
           
          h-auto w-full
          gap-1
          rounded-[17px] box-shadow-1 p-1 xl:pb-2 relative
          border border-[rgba(255,255,255,0.02)]
          dark:opacity-75 dark:hover:opacity-90 opacity-90 hover:opacity-[0.999]
          focus:opacity-100 dark:focus:opacity-90
          ${currentPage === 'AllProperties' ? 'md2:h-[350px] xl:flex-col' : ''}

          `}
          >

                <div className={`relative flex flex-row items-center justify-start text-start
                max-h-[23vh] rounded-t-[10px] overflow-hidden md:h-[22vw] lg:max-h-[16vw]
                ${currentPage === 'AllProperties' ? 'xl:min-w-full xl:max-h-[100%]' : ''}
                h-[150px] md2:min-h-[200px]
                `}>
                  
                    {/* linked image, it will stretch to this div container */}
                      <Slider property={property}/>
                    
                </div>
                
                <div className="w-full text_shadow-2 relative">


                  <Link href={"/properties/single/"+property._id} key={property._id}
                  className="w-full">
                    <div className="flex flex-col items-start px-2 pt-1 text-sm text-start">
                      <div className="dark:text-[#ffffffde] capitalize">{property.property_type} for {property.property_listing_type}</div>
                      {/* <div className="dark:text-[#ffffffde] capitalize">In {property.property_country}, {property.property_city}</div> */}
                      <div className="dark:text-[#ffffffde] capitalize
                      md:h-[2.5rem] md2:h-auto">in {property.property_city}, {property.property_district}</div>
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