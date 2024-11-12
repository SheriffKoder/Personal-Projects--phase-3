
"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const Slider = ({property}:{property: any}) => {



function changeImageForward (id:string) {
    let slider = document.querySelector(`#${id}`);

    if (slider) {
      let img = slider.querySelector("img:first-child");
      if (img) slider.append(img);
    }
  }
    
  function changeImageBackward (id:string) {
    let slider = document.querySelector(`#${id}`);
    if (slider) {
      let img = slider.querySelector("img:last-child");
      if (img) slider.prepend(img); 
    }
  }






  return (
    <div className='w-full h-full relative
    flex flex-row items-center justify-between
    '>

        <button
        onClick={()=>{changeImageBackward(`property${property._id}`)}}
        className="relative z-[1] ml-1 bg-[#0a0a0a7d]  rounded-[3px]
        bg-[url('/icons/arrow-left.svg')] h-4 w-4 bg-no-repeat bg-contain">
        </button>

        
        <button
        onClick={()=>{changeImageForward(`property${property._id}`)}}
        className="relative z-[1] mr-1 bg-[#0a0a0a7d] rounded-[3px]
        bg-[url('/icons/arrow-right.svg')] h-4 w-4 bg-no-repeat bg-contain">
        </button>
            

        {/* images container */}
        <Link href={"/properties/single/"+property._id} key={property._id}
        className="absolute z-[0] w-full h-full overflow-hidden flex flex-row LunSlider2"
        id={`property${property._id}`}>

            {property.property_images.map((img:string, index:number)=> (
                <Image
                priority
                key={index}
                src={img} 
                // height={400} width={400} 
                alt={property.property_type+" "+property.property_country+" "+property.property_city+" "+property.property_district+" "+property.property_area+" "+property.property_beds+" bedrooms "+property.property_baths+" bathrooms "+property.property_listing_type}
                
                fill={true}
                className={`w-full h-full fade`}
                style={{objectFit: "cover"}}
                />        
            ))}

        </Link>






    </div>
  )
}

export default Slider