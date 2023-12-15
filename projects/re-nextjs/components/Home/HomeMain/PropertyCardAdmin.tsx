"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRef } from "react";

import { bodyNoScroll, showEdit } from "@utils/bodyNoScroll";
import { PropertyDocument } from "@models/propertyModel";
import { UserDocument } from "@models/userModel";
import { PostDocument } from "@models/postModel";

type userInterface = {
  authority: string;
  properties: PropertyDocument[];
  userInfo: UserDocument;
  allAgents: UserDocument[];
  posts: PostDocument[];
}




const PropertyCardAdmin = ({property, currentPage="", userIncoming, setUserIncoming}:{
  property:PropertyDocument, 
  currentPage:string,
  userIncoming:userInterface | null,
  setUserIncoming: React.Dispatch<React.SetStateAction<userInterface | null>>
}) => {

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



    //Part 8
    const [user, setUser] = useState(userIncoming);
    const handlePropertyDelete = async (propertyId:string) => {


      const response = await fetch(`/api/properties`, {
          method: "DELETE",
          body: JSON.stringify({propertyId}),

      })


      const jsonResponse = await response.json();
      console.log(jsonResponse);
  }


  const reloadProperties = (removablePropertyId:string) => {

    //once deleted, the user interface should be updated without this user
    //this can be from the database or from the UI
    if (user) {
      let temp_user = user;
      console.log(removablePropertyId);
      console.log(user.properties);
      const filteredProperties = user.properties.filter((property) => property._id !== removablePropertyId);
      temp_user.properties = filteredProperties;
  
      setUser(temp_user);  
      console.log("done");
    }
}


const setLocalStorageForProperty = (propertyId: string) => {
  localStorage.setItem("editing", propertyId);

}



    useEffect(()=> {
        let slider__container = document.getElementById(property._id);        

        animationCombination1(slider__container);

  },[fade1]);

  // hover:outline hover:outline-[#d6003580] hover:outline-2  hover:outline-offset-1
  // focus:outline focus:outline-[#d6003580] focus:outline-2  focus:outline-offset-1
  // dark:hover:outline-[#d600352c] dark:hover:outline-offset-[0px]
  // dark:focus:outline-[#d600352c] dark:focus:outline-offset-[0px] 

  // let page = "property";

  return (
    <div className={`latest_property bg-[#fffffff3] dark:bg-[rgba(255,255,255,0.03)]
          flex flex-col 
           
          h-auto w-full
          ${currentPage === 'property' ? 'xl-flex-col' : 'xl:flex-row'} 
          gap-1
          rounded-[17px] box-shadow-1 p-1 relative
          border border-[rgba(255,255,255,0.02)]
          dark:opacity-75 dark:hover:opacity-90 opacity-90 hover:opacity-100
          focus:opacity-100 dark:focus:opacity-90
          `}>

                <div className={`relative flex flex-row items-center justify-start text-start
                ${currentPage === 'property' ? '' : 'xl:max-w-[50%]'} `}>
                  <button 
                    onClick={()=>{setPrevFade1(fade1); setFade1(fade1-1);}}
                    className="absolute bg-[#0a0a0a7d] left-1 rounded-[3px]
                    bg-[url('/icons/arrow-left.svg')] h-4 w-4 bg-no-repeat bg-contain">
                  </button>

                  <Link href={"/properties/"+property._id} key={property._id}
                  className="h-[100%]">
                    <Image src={property.property_images[imageReference]} height={400} width={400} alt={property.property_type+" "+property.property_country+" "+property.property_city+" "+property.property_district+" "+property.property_area+" "+property.property_beds+" bedrooms "+property.property_baths+" bathrooms "+property.property_listing_type}
                    id={property._id}
                    className={`border-0 rounded-t-[10px] w-full max-h-8.5rem min-h-[100%]
                    ${currentPage === 'property' ? '' : 'xl:rounded-l-[10px] xl:rounded-tr-none'}
                    `}
                    style={{objectFit:'fill'}}>
                    </Image>
                  </Link>

                  <button
                    onClick={()=>{setPrevFade1(fade1); setFade1(fade1+1);}}
                    className="absolute bg-[#0a0a0a7d] right-1 rounded-[3px]
                    bg-[url('/icons/arrow-right.svg')] h-4 w-4 bg-no-repeat bg-contain">
                  </button>
                </div>
                
                <div className="w-full text_shadow-2">


                  <Link href={"/properties/"+property._id} key={property._id}
                  className="w-full">
                    <div className="flex flex-col items-start px-2 pt-1 text-sm text-start">
                      <div className="dark:text-[#ffffffde] capitalize">{property.property_type} for {property.property_listing_type}</div>
                      {/* <div className="dark:text-[#ffffffde] capitalize">In {property.property_country}, {property.property_city}</div> */}
                      <div className="dark:text-[#ffffffde] capitalize">in {property.property_city}, {property.property_district}</div>
                      <div className="">{property.property_beds} beds / {property.property_baths} bath</div>
                      <div className="">Area: {property.property_area} sqm</div>
                      <div className="font-light text-sm">Price: {property.property_price}</div>


                    </div>
                  </Link>
                  {currentPage === 'agent' ? (
                        <div className="flex flex-col items-start px-2 pb-1 text-sm text-start">               
                          <div className="font-light text-sm">Added: {property.property_date}</div>
                          <div className="font-light text-sm">Updated: {property.property_update}</div>

                          <div className="text-sm font-light w-full flex flex-row gap-2 justify-start mt-2 mb-1">

                            <button type="button"
                              onClick={() => {bodyNoScroll(); setLocalStorageForProperty(property._id); showEdit("Edit")}}
                              className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                              rounded-full w-[65px]
                              opacity-40 hover:opacity-90 text-center">
                                  Edit
                              </button>

                            <button type="submit" onClick={()=>{handlePropertyDelete(property._id); reloadProperties(property._id); setUserIncoming(user);}}
                              className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                              rounded-full w-[65px]
                              opacity-40 hover:opacity-90 text-center">
                                  Delete
                              </button>

                          </div>
                        </div>
                      ):(
                        ""
                      )}
                </div>




              </div>

  )
}

export default PropertyCardAdmin;