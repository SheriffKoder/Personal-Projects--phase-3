"use client"
import { useState } from "react"

import Image from "next/image"
import Link from "next/link"

import { clientProjects, featuredProjects, PracticeProjects, DraftProjects } from "@/constants/constants"
import { allTechnologies } from "@/constants/constants"

import TransitionEffect from "@/components/Animations/TransitionEffect"
// scale animation when hover over the project cards icons
import { scaleAnimation } from "@/utils/scaleAnimation"


// import the icons-3d-model
// import { ButtonCanvas } from "@/components/projects/icons"
//lazy loading because for high textures
//wrap in a div to center the spinner in the middle of the element's space
import dynamic from 'next/dynamic';
const ButtonCanvas = dynamic(()=> import("../../components/projects/icons"), {
  ssr:false,
  loading: () => 
  <div className="w-full h-full flex items-center justify-center"><span className="loadingSpinner"></span></div>
})



const page = () => {

  // categorize project types by name for project cards category refactoring
  const allProjects = [
    {
      name: "Client Projects",
      description: "projects done for other people",
      projects: [...clientProjects]
    },
    {
      name: "Practice Projects",
      description: "large/complete projects done for the purpose of practicing new skills",
      projects: [...PracticeProjects]
    },
    {
      name: "Draft Projects",
      description: "small/single page projects done for the purpose practicing new skills/designs",
      projects: [...DraftProjects]
    }

  ]

  //pagination for each category, client starts page 0, practice starts page 0, draft starts page 0
  const [ practicePage, setPracticePage ] = useState([0,0,0]);
  // number of projects per project cards category page view
  const pageLimit = 2;



  return (
    <div className="min-h-[100vh] ambientBackground cursor-default relative">
      <TransitionEffect/>
        
      <div className="max-w-[1600px] mx-auto flex flex-col min-h-full">

          {/* button 3d models*/}
          <div className="h-[35vw] max-h-[500px] pt-[calc(2rem+7vw)]
          flex flex-row flex-wrap gap-8 items-end justify-center
          md1:h-[30vw]">

              {/* will display 3d models with icons from featuredProjects */}
              <ButtonCanvas projects={featuredProjects}/>
          </div>

          {/* main container holding the page title and project cards categories */}
          <main className="min-h-[100vh] flex flex-col mb-[5rem] mt-[1rem]">

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
                    px-[2rem]" key={projectCategory.name+" container"}>

                      {/* client, practice, draft projects etc.  */}
                      <h2 className="subMainHeader mb-[0.5rem]">
                        {projectCategory.name}
                      </h2>

                      {/* white thin line */}
                      <span className="w-[60%] h-[1px] bg-white opacity-60 "/>

                      <p className=" text-[1rem] opacity-40 mt-[0.25rem] mb-[2rem]">
                        {projectCategory.description}{projectCategory.projects.length > 1 ? `, displaying ${projectCategory.projects.length} projects` : projectCategory.projects.length > 0 ? `, displaying ${projectCategory.projects.length} project` : null}
                      </p>

                      {/* project cards container for the current category */}
                      {projectCategory.projects.length > 0 ? (
                      <div className="flex flex-col md1:px-[2rem] gap-8">
                      
                        {/* the project card */}
                        {/* view 2 projects depending on the current set value in the array corresponding to this category 
                        in the practicePage state changed by the pagination */}
                        {
                          projectCategory.projects.slice(practicePage[index],practicePage[index]+pageLimit).map((project, index) => (

                            <div className="rounded-[17px] border ProjectCard_bg w-full
                            flex flex-row p-2 gap-1 fadeIn_animation opacity-0
                            md2:h-[300px] md2:gap-[2rem]" key={project.name+" description"}
                            style={{animationDelay: `${index/5}s`}}>
                            {/* give a slight visibility delay for the 2nd project */}

                              {/* left half - the project's icon */}
                              {/* will use small project icons within the project title on smaller screens
                              so hide this on smaller screens */}
                              {/* images can scale on hover using the scaleAnimation
                              the hovered image is selected by id=project.id to add/switch the animation */}
                              <div className="md2:w-[30%] hidden md2:block 
                              relative rounded-[12px] overflow-hidden
                              ">
                                <Image src={project?.icon} fill alt={project.name+" website icon"} 
                                className="image_scale_animation"
                                id={project.id}
                                sizes="290px"
                                onMouseEnter={()=>{scaleAnimation(project.id)}}
                                onMouseLeave={()=>{scaleAnimation(project.id)}}/>
                              </div>
    
    
                              {/* right half - the project's title and description */}
                              <div className="flex-1 flex flex-col py-2 px-2">
    
                                  {/* project's title and small icon */}
                                  <h3 className="font-semibold
                                  text-[min(1em,1.5rem)] 
                                  md:text-[min(1.125em,1.5rem)] 
                                  flex flex-row gap-2 items-center">

                                    {/* the project's icon for smaller screens*/}
                                    <div className="w-[2em] h-[2em] relative rounded-[2px] overflow-hidden
                                    md2:hidden">
                                      <Image src={project?.icon} fill alt={project.name+" website icon"} 
                                      className="image_scale_animation"
                                      sizes="36px"
                                      id={project.id}
                                      onMouseEnter={()=>{scaleAnimation(project.id)}}
                                      onMouseLeave={()=>{scaleAnimation(project.id)}}/>
                                    </div>

                                    {project.name}
                                  </h3>
    
                                  {/* description */}
                                  <p className="
                                  text-[min(0.75em,1rem)]
                                  md:text-[min(0.875em,1rem)] opacity-60 mt-2">
                                    {project.description}
                                  </p>

                                  <p className="
                                  text-[min(0.75em,1rem)]
                                  md:text-[min(0.875em,0.75rem)] opacity-40 mb-2">
                                    Built in: {project.date}
                                  </p>
    
                                  {/* technologies - copied from @home/projects*/}
                                  <span className="flex flex-row gap-2 flex-wrap items-center mb-6">
                                    {/* <h4 className="">Technologies used:</h4> */}
                                    {
                                      project.tech.map((technology, index)=>
                                        {
    
                                          const tech = allTechnologies.filter((tech2)=> tech2.name === technology)[0];
                          
                                          return (
                                            <div key={project.name+""+tech.name+" "+index} className={`
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
    
                                  {/* project links */}
                                  <div className="flex flex-row gap-2 mt-auto">
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
                        {/* end of a project category */}

                        {/* pagination buttons */}
                        <div className="flex flex-row justify-center items-center mt-4 gap-2 w-full">

                        {/* button = 'first' */}
                        {/* displayed only if we are not on the first page (page 0) */}
                        <div className="h-6 w-12">
                          { practicePage[index] !== 0  && (
                            <button className="h-6 w-12 gradientBGButton rounded-[5px] text-sm fadeIn_animation"
                            // index given from the map function running on each category
                            // so we can set practicePage to 1,0,0 to change the first category to page 1 while remaining categories left at pages 0
                                  onClick={()=>{const temp=[...practicePage]; temp[index] = 0; setPracticePage(temp)}}>
                                    first
                            </button>
                          )}
                        </div>

                          <div className="flex flex-row justify-center items-center gap-2">
                          {
                            // not display page 1 if the quantity of projects available will fit only in page 1 i.e there is no page 2, else display
                            projectCategory.projects.length > pageLimit && Array.from(Array(Math.round(projectCategory.projects.length/pageLimit))).map((x, index2)=> (
                              <button 
                              className={`h-6 w-6 gradientBGButton rounded-[5px] text-sm
                              ${practicePage[index] === index2 *2 ? "border" : null}`}
                              onClick={()=>{
                                console.log(index2);
                                const temp = [...practicePage]; 
                                temp[index] = (index2*2)*(pageLimit/2); 
                                setPracticePage(temp);}
                              }
                              key={index2+1}
                              >
                                {index2+1}
                                {
                                  
                                }
                              </button>
                            ))
                          }
                          </div>

                        {/* button = 'last' */}
                        {/* displayed only if we are not on the last page 
                        and this category contains more than 2 projects (i.e does have another page to display*/}
                          <div className="h-6 w-12">
                          { projectCategory.projects.length > 2 &&
                          practicePage[index] !== projectCategory.projects.length-1*pageLimit &&
                          practicePage[index] !== projectCategory.projects.length-1 &&
                          (
                          <button className="h-6 w-12 gradientBGButton rounded-[5px] text-sm fadeIn_animation"
                                onClick={()=>{
                                  const temp = [...practicePage]; 
                                  
                                  // to be able to view last page with 2 or even if there is only 1 project in this page
                                  temp[index] = projectCategory.projects.length %2 == 0 ?
                                  projectCategory.projects.length-1*pageLimit :
                                  projectCategory.projects.length-1;

                                  setPracticePage(temp);
                                  
                                  }}>
                                  last
                          </button>
                          )}
                          </div>
                          
                        </div>

                      </div>
                      // {/* end of -- project cards container for the current category */}
                      ): (

                        // if there are no projects in this category display this paragraph
                        <p className="md1:px-[2rem]">There are still no projects yet in this section</p>
                      )}

                      
                    </div>
                  )                         
                })
              }

          </main>

      </div>


    </div>
  )
}

export default page;