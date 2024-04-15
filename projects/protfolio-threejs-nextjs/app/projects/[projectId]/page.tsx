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

                                <span className="flex items-center text-[min(0.75em,1rem)] 
                                pb-[0.5rem] pt-[0.25rem] order-1 mx-auto 
                                
                                md1:pb-0 md1:pt-[0rem] md1:order-2 md1:mx-0">
                                {
                                currentProject.link && (
                                    <button className="px-4 py-0 gradientGreyButton focus:opacity-95 hover:opacity-95">
                                        <Link href={currentProject.link} className="gradient_text_1 w-full">
                                        {
                                        currentProject.type === "site" && ("visit site")
                                        }
                                        {
                                        currentProject.type === "page" && ("view page")
                                        }
                                        </Link>
                                    </button>
                                )}
                                </span>
                        
                            </div>

                            <p className="max-w-[1000px] text-[min(0.75em,1rem)] opacity-80 font-light leading-5 md:leading-6">
                                {currentProject.longerDescription}
                            </p>


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