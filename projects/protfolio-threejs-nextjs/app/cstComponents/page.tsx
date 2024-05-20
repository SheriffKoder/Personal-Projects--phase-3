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
    // main wrapper
    <section className="min-w-full  ambientBackground relative">
        
        <div className="h-[100vh] w-[100%] pt-[3.5rem]
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

        {/* Call the CompView with the registered Component as a child */}
        {displayComponent && (
            <div className="absolute pt-[3.5rem] top-0 left-0 right-0 bottom-0 bg-black flex items-center justify-center">
                <ComponentView>{displayComponent}</ComponentView>
                <button onClick={()=>setDisplayComponent(null)}
                className="absolute bottom-2">close</button>
            </div>
        )}
    </section>
  )
}

export default page