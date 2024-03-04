"use client"

import React, { useState, useRef } from "react"
import { ChangeEventHandler, FormEventHandler } from "react";

//1.2
import { motion } from "framer-motion";
import {styles} from "../../styles/styles";
// import EarthCanvas from "./EarthCanvas";
import { slideIn } from "@/utils/motion";
import StarsCanvas from "./StarsCanvas";
// import Cube from "../myModels/index-cube-1";
import Cube2 from "../myModels/Earth/index-earth-2";
// import dynamic from "next/dynamic";
// const EarthCanvas = dynamic(()=> import("../../components/Home/EarthCanvas"), {
//     ssr: false,
//     loading: () => <p>Loading...</p>
//     }
// );
// import TransitionEffect from "@/components/Scroll/TransitionEffect";
import { socials } from "@/constants/constants";
import Image from "next/image";

//bg-[#4a19867a]
import Link from "next/link";
// import Galaxy from "../myModels/Earth/index-galaxy";
import SocialIcons from "../Helpers/social";



const Contact = () => {


  ////////////////////////////////////////////////////////////////////////////////////
  const [emailBody, setEmailBody] = useState({
    name: "",
    email: "",
    content: "",
  });

  const { name, email, content } = emailBody;

  const messageContainer_inquiry = useRef<HTMLDivElement>(null)

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement > = ({ target }) => {

    const { name, value } = target;
    setEmailBody({ ...emailBody, [name]:value});

  }

// display a message to the user when email is successfully submitted
const showEmailConfirm = () => {

  // let container = document.getElementById("messageContainer_inquiry");


  /////////////////////////////
  if (messageContainer_inquiry.current !== null) {

    // container.style.display = "flex";
    messageContainer_inquiry.current.style.display = "flex";


    //fade-in
    messageContainer_inquiry.current.classList.add("fadeIn_animation");

    //wait - to show
    setTimeout(()=> {
      if (messageContainer_inquiry.current !== null) {
        //fade-out after waiting and showed
        messageContainer_inquiry.current.classList.remove("fadeIn_animation");
        messageContainer_inquiry.current.classList.add("fadeOut_animation");

        //wait for fade out to finish then hide the container - duration of the css animation is 0.6s
        // setTimeout(()=> {
        //   if (container) container.style.display = "none";
        //     //redirect to home page when email is submitted
        //     router.push("/");
        // }, 600);
      
      }
    }, 5000);

  }
}


  //handle the inquiry submission
  const handleSubmit: FormEventHandler<HTMLFormElement>  = async (e) => {
    e.preventDefault();
    console.log(emailBody);
      const res = await fetch("/api/mail", {
          method: "POST",
          body: JSON.stringify(emailBody),

      }).then((res) => res.json());
      console.log(res);

      if (res === "Email Sent") showEmailConfirm();

  }



  ////////////////////////////////////////////////////////////////////////////////////


  return (

    <div className="flex flex-col gap-10 overflow-hidden
    w-full absolute top-0 h-[100vh] z-[1] items-center justify-center">
         

      <span ref={messageContainer_inquiry}
        className="border-[rgba(255,255,255,0.02)] shadow-lg
        absolute z-[4] top-[50%] left-[50%] centered_centered2 text-xs py-2 px-8
        bg-[#081b3c] text-white 
        rounded-[7px] flex-col items-center justify-center whitespace-nowrap
        hidden
        ">
          
          <span className=" flex flex-row">
              <span className="opacity-70 text-center font-semibold" id="message_inquiry_title">
                  Thank you, for contacting me!
              </span>
              
          </span>

          <span id="message_inquiry" className="w-full mx-auto mt-2 opacity-60 text-center">
              <div>your email has been received,</div>
              <div>expect a reply soon.</div>
          </span>
      </span>



       {/* text div */}
     

      <motion.h2 className="text-[8rem] absolute bottom-[20%]"
      initial={{y:0, opacity: 0}} animate={{y:-100, opacity: 1}} transition={{ease: [.76, 0, 0.24, 1], duration: 1.5, delay:3}}>

        <span className="flex flex-row justify-center relative">Hello World
        <div className="placeHolder h-[10rem] right-[-2rem] mt-[1rem]  absolute w-[1px] bg-white"/>  
        </span>
        
      </motion.h2>
       
  
       

        {/* z 2 to avoid the stars showing on earth combined with -1 on the stars */}
       <div className="flex-1 earth-model absolute z-[1] w-full h-full">
           {/* <EarthCanvas/> */}
           {/* <Cube /> */}
           <Cube2/>


       </div>

       

       

       {/* adding stars here too would make it denser in the hero area */}
         {/* <div className="bg-red-800 w-full h-[95%] z-[1] absolute">
           <StarsCanvas />
         </div> */}


    </div>
  )
}

export default Contact