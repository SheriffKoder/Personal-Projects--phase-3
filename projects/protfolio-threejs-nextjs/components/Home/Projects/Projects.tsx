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
      <div className="z-[1]" id="homeTech_title"
       >
        <h1 className="gradientBoldHeader text-center relative">
          Highlighted Projects
        </h1>
      </div>


      {/* icons container */}
      <motion.div className="z-[1] 2xl:pt-[1.5vw]" id="homeTech_icons"
      style={{
        opacity: isInView ? 1 : 0.3,
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
      }}
      >

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
                <motion.div 
                
                className={`
                ${projects[currentProject].name == project.name ? "neon_button_selected" : "neon_button_notselected"}
                h-[min(15vw,75px)]
                w-[min(15vw,75px)] 
                ${project.star === true ? "relative" : null}  
                rounded-[min(2vw,10px)]
                cursor-pointer`}
              style={{
                backgroundImage: `url('${project.icon}')`,
                backgroundSize: "100% 100%",
              }}
              key={project.name+"icon"}
              onClick={()=>{changeProject(index); }}
              onMouseEnter={()=>{changeProject(index); }}
              >

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

              </motion.div>
              ))
            }
          </div>
          
          {/* caret down */}
          <div className="z-[1] flex items-center justify-center
          lg:w-[min(15vw,75px)]"
          id="homeTech_caret1">
            <CaretDown  color={"#ffff"} size={"50px"} />
          </div>

      </motion.div>

      {/* container holding both the project's description and the 3d model */}
      <div className="
      lg:ml-[5vw]
      2xl:ml-[6vw]
      overflow-hidden
      2xl:relative
      z-[0]
      "
      id="homeTech_textModels_container"
      >

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
        2xl:absolute
        lg:mt-[4.5vw]
        2xl:mt-[-1vw]
        2xl:justify-center
        bg-gradient-to-r from-[rgb(2,8,18)] from-0% via-[rgb(2,8,18)] via-40% to-transparent to-100%        
        
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
                <span className="rotate-[-10deg]">&#x2605;</span>
                </span>
                }
                
              </h4>

              <p className="text-[min(0.75em,1rem)]">
                {projects[currentProject].description}
              </p>

              {/* project buttons container */}
              <div className="my-2 flex flex-row gap-2">
              
                {projects[currentProject].link && (
                  <button
                  className={`px-4 py-0 text-[min(0.75em,1rem)]  
                    font-base gradientGreyButton
                  ${projects[currentProject].tech.includes("ExpressJS") ? "buttonNotificationRender" : ""}
                  `}>
                      <a href={projects[currentProject].link} 
                      className="gradient_text_1 w-full h-full flex flex-row gap-[0.4rem]">
                      See live
                      {/* <span className="my-auto relative w-[0.75rem]"> */}
                        <svg fill="none" height="12px" viewBox="0 0 24 24" width="12px" className="my-auto"
                        xmlns="http://www.w3.org/2000/svg">
                          <path d="m11.1002 3c-3.64963.00657-5.56078.09617-6.78214 1.31754-1.31806 1.31805-1.31806 3.43944-1.31806 7.68216 0 4.2428 0 6.3642 1.31806 7.6822 1.31805 1.3181 3.43944 1.3181 7.68224 1.3181 4.2427 0 6.3641 0 7.6822-1.3181 1.2213-1.2213 1.3109-3.1325 1.3175-6.7821" 
                          stroke="#39d0b7b4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                          <path d="m21.0713 4.0315c.2936-.29224.2946-.76711.0024-1.06065-.2923-.29355-.7671-.2946-1.0607-.00235zm-10.6005 8.437c-.2935.2922-.2945.7671-.0023 1.0607.2922.2935.7671.2945 1.0607.0023zm9.5577-9.24144-.1308.73851zm-4.0286-.97706c-.4142.00004-.7499.33585-.7499.75007.0001.41421.3359.74997.7501.74993zm4.2501 5.75c0 .41421.3358.75.75.75s.75-.33579.75-.75zm.523-4.02825.7385-.13066zm-.76-1.00325-9.5422 9.5 1.0584 1.063 9.5421-9.5zm.1463-.47995c-.7009-.12412-1.7577-.18159-2.6012-.20984-.4299-.01439-.8185-.02156-1.0996-.02514-.1406-.00178-.2547-.00268-.3338-.00312-.0396-.00023-.0704-.00034-.0916-.00039-.0105-.00003-.0187-.00005-.0242-.00005-.0028-.00001-.005-.00001-.0065-.00001-.0007 0-.0013 0-.0017 0-.0002 0-.0004 0-.0005 0s-.0001 0-.0002 0c0 0-.0001 0 0 .75s.0001.75.0001.75h.0002.0013c.0011 0 .003 0 .0054.00001.0049 0 .0123.00001.0222.00004.0197.00005.049.00016.087.00037.076.00043.1865.00129.3232.00303.2737.00349.6516.01046 1.0685.02442.8498.02846 1.8072.08452 2.3898.1877zm.8407 5.51145c.75 0 .75-.00004.75-.00009 0-.00003 0-.00009 0-.00016 0-.00012 0-.00029 0-.00049 0-.00042 0-.001 0-.00174 0-.00149 0-.00364 0-.00643 0-.00557 0-.0137 0-.02426-.0001-.02113-.0002-.052-.0004-.09157-.0005-.07912-.0014-.19313-.0032-.33378-.0036-.28108-.0108-.66966-.0252-1.09945-.0283-.84346-.0857-1.90017-.2097-2.60094l-1.4771.26131c.1031.58266.1592 1.54007.1877 2.38989.0139.41684.0209.79468.0244 1.06837.0018.13673.0026.24718.0031.32318.0002.03799.0003.06735.0004.08706v.02218.00542.00124.00026.00003c0-.00001 0-.00003.75-.00003zm-1.1023-4.03443c.0505.00894.078.02785.0934.0433s.0344.04295.0433.09353l1.4771-.26131c-.1241-.70137-.6506-1.22829-1.3522-1.35254z" 
                        fill="#39d0b7b4"/></svg>
                      {/* </span> */}
                      </a>
                  </button>
                )}

                  <button
                  className="px-4 py-0 text-[min(0.75em,1rem)] font-base gradientGreyButton">
                    <Link href={`/projects/${projects[currentProject].id}`} className="gradient_text_1 w-full h-full">
                    More details
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
        <div className="lg1120:mt-[-3vw] 2xl:ml-auto 2xl:!w-full overflow-hidden"
        id="homeTech_models">

          <div className="relative flex items-center justify-center w-full h-full">

            <div style={{backgroundImage: `${myImage}, ${myColor}`, backgroundBlendMode: blendMode}}
              className="hero_brush_mask">
            </div>

                <div className="w-full h-full ml-auto relative flex items-center justify-center">
                  <Computer orbitControl={orbitControl}
                  texture_1_url={projects[currentProject].image1}
                  texture_2_url={projects[currentProject].imagex}/>
                </div>
              

              {/* z-[1] to not allow the all projects button to get in the way of clicking this element */}
              <button className="2xl:ml-[17.5rem] rounded-[5px] h-8 w-8 bg-black 
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
      <div className="z-[1] w-full h-[1%] bg-transparent absolute bottom-[-2rem] xl:bottom-0
       flex items-center justify-center">
        <div className="font-base cursor-pointer
         
        text-[min(1.1em,1.0rem)]" ref={container3}>

          <Link href="/projects" className="animateButtonHover gradientRoundButton py-[3px] px-3 rounded-full
          "
          >
            See all my work
          </Link>
        </div>
      </div>


    </div>
    
  )
}

export default Projects;