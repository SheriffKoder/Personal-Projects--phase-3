import React, { useEffect, useState } from "react"
import Image from "next/image"

// https://grubersjoe.github.io/react-github-calendar/
import GitHubCalendar, { ThemeInput } from "react-github-calendar"
import { github } from "@/public/assets";


const explicitTheme:ThemeInput = {
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['rgb(23, 36, 57)', 
            'rgb(63, 96, 154)', 
            'rgb(80, 123, 196)', 
            'rgb(120, 158, 225)', 
            'rgb(160, 189, 240)'
        ],
  };

//   rgb(56, 56, 56)', 
//             'rgb(78, 82, 100)', 
//             'rgb(100, 110, 147)', 
//             'rgb(121, 139, 197)', 
//             'rgb(142, 169, 250)'

const Git = () => {

    const [blockSize, setBlockSize] = useState(12);
    const [fontSize, setFontSize] = useState(14);
    const [blockRadius, setBlockRadius] = useState(2);
    const [blockMargin, setBlockMargin] = useState(4);


    window.addEventListener("resize", ()=> {
        // console.log(window.innerWidth/110);
        setBlockSize((window.innerWidth/130 < 12 ? window.innerWidth/130 : 12));
        setFontSize((window.innerWidth/65 < 12 ? window.innerWidth/65 : 12));
        setBlockRadius((window.innerWidth < 900 ? 1 : (window.innerWidth < 550 ? 0 : 2)));
        setBlockMargin((window.innerWidth < 900 ? 2 : (window.innerWidth < 550 ? 1 : 4)));



    });

    useEffect(()=> {
        setBlockSize((window.innerWidth/130 < 12 ? window.innerWidth/130 : 12))
        setFontSize((window.innerWidth/65 < 12 ? window.innerWidth/65 : 12));
        setBlockRadius((window.innerWidth < 900 ? 1 : (window.innerWidth < 550 ? 0 : 2)));
        setBlockMargin((window.innerWidth < 900 ? 2 : (window.innerWidth < 550 ? 1 : 4)));


    },[])

  return (
    <div className="flex-row items-center justify-center">

        <div className="flex items-center justify-center">
            <h2 className="text-2xl lg:text-3xl font-medium 
            flex flex-row gap-1">

                <span className="font-semibold">I'm also</span>
                <span className="gradient_text_1 font-bold">
                    Committed
                </span>
               

            </h2>

            {/* give the black image the color of the last letter of the gradient text */}
            <div className="ml-1 mb-1 h-[max(2vw,20px)] w-[max(2vw,20px)] relative"
            style={{filter: "invert(79%) sepia(8%) saturate(3178%) hue-rotate(117deg) brightness(88%) contrast(93%)"}}>
                    <Image src={github} fill alt={"github logo"}></Image> 
            </div>
        </div>

        <div className="flex items-center justify-center mt-8 text-[1.5vw]
        ">
            <div className="ProjectCard_bg pb-[min(0.75em)] pt-[1em] px-[1.25em] rounded-[0.5em]">
                <GitHubCalendar username="SheriffKoder" theme={explicitTheme} blockSize={blockSize}
                blockRadius={blockRadius} blockMargin={blockMargin}
                fontSize={fontSize}/>
            </div>
        </div>


    </div>
  )
}

export default Git