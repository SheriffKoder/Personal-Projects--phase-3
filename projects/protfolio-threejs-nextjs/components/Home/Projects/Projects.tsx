"use client";

import React, {useEffect, useRef, useState} from "react"
import Image from "next/image";
import Link from "next/link";

// import Cube from '@/components/earth';
import dynamic from 'next/dynamic';
import {motion, useInView} from "framer-motion";
import CaretUp from "@/public/icons/caret-up";
import CaretDown from "@/public/icons/caret-down";

// constants to fill the project information
import { allTechnologies } from "@/constants/constants";
import { featuredProjects as projects } from "@/constants/constants";



//lazy loading because for high textures
const Computer = dynamic(()=> import("./model-three"), {
  ssr:false,
  loading: () => 
  <span className="loadingSpinner"></span>
})






const Projects = () => {

    // constants to be used as a background behind the 3d model
    const myColor = "linear-gradient(rgba(13, 0, 255, 0.5),rgba(0, 122, 252, 0.5))";
    const myImage = "url('/images/projects/brickwall.jpeg')";
    const blendMode = "multiply"

    const container3 = useRef(null);
    const isInView = useInView(container3, { once: true });

    // constants can be used to pass to the 3d model as wallpapers for desktop and mobile
    // but are not used now as the projects constant contains images
    const texture_1_url = "/images/projects/brickwall.jpg";
    const texture_2_url = "/images/projects/pw3.png";
  

    //constants WERE used for the caret icons to change project
    const initial = projects.length % 2 === 0 ? 0 : 0;
    const [slideUp, setSlideUp] = useState(initial);
    const slideIndex = useRef(2);
    const [index2, setIndex2] = useState(0);
    const [ lastIndex, setLastIndex ] = useState(3-1);
    const [ currentProject, setCurrentProject ] = useState(0);


    // used to pass to the 3d model a string which triggers specific animations
    //"default" = adjust position on page entry, "back" = zoom out, view" = zoom in
    const [orbitControl,setOrbitControl] = useState("");
    const rotateModels = () => {
      setOrbitControl("view");
    }


    //constants WERE used for the caret icons to change project
    const project_box_1 = useRef<HTMLDivElement>(null);
    const project_box_2 = useRef<HTMLDivElement>(null);
    const project_box_3 = useRef<HTMLDivElement>(null);


    // ref used on the project contents jsx element to trigger a fade css animation on project change
    const projectDescription = useRef<HTMLDivElement>(null);


    // adjust 3d model position on page entry
    useEffect(()=> {
      if (isInView === true) {
        setOrbitControl("default");
      }
    },[isInView]);

    // trigger a fade css animation on project change on the project contents jsx element 
    const changeProject = (index:number) => {

      projectDescription.current?.classList.remove("fadeIn_animation");

      //10ms to wait for the remove to finish then can add again, otherwise add/remove can overlap causing no animation
      setTimeout(()=> {
        projectDescription.current?.classList.add("fadeIn_animation");
        setCurrentProject(index);
      }, 10);

    }

  return (

    // main container of all
    <div className="relative" id="homeTech_container">

      {/* title container */}
      <div className="" id="homeTech_title">
        <h1 className="gradientBoldHeader text-center relative">
          Highlighted Projects
        </h1>
      </div>


      {/* icons container */}
      <div className="2xl:pt-[3.5vw]" id="homeTech_icons">

          {/* caret up */}
          <div className="z-[1] flex items-center justify-center
          lg:w-[min(15vw,75px)]
          " 
          id="homeTech_caret1">
            <CaretUp color={"#ffff"} size={"50px"}/>
          </div>

          {/* projects icons that changes displayed content if clicked*/}
          <div className="flex-1 flex flex-row justify-around"
          id="homeTech_icons_projects">

            {
            projects.map((project, index) => (
                <div className={`
                ${projects[currentProject].name == project.name ? "neon_button_selected" : "neon_button_notselected"}
                h-[min(15vw,75px)]
                w-[min(15vw,75px)] 
                ${project.star === true ? "relative" : null}  
                rounded-[min(2vw,10px)]
                cursor-pointer`}
              style={{
                backgroundImage: `url('${project.icon}')`,
                backgroundSize: "contain"
              }}
              key={project.name+"icon"}
              onClick={()=>{changeProject(index); }}>

                {project.star === true && 
                <span className="br brightness-[0.85]
                text-[calc(min(15vw,75px)/3)] h-[calc(min(15vw,75px)/2.7)] w-[calc(min(15vw,75px)/2.7)]
                absolute top-[calc(-35%/2)]  right-[calc(-35%/2)] flex items-center justify-center
                font-bold opacity-100
                ">
                <span className="starProj">&#x2B50;</span>
                {/* &#x2605; with text /2.7 not 3*/}
                </span>
                }

              </div>
              ))
            }
          </div>
          
          {/* caret down */}
          <div className="z-[1] flex items-center justify-center
          lg:w-[min(15vw,75px)]"
          id="homeTech_caret1">
            <CaretDown  color={"#ffff"} size={"50px"} />
          </div>

      </div>

      {/* container holding both the project's description and the 3d model */}
      <div className="
      lg:ml-[5vw]
      2xl:ml-0
      overflow-y-hidden
      "
      id="homeTech_textModels_container">

        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* background image was used before, to at the back between the description and the model */}
        {/* <div style={{backgroundImage: `${myImage}, ${myColor}`, backgroundBlendMode: blendMode}}
              className="hero_brush_mask hidden lg:block">
        </div> */}

        {/* project's description */}
        <div className=" 
        flex flex-col gap-[min(1vw,1rem)] z-[1] text-[calc(1rem+0.25vw)]
        fadeIn_animation 
        md2:mt-[min(5vh,1rem)]
        
        lg:mt-[4.5vw]
        2xl:mt-[-1vw]
        2xl:justify-center
        "
        id="homeTech_text"
        ref={projectDescription}>

              <h4 className="font-semibold text-[min(1em,1.5rem)] flex flex-row items-center">
                <span className="pt-[2px]">{projects[currentProject].name}</span>

                { projects[currentProject].star === true && 
                <span className="text-[0.5em] text-black font-normal rounded-[min(1.4vw,7px)] py-[0.125rem] md2:py-[0.2rem] pl-2 pr-[5px] bg-[#d7b82d] ml-2 my-auto
                flex flex-row items-center justify-center"
                style={{letterSpacing: "0.5px"}}>
                  starred
                <span className="rotate-12">&#x2605;</span>
                </span>
                }
                
              </h4>

              <p className="text-[min(0.75em,1rem)] opacity-60">
                {projects[currentProject].description}
              </p>

              {/* project buttons container */}
              <div className="my-2 flex flex-row gap-2">
              
                {projects[currentProject].link && (
                  <button
                  className="px-4 py-0 text-[min(0.75em,1rem)]  font-base gradientGreyButton focus:opacity-95 hover:opacity-95">
                      <Link href={projects[currentProject].link} className="gradient_text_1 w-full h-full">
                      visit site
                      </Link>
                  </button>
                )}

                  <button
                  className="px-4 py-0 text-[min(0.75em,1rem)] font-base gradientGreyButton focus:opacity-95 hover:opacity-95">
                    <Link href={`/projects/${projects[currentProject].id}`} className="gradient_text_1 w-full h-full">
                    more details
                    </Link>
                  </button>

              </div>

              {/* list all the technologies of the project as icons */}
              <div className="flex flex-row flex-wrap gap-2">
                {
                  projects[currentProject].tech.map((technology, index) => {
                  const tech = allTechnologies.filter((tech2)=> tech2.name === technology)[0];
                  return (
                    <div key={projects[currentProject].name+""+tech.name+" "+index} className={`
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
          
                })}
              </div>

        </div>

        {/* 3d model container + back image */}
        <div className="lg1120:mt-[-3vw]"
        id="homeTech_models">

          <div className="relative flex items-center justify-center w-full h-full">

            <div style={{backgroundImage: `${myImage}, ${myColor}`, backgroundBlendMode: blendMode}}
              className="hero_brush_mask">
            </div>

              <Computer orbitControl={orbitControl}
              texture_1_url={projects[currentProject].image1}
              texture_2_url={projects[currentProject].imagex}/>

              {/* z-[1] to not allow the all projects button to get in the way of clicking this element */}
              <button className="rounded-[5px] h-8 w-8 bg-black 
              flex items-center justify-center opacity-80 z-[1]"
              onClick={()=>{orbitControl === "default" || orbitControl === "back" ? setOrbitControl("view") : setOrbitControl("back") }}
              id="homeTech_magnifyButton">
                <Image
                src={orbitControl === "default" || orbitControl === "back" ? "/icons/zoom-in.png" : "/icons/zoom-out.png" }
                height={17} width={17} alt=""
                className="invert mt-[-1px]">
                </Image>
              </button>
          </div>

        </div>
      </div>
      {/* end of homeTech_textModels_container */}

      {/* when viewed will trigger the default 3d model position animation set in the model file */}
      <div className="w-full h-[5%] bg-transparent absolute bottom-[-2rem] xl:bottom-0
       flex items-center justify-center" ref={container3}>
        <div className="text-[calc(1rem+0.3vw)] bg-[#4747475c] 
            rounded-full flex items-center justify-center">

              <Link href="/projects" className="text-[min(0.6em,1rem)] px-3 py-1
              gradient_text_1  focus:opacity-95 hover:opacity-95
              "
              style={{borderRadius: "100px"}}
              >
                view all projects
              </Link>
            </div>
      </div>


    </div>
    
  )
}

export default Projects;