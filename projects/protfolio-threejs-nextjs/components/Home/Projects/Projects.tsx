"use client";

import React, {useEffect, useRef, useState} from "react"
import Image from "next/image";
import Link from "next/link";

// import Cube from '@/components/earth';
import dynamic from 'next/dynamic';
import {motion, useInView} from "framer-motion";
import CaretUp from "@/public/icons/caret-up";
import CaretDown from "@/public/icons/caret-down";
import { allTechnologies } from "@/constants/constants";
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
  const projects = [
    {
      name: "Project name 1",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis aut omnis nobis deserunt a, sed, aliquid laboriosam dicta atque dolor ad voluptates velit saepe dignissimos similique quae. Deleniti, animi.
      Voluptates molestiae officia voluptatem rerum, nostrum accusantium deleniti asperiores officiis omnis quibusdam veniam, porro voluptatum pariatur? Modi quidem obcaecati doloremque doloribus ipsum aperiam animi. Debitis harum dolores ipsum pariatur id!`,
      image1: "/images/projects/brickwall.jpg", 
      image2: "/images/projects/pw3.png",
      tech: ["HTML5", "CSS3"],
      link: "https://www.google.com",
    }
  ]

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

    const [orbitControl,setOrbitControl] = useState("");
    const rotateModels = () => {
      setOrbitControl("view");
    
    }

    // console.log(isInView);


    useEffect(()=> {
      if (isInView === true) {
        setOrbitControl("default");
      }
      // console.log(isInView);
    },[isInView]);

  return (

    <div className="w-full border h-[75vh] my-[20rem] flex flex-col" >


      <div className="w-full BoldHeader font-semibold text-center">
        <h1>
          Highlighted Projects
        </h1>
      </div>

      <div className="border border-white-100 flex-1 w-[100%]
      flex flex-col 2xl:flex-row 2xl:relative"> 
       

        {/* /////////////////////////////////////////////////////////////////////// */}
        <div style={{backgroundImage: `${myImage}, ${myColor}`, backgroundBlendMode: blendMode}}
              className="hero_brush_mask hidden 2xl:block">
        </div>



        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* Projects icons */}
        <div className="w-[15%] border flex flex-col items-center justify-center gap-8">
          <CaretUp color={"#ffff"} size={"50px"}/>
          
          <div className="w-[150px] h-[150px] bg-black border-2 border-[#387ca4] rounded-[10px]">

          </div>

          <div className="w-[150px] h-[150px] bg-black border-2 border-[#387ca4] rounded-[10px]">

          </div>

          <div className="w-[150px] h-[150px] bg-black border-2 border-[#387ca4] rounded-[10px]">

          </div>

          <CaretDown  color={"#ffff"} size={"50px"} />
        </div>




        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* Project description */}
        <div className="flex-1 border flex flex-col px-[3rem] py-[5%] gap-[1rem] z-[1]">
            <h4 className="font-semibold text-4xl">{projects[index].name}</h4>
            <p>
              {projects[index].description}
            </p>


            <div>
                <button 
                className="px-4 py-0 lg:text-base text-sm font-base gradientGreyButton focus:opacity-95 hover:opacity-95">
                    <Link href={projects[index].link} className="gradient_text_1 w-full h-full">
                    visit site
                    </Link>
                </button>
            </div>


            <div className="flex flex-row flex-wrap gap-2">
              {
              
              projects[index].tech.map((tech, index) => {

                const technology = allTechnologies.filter((tech2)=> tech2.name === tech);

                return (
                <div key={index} className={`px-3 py-1 mt-1 rounded-[3px] border border-[#ffffff21]
                flex items-center justify-center gap-1 pl-[0.5rem] ${technology[0].name}_bg`}>
                  <div className="opacity-90">
                    <Image src={technology[0].icon} height={18} width={18} alt={technology[0].name}
                    style={{objectFit:"contain"}}></Image>
                  </div>
                  <h3 className={`opacity-95 ${technology[0].name}_text text-sm`}>{technology[0].name}</h3>
                </div>                
                )


                
              })}
            </div>
        </div>






        {/* div2 */}
        <div className="border border-white-100 2xl:w-[40%] h-[30%] 2xl:h-[100%] my-auto flex items-center justify-center relative overflow-hidden">

          {/* <Image src="/assets/brickwall.jpg" alt="Furniture" width={700} height={900}
            className="hero_brush_mask lg:hidden">
          </Image> */}

          <div style={{backgroundImage: `${myImage}, ${myColor}`, backgroundBlendMode: blendMode}}
            className="hero_brush_mask 2xl:hidden">
          </div>

          <div className="relative flex items-center justify-center w-full h-full" ref={container3}>
            {/* <PC/> */}
            <Computer orbitControl={orbitControl} texture_1_url={projects[index].image1} texture_2_url={projects[index].image2}/>
            <button className="rounded-[5px] h-8 w-8 bg-black absolute bottom-[5%] right-[48%]
            flex items-center justify-center opacity-80 border-2 border-white"
            onClick={()=>{orbitControl === "default" || orbitControl === "back" ? setOrbitControl("view") : setOrbitControl("back") }}>
              <Image 
              src={orbitControl === "default" || orbitControl === "back" ? "/icons/zoom-in.png" : "/icons/zoom-out.png" }
              height={17} width={17} alt=""
              className="invert mt-[-1px]"></Image>
            </button>

          </div>


        </div>


      </div>


      <div className="w-full flex items-center justify-center">
        <Link href="/" className="lg:px-4 px-3 py-1
        gradientRoundButton focus:opacity-95 hover:opacity-95
        lg:text-base text-sm">
          view all projects
        </Link>
      </div>

    </div>
    
  )
}

export default Projects