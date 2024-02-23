import React, { useState } from "react"
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


//bg-[#4a19867a]
import Link from "next/link";
import Galaxy from "../myModels/Earth/index-galaxy";

const Contact = () => {


  ////////////////////////////////////////////////////////////////////////////////////
  const [emailBody, setEmailBody] = useState({
    name: "",
    email: "",
    content: "",
  });

  const { name, email, content } = emailBody;


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
    w-full absolute top-0 h-[100vh] z-[1]">

      <span id="messageContainer_inquiry"
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
       <div className="absolute z-[2] flex w-full h-full flex-col justify-center items-center
       px-[6vw] mt-[-1rem] md:mt-0
       ">
           <div className="glass_background py-4 px-8">
            <h1 className="font-semibold text-xl capitalize mb-4 text-center md2:text-start">Send me a message</h1>
            <form className="flex flex-col gap-4 text-xs md2:text-base" onSubmit={handleSubmit}>

              {/* name */}
              <div className="flex flex-col gap-2 md2:gap-0 md2:flex-row h-14 md2:h-7 items-center">
                <label className="w-[10rem] block text-center md2:text-start">
                  Your Name
                </label>
                <input 
                  className="border-0 rounded-[3px] 
                  outline-none focus:outline-2 focus:outline-offset-3 
                  focus:outline-[#387ca4]
                  caret-[#387ca4]
                  placeholder-[#387ca4]
                  text-[#000000d1] px-2 h-full flex-1 bg-[#ffffffda] w-full max-w-[500px]"
                  id="name"
                  maxLength={35}

                  name="name"
                  value={name}
                  onChange={handleChange}
                  required
                  
                  type="text" 
                  />                
              </div>

              {/* email */}
              <div className="flex flex-col gap-2 md2:gap-0 md2:flex-row h-14 md2:h-7 items-center">
                <label className="md2:w-[10rem] block text-center md2:text-start" htmlFor="email">
                  Your Email
                </label>
                <input 
                  className="border-0 rounded-[3px] 
                  outline-none focus:outline-2 focus:outline-offset-3 
                  focus:outline-[#387ca4]
                  caret-[#387ca4]
                  placeholder-[#387ca4]
                  text-[#000000d1] px-2 h-full flex-1 bg-[#ffffffda] w-full max-w-[500px]"
                  id="email"
                  maxLength={35}

                  name="email"
                  value={email}
                  onChange={handleChange}
                  required

                  type="email" />                
              </div>

              {/* text-area, email body */}
              <div className="flex flex-col gap-2 md2:gap-0 md2:flex-row h-[7rem] xl:h-[12rem] items-center md2:items-start">
                <label className="md2:w-[10rem] block " htmlFor="inquiry">
                  How can i help ?
                </label>
                <textarea
                className="border-0 rounded-[3px] 
                  outline-none focus:outline-2 focus:outline-offset-3 
                  focus:outline-[#387ca4]
                  caret-[#387ca4]
                  placeholder-[#387ca4]
                  text-[#000000d1] px-2 h-full flex-1 bg-[#ffffffda] w-full max-w-[500px]
                  py-2 resize-none"

                
                name="content"
                value={content}
                onChange={handleChange}
                required
                id="inquiry"
                >

                </textarea>
                
              </div>

              <div className="flex flex-col gap-0 md2:gap-0 md2:flex-row h-7 items-center
              md:mb-1">
                {/* an empty space to resemble the width of the above labels, to place the button uniformly */}
                <span className="md2:w-[10rem] inline-block"></span>

                {/* the submit button */}
                <div className="md2:flex-1 flex w-full justify-center max-w-[500px]">
                  <button type="submit"
                className="gradientRoundButton text-white 
                  rounded-full py-1 px-4 max-w-[200px]
                  opacity-80 hover:opacity-90 text-center md2:ml-auto">
                          Send E-Mail
                  </button>
                </div>                
              
              </div>

            </form>
          </div>
                      
       </div>

        {/* z 2 to avoid the stars showing on earth combined with -1 on the stars */}
       <div className="flex-1 earth-model z-[1] absolute w-full h-full">
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