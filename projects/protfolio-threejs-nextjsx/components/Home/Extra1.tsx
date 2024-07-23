"use client"
import React from "react";
import Image from "next/image";
import { Tilt } from "react-tilt";

// component: things i make sure of
// a component displays tilt cards containing 
// - icon
// - title, description
// for an array of contents
import {motion, useInView} from "framer-motion";


const contents = [
    {
        title: "Multi device support",
        description: "All website pages should be responsive across all devices",
        image: "/images/extra1/responsive.png",
        className: "my-auto pr-2 md1:p-2 md1:mt-4 md1:mb-0"

    },
    {
        title: "Reliability",
        description: "If there is an issue with the website, no worries. it will be fixed right away ",
        image: "/images/extra1/reliable.png",
        className: "p-3 md1:pl-4"
    },
    {
        title: "Modern style",
        description: "Brand personalized, sleek, upto date and catchy design styles",
        image: "/images/extra1/style.png",
        className: "md1:p-1"
    },
]



const Extra1 = () => {

    const container2 = React.useRef(null);
    const isInView = useInView(container2, { once: true });


  return (

    // container holding the main title and the cards
    <div className="flex flex-col items-center gap-8 py-20 relative">

        <h1 className="w-full text-center  text-2xl lg:text-3xl font-medium capitalize "
        ref={container2}>
            Things i make sure of
        </h1>

        {/* container holding the cards */}
        <motion.div 
        // variants={opacity} initial="initial" animate="open"
        style={{
        transform: !isInView ? "translateY(50px)" : "translateY(0px)",
        opacity: isInView ? 1 : 0,
        transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        // transitionDelay: "2.5s",
        //time-s, delay-s
        }}
        className="w-[90%] flex flex-col gap-8 rounded-[17px]
        p-4 flex-wrap
        md1:flex-row md1:items-center md1:justify-between md1:gap-0 max-w-[1000px]">


            {
                contents.map((content, index)=> (
                    
                    <Tilt 
                    className="relative md1:w-[30%]"
                    options={{
                    max:45,
                    scale: 1,
                    speed: 450
                    }}
                    key={content.title}>
                        <div
                      className="absolute -inset-[-2rem] rounded-[7px] bg-gradient-to-t from-[#39d0b7b4] to-[#387ca4] opacity-50 blur-xl"
                        ></div>
                        {/* inside the Tilt */}
                            {/* <div className="absolute mx-auto w-[90%] h-full rounded-[7px] ambientBackground"></div> */}
                            <div className={`extra1_card_bg_wrapper relative
                           h-[15vw] min-h-[100px] max-w-[500px] mx-auto
                            
                            ${index === 1 ? 'md1:max-w-[270px] md1:h-[298px]' : 'md1:max-w-[250px] md1:h-[275px]'}
`}>
                            <div className={`extra1_card_bg border 
                            flex flex-row gap-4 items-center justify-center
                            rounded-[7px] 
                            h-[15vw] min-h-[100px] max-w-[500px] mx-auto
                            
                            ${index === 1 ? 'md1:max-w-[270px] md1:h-[298px]' : 'md1:max-w-[250px] md1:h-[275px]'}
                             py-2 pl-6 pr-3 md1:p-4
                            md1:flex-col md1:text-center
                            
                            `}
                            >
                                <div className={`w-[30%] h-full relative
                                flex items-center justify-center
                                md1:w-full md1:h-[50%]`}>
                                    <div className="radialContainer"></div>

                                    <Image src={content.image} height={100} width={100} alt={content.title +" image"}
                                    className={`${content.className} opacity-90 max-h-full
                                    md1:w-full`}
                                    style={{objectFit: "contain"}}/>
                                </div>
                                
                                <div className="flex-1 flex flex-col gap-1 items-start 
                                md1:items-center text-[calc(0.9rem+0.5vw)]
                                md1:h-[50%] md1:justify-start">
                                    <span className="capitalize
                                    text-[min(0.8em,1rem)]">{content.title}</span>
                                    <span className="opacity-60 font-extralight
                                    text-[min(0.65em,0.9rem)]"
                                    id="extra1_card_desc">
                                        {content.description}
                                    </span>
                                </div>
                            </div>
                            </div>


                    </Tilt>

                ))
            }

            
        </motion.div>

    </div>
  )
}

export default Extra1;