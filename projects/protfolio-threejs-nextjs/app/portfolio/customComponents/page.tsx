"use client"
import ComponentCard from "@/components/customComponents/ComponentCard"
import React, { useState } from "react"

import FirstComp from "@/components/customComponents/firstComponent/FirstComp";
import SecondComponent from "@/components/customComponents/firstComponent/SecondComp";
import ComponentView from "@/components/customComponents/ComponentView";
import menu_dropDown from "@/components/customComponents/menu_dropDown/page";
import progressCircle from "@/components/customComponents/progressCircle/progressCircle";



const page = () => {

    

    const myComponents = [
        // {
        //     component:FirstComp,
        //     name: "First",
        // },
        // {
        //     component:SecondComponent,
        //     name: "Second",
        // },
        {
            component:menu_dropDown,
            name: "Drop-down menu",
        },
        {
            component: progressCircle,
            name: "Progress Circle"
        }
    ];

    // const [displayComponent, setDisplayComponent] = useState<React.ReactNode|null>(null);
    // const [displayComponent, setDisplayComponent] = useState<React.ReactNode|null>(myComponents[3].component);


  return (
<main className="h-full w-full flex flex-row flex-wrap">
            
    <div className="w-[90%] mx-auto
    flex flex-col items-center justify-center
    ">

        <div className="w-full my-[3rem] text-4xl">
            <h1 className="font-semibold">
                Components
            </h1>
        </div>

        <section className="flex flex-row flex-wrap w-full px-8 gap-8">
            {/* call the Card many times with each imported Component as a Child */}
            {myComponents.map((Child, i) => (
            // on click register the component index
            <div 
            // onClick={()=>{setDisplayComponent(Child.component)}} 
            key={Child.name}
            className="mt-0 md1:mt-[-0.75rem] mb-4 md1:mb-0">
                    <ComponentCard>
                        <Child.component/>
                    </ComponentCard>
                    <p className="text-center mt-2 text-[min(3vw,1rem)] md1:text-xs font-semibold px-2">{Child.name}</p>
            </div>
            ))}
        </section>
            
    </div>

    {/* Call the CompView with the registered Component as a child */}
    {/* {displayComponent && (
        <div className="fixed pt-[3.5rem] top-0 left-0 right-0 bottom-0 flex ambientBackground items-center justify-center">
                <ComponentView>{displayComponent}</ComponentView>
                <button onClick={()=>setDisplayComponent(null)}
                className="absolute bottom-0 mb-4">close</button>
        </div>
    )} */}



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