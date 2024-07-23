import React, { useRef,useEffect } from "react"


import localFont from 'next/font/local'


//lazy loading because for high textures
import dynamic from 'next/dynamic';
const CharCanvas = dynamic(()=> import("../myModels/CharCanvas"), {
  ssr:false,
  loading: () => 
  <div className="w-full h-full flex items-center justify-center"><span className="loadingSpinner"></span></div>
})

const VisbyRoundFont = localFont({ src: "../../public/fonts/VisbyRoundCF-Heavy.woff2" })


import {motion} from "framer-motion";
import Link from "next/link";
import FadeUp from "../Animations/FadeUp";
import SingleWordUp from "../Animations/SingleWordUp";
import CaretDown2 from "@/public/icons/caret-down2";

import { useInView } from "framer-motion";
import DownloadIcon from "./DownloadIcon";
import ResumeOverlay from "./ResumeOverlay";
import ResumeButton from "./HeroResumeButton";
import CheckSessionStorage from "./CheckSessionStorage";

const Hero = () => {

  // used for the next-component link
  const container = useRef(null);
  const isInView = useInView(container);

  const container3 = useRef(null);
  const isInView1 = useInView(container3,{ once: true });

  let text=`I aspire to help my clients businesses shine and grow<br/>
              by designing and building beautiful and interactive websites<br/>
              with ReactJS, NodeJS, ThreeJS and more...<br/>`


  return (
      <section className="relative">
        {isInView && (
            <div className="z-1 absolute bottom-[2rem] w-full flex items-center justify-center"
            >
                <a href="#tech-comp" className="mx-auto border-2 border-white rounded-full w-8 h-8
                flex items-center justify-center opacity-50 cursor-pointer z-[1] ">
                  <CaretDown2 size={40} color="#ffff"/>
                </a>

            </div>
          )}

        <div className="max-h-[99vh] h-[99vh] xl:pr-[5rem] z-0
        flex
        flex-col gap-6 justify-center items-center pt-[4rem]
        md2:flex-row md2:items-center md2:justify-end lg:gap-12 lg:pt-[8rem]
        mx-auto relative min-w-full "
        id="heroContainer_comp" ref={container3}
        >    

          {/* an element at the top of the component used as a trigger for the caret down button
          which transfers to the next component on the page */}
          <span className="w-full h-[1px] bg-transparent absolute top-0" ref={container}></span>

          {/* ///////////////////////////// Hero text  /////////////////////////////*/}
          {/* id's are used for landscape media queries in globals.css */}
          {/* combine text with vw and em's in children for a responsive text size */}
          {/* <FadeUp> */}
          <div className="text-[calc(1rem+0.25vw)]
          flex flex-col order-2 items-center text-center h-[30%]
          lg:order-1 md2:text-start md2:items-start  md2:ml-[4rem] lg:flex-1
          max-w-[700px] mt-0 lg:mt-0 md2:absolute z-[1] left-0
          xl:left-[5rem]
          "
          id="heroText_comp">
                        {/* text-[min(1.75em,2.25rem)]  lg:text-[min(calc(1.5rem+1vw),46px)]  */}
            <span className={`gradient_text_1 
            font-bold uppercase
            text-3xl mb-2 md1:text-4xl md2:text-6xl xl:text-7xl
            ${VisbyRoundFont.className}`} 
            >
              Sheriff Koder
            </span>
            
            
            <span className="text-[min(1em,1.25rem)] font-thin">A full-stack
              <span className="font-semibold uppercase"> Web developer</span>
            </span>
            

            <span className="text-[min(0.75em,1rem)] mt-2 font-extralight" >
              {text.split("<br/>").map((word)=>(
                <div className="overflow-hidden">
                <motion.div 
                // variants={opacity} initial="initial" animate="open"
                style={{
                  transform: !isInView1 ? "translateY(20px)" : "translateY(0px)",
                  opacity: isInView1 ? 1 : 0,
                  // delay the animation if the default hello loader is being used
                  transition: `all 1s cubic-bezier(0.17, 0.55, 0.55, 1) ${CheckSessionStorage() ? '1s': '3s'}`,
                  // transitionDelay: "2.5s",
                  //time-s, delay-s
                }}
                
                className=" ">
                  {word}
                </motion.div>
                </div>
              ))}
            </span>

            {/* ////// links ////// */}
            <span className="mt-6 flex flex-row gap-4 items-center
            text-[80%] flex-wrap
            ">

              <Link href="/about" className="lg:px-4 px-3 py-1
              gradientRoundButton
              text-[min(0.9em,1rem)] animateButtonHover
              ">
                  More about me
              </Link>

              <ResumeButton />

            </span>
          
          
          </div>
          {/* </FadeUp> */}

          {/* order-1 h-[60%] lg:h-[80%] lg:min-w-[40%]  */}
          {/* ///////////////////////////// Human 3d model  /////////////////////////////*/}
          <div 
          className="md2:w-[40vw] md2:h-[40vw] w-[40vh] h-[40vh]
          order-1 lg:order-2 mt-[-4rem] md1:mt-0"
          id="heroChar_comp">
              <CharCanvas/>
          </div>
          {/* next-component link */}
          {/* display this component-link when the ref is in view, hide when out of this component */}


      </div>
      </section>


  )
}

export default Hero