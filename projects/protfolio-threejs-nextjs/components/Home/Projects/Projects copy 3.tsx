"use client";

import React, {ReactElement, ReactHTMLElement, useEffect, useRef, useState} from "react"
import Image from "next/image";
import Link from "next/link";

// import Cube from '@/components/earth';
import dynamic from 'next/dynamic';
import {motion, useInView} from "framer-motion";
import CaretUp from "@/public/icons/caret-up";
import CaretDown from "@/public/icons/caret-down";


import { allTechnologies } from "@/constants/constants";
import { featuredProjects as projects } from "@/constants/constants";



//lazy loading because for high textures
const Computer = dynamic(()=> import("./model-three"), {
  ssr:false,
  loading: () => <p className="absolute top-[50%] right-[50%]">Loading...</p>
})
// const Phone = dynamic(()=> import("@/components/myModels/model-four"), {
//   ssr:false,
//   loading: () => <p className="absolute top-[50%] right-[50%]">Loading...</p>
// })

// const PC = dynamic(()=> import("@/components/myModels/model-five"), {
//   ssr:false,
//   loading: () => <p className="absolute top-[50%] right-[50%]">Loading...</p>
// })

// import { orbitType } from "@/constants/constants";





const Projects = () => {

  const myColor = "linear-gradient(rgba(13, 0, 255, 0.5),rgba(0, 122, 252, 0.5))";
  const myImage = "url('/images/projects/brickwall.jpg')";
  const blendMode = "multiply"

  const container3 = useRef(null);
  const isInView = useInView(container3, { once: true });


  const texture_1_url = "/images/projects/brickwall.jpg";
  const texture_2_url = "/images/projects/pw3.png";
  
  const [index, setIndex] = useState(0);


  // const [Orbit,setOrbit] = useState<orbitType>({
  //   rotation: {x:0, y:-0.5, z:0},
  //   scale: 1,
  //   position: {x: 0, y: 0, z:0},
  // });

  // const rotateModels = () => {
  //   console.log(Orbit);
  //   setOrbit({
  //     rotation: {x:0, y:0, z:0},
  //     scale: 1.5,
  //     position: {x: -1.2, y: 0, z:0},
  //   });
  //   console.log(Orbit);

  // }

  // useEffect(()=> {
  //   console.log(Orbit);
  // },[Orbit])

    const initial = projects.length % 2 === 0 ? 0 : 0;
    const [slideUp, setSlideUp] = useState(initial);
    const slideIndex = useRef(2);
    const [index2, setIndex2] = useState(0);
    const [ lastIndex, setLastIndex ] = useState(3-1);
    const [ currentProject, setCurrentProject ] = useState(0);

    const [orbitControl,setOrbitControl] = useState("");
    const rotateModels = () => {
      setOrbitControl("view");
    
    }

    // console.log(isInView);
    // const project_box_1 = document.getElementById("project_box_1");
    // const project_box_2 = document.getElementById("project_box_2");
    // const project_box_3 = document.getElementById("project_box_3");
    const project_box_1 = useRef<HTMLDivElement>(null);
    const project_box_2 = useRef<HTMLDivElement>(null);
    const project_box_3 = useRef<HTMLDivElement>(null);


    const borderColor = "#ffffff0";

    const projectDescription = useRef<HTMLDivElement>(null);


    useEffect(()=> {
      if (isInView === true) {
        setOrbitControl("default");
      }
      // console.log(isInView);
    },[isInView]);

    useEffect(()=> {
      console.log("//////");
      // console.log("index2 "+ index2);
      // console.log(slideIndex.current);
      // console.log("currentProject " + currentProject);
      console.log("slideIndex "+ slideIndex)
    }, [slideIndex]);




    const changeProject = (index:number) => {

      projectDescription.current?.classList.remove("fadeIn_animation");
      setTimeout(()=> {
      projectDescription.current?.classList.add("fadeIn_animation");
      setCurrentProject(index);

      }, 10);
    }

  return (

    <div className="w-full h-[100vh] md2:h-auto flex flex-col px-3" 
    style={{border: `1px solid ${borderColor}`}}>


      <div className="w-full gradientBoldHeader text-center mb-2">
        <h1>
          Highlighted Projects
        </h1>
      </div>


      {/* div holding the icons, description, 3d model */}
      <div className="flex-1 w-[100%]
      flex flex-col 2xl:relative px-[3vw]
      md2:flex-row md2:gap-4 md2:justify-start"
      style={{border: `1px solid ${borderColor}`}}> 
       

        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* <div style={{backgroundImage: `${myImage}, ${myColor}`, backgroundBlendMode: blendMode}}
              className="hero_brush_mask hidden 2xl:block">
        </div> */}



        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* Projects icons */}
        <div className="flex flex-row items-center justify-center w-full mt-4
        md2:flex-col md2:w-[15%]
        max-w-[600px] max-h-[500px] mx-auto md2:mt-[-2rem]
        lg:max-w-[100px]">
          
          <div className="z-[1] flex items-center justify-center
          rotate-[270deg] md2:rotate-0">
            <CaretUp color={"#ffff"} size={"50px"}/>
          </div>


          <div className="flex-1 flex flex-row justify-around
          md2:flex-col md2:gap-4
          ">
            {
            projects.map((project, index) => (
                <div className={`
                ${projects[currentProject].name == project.name ? "neon_button_selected" : "neon_button_notselected"} 
                h-[min(15vw,75px)] 
                w-[min(15vw,75px)] 
                rounded-[min(2vw,10px)]`}
              style={{
                backgroundImage: `url('${project.icon}')`,
                backgroundSize: "contain"
              }}
              key={project.name+"icon"}
              onClick={()=>{changeProject(index); }}>
              </div>
              ))
            }


          </div>
          
 

          <div className="z-[1] flex items-center justify-center
          rotate-[270deg] md2:rotate-0">
            <CaretDown  color={"#ffff"} size={"50px"} />
          </div>
        </div>




        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* Project description */}
        {/* technologies like in the @home/tech component */}

        <div className="h-[40vh] md2:h-full flex flex-col md1:flex-row pt-8 relative md2:flex-1 border
        max-w-[1250px] xl:mr-auto">

          <div className="flex flex-col gap-[min(1vw,1rem)] z-[1] mx-4 text-[calc(1rem+0.25vw)]
          md2:justify-start  fadeIn_animation
          md1:max-w-[400px] md1:mx-0 h-full md2:max-w-[70%] border
          "
          style={{border: `1px solid ${borderColor}`}}
          ref={projectDescription}>
              <h4 className="font-semibold text-[min(1em,1.25rem)]">{projects[currentProject].name}</h4>
              <p className="text-[min(0.75em,1rem)] opacity-60">
                {projects[currentProject].description}
              </p>
              <div className="my-2 flex flex-row gap-2">
                  <button
                  className="px-4 py-0 lg:text-base text-sm font-base gradientGreyButton focus:opacity-95 hover:opacity-95">
                      <Link href={projects[currentProject].link} className="gradient_text_1 w-full h-full">
                      visit site
                      </Link>
                  </button>
                  <button
                  className="px-4 py-0 lg:text-base text-sm font-base gradientGreyButton focus:opacity-95 hover:opacity-95">
                    <Link href={`/projects/${projects[currentProject].id}`} className="gradient_text_1 w-full h-full">
                    more details
                    </Link>
                  </button>
              </div>
              <div className="flex flex-row flex-wrap gap-2">
                {
          
                projects[currentProject].tech.map((technology, index) => {
                  const tech = allTechnologies.filter((tech2)=> tech2.name === technology)[0];
                  return (
                    <div key={tech.name+ " "+index} className={`
                    pr-[min(1.5rem,calc(0.5rem+1vw))]
                    pl-[min(1.5rem*0.75,calc(0.5rem+1vw)*0.8)]
                    py-[min(0.6rem,0.5vw)]
                    md2:mt-1 mt-0 rounded-[5px] border border-[#ffffff21]
                    flex flex-row items-center justify-start md2:gap-3 gap-2 ${tech.name}_bg
                    text-[calc(1rem+0.3vw)]`}>
                      <div className="opacity-90 w-[min(30px,calc(0.75rem+1vw))] h-[min(30px,calc(0.75rem+1vw))]
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

              {/* <div className="w-full flex items-center justify-center mt-auto">
                <Link href="/projects" className="lg:px-4 px-3 py-1
                gradientRoundButton focus:opacity-95 hover:opacity-95
                lg:text-base text-sm font-medium"
                style={{borderRadius: "100px"}}
                ref={container3}>
                  view all projects
                </Link>
              </div> */}
          </div>

          {/* div2 */}
          <div className="absolute 
          bottom-[calc(-75%)] w-full h-[60%] md:h-[calc(60%+10vmax)]
          md1:right-0 md1:top-0 md1:w-[50%] md1:h-full
          md2:right-0 border border-red-700 md2:w-[40%] md2:top-[25%]
          lg:right-[-3rem] lg:top-[15%]
          xl:absolute xl:h-[400px] xl:top-0 xl:right-[-5%]"
          style={{border: `1px solid ${borderColor}`}}>
            {/* <div style={{backgroundImage: `${myImage}, ${myColor}`, backgroundBlendMode: blendMode}}
              className="hero_brush_mask 2xl:hidden">
            </div> */}
            <div className="relative flex items-center justify-center w-full h-full
             ">
              <Computer orbitControl={orbitControl}
              texture_1_url={projects[currentProject].image1}
              texture_2_url={projects[currentProject].imagex}/>
              <button className="rounded-[5px] h-8 w-8 bg-black absolute bottom-[5%] right-[48%]
              flex items-center justify-center opacity-80 -2"
              onClick={()=>{orbitControl === "default" || orbitControl === "back" ? setOrbitControl("view") : setOrbitControl("back") }}
              style={{border: `1px solid ${borderColor}`}}>
                <Image
                src={orbitControl === "default" || orbitControl === "back" ? "/icons/zoom-in.png" : "/icons/zoom-out.png" }
                height={17} width={17} alt=""
                className="invert mt-[-1px]"></Image>
              </button>
          </div>
          </div>
        </div>


      </div>




    </div>
    
  )
}

export default Projects