// import React from 'react'

"use client";

import Link from "next/link"
import Image from "next/image"
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";


//npm install @vis.gl/react-google-maps

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
} from "@vis.gl/react-google-maps";
import { PropertyDocument } from "@models/propertyModel";


//Part 11.2
import { MouseEventHandler, ChangeEventHandler, FormEventHandler } from "react";





const page = () => {

  //put in process.env, define in next.config.js
  const Map_Key: string = process.env.GG_Maps_AP ?? "false"
  const position = {lat:51.5007042, lng:-0.1245721}
  const Map_Style = process.env.GG_Maps_MapId ?? "false";
  
  const [open, setOpen] = useState(false);

  const [propertyInquiryState, setPropertyInquiryState] = useState<PropertyDocument|null>(null);
  const [propertyInquiryText, setPropertyInquiryText] = useState("");

  const router = useRouter();

  ///////////////////////////////////////////////////
  //Part 11.2

  const [emailBody, setEmailBody] = useState({
    name: "",
    number: "",
    email: "",
    content: propertyInquiryText,
  });

  const { name, number, email, content } = emailBody;

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement > = ({ target }) => {

    const { name, value } = target;
    setEmailBody({ ...emailBody, [name]:value});

  }


 
    const showEmailConfirm = () => {

      let container = document.getElementById("messageContainer_inquiry");


      /////////////////////////////
      if (container) {

        // slider__container.style.opacity = "0";
        container.style.display = "flex";


        //fade-in
        // slider__container?.classList.remove("fadeOut_animation");
        container.classList.add("fadeIn_animation");

        //wait - to show
        setTimeout(()=> {
          if (container) {
            //fade-out after waiting and showed
            container.classList.remove("fadeIn_animation");
            container.classList.add("fadeOut_animation");

            //wait for fade out to finish then hide the container - duration of the css animation 0.6s
            setTimeout(()=> {
              if (container) container.style.display = "none";
            }, 600);
          
          }
        }, 7000);

      }
      /////////////////////////////


      //redirect to home page
      router.push("/");

        
    }



    const handleSubmit: FormEventHandler<HTMLFormElement>  = async (e) => {
      e.preventDefault();
      console.log(emailBody);
        const res = await fetch("/api/mail/propertyMail", {
            method: "POST",
            body: JSON.stringify(emailBody),

        }).then((res) => res.json());
        console.log(res);

        showEmailConfirm();
    }

  ///////////////////////////////////////////////////
  

  useEffect(()=> {

    const propertyInquiry = sessionStorage.getItem("propertyInquiry");
    if (propertyInquiry) {
      let propertyInquiryParsed = JSON.parse(propertyInquiry);
      // setPropertyInquiryState(propertyInquiryParsed);
      setEmailBody({
        name: "",
        number: "",
        email: "",
        content:`Hello, i would like to inquire about property #${propertyInquiryParsed._id},\n 
which is located in ${propertyInquiryParsed.property_country}, ${propertyInquiryParsed.property_city}, ${propertyInquiryParsed.property_district},
of area ${propertyInquiryParsed.property_area}sqm, ${propertyInquiryParsed.property_beds} bedrooms / ${propertyInquiryParsed.property_baths} bathrooms,
which is offered for ${propertyInquiryParsed.property_listing_type} for ${propertyInquiryParsed.property_price}.
Thanks, \n`
      });
    
  }

  // showEmailConfirm();

  //just take the info, set the text then clear the localStorage right away
  return (sessionStorage.removeItem("propertyInquiry"));


  },[]);



  return (


    <div className="flex flex-col pb-6 pt-28 px-4 md2:px-8 items-center relative">


                <span id="messageContainer_inquiry"
                  className="border-[rgba(255,255,255,0.02)] shadow-lg dark:shadow-inner 
                  absolute z-[2] top-[50%] left-[50%] centered_centered text-xs py-2 px-8
                  bg-[#c21f50] dark:bg-[#951f42] text-white 
                  rounded-[7px] hidden flex-col items-center justify-center whitespace-nowrap
                  ">
                    
                    <span className=" flex flex-row">
                        <span className="opacity-70 text-center font-semibold" id="message_inquiry_title">
                            Thank you, for contacting us
                        </span>
                        {/* <button 
                            onClick={()=> {document.getElementById("messageContainer_inquiry")!.style.display="none"}}
                            className="
                            ml-auto bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545] h-5 w-5 rounded-[6px] text-white flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
                        </button> */}
                    </span>

                    <span id="message_inquiry" className="w-full mx-auto mt-2 opacity-60 text-center">
                        <div>your inquiry has been received,</div>
                        <div>expect feedback call soon.</div>
                    </span>
                </span>

      <div className="max-w-[1230px] w-full">

        <div className="dark:text-white text-black text-shadow-3 w-full text-xs flex flex-row gap-1 opacity-70">
            
            <Link className=""href="/">Home</Link>
            >
            <span className="text-theme-text-brighter">About & Contact</span>
        </div>

        {/* About */}
        <div id="about-us" className="bg-white rounded-[7px]
        glass-container-background-2 min-w-[100%]
        border backdrop-blur-10 py-8 px-10 mt-8
        dark:bg-[#68585806] dark:border-[#ffffff05]
        text-[#000000b3] dark:text-[#ffffffb0] text-center text-l flex flex-col gap-8
        items-center text-sm md2:flex-row
        ">

          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-base">About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quisquam velit itaque, incidunt voluptatibus doloremque ex eligendi tempora non repellendus recusandae pariatur consectetur harum cum cumque illo enim. Minima, ea!
              Est rerum iure dolor ex nihil. Ad, at consequuntur perferendis error enim illum praesentium placeat. Modi assumenda iste tempora, quaerat provident, recusandae suscipit voluptatem cupiditate molestiae in tempore aspernatur. Consectetur?
              Amet quo eligendi nihil voluptatum mollitia ex cumque commodi eius atque et! Cum sint voluptatibus sequi, voluptates quod eius rerum quo, eum ut aut dolorem, harum minima quos repellat delectus.
            </p>
          </div>

          <Image src="/images/furniture.avif" alt="text" width={300} height={300}
          className="border-0 rounded-[7px] w-full md2:max-w-[300px]">

          </Image>

            
        </div>


        {/* contact */}
        <div id="contact" className="bg-white rounded-[7px]
        glass-container-background-2 min-w-[100%]
        border backdrop-blur-10 py-8 px-10 mt-8 pb-12
        dark:bg-[#68585806] dark:border-[#ffffff05]
        text-[#000000b3] dark:text-[#ffffffb0] text-l flex flex-col gap-8
         text-sm md2:flex-row
        ">

        <div className="flex flex-col gap-6 flex-1 my-auto">
            <h1 className="font-semibold text-base">Contact us about your inquiry</h1>
            <form className="flex flex-col md2:gap-4 gap-6" onSubmit={handleSubmit}>

              <div className="flex flex-col gap-2 md2:gap-0 md2:flex-row h-14 md2:h-7 items-center">
                <label className="w-[10rem] block text-center md2:text-start">
                  Your Name
                </label>
                <input 
                  className="border-0 rounded-[3px] 
                  outline-none focus:outline-2 focus:outline-offset-3 
                  focus:outline-[#ff17646f] focus:dark:outline-text-accent-bright
                  caret-[#ff176455] dark:caret-text-accent-bright
                  dark:marker-text-accent-bright placeholder-[#ff176455]
                  text-[#000000d1] px-2 h-full flex-1 bg-[#fffffff2] w-full max-w-[500px]"
                  id="name"
                  maxLength={35}

                  name="name"
                  value={name}
                  onChange={handleChange}
                  required
                  
                  type="text" 
                  />                
              </div>
              
              <div className="flex flex-col gap-2 md2:gap-0 md2:flex-row h-14 md2:h-7 items-center">
                <label className="w-[10rem] block text-center md2:text-start" htmlFor="contact-number">
                  Your Contact-number
                </label>
                <input 
                  className="border-0 rounded-[3px] 
                  outline-none focus:outline-2 focus:outline-offset-3 
                  focus:outline-[#ff17646f] focus:dark:outline-text-accent-bright
                  caret-[#ff176455] dark:caret-text-accent-bright
                  dark:marker-text-accent-bright placeholder-[#ff176455]
                  text-[#000000d1] px-2 h-full flex-1 bg-[#fffffff2] w-full max-w-[500px]"
                  id="contact-number"
                  maxLength={35}

                  name="number"
                  value={number}
                  onChange={handleChange}
                  required

                  type="text" />                
              </div>

              <div className="flex flex-col gap-2 md2:gap-0 md2:flex-row h-14 md2:h-7 items-center">
                <label className="md2:w-[10rem] block text-center md2:text-start" htmlFor="email">
                  Your Email
                </label>
                <input 
                  className="border-0 rounded-[3px] 
                  outline-none focus:outline-2 focus:outline-offset-3 
                  focus:outline-[#ff17646f] focus:dark:outline-text-accent-bright
                  caret-[#ff176455] dark:caret-text-accent-bright
                  dark:marker-text-accent-bright placeholder-[#ff176455]
                  text-[#000000d1] px-2 h-full flex-1 bg-[#fffffff2]
                  w-full max-w-[500px]"
                  id="email"
                  maxLength={35}

                  name="email"
                  value={email}
                  onChange={handleChange}
                  required

                  type="email" />                
              </div>


              <div className="flex flex-col gap-2 md2:gap-0 md2:flex-row h-48 items-center md2:items-baseline">
                <label className="md2:w-[10rem] block " htmlFor="inquiry">
                  How can we help you ? (please specify your inquiry)
                </label>
                <textarea
                className="
                border-0 rounded-[3px] 
                outline-none focus:outline-2 focus:outline-offset-3 
                focus:outline-[#ff17646f] focus:dark:outline-text-accent-bright
                caret-[#ff176455] dark:caret-text-accent-bright
                dark:marker-text-accent-bright placeholder-[#ff176455]
                text-[#000000d1] px-2 h-full flex-1 bg-[#fffffff2]
                py-2 resize-none w-full max-w-[500px]
                
                "

                name="content"
                value={content}
                onChange={handleChange}
                required

                id="inquiry"
//                 value={propertyInquiryState !== null ? (`Hello, i would like to inquire about property #${propertyInquiryState._id}, 
// which is located in ${propertyInquiryState.property_country}, ${propertyInquiryState.property_city}, ${propertyInquiryState.property_district}, 
// of area ${propertyInquiryState.property_area}sqm, ${propertyInquiryState.property_beds} bedrooms / ${propertyInquiryState.property_baths} bathrooms, 
// which is offered for ${propertyInquiryState.property_listing_type} for ${propertyInquiryState.property_price}. 
// Thanks,
//               `):("")}
// value={propertyInquiryText !== "" ? (propertyInquiryText):("")}
                >

                </textarea>
                
              </div>

              <div className="flex flex-col gap-0 md2:gap-0 md2:flex-row md2:h-7 h-14 items-center">
                <span className="md2:w-[10rem] inline-block">
                
                </span>

                <div className="md2:flex-1 flex w-full justify-center max-w-[500px]">
                  <button type="submit"
                className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                  rounded-full py-1.5 px-3 w-[80%] max-w-[200px]
                  opacity-80 hover:opacity-90 text-center md2:ml-auto">
                          Send Inquiry 
                  </button>
                </div>                
              
              </div>




            </form>
          </div>

          

          <div className=" min-h-[100%] md2:ml-auto flex flex-col w-full md2:max-w-[300px] max-w-[500px] mx-auto">

          <h1 className="font-semibold text-base text-center mb-4">Our location</h1>
            <APIProvider apiKey={Map_Key}>
            <div 
            className="border-0 mx-auto md2:ml-auto md2:flex-1 w-full h-[400px] 
            bg-gray-500 dark:grayscale-[0.7] dark:invert rounded-[7px] overflow-hidden"
            >          
              <Map zoom={12} center={position} mapId={Map_Style}>
                <AdvancedMarker position={position} onClick={()=> setOpen(true)}>
                  <Pin background={"red"} borderColor={"black"} glyphColor={"maroon"}/>
                </AdvancedMarker>

                {open && 
                <InfoWindow position={position} onCloseClick={()=>setOpen(false)}>
                  <p className="text-black opacity-70">Our location</p>
                </InfoWindow>
                }

              </Map>
            </div>

          </APIProvider>

          
            
          </div>
          



        </div>




      </div>

    </div>

)}

export default page