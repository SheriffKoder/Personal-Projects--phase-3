import React from "react"
import Image from "next/image"
import { Tilt } from "react-tilt"

// Why choose me

import {motion, useInView} from "framer-motion";


const contents = [
    {
        title: "Dedication",
        description: "As a dedicated and self-driven person, progressing every day in my goals is a habit",
        image: "/images/extra3/dedication.png",
        className: "w-full scale-90 mr-2"

    },
    {
        title: "Ability to learn",
        description: "I am willing to learn new skills while working on projects to achieve the desired outcome",
        image: "/images/extra3/learning.png",
        className: "scale-90 mr-2 md2:p-2"
    },
    {
        title: "Passion",
        description: "Web-Development for me is a passion and the best thing is that I love what I do",
        image: "/images/extra3/passion.png",
        className: "p-2 md2:p-5 scale-80 mr-2"
    },
]



const Extra3 = () => {

    const container2 = React.useRef(null);
    const isInView = useInView(container2, { once: true });

  return (
    <div className="h-auto flex flex-col items-center justify-center my-[5rem]
    gap-8">
        
        <h1 className="w-full text-center BoldHeader font-bold capitalize  "
        ref={container2}>
            Why Choose me
        </h1>

       <div className="w-[90%] flex flex-col gap-8 rounded-[17px]
        p-4 flex-wrap
        max-w-[1400px]
        md1:flex-row md1:justify-center">


            {
                contents.map((content, index)=> (
                    <Tilt 
                    options={{
                    max:45,
                    scale: 1,
                    speed: 450
                    }}
                    key={content.title}>

                        {/* inside the Tilt */}
                        <motion.div 
                        // variants={opacity} initial="initial" animate="open"
                        style={{
                        transform: !isInView ? "translateY(50px)" : "translateY(0px)",
                        opacity: isInView ? 1 : 0,
                        transition: `all 2s cubic-bezier(0.17, 0.55, 0.55, 1) ${(index/20)+0.5}s`,
                        // transitionDelay: "2.5s",
                        //time-s, delay-s
                        }}
                        className="extra1_card_bg border py-2 pl-6 pr-3
                        flex flex-row gap-4 items-center justify-center
                        rounded-[7px] h-[15vw] min-h-[100px] max-w-[500px] mx-auto
                        
                        max-h-[150px] 
                        "
                        >
                            <div className={`w-[30%] h-full relative
                            flex items-center justify-center
                            `}>
                                <div className="radialContainer"></div>

                                <Image src={content.image} height={100} width={100} alt={content.title +" image"}
                                className={`${content.className} max-h-full 
                                `}
                                style={{objectFit: "contain", width: "auto", height: "auto"}}/>
                            </div>
                            
                            <div className="flex-1 flex flex-col gap-1 items-start 
                            text-[calc(0.9rem+0.5vw)] h-full

                            pt-[1vw] md2:pt-[min(2vw,1.5rem)]
                            ">
                                <span className="capitalize
                                text-[min(0.8em,1rem)]">{content.title}</span>
                                <span className="opacity-60 font-extralight
                                text-[min(0.65em,0.9rem)] mb-auto"
                                id="extra1_card_desc">
                                    {content.description}
                                </span>
                            </div>
                        </motion.div>
                    </Tilt>

                ))
            }

            
        </div>

    </div>
  )
}

export default Extra3;