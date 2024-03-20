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
      
      {/* <ProjectDetails detailsProject={detailsProject} detailsVisibility={detailsVisibility} setDetailsVisibility={setDetailsVisibility}/> */}


        
            <div className="mx-auto flex flex-col min-h-full relative">

                {/* wallpaper*/}
                <div className="min-h-[100vh]
                relative overflow-hidden projectIcons_overlay2">

                    <Image src={currentProject.image1} fill alt={""}
                    className="h-full"
                    style={{objectFit: "cover"}} priority>
                        
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
                {/* navigation current location links that has the property title */}
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

                {/* glass container i.e glass border */}
                <div className="w-full h-full rounded-[17px] border border-[#ffffff18]
                 bg-[#ffffff13] p-[1.5vmax]
                 ">

                    {/* inner container */}
                    <div className="flex flex-col h-full max-w-full gap-[2rem] overflow-y-scroll
                    rounded-[10px] pb-3">

                        {/* the images */}
                        <div className="w-[97%] flex flex-row gap-2 order-0 min-h-[min(40vw,411px)]">
                            <div className="p-[min(0.5em,0.75rem)] bg-black border border-[#898989] rounded-[17px] relative flex-1 h-full">
                                <div className="
                                relative  overflow-hidden flex flex-col items-center w-full h-full">
                                    <Image src={currentProject.image1} fill alt={currentProject.name+" desktop view"}
                                    style={{objectFit: "fill"}}
                                    className="rounded-[8px] overflow-hidden
                                    " priority/>
                                </div>
                                <div className="w-full absolute bottom-[min(0.5em,0.75rem)]">
                                    <div className="w-[calc(98.5%-min(0.5em,0.75rem))] text-center text-xs font-light flex
                                    px-[0.8rem] left-0 h-[1.2rem]
                                    bg-black py-1">
                                        <div className="w-full opacity-40">Desktop view</div>
                                    </div>
                                </div>
                            </div>
                            { currentProject.image2 && (
                                <div className="p-[min(0.3vw,0.125rem)] bg-black border border-[#898989]
                                rounded-[min(3vw,25px)] 
                                w-[25%] h-full relative">
                                    <div className="
                                    relative w-full h-full
                                    ">
                                    <Image src={currentProject.image2} fill alt={currentProject.name+" desktop view"}
                                    style={{objectFit: "fill"}}
                                    priority
                                    className="rounded-[min(3vw,23px)] overflow-hidden"/>
                                    </div>
                                    
                                    {/* <div className="w-[50%] mx-auto text-center 
                                    absolute bottom-[min(1.8vw,1rem)] left-0 h-[1rem] bg-black px-1">
                                        <div className="w-full opacity-40">Desktop view</div>
                                    </div> */}
                                    <div className="w-full h-[1.5rem] absolute text-[2vw]
                                    bottom-[max(0.2em,0.3rem)] flex flex-row justify-center">
                                        <div className="bg-black rounded-full px-[max(1em,0.8rem)] flex ml-[-4px]">
                                            <div className="opacity-40 text-[min(1em,0.75rem)]  font-light my-auto">Mobile view</div>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>


                        {/* the descriptions */}
                        <div className="order-1 flex flex-col gap-4">
                            <div className="flex flex-row gap-2 flex-wrap">
                                <h1 className="BoldHeader font-semibold">
                                    {currentProject.name}
                                </h1>
                                <span className="flex items-center">
                                    {
                                        currentProject.link && (
                                            <button
                                            className="px-4 py-0 lg:text-base text-sm font-base gradientGreyButton focus:opacity-95 hover:opacity-95">
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

                            <p className="max-w-[1000px]">
                                {currentProject.longerDescription}
                            </p>
                            <div className="mt-[1.5rem]">
                                <h4 className="mb-1">Technologies used in this project:</h4>
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
                                                style={{objectFit:"contain"}}></Image>
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

export default page