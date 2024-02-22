"use client"

import { useState } from "react";
import { useEffect } from "react";
import Hero from "@/components/Home/Hero";
import Tech from "@/components/Home/Tech";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";

import Parallax from "@/components/Animations/Parallax";
import LinkProvider from "@/components/context";
import Nav2 from "@/components/Nav2";
import Contact from "@/components/Home/Contact";


//this is the home page components wrapper
export default function Home() {


  // useEffect( () => {

  //   (

  //     async () => {

  //         const LocomotiveScroll = (await import('locomotive-scroll')).default

  //         const locomotiveScroll = new LocomotiveScroll();

  //     }

  //   )()

  // }, [])

  useEffect(()=> {

  })

  return (
      <>
        <div className="w-full pb-[10rem] ambientBackground">
        <LinkProvider>
            <Nav2/>
            <Hero/>

          <Tech/>

          <div className="w-full max-w-[1600px] h-[90vh] border-2 border-[#ffffffa9] mx-auto
          flex flex-col items-center justify-center relative">

          </div>

          <Contact/>
          </LinkProvider>

        </div>
      </>

  );
}
