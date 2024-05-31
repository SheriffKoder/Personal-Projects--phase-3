"use client"
import Link from "next/link";

import { clientProjects, featuredProjects, PracticeProjects, DraftProjects } from "@/constants/constants"
import { usePathname } from "next/navigation"


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



export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  

    const path = usePathname().split("/portfolio")[1];

    console.log(path);
  
    return (
  
       
        <section className="min-w-full  max-w-[1600px] mx-auto flex flex-col min-h-full ambientBackground relative pt-[6rem]">
        
        {/* button 3d models*/}
        <div className="h-[35vw] max-h-[150px]
          flex flex-row flex-wrap gap-8 items-end justify-center
          md1:h-[30vw]">

              {/* will display 3d models with icons from featuredProjects */}
              <ButtonCanvas projects={featuredProjects}/>
          </div>

        <nav className="w-[80%] mx-auto pb-4 mt-2 border-b border-[#ffffff1b]">
          <ul className="flex flex-row gap-5 justify-center text-sm">
              <li>
                  <Link href="/portfolio" 
                  className={`px-3 border rounded-full ${path === "" ? 'brightness-50 border-white no_select' : "focus:opacity-90 hover:opacity-90 hover:border-white border-transparent"}`}>
                      Projects
                  </Link>
              </li>
              <li>
                  <Link href="/portfolio/customComponents" 
                  className={` px-3 border rounded-full ${path === "/customComponents" ? 'brightness-50 border-white no_select' : "focus:opacity-90 hover:opacity-90 hover:border-white border-transparent"}`}>
                  Components
                  </Link>
              </li>
              <li>
                  <Link href="/portfolio/custom3dComponents" 
                  className={` px-3 border rounded-full ${path === "/custom3dComponents" ? 'brightness-50 border-white' : "focus:opacity-90 hover:opacity-90 hover:border-white border-transparent"}`}>
                  3D Models
                  </Link>
              </li>
          </ul>
        </nav>

        <div className="min-h-[100vh] w-[100%]
        
        ">
            {children}
        </div>
    </section>
    );
  }
  