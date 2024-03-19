"use client"
import React, { useEffect, useState, useRef } from "react"

import { ButtonCanvas } from "@/components/projects/icons"
import Image from "next/image"

import { clientProjects, featuredProjects, PracticeProjects, DraftProjects } from "@/constants/constants"
import { allTechnologies } from "@/constants/constants"
import Link from "next/link"
import TransitionEffect from "@/components/Animations/TransitionEffect"

import { scaleAnimation } from "@/utils/scaleAnimation"


const page = () => {

  const allProjects = [
    {
      name: "Client Projects",
      projects: [...clientProjects]
    },
    {
      name: "Practice Projects",
      projects: [...PracticeProjects]
    },
    {
      name: "Draft Projects",
      projects: [...DraftProjects]
    }

  ]

  const [ practicePage, setPracticePage ] = useState([0,0,0]);
  const pageLimit = 2;

  //page 0 want to see 0-1
  //page 1 want to see 2-3
  //page 2 want to see 4-5

  // useEffect(()=> {
  //   console.log(practicePage);
  //   console.log(PracticeProjects.length);
  // })



  

  // const detailsContainer = useRef(null);
  // const [detailsProject, setDetailsProject] = useState({});
  // const [detailsProject, setDetailsProject] = useState(featuredProjects[2]);
  // const [detailsVisibility, setDetailsVisibility] = useState(true);
  

  return (
    <div className="min-h-[100vh] ambientBackground cursor-default relative">
      {/* <TransitionEffect/> */}
      
      {/* <ProjectDetails detailsProject={detailsProject} detailsVisibility={detailsVisibility} setDetailsVisibility={setDetailsVisibility}/> */}


        
            <div className="max-w-[1600px] mx-auto flex flex-col min-h-full">

                {/* button 3d models*/}
                <div className="h-[35vw] max-h-[500px] pt-[calc(2rem+7vw)]
                flex flex-row flex-wrap gap-8 items-end justify-center
                md1:h-[30vw]">
                    <ButtonCanvas projects={featuredProjects}/>
                </div>

                <div className="min-h-[100vh] flex flex-col mb-[5rem] mt-[1rem] 
                ">

                    <h1 className="MainHeader font-semibold mx-auto">
                      My Projects
                    </h1>


                    {/* display a container for each project category
                    with "separate" pagination that works on odd/even lengths for page limit of 2 only till now,
                    a limit of 2 is the suitable amount without loading the page with too much projects
                    per category */}
                    {
                      allProjects.map((projectCategory, index) => {

                        return (
                        <div className="max-w-[1200px] mx-auto mt-[5rem] w-full flex flex-col
                        px-[2rem]" key={projectCategory.name}>
                          <h2 className="subMainHeader mb-[0.5rem]">
                            {projectCategory.name}
                          </h2>
                          <span className="w-[60%] h-[1px] bg-white opacity-60 mb-[2rem]"/>
    
                          {/* project cards container */}
                          {projectCategory.projects.length > 0 ? (
                          <div className="flex flex-col md1:px-[2rem] gap-8">
                          
                            {/* the project card */}
                            {
                              projectCategory.projects.slice(practicePage[index],practicePage[index]+pageLimit).map((project, index) => (
    
                                <div className="rounded-[17px] border ProjectCard_bg w-full
                                flex flex-row p-2 gap-1 fadeIn_animation
                                md2:h-[300px] md2:gap-[2rem]" key={project.name}>
        
                                  {/* left half */}
                                  <div className="md2:w-[30%] hidden md2:block 
                                  relative rounded-[12px] overflow-hidden
                                  ">
                                    <Image src={project?.icon} fill alt={project.name+" website icon"} 
                                    className="image_scale_animation"
                                    id={project.id}
                                    onMouseEnter={()=>{scaleAnimation(project.id)}}
                                    onMouseLeave={()=>{scaleAnimation(project.id)}}/>
                                  </div>
        
        
                                  {/* right half */}
                                  <div className="flex-1 flex flex-col py-2 px-2">
        
                                      {/* name */}
                                      <h3 className="font-semibold
                                      text-[min(1em,1.5rem)] 
                                      md:text-[min(1.125em,1.5rem)] 
                                      flex flex-row gap-2 items-center">

                                        <div className="w-[2em] h-[2em] relative rounded-[2px] overflow-hidden
                                        md2:hidden mb-2">
                                          <Image src={project?.icon} fill alt={project.name+" website icon"} 
                                          className="image_scale_animation"
                                          id={project.id}
                                          onMouseEnter={()=>{scaleAnimation(project.id)}}
                                          onMouseLeave={()=>{scaleAnimation(project.id)}}/>
                                        </div>

                                        {project.name}
                                      </h3>
        
                                      {/* description */}
                                      <p className="
                                      text-[min(0.75em,1rem)]
                                      md:text-[min(0.875em,1rem)] opacity-60 mb-2">
                                        {project.description}
                                      </p>
        
                                      {/* technologies */}
                                      <span className="flex flex-row gap-2 flex-wrap items-center mb-6">
                                        {/* <h4 className="">Technologies used:</h4> */}
                                        {
                                          project.tech.map((technology, index)=>
                                            {
        
                                              const tech = allTechnologies.filter((tech2)=> tech2.name === technology)[0];
                              
                                              return (
                                                <div key={tech.name+ " "+index} className={`
                                                pr-[min(1.1rem,calc(0.5rem+1vw))]
                                                pl-[min(1.1rem*0.75,calc(0.5rem+1vw)*0.8)]
                                                py-[min(0.2rem,0.5vw)]
                                                md2:mt-1 mt-0 rounded-[5px] border border-[#ffffff21]
                                                flex flex-row items-center justify-start gap-2 ${tech.name}_bg
                                                text-[calc(1rem+0.3vw)]`}>
                                                  <div className="opacity-90 w-[min(20px,calc(0.75rem+1vw))] h-[min(20px,calc(0.75rem+1vw))]
                                                  flex relative">
                                                    <Image src={tech.icon} fill alt={tech.name}
                                                    sizes="30px"
                                                    style={{objectFit:"contain"}}></Image>
                                                  </div>
                                                  <h3 className={`opacity-95 ${tech.name}_text
                                                  text-[min(0.6em,1rem)]`}>
                                                    {tech.name}
                                                  </h3>
                                                </div>          
                                              )  
                                            })
                                          
                                        }
                                        
                                      </span>
        
                                      {/* links */}
                                      <div className="flex flex-row gap-2 mt-auto
                                      
                                      ">
                                        {
                                        project.link && (
                                          <button 
                                          className="px-4 py-0  font-base gradientGreyButton 
                                          focus:opacity-95 hover:opacity-95
                                          text-[min(0.75em,1rem)]">
                                            <Link href={project.link} className="gradient_text_1 w-full h-full">
                                            {
                                            project.type === "site" && ("visit site")
                                            }
                                            {
                                            project.type === "page" && ("view page")
                                            }
                                            </Link>
                                          </button>
                                        )}
                                        
                                        {
                                        project.id && (
                                          <span className="px-4 py-0 font-base gradientGreyButton 
                                          focus:opacity-95 hover:opacity-95
                                          text-[min(0.75em,1rem)]">
                                            <Link
                                            href={`/projects/${project.id}`}
                                            className="gradient_text_1"                                            
                                            >
                                              more details
                                            </Link>
                                          </span>
                                        )}

                                      </div>
        
                                  </div>
                                </div>
        
    
                              ))
                            }

                            <div className="flex flex-row justify-center items-center mt-4 gap-2 w-full">

                            <div className="h-6 w-12">
                            { practicePage[index] !== 0  && (
                              <button className="h-6 w-12 gradientBGButton rounded-[5px] text-sm fadeIn_animation"
                                    onClick={()=>{const temp = [...practicePage]; temp[index] = 0; setPracticePage(temp)}}>
                                      first
                              </button>
                            )}
                            </div>

                              <div className="flex flex-row justify-center items-center gap-2">

                              {
                                Array.from(Array(Math.round(projectCategory.projects.length/pageLimit))).map((x, index2)=> (
                                  <button className={`h-6 w-6 gradientBGButton rounded-[5px] text-sm
                                ${practicePage[index] === index2 *2 ? "border" : null}`}
                                  onClick={()=>{
                                    console.log(index2);
                                    const temp = [...practicePage]; 
                                    temp[index] = (index2*2)*(pageLimit/2); 
                                    setPracticePage(temp);}}
                                  >
                                    {index2+1}
                                    {
                                      
                                    }
                                  </button>
                                ))
                              }
                              </div>

                              <div className="h-6 w-12">
                              { projectCategory.projects.length > 2 &&
                              practicePage[index] !== projectCategory.projects.length-1*pageLimit &&
                              practicePage[index] !== projectCategory.projects.length-1 &&
                               (
                              <button className="h-6 w-12 gradientBGButton rounded-[5px] text-sm fadeIn_animation"
                                    onClick={()=>{
                                      const temp = [...practicePage]; 
                                      
                                      temp[index] = projectCategory.projects.length %2 == 0 ?
                                      projectCategory.projects.length-1*pageLimit :
                                      projectCategory.projects.length-1;

                                      setPracticePage(temp)
                                      
                                      }}>
                                      last
                              </button>
                              )}
                              </div>
                              
                            </div>
    
                          </div>
                          ): (
                            <p>There are still no projects yet in this section</p>
                          )}

                          
                        </div>
                        )                         
                      })
                    }

                </div>

            </div>


    </div>
  )
}

export default page