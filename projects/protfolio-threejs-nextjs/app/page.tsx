"use client"

import { useState } from "react";
import { useEffect } from "react";
import Hero from "@/components/Home/Hero";
import Tech from "@/components/Home/Tech";
// import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";

import Parallax from "@/components/Animations/Parallax";
import Contact from "@/components/Home/Contact";
import Preloader from "@/components/Helpers/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import Extra1 from "@/components/Home/Extra1";
import Extra2 from "@/components/Home/Extra2";
import Extra3 from "@/components/Home/Extra3";
import Projects from "@/components/Home/Projects/Projects";
import Git from "@/components/Home/Git";





//this is the home page components wrapper
export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {

    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )();

    // after 2200ms i.e the preloader functionality finishes
    // set isLoading to false to remove the preloader component
    // and if the user scrolled the page, return to point X/Y = 0/0
    setTimeout(() => {
      setIsLoading(false);
      if (window !== undefined) {
      window.scrollTo(0,0);
      }
    }, 2200);


  }, [])




  return (
      <>
        <div className="w-full pb-[5rem] ambientBackground flex flex-col items-center">

          {/* AnimatePresence to allow the exit animation from 
          the slideLeft variant on the PreLoader Component */}
          {/* <AnimatePresence mode="wait">
          {
            isLoading && <Preloader/>
          }
          </AnimatePresence> */}
          
          
          <div className="w-full max-w-[1600px] flex flex-col mx-auto ">

            <Hero/>

            <div className="mb-[5rem]">
              {/* <Tech/> */}
            </div>
            <Extra1/>
  

            <div className="mt-[15rem]">
              <Projects/>
            </div>

            {/* <div className="w-full max-w-[1600px] h-[90vh] border-2 border-[#ffffffa9] mx-auto
            flex flex-col items-center justify-center relative">

            </div> */}
            <div className="mt-[15rem]">
              {/* <Extra3/> */}
            </div>

            <div className="mt-[3rem]">
              {/* <Git/> */}
            </div>

            <div className="mt-[7rem]">
              {/* <Extra2/> */}
            </div>

            <div className="mt-[5rem]">
              {/* <Contact/> */}
            </div>

          </div>


        </div>
      </>

  );
}
