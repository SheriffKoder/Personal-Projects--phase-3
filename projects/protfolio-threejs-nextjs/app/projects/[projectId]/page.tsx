"use client"
import React, { useEffect, useState, useRef } from "react"

// import { ButtonCanvas } from "@/components/projects/icons"
import Image from "next/image"

import { allProjects } from "@/constants/constants"
import { allTechnologies } from "@/constants/constants"
import Link from "next/link"
import { useParams } from "next/navigation"
import TransitionEffect from "@/components/Animations/TransitionEffect"

const page = () => {

    const id = useParams().projectId;
    const currentProject = allProjects.filter((project) => project.id === id)[0];


    useEffect(()=> {

        const dsc = document.getElementById("project_description");
        if (dsc)
        dsc.innerHTML=currentProject.longerDescription;

    }, [])

  return (
    <div className="h-[calc(100vh-150px)] ambientBackground cursor-default relative">
    <TransitionEffect/>
    

        
        <div className="mx-auto flex flex-col min-h-full relative">

            {/* webpage's background image + glass overlay*/}
            <div className="min-h-[100vh]
            relative overflow-hidden projectIcons_overlay2">

                <Image src={currentProject.image1} fill alt={""}
                className="h-full"
                style={{objectFit: "cover"}} 
                priority
                >
                    
                </Image>
                
                <div className="absolute top-0 w-full h-full glass_background">

                </div>

                {/* <h1 className="MainHeader font-semibold mx-auto absolute top-[50%] left-[50%]
                centered_centered2 w-full text-center
                font-white z-[2]">
                    {currentProject.name}
                </h1> */}
                
            </div>


            {/* content container */}
            <div className="absolute top-0 centered_centered w-[100vw] h-[calc(100vh-110px)]
            p-[2rem] max-w-[1000px] pt-[4.5rem] fadeIn_animation
            ">
                {/* navigation link: projects page > project title */}
                <div className="text-shadow-3 
                w-full text-xs flex flex-row gap-1 opacity-70 mb-2 font-light">
                    <Link className="underline" href="/projects">Projects</Link>
                    &#62;
                    <span className="gradient_text_1 capitalize">
                        <span>
                            {currentProject.name}
                        </span>
                    </span>
                </div>

                {/* glass container i.e glass border containing photos and description */}
                <div className="w-full h-full rounded-[17px] border border-[#ffffff18] bg-[#ffffff13] p-[1.5vmax]">

                    {/* inner container */}
                    <div className="flex flex-col h-full max-w-full gap-[0.5rem] md1:gap-[2rem] overflow-y-scroll
                    rounded-[10px] pb-3">

                        {/* the images */}
                        <div className="w-[100%] flex flex-row gap-2 order-0 min-h-[min(40vw,411px)] pt-1 px-1">
                            
                            {/* image 1 - desktop view*/}
                            <div className="relative flex-1 h-full max-w-[77%] mx-auto">

                                <div className="relative flex flex-col items-center w-full h-full">
                                    <Image src={currentProject.image1} fill alt={currentProject.name+" desktop view"}
                                    style={{objectFit: "fill"}}
                                    className="overflow-hidden
                                    border-black border-[min(1.25vw,0.75rem)] 
                                    rounded-[min(3vw,17px)] 
                                    outline outline-2 outline-[#898989] outline-offset-[1px]
                                    "
                                    sizes="618px"/>
                                </div>

                                {/* alignment values similar to the container's padding value */}
                                <div className="absolute
                                w-[calc(100%-min(2.5vw,1.5rem)/1.1)]  
                                bottom-[calc(min(1.25vw,0.75rem)/2)]
                                left-[calc(min(1.25vw,0.75rem)/1.1)]
                                
                                ">
                                    <div className="w-full text-center font-light flex
                                    bg-black py-[0.125rem] md1:py-1">
                                        <div className="w-full opacity-40 text-[min(1.5vw,0.75rem)]">Desktop view</div>
                                    </div>
                                </div>

                            </div>

                            {/* image 2 - mobile view */}
                            { currentProject.image2 != "" && (
                            <div className="w-[23%] h-full relative">

                                <div className="relative w-full h-full">
                                    <Image src={currentProject.image2} fill alt={currentProject.name+" desktop view"}
                                    style={{objectFit: "fill"}}
                                    
                                    sizes="210px"
                                    className="overflow-hidden h-[105%]
                                    border-black border-[min(0.3vw,0.25rem)] 
                                    outline outline-2
                                    outline-[#898989]
                                    rounded-[min(3vw,25px)] "/>
                                </div>
                        
                                {/* alignment values similar to the container's padding value */}
                                <div className="absolute
                                w-full 
                                bottom-[calc(min(1.25vw,0.75rem)/2)]
                                flex
                                py-[0.125rem]
                                ">
                                    <div className="text-center font-light flex mx-auto px-[min(1vw,13px)] rounded-full
                                    bg-black  md1:py-1">
                                        <div className="w-full opacity-40 text-[min(1.5vw,0.75rem)]">Mobile view</div>
                                    </div>
                                </div>

                            </div>
                            )}

                        </div>


                        {/* text size value taken from @home/projects*/}
                        <div className="order-1 flex flex-col gap-4 text-[calc(1rem+0.25vw)]">

                            {/* the title + button, text size value taken from @home/projects*/}
                            <div className="flex flex-col gap-2 flex-wrap md1:flex-row">

                                <h1 className="text-[min(1em,1.5rem)] font-semibold order-2 md1:order-1">
                                    {currentProject.name}
                                </h1>

                                <span className="flex flex-row gap-2 items-center text-[min(0.75em,1rem)] 
                                pb-[0.5rem] pt-[0.25rem] order-1 mx-auto 
                                
                                md1:pb-0 md1:pt-[0rem] md1:order-2 md1:mx-0">
                                {
                                currentProject.link && (
                                    <Link href={currentProject.link} target="_blank" className={`px-4 py-0 gradientGreyButton focus:opacity-95 hover:opacity-95
                                    ${currentProject.tech.includes("ExpressJS") ? "buttonNotificationRender" : ""}
                                    `}>
                                        <span className="gradient_text_1 w-full flex flex-row gap-[0.4rem]">
                                        See live

                                        <svg fill="none" height="12px" viewBox="0 0 24 24" width="12px" className="my-auto"
                                          xmlns="http://www.w3.org/2000/svg">
                                            <path d="m11.1002 3c-3.64963.00657-5.56078.09617-6.78214 1.31754-1.31806 1.31805-1.31806 3.43944-1.31806 7.68216 0 4.2428 0 6.3642 1.31806 7.6822 1.31805 1.3181 3.43944 1.3181 7.68224 1.3181 4.2427 0 6.3641 0 7.6822-1.3181 1.2213-1.2213 1.3109-3.1325 1.3175-6.7821" 
                                            stroke="#39d0b7b4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                                            <path d="m21.0713 4.0315c.2936-.29224.2946-.76711.0024-1.06065-.2923-.29355-.7671-.2946-1.0607-.00235zm-10.6005 8.437c-.2935.2922-.2945.7671-.0023 1.0607.2922.2935.7671.2945 1.0607.0023zm9.5577-9.24144-.1308.73851zm-4.0286-.97706c-.4142.00004-.7499.33585-.7499.75007.0001.41421.3359.74997.7501.74993zm4.2501 5.75c0 .41421.3358.75.75.75s.75-.33579.75-.75zm.523-4.02825.7385-.13066zm-.76-1.00325-9.5422 9.5 1.0584 1.063 9.5421-9.5zm.1463-.47995c-.7009-.12412-1.7577-.18159-2.6012-.20984-.4299-.01439-.8185-.02156-1.0996-.02514-.1406-.00178-.2547-.00268-.3338-.00312-.0396-.00023-.0704-.00034-.0916-.00039-.0105-.00003-.0187-.00005-.0242-.00005-.0028-.00001-.005-.00001-.0065-.00001-.0007 0-.0013 0-.0017 0-.0002 0-.0004 0-.0005 0s-.0001 0-.0002 0c0 0-.0001 0 0 .75s.0001.75.0001.75h.0002.0013c.0011 0 .003 0 .0054.00001.0049 0 .0123.00001.0222.00004.0197.00005.049.00016.087.00037.076.00043.1865.00129.3232.00303.2737.00349.6516.01046 1.0685.02442.8498.02846 1.8072.08452 2.3898.1877zm.8407 5.51145c.75 0 .75-.00004.75-.00009 0-.00003 0-.00009 0-.00016 0-.00012 0-.00029 0-.00049 0-.00042 0-.001 0-.00174 0-.00149 0-.00364 0-.00643 0-.00557 0-.0137 0-.02426-.0001-.02113-.0002-.052-.0004-.09157-.0005-.07912-.0014-.19313-.0032-.33378-.0036-.28108-.0108-.66966-.0252-1.09945-.0283-.84346-.0857-1.90017-.2097-2.60094l-1.4771.26131c.1031.58266.1592 1.54007.1877 2.38989.0139.41684.0209.79468.0244 1.06837.0018.13673.0026.24718.0031.32318.0002.03799.0003.06735.0004.08706v.02218.00542.00124.00026.00003c0-.00001 0-.00003.75-.00003zm-1.1023-4.03443c.0505.00894.078.02785.0934.0433s.0344.04295.0433.09353l1.4771-.26131c-.1241-.70137-.6506-1.22829-1.3522-1.35254z" 
                                          fill="#39d0b7b4"/></svg>

                                        </span>
                                    </Link>
                                )}

                                {(currentProject.github) && (
                                    <button className="px-4 py-0 gradientGreyButton focus:opacity-95 hover:opacity-95]">
                                        <a
                                        href={currentProject.github}
                                        className="gradient_text_1 flex flex-row gap-[0.4rem]"
                                        target="_blank"                                         
                                        >
                                            Github
                                            <svg className="my-auto pb-[1px]" height="12" viewBox="0 -3.1 2490.3 2493" width="12" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="1245.2" cy="1243.4" fill="transparent" rx="1217.6" ry="1246.5"/>
                                            <path d="m1245.2 1.6c-687.6 0-1245.2 557.4-1245.2 1245.1 0 550.2 356.8 1016.9 851.5 1181.5 62.2 11.5 85.1-27 85.1-59.9 0-29.7-1.2-127.8-1.7-231.8-346.4 75.3-419.5-146.9-419.5-146.9-56.6-143.9-138.3-182.2-138.3-182.2-113-77.3 8.5-75.7 8.5-75.7 125 8.8 190.9 128.3 190.9 128.3 111.1 190.4 291.3 135.3 362.3 103.5 11.2-80.5 43.4-135.4 79.1-166.5-276.6-31.5-567.3-138.3-567.3-615.4 0-135.9 48.6-247 128.3-334.2-12.9-31.3-55.5-157.9 12.1-329.4 0 0 104.6-33.5 342.5 127.6 99.3-27.6 205.8-41.4 311.7-41.9 105.8.5 212.4 14.3 311.9 41.9 237.7-161.1 342.1-127.6 342.1-127.6 67.8 171.5 25.1 298.2 12.2 329.5 79.8 87.2 128.1 198.3 128.1 334.2 0 478.2-291.3 583.6-568.6 614.4 44.7 38.6 84.5 114.4 84.5 230.6 0 166.6-1.4 300.7-1.4 341.7 0 33.1 22.4 72 85.5 59.7 494.5-164.8 850.8-631.4 850.8-1181.4 0-687.7-557.5-1245.1-1245.1-1245.1" 
                                            fill="#39d0b7b4"/>
                                            </svg>
                                        </a>
                                    </button>
                                )}
                                </span>
                        
                            </div>

                            <div className="blueLink2 max-w-[1000px] text-[min(0.75em,1rem)] opacity-80 font-light leading-5 md:leading-6"
                            id="project_description">
                                {/* {currentProject.longerDescription} */}
                            </div>


                            <div className="mt-[1.5rem]">
                                <h4 className="mb-1 text-[min(0.75em,1rem)]">Technologies used in this project:</h4>
                                <span className="flex flex-row gap-2 flex-wrap">
                                    {
                                        currentProject.tech.map((tech, index)=>
                                        {
                                            const technology = allTechnologies.filter((tech2)=> tech2.name === tech);
                                            return (
                                            <div key={index} className={`px-2 py-1 mt-1 rounded-[3px] border border-[#ffffff21]
                                            flex items-center justify-center gap-1  ${technology[0].name}_bg`}>
                                            <div className="opacity-90">
                                                <Image src={technology[0].icon} height={10} width={10} alt={technology[0].name}
                                                style={{objectFit:"contain", width:"auto", height:"auto"}}></Image>
                                            </div>
                                            <h3 className={`opacity-95 ${technology[0].name}_text text-xs`}>{technology[0].name}</h3>
                                            </div>
                                            )
                                        })
                        
                                    }
                        
                                </span>
                            </div>
                        </div>

                        
                    </div>

                

                </div>
            </div>

        </div>


    </div>
  )
}

export default page;