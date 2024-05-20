"use client"
import ComponentCard from "@/components/customComponents/ComponentCard"
import React, { useState } from "react"

import FirstComp from "@/components/customComponents/firstComponent/FirstComp";
import SecondComponent from "@/components/customComponents/firstComponent/SecondComp";
import ComponentView from "@/components/customComponents/ComponentView";

const page = () => {

    const myComponents = [FirstComp, SecondComponent];

    const [displayComponent, setDisplayComponent] = useState<React.ReactNode|null>(null);


  return (
        
        <div className="h-full w-full pt-[3.5rem]
        flex flex-col md:flex-row items-center justify-center gap-4
        ">

                {/* call the Card many times with each imported Component as a Child */}
                {myComponents.map((Child, i) => (
                    // on click register the component index
                    <div onClick={()=>{setDisplayComponent(Child)}}>
                        <ComponentCard>
                            <Child/>
                        </ComponentCard>
                    </div>

                ))}
            
        </div>

     
  )
}

export default page