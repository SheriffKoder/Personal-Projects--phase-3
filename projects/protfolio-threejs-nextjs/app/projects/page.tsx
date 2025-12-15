"use client"
import { useState } from "react"

import Image from "next/image"
import Link from "next/link"

import {github} from "@/public/assets";

import { clientProjects, featuredProjects, PracticeProjects, DraftProjects, socials } from "@/constants/constants"
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
      name: "Production Projects",
      description: "Web applications or websites ready for client use",
      projects: [...clientProjects]
    },
    {
      name: "Personal Projects",
      description: "Large/complete projects done for the purpose of practicing new skills",
      projects: [...PracticeProjects]
    },
    {
      name: "Draft Projects",
      description: "Small or single page projects done for the purpose learning new skills or designs",
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

              <h1 className="MainHeader font-semibold mx-auto text-center flex flex-col">
                <span>Professional projects</span>
                <span>with a <span className="gradient_text_1">creative</span> touch</span>
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

                      {/* font size like the @home/projects description font size */}
                      <p className=" text-[min(calc((1rem+0.25vw)*0.75),1rem)] opacity-40 mt-[0.25rem] mb-[2rem]">
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
                                onMouseLeave={()=>{scaleAnimation(project.id)}}
                                style={{objectFit: "cover"}}/>
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
                                  <div className="flex flex-row gap-2 flex-wrap mt-auto">
                                    {
                                    project.link && (
                                      <Link href={project.link} target="_blank"
                                      className={`px-4 py-0  font-base gradientGreyButton 
                                      focus:opacity-95 hover:opacity-95
                                      text-[min(0.75em,1rem)]
                                      ${project.tech.includes("ExpressJS") ? "buttonNotificationRender" : ""}
                                      `}>
                                        <span className="gradient_text_1 w-full h-full flex flex-row gap-[0.4rem]">
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
                                    
                                    {
                                    (project.longerDescription.length > 0) && (
                                      <span className="px-4 py-0 font-base gradientGreyButton 
                                      focus:opacity-95 hover:opacity-95
                                      text-[min(0.75em,1rem)]">
                                        <Link
                                        href={`/projects/${project.id}`}
                                        className="gradient_text_1"                                            
                                        >
                                          More details
                                        </Link>
                                      </span>
                                    )}

{
                                    (project.github) && (
                                      <span className="px-[1.125rem] py-0 font-base gradientGreyButton 
                                      focus:opacity-95 hover:opacity-95
                                      text-[min(0.75em,1rem)]">
                                        <a
                                        href={project.github}
                                        className="gradient_text_1 flex flex-row gap-[0.4rem]"
                                        target="_blank"                                         
                                        >
                                          Github
                                          <svg className="my-auto" height="12" viewBox="0 -3.1 2490.3 2493" width="12" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="1245.2" cy="1243.4" fill="transparent" rx="1217.6" ry="1246.5"/>
                                            <path d="m1245.2 1.6c-687.6 0-1245.2 557.4-1245.2 1245.1 0 550.2 356.8 1016.9 851.5 1181.5 62.2 11.5 85.1-27 85.1-59.9 0-29.7-1.2-127.8-1.7-231.8-346.4 75.3-419.5-146.9-419.5-146.9-56.6-143.9-138.3-182.2-138.3-182.2-113-77.3 8.5-75.7 8.5-75.7 125 8.8 190.9 128.3 190.9 128.3 111.1 190.4 291.3 135.3 362.3 103.5 11.2-80.5 43.4-135.4 79.1-166.5-276.6-31.5-567.3-138.3-567.3-615.4 0-135.9 48.6-247 128.3-334.2-12.9-31.3-55.5-157.9 12.1-329.4 0 0 104.6-33.5 342.5 127.6 99.3-27.6 205.8-41.4 311.7-41.9 105.8.5 212.4 14.3 311.9 41.9 237.7-161.1 342.1-127.6 342.1-127.6 67.8 171.5 25.1 298.2 12.2 329.5 79.8 87.2 128.1 198.3 128.1 334.2 0 478.2-291.3 583.6-568.6 614.4 44.7 38.6 84.5 114.4 84.5 230.6 0 166.6-1.4 300.7-1.4 341.7 0 33.1 22.4 72 85.5 59.7 494.5-164.8 850.8-631.4 850.8-1181.4 0-687.7-557.5-1245.1-1245.1-1245.1" 
                                            fill="#39d0b7b4"/>
                                          </svg>
                                        </a>
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
                        <p className="md1:px-[2rem]">Awesome projects will be displayed here. Your's can be next !</p>
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