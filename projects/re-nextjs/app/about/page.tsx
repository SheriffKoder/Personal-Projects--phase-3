// import React from 'react'

"use client";

//this is the about/contact page of the website


import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

//Part 11.2
import { ChangeEventHandler, FormEventHandler } from "react";


////////////////////////////////////////////////////////////////////////////////////
//Addon map related
//npm install @vis.gl/react-google-maps

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
} from "@vis.gl/react-google-maps";
import { PropertyDocument } from "@models/propertyModel";

////////////////////////////////////////////////////////////////////////////////////





const page = () => {

  ////////////////////////////////////////////////////////////////////////////////////
  //Addon map related
  //make sure to put env variables in process.env, define in next.config.js
  const Map_Key: string = process.env.GG_Maps_AP ?? "false"
  const position = {lat:51.5007042, lng:-0.1245721}
  const Map_Style = process.env.GG_Maps_MapId ?? "false";
  ////////////////////////////////////////////////////////////////////////////////////

  const [open, setOpen] = useState(false);


  const router = useRouter();

  ////////////////////////////////////////////////////////////////////////////////////
  //Part 11.2 - having content to pass to the email api route

  const [emailBody, setEmailBody] = useState({
    name: "",
    number: "",
    email: "",
    content: "",
  });

  const { name, number, email, content } = emailBody;

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement > = ({ target }) => {

    const { name, value } = target;
    setEmailBody({ ...emailBody, [name]:value});

  }

  // display a message to the user when email is successfully submitted
  const showEmailConfirm = () => {

    let container = document.getElementById("messageContainer_inquiry");


    /////////////////////////////
    if (container) {

      container.style.display = "flex";


      //fade-in
      container.classList.add("fadeIn_animation");

      //wait - to show
      setTimeout(()=> {
        if (container) {
          //fade-out after waiting and showed
          container.classList.remove("fadeIn_animation");
          container.classList.add("fadeOut_animation");

          //wait for fade out to finish then hide the container - duration of the css animation is 0.6s
          setTimeout(()=> {
            if (container) container.style.display = "none";
          }, 600);
        
        }
      }, 7000);

    }
    /////////////////////////////


    //redirect to home page when email is submitted
    router.push("/");

      
  }


  //handle the inquiry submission
  const handleSubmit: FormEventHandler<HTMLFormElement>  = async (e) => {
    e.preventDefault();
    console.log(emailBody);
      const res = await fetch("/api/mail/propertyMail", {
          method: "POST",
          body: JSON.stringify(emailBody),

      }).then((res) => res.json());
      console.log(res);

      if (res.ok) showEmailConfirm();

  }

////////////////////////////////////////////////////////////////////////////////////  

  //get the inquiry property form the session storage and clear the session storage
  useEffect(()=> {

    //the single property page stores in the browser's session storage the property information
    //we will use it to pre-fill the form contents
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


  //after taking the property data and stored in in the state we can then clear the localStorage right away
  //return i.e when this about page is closed, not before so if the user refreshed the page for any case, can still have the data
  return (sessionStorage.removeItem("propertyInquiry"));

  //want to run this on initial render only
  },[]);



  return (


    <div className="flex flex-col pb-6 pt-28 px-4 md2:px-8 items-center relative">


      {/* this element is hidden, it shows email success message then fades out */}
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
              
          </span>

          <span id="message_inquiry" className="w-full mx-auto mt-2 opacity-60 text-center">
              <div>your inquiry has been received,</div>
              <div>expect feedback call soon.</div>
          </span>
      </span>

      <div className="max-w-[1230px] w-full">

        {/* navigation current location links */}
        <div className="dark:text-white text-black text-shadow-3 w-full text-xs flex flex-row gap-1 opacity-70">
            
            <Link className=""href="/">Home</Link>
            >
            <span className="text-theme-text-brighter">About & Contact</span>
        </div>


        {/* container 1 - About us */}
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
              We are a real estate agency located in london, we have been in the market since 2000 and trough out these years we have been developing our standards to meet our customers expectations. we offer consultancy services for many types of properties wether these are for living these can be shared building homes or single homes, or work spaces whether these can be offices, shops. our variety includes but not limited to properties offered for sale, rent, lease. We also have properties offshore in many countries. For every client we have a promise, to provide excellent customer service through our professional and well trained agents and to provide an attractive variety of options for each request in terms of price, location, facilities.
            </p>
          </div>

          <Image src="/images/companyAbout.jpg" alt="text" width={300} height={300}
          className="border-0 rounded-[7px] w-full md2:max-w-[300px]">
          </Image>

            
        </div>


        {/* container 2 - Contact us */}
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

              {/* name */}
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
              
              {/* contact number */}
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

              {/* email */}
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

              {/* text-area, email body */}
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
                >

                </textarea>
                
              </div>

              <div className="flex flex-col gap-0 md2:gap-0 md2:flex-row md2:h-7 h-14 items-center">
                {/* an empty space to resemble the width of the above labels, to place the button uniformly */}
                <span className="md2:w-[10rem] inline-block"></span>

                {/* the submit button */}
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

          
          {/* the map */}
          {/* //////////////////////////////////////////////////////////////////////////////////// */}
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
          {/* //////////////////////////////////////////////////////////////////////////////////// */}




        </div>




      </div>

    </div>

)}

export default page;