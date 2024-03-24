import React from "react"
import Image from "next/image"

import { scaleAnimation } from "@/utils/scaleAnimation"
import { goals } from "@/constants/constants"

const Introduction = () => {
  return (
    <div className="w-[100vw] border border-[#15151500] max-w-[2000px] mx-auto
    ">

           

            <div className="flex flex-col md2:flex-row gap-8 px-4 md2:items-start md2:justify-between">
                
                <div className="md2:flex-1 order-2 md2:order-1 md2:pl-[2rem] lg:pl-[5rem]
                text-[min(0.9rem,calc(0.75rem+0.5vw))] max-w-[600px] mx-auto md2:mx-0 md2:max-w-full">

                    <h1 className="text-2xl uppercase">
                        About me
                    </h1>
    
                    <h1 className="gradientBoldHeader uppercase">
                        Introduction
                    </h1>

                    <p className="mt-4">
                        My name is <span className="gr">Sherif Khodeir</span>, I have graduated from a reputable university in Egypt
                        with a Bachelor degree in <span className="gr">Electrical Engineering and Electronics</span>,
                        i have always been interested in <span className="gr">technology, computers and arts</span> .
                        this is why i am passionate about <span className="gr">Web Development</span> as it combines all of these points
                        <br/>
                        <br/>
                        before i started <span className="gr">Web development</span>, i worked in the <span className="gr">Real-Estate</span> field for many years, 
                        it was an exciting journey because i learnt many new skills and everyday there were <span className="gr">new challenges to face and solve, new people to talk to and meet.</span>
                        <br/>
                        <br/>
                        A couple of years ago i had more time to reflect. even though it was going well with me in the <span className="gr">Real-Estate</span> career, 
                        i decided that i should find a field to work in
                        that is <u>more relevant</u> to my <span className="gr">talents and personal interests,</span>
                        <i> to work on something that it's challenges do actually take me a step further in the development of the skills i would like to master.
                        </i>
                        <br/>
                        <br/>
                        At this time i did not know anything about <span className="gr">Web Development</span>, so i started with a <u>vision in my mind</u> and from <u>level 0</u>. 
                        knowing that with <u>consistency and perseverance</u> i can reach higher levels 
                        so i kept learning as often as i can and gradually over time <u>increasing the time dedicated</u> to <span className="gr">Web Development</span> over <span className="gr">Real-Estate</span>.
                        until <span className="gr">Web-development</span> became the <b>full-time</b> job and <span className="gr">Real-estate</span> became the <b>part-time</b>.
                        <br/>
                        <br/>
                        <span className="text-sm font-light">
                        You can find more details about my Education, Previous Career and my Web Development's learning path below
                        </span>


                    </p>
                </div>

                <div className=" mx-auto order-1 m2:order-2 flex flex-col md2:w-[40%]
                relative mb-[4rem] w-full
                
                ">
                    <div className="inline-block mx-auto
                    rounded-full border-4 opacity-90
                    bg-gradient-to-r from-[#50a3d4] from-30% to-[#39d0b7b4]
                    overflow-hidden 
                    max-w-[250px]
                    ">
                        <Image src="/images/about/avatar2.png" height={300} width={300} alt="profile-photo" priority
                            className=""
                            id={"about_avatar"}
                            onMouseEnter={()=>{scaleAnimation("about_avatar")}}
                            onMouseLeave={()=>{scaleAnimation("about_avatar")}}>
                        </Image>
                    </div>

                    <div className="absolute top-[100%] w-full z-[1] text-[min(0.65rem,calc(0.75rem+0.5vw))] ">
                        
                        <details className="mt-4 p-[3px] rounded-[9px] mx-auto
                         max-w-[300px] glass_background_about">
                            
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
                                                            <li className={` ml-8 font-extralight
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