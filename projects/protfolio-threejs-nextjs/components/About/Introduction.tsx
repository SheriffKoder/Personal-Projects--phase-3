import React from "react"
import Image from "next/image"

import { scaleAnimation } from "@/utils/scaleAnimation"
import { goals } from "@/constants/constants"

const Introduction = () => {
  return (
    <div className="w-full border border-[#15151500] max-w-[2000px] mx-auto
    ">

           

            <div className="flex flex-col lg:flex-row gap-8 px-4 lg:items-start lg:justify-between">
                <div className="lg:flex-1 order-2 lg:order-1 lg:pl-[5rem]">

                    <h1 className="text-2xl uppercase">
                        About me
                    </h1>
    
                    <h1 className="gradientBoldHeader uppercase">
                        Introduction
                    </h1>

                    <p className="mt-4 text-lg">
                        My name is <gr>Sherif Khodeir</gr>, I have graduated from a reputable university in Egypt
                        with a Bachelor degree in <gr>Electrical Engineering and Electronics</gr>,
                        i have always been interested in <gr>technology, computers and arts</gr> .
                        this is why i am passionate about <gr>Web Development</gr> as it combines all of these points
                        <br/>
                        <br/>
                        before i started <gr>Web development</gr>, i worked in the <gr>Real-Estate</gr> field for many years, 
                        it was an exciting journey because i learnt many new skills and everyday there were <gr>new challenges to face and solve, new people to talk to and meet.</gr>
                        <br/>
                        <br/>
                        A couple of years ago i had more time to reflect. even though it was going well with me in the <gr>Real-Estate</gr> career, 
                        i decided that i should find a field to work in
                        that is <u>more relevant</u> to my <gr>talents and personal interests,</gr>
                        <i> to work on something that it's challenges do actually take me a step further in the development of the skills i would like to master.
                        </i>
                        <br/>
                        <br/>
                        At this time i did not know anything about <gr>Web Development</gr>, so i started with a <u>vision in my mind</u> and from <u>level 0</u>. 
                        knowing that with <u>consistency and perseverance</u> i can reach higher levels 
                        so i kept learning as often as i can and gradually over time <u>increasing the time dedicated</u> to <gr>Web Development</gr> over <gr>Real-Estate</gr>.
                        until <gr>Web-development</gr> became the <b>full-time</b> job and <gr>Real-estate</gr> became the <b>part-time</b>.
                        <br/>
                        <br/>
                        <span className="text-sm font-light">
                        You can find more details about my Education, Previous Career and my Web Development's learning path below
                        </span>


                    </p>
                </div>

                <div className=" mx-auto order-1 lg:order-2 flex flex-col lg:w-[40%]
                relative mb-[4rem] w-full
                
                ">
                    <div className="inline-block mx-auto
                    rounded-full border-4 opacity-90
                    bg-gradient-to-r from-[#50a3d4] from-30% to-[#39d0b7b4]
                    overflow-hidden 
                    ">
                        <Image src="/images/about/avatar2.png" height={300} width={300} alt="profile-photo" priority
                            className=""
                            id={"about_avatar"}
                            onMouseEnter={()=>{scaleAnimation("about_avatar")}}
                            onMouseLeave={()=>{scaleAnimation("about_avatar")}}>
                        </Image>
                    </div>

                    <div className="absolute top-[100%] w-full z-[1] ">
                        
                        <details className="mt-4 p-[3px] rounded-[9px] mx-auto
                         max-w-[500px]
                        text-base glass_background_about">
                            <summary className="px-4 py-1 rounded-[6px] opacity-95
                            bg-gradient-to-r from-[#387ca4] to-[#39d0b7b4]">
                                <span className="font-semibold">current status:</span> {goals[0].title}
                            </summary>
                            <ul className="px-4 py-2 mt-2 flex flex-col gap-2">
                                {
                                    goals.map((goal, index)=> (
                                        <li key={goal.title+" "+index}
                                        className={`flex gap-1 px-1
                                        ${goal.progress === "Done" && "opacity-60"}
                                        `}
                                        >
                                            <details
                                            open={goal.progress !== "Done" && true}
                                            >
                                                <summary>
                                                    {/* { goal.progress !== "Done" ? ( <span>&raquo;</span> ) : ( <span>&#10003;</span> ) } */}
                                                    {goal.title}
                                                </summary>
                        
                                                <ul className="list-disc mb-2">
                                                    {
                                                    goal.steps.length > 0 && (
                                                        goal.steps.map((step, index)=> (
                                                            <li className={`text-sm ml-8 font-extralight
                                                            ${step.progress === "Done" && "text-teal-600"}
                                                            ${step.progress === "Not Yet" && "text-white opacity-90"}
                                                            ${step.progress === "In Progress" && "text-amber-500"}
                                                            `}>
                                                                {step.title+" ["+step.progress+"]"}
                                                            </li>
                                                        ))
                                                    )
                                                    }
                                                </ul>
                                            </details>
                                        </li>
                                    ))
                                }


                                <li className="mt-2 w-full h-[1rem] flex flex-row justify-center items-center gap-4">
                                    <span className="h-2 w-2 rounded-full bg-white"></span>
                                    <span className="h-2 w-2 rounded-full bg-white"></span>
                                    <span className="h-2 w-2 rounded-full bg-white"></span>
                                </li>
                            </ul>

                        </details>
                    </div>
                </div>
                
        </div>



    </div>
  )
}

export default Introduction