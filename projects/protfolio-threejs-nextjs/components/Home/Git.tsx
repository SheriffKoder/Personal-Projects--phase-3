import React, { useEffect, useState } from "react"
import Image from "next/image"

// https://grubersjoe.github.io/react-github-calendar/
import GitHubCalendar, { ThemeInput } from "react-github-calendar"
import { github } from "@/public/assets";
import {motion, useInView} from "framer-motion";


//set the colors for commit levels for both light and dark themes as constants to pass to the component
const explicitTheme:ThemeInput = {
    light: ['rgb(23, 36, 57)', 
            'rgb(63, 96, 154)', 
            'rgb(80, 123, 196)', 
            'rgb(120, 158, 225)', 
            'rgb(160, 189, 240)'
        ],
    dark: ['rgb(23, 36, 57)', 
            'rgb(63, 96, 154)', 
            'rgb(80, 123, 196)', 
            'rgb(120, 158, 225)', 
            'rgb(160, 189, 240)'
        ],
  };



const Git = () => {

    const container2 = React.useRef(null);
    const isInView = useInView(container2, { once: true });

    //default sizes
    const [blockSize, setBlockSize] = useState(12);
    const [fontSize, setFontSize] = useState(14);
    const [blockRadius, setBlockRadius] = useState(2);
    const [blockMargin, setBlockMargin] = useState(4);


    // set responsive sizes for the Git component
    const setSizes = () => {
        // check viewport width to set sizes that match the current viewport width
        // /130, /65 helps getting specific points and set specific points related to the viewport width
        setBlockSize((window.innerWidth/130 < 12 ? window.innerWidth/130 : 12))
        setFontSize((window.innerWidth/65 < 12 ? window.innerWidth/65 : 12));
        setBlockRadius((window.innerWidth < 900 ? 1 : (window.innerWidth < 550 ? 0 : 2)));
        setBlockMargin((window.innerWidth < 900 ? 2 : (window.innerWidth < 550 ? 1 : 4)));
    };



    useEffect(()=> {

        // on first render, set appropriate sizes
        setSizes();

        // set appropriate sizes if the user resizes the browser
        window.addEventListener("resize", setSizes);


    },[])

  return (
    <div className="flex-row items-center justify-center">

        {/* the title and github logo */}
        <div className="flex items-center justify-center">

            <h2 className="text-2xl lg:text-3xl font-medium 
            flex flex-row gap-1">

                <span className="font-semibold">I'm also</span>

                {/* gradient text */}
                <span className="gradient_text_1 font-bold">
                    Committed
                </span>
               

            </h2>

            {/* filter is used to give the black image the color of the last letter of the gradient text */}
            <div className="ml-1 mb-1 h-[max(2vw,20px)] w-[max(2vw,20px)] relative"
            style={{filter: "invert(79%) sepia(8%) saturate(3178%) hue-rotate(117deg) brightness(88%) contrast(93%)"}}>
                    <Image src={github} fill alt={"github logo"}
                    sizes="50px"></Image> 
            </div>

        </div>

        <div className="flex items-center justify-center mt-8 text-[1.5vw]">

            {/* em's used relative to the text size of the container above */}
            <div className="relative  pb-[0.75em] pt-[1em] px-[1.25em]">
                <motion.div
                style={{
                    opacity: isInView ? 0.3 : 0,
                    transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
                  }}
                className="mt-2 absolute -inset-[-1rem] rounded-[0px] bg-gradient-to-t from-[#39d0b7b4] to-[#387ca4] opacity-30 blur-lg"
                ></motion.div>

                <div className="relative" ref={container2}>
                
                    <div className="absolute w-full h-full top-0 rounded-[0.5em] ambientBackground"></div>

                    <div className="z-[1] relative ProjectCard_bg pb-[0.75em] pt-[1em] px-[1.25em] rounded-[0.5em]">
                    <GitHubCalendar username="SheriffKoder" theme={explicitTheme} blockSize={blockSize}
                    blockRadius={blockRadius} blockMargin={blockMargin}
                    fontSize={fontSize}/>
                    </div>
                </div>

              

            </div>

        </div>


    </div>
  )
}

export default Git