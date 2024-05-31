"use client"
import ComponentCard from "@/components/customComponents/ComponentCard"
import React, { useState } from "react"

import FirstComp from "@/components/customComponents/firstComponent/FirstComp";
import SecondComponent from "@/components/customComponents/firstComponent/SecondComp";
import ComponentView from "@/components/customComponents/ComponentView";
import menu_dropDown from "@/components/customComponents/menu_dropDown/page";
const page = () => {

    const myComponents = [
        {
            component:FirstComp,
            name: "First",
        },
        {
            component:SecondComponent,
            name: "Second",
        },
        {
            component:menu_dropDown,
            name: "Drop-down menu",
        }
    ];

    const [displayComponent, setDisplayComponent] = useState<React.ReactNode|null>(null);


  return (
<main className="h-full w-full flex flex-row flex-wrap">
            
    <div className="w-[90%] mx-auto
    flex flex-col items-center justify-center
    ">

        <div className="w-full my-[3rem] text-4xl  ">
            <h1 className="font-semibold">
                Components
            </h1>
        </div>

        <div className="flex flex-row flex-wrap w-full px-8 gap-4">
            {/* call the Card many times with each imported Component as a Child */}
            {myComponents.map((Child, i) => (
            // on click register the component index
            <div onClick={()=>{setDisplayComponent(Child.component)}}>
                    <ComponentCard>
                        <Child.component/>
                    </ComponentCard>
                    <p className="text-center mt-2 text-xs font-semibold px-2">{Child.name}</p>
            </div>
            ))}
        </div>
            
    </div>

    {/* Call the CompView with the registered Component as a child */}
    {displayComponent && (
        <div className="fixed pt-[3.5rem] top-0 left-0 right-0 bottom-0 flex ambientBackground items-center justify-center">
                <ComponentView>{displayComponent}</ComponentView>
                <button onClick={()=>setDisplayComponent(null)}
                className="absolute bottom-0 mb-4">close</button>
        </div>
    )}



{/* <div className="text-center w-full fixed mb-4 bottom-0">
    <Link href="/portfolio" className="mx-auto  border rounded-full px-4 text-sm
    opacity-80 hover:opacity-100 transition-all">
        Back
    </Link>
</div> */}
</main>
  )
}

export default page