"use client"
import React, { useEffect, useState, useRef } from "react"

import { ButtonCanvas } from "@/components/projects/icons"
import Image from "next/image"

import { clientProjects, featuredProjects, PracticeProjects, DraftProjects } from "@/constants/constants"
import { allTechnologies } from "@/constants/constants"
import Link from "next/link"

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

  const showDetails = () => {
    detailsContainer.current.style.display="block";
  }

  const HideDetails = () => {
    // let detailsContainer = document.getElementById("detailsContainer");
    // detailsContainer && detailsContainer?.style.display="none";
    detailsContainer.current.style.display="none";

  }

  const detailsContainer = useRef(null);
  const [detailsProject, setDetailsProject] = useState({});

  

  return (
    <div className="min-h-[100vh] ambientBackground cursor-default relative">

      <div className="w-screen h-screen glass_background centered_centered3 z-[100]
      flex items-center justify-center" ref={detailsContainer}>
        
        <div className="w-[80vw] h-[80vh]  bg-black 
        flex flex-col p-[1rem] rounded-[17px] relative centered_centered3
        
        "
        style={{display: "block"}}
        >
          <div className="w-5 h-5 rounded-[5px] bg-red-700 absolute right-0" onClick={HideDetails}>x</div>
        
          <div className="h-[30%] w-full relative rounded-[10px] overflow-hidden">
            <Image src={detailsProject.image1} fill alt={detailsProject.name+" main image"}
            style={{objectFit: "contain"}}/>
          </div>
          <div className="flex-1">
            <h1>{detailsProject.name}</h1>
            <p>{detailsProject.longerDescription}</p>
          </div>
        
        </div>
      </div>


        
            <div className="max-w-[1600px] mx-auto flex flex-col min-h-full ">

                {/* button 3d models*/}
                <div className="h-[30vw] max-h-[500px]  pt-[10vw]
                flex flex-row flex-wrap gap-8 items-end justify-center">
                    {/* {
                    projects.map((project, index) => (

                        <div>
                                <div className="min-w-[100px] min-h-[100px] rounded-[10px]"
                                style={{
                                    backgroundImage: `url('${project.icon}')`,
                                    backgroundSize: "contain"
                                }}
                                >
                                </div>

                                <div className="min-w-[110px] min-h-[110px] rounded-[10px] border
                                 ">
                                </div>

                            
                            
                            
                        </div>

                       
            
                    ))
                    } */}

                            <ButtonCanvas projects={featuredProjects}/>

                 
                </div>

                <div className="min-h-[100vh] flex flex-col mb-[5rem]">

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
                        lg:px-0 px-[2rem]" key={projectCategory.name}>
                          <h2 className="subMainHeader mb-[0.5rem]">
                            {projectCategory.name}
                          </h2>
                          <span className="w-[60%] h-[1px] bg-white opacity-60 mb-[2rem]"/>
    
                          {projectCategory.projects.length > 0 ? (
                          <div className="flex flex-col px-[2rem] gap-8">
                          
                            {/* the project */}
                            {
                              projectCategory.projects.slice(practicePage[index],practicePage[index]+pageLimit).map((project, index) => (
    
                                <div className="rounded-[17px] border NextJS_bg h-[300px] w-full
                                flex flex-row p-2 gap-[2rem]" key={project.name}>
        
                                  {/* left half */}
                                  <div className="w-[30%] relative rounded-[12px] overflow-hidden">
                                    <Image src={project?.icon} fill alt={project.name+" website icon"} />
                                  </div>
        
        
                                  {/* right half */}
                                  <div className="flex-1 flex flex-col gap-2 py-2">
        
                                      {/* name */}
                                      <h3 className="text text-2xl font-semibold">
                                        {project.name}
                                      </h3>
        
                                      {/* description */}
                                      <p className="opacity-80">
                                        {project.description}
                                      </p>
        
                                      {/* technologies */}
                                      <span className="flex flex-row gap-2 flex-wrap items-center">
                                        {/* <h4 className="">Technologies used:</h4> */}
                                        {
                                          project.tech.map((tech, index)=>
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
        
                                      {/* links */}
                                      <div className="mt-2 flex flex-row gap-2">
                                        {
                                        project.link && (
                                          <button 
                                          className="px-4 py-0 lg:text-base text-sm font-base gradientGreyButton focus:opacity-95 hover:opacity-95">
                                            <Link href={project.link} className="gradient_text_1 w-full h-full">
                                            visit site
                                            </Link>
                                          </button>
                                        )}
                                        
                                        {
                                        project.id && (
                                          <button 
                                          className="px-4 py-0 lg:text-base text-sm font-base gradientGreyButton gradient_text_1 focus:opacity-95 hover:opacity-95"
                                          onClick={()=>{setDetailsProject(project); showDetails()}}>
                                            more details
                                          </button>
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