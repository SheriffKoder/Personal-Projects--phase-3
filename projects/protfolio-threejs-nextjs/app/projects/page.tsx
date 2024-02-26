"use client"
import React from "react"

import { projects } from "@/constants/constants"
import { ButtonCanvas } from "@/components/projects/icons"


const page = () => {
  return (
    <div className="min-h-[100vh] ambientBackground cursor-default">


        
            <div className="max-w-[1600px] mx-auto flex flex-col min-h-full ">

                {/* buttons */}
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

                            <ButtonCanvas projects={projects}/>

                 
                </div>

                <div className="border h-[300px]">

                </div>

            </div>


    </div>
  )
}

export default page