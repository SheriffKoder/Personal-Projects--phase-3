"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRef } from "react";

import { bodyNoScroll, showEdit } from "@utils/bodyNoScroll";
import { PropertyDocument } from "@models/propertyModel";
import { UserDocument } from "@models/userModel";
import { PostDocument } from "@models/postModel";

//Part 10
import { useSession } from "next-auth/react";
import { updateUser_lastUpdate } from "@utils/dateGenerate";
import Slider from "@components/Helpers/Slider";


type userInterface = {
  authority: string;
  properties: PropertyDocument[];
  userInfo: UserDocument;
  allAgents: UserDocument[];
  posts: PostDocument[];
}




const PropertyCardAdmin = ({setPropertyEditId, property1, currentPage="", setReload, authority}:{
  setPropertyEditId: React.Dispatch<React.SetStateAction<string>>
  property1:PropertyDocument, 
  currentPage:string,
  authority: string,
  // userIncoming:userInterface | null,
  setReload: React.Dispatch<React.SetStateAction<boolean>>,
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

    const {data:session} = useSession();




    //Part 8
    // const [user, setUser] = useState(userIncoming);
    
    const handlePropertyDelete = async (propId:string) => {


      const response = await fetch(`/api/properties/edit/${propId}`, {
          method: "DELETE",
      })


      const jsonResponse = await response.json();
      console.log(jsonResponse);

      //Part 10
      //update the user last update-date, calls a patch api on this user id
      //which user id want to update, session user
      let userId_session = session?.user.id;
      if (userId_session) updateUser_lastUpdate(userId_session);
      //
      
      setReload(true);
  }


    // const reloadProperties = (removablePropertyId:string) => {

    // //once deleted, the user interface should be updated without this user
    // //this can be from the database or from the UI
    // if (user) {
    //   let temp_user = user;
    //   console.log(removablePropertyId);
    //   console.log(user.properties);
    //   const filteredProperties = user.properties.filter((property) => property._id !== removablePropertyId);
    //   temp_user.properties = filteredProperties;
  
    //   setUser(temp_user);  
    //   console.log("done");
    // }
    // }


    // const setLocalStorageForProperty = (propertyId: string) => {
    //   localStorage.setItem("editing", propertyId);
    // }


    function showPropertyAdd () {
      let postAddContainer = document.getElementById("propertyAddContainer");
      if (postAddContainer) postAddContainer.style.display = "inline";
      
      let children_container2 = document.getElementById("children_container2");
      if (children_container2) children_container2.style.opacity = "0";
    }


    //Part11
    const [property, setProperty] = useState<PropertyDocument | null>(null);

    const sliderContainer = useRef("");
    // let slider__container = document.getElementById(property?._id);        

    useEffect(()=> {

        //reset the imageReference if there is a new property in this DOM component
        if (property1._id !== property?._id) {
          setImageReference(0);
        }

        //Part11 - filter un existing image slots
        // console.log(property1.property_images);
        // console.log(imageReference);

        // if (property === null && property1 !== null) {
          const filteredImages = property1.property_images.filter((image: string) => {
            if (image !== "") {
              return image;
            }
          });

          // console.log("filteredImages");
          // console.log(filteredImages);
    
          const tempProperty:PropertyDocument = property1;
          tempProperty.property_images = filteredImages as string[];

          sliderContainer.current = tempProperty._id;
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
          ${currentPage === 'property' ? 'xl-flex-col' : 'xl:flex-row'} 
          gap-1
          rounded-[17px] box-shadow-1 p-1 relative
          border border-[rgba(255,255,255,0.02)]
          dark:opacity-75 dark:hover:opacity-90 opacity-90 hover:opacity-[0.999]
          focus:opacity-100 dark:focus:opacity-90
          xl:h-[205px]
          h-[450px] md2:h-auto
          `}>

                <div className={`relative flex flex-row items-center justify-center text-start
                ${currentPage === 'property' ? '' : 'xl:max-w-[50%]'} 
                bg-[#0000001a]
                overflow-hidden rounded-t-[10px] xl:rounded-tr-none xl:rounded-bl-[10px]
                h-[100%]
                min-h-[250px]
                md2:h-[18vw]
                md2:max-h-[25vw] 
                xl:min-h-[100px]
                xl:h-full
                xl:w-[80%]
                `}>

                  <Slider property={property}/>
                </div>
                
                <div className="w-full text_shadow-2 flex flex-col h-full relative">


                  <Link href={"/properties/single/"+property._id} key={property._id}
                  className="w-full">
                    <div className="flex flex-col items-start px-2 pt-1 text-sm text-start">
                      <div className="dark:text-[#ffffffde] capitalize">{property.property_type} for {property.property_listing_type}</div>
                      {/* <div className="dark:text-[#ffffffde] capitalize">In {property.property_country}, {property.property_city}</div> */}
                      <div className="dark:text-[#ffffffde] capitalize line-clamp-1 xl:line-clamp-2">in {property.property_city}, {property.property_district}</div>
                      <div className="">{property.property_beds} beds / {property.property_baths} bath</div>
                      <div className="">Area: {property.property_area} sqm</div>
                      <div className="font-light text-sm">Price: £{property.property_price.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                      
                      <div className="absolute w-full h-full rounded-b-[10px] top-0 left-0 z-[-1] opacity-10 dark:opacity-10"
                      style={{backgroundImage: "url('/images/deco.png')", backgroundSize: "110% 200%", backgroundPosition: "10px -40px" }}>

                      </div>

                    </div>
                  </Link>


                  {currentPage === 'agent' ? (
                        <div className="flex flex-col items-start px-2 pb-1 text-sm text-start">               
                          <div className="font-light text-sm">Added: {property.property_date}</div>
                          <div className="font-light text-sm">Updated: {property.property_update}</div>
                        </div>
                      ):(
                        ""
                      )}
                  {currentPage === "agent" && 
                  <div className="
                  text-sm font-light w-full flex flex-row gap-2 justify-center flex-1 mb-1
                  pl-2 md:justify-start
                  ">

                    <button type="button"
                      onClick={() => { if (authority !== "dummyVisitorViewer") {bodyNoScroll(); setPropertyEditId(property._id); showPropertyAdd();}}}
                      className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                      rounded-full w-[65px]  mt-auto
                      dark:opacity-90 dark:hover:opacity-100 
                      opacity-80 hover:opacity-90
                      text-center">
                          Edit
                      </button>

                    <button type="button" onClick={()=>{if (authority !== "dummyVisitorViewer") {handlePropertyDelete(property._id);}}}
                      className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                      rounded-full w-[65px] mt-auto
                      dark:opacity-90 dark:hover:opacity-100 
                      opacity-80 hover:opacity-90 text-center">
                          Delete
                      </button>

                  </div>
                  
                  }
                </div>




              </div>
  ):("")}
  </>
  )
}

export default PropertyCardAdmin;