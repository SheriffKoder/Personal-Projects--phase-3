import React from "react"
import Image from "next/image"

import { scaleAnimation } from "@/utils/scaleAnimation"
import { goals } from "@/constants/constants"

const Introduction = () => {
  return (

    <div className="w-full border border-[#15151500] max-w-[2000px] mx-auto">

            <div className="flex flex-col md2:flex-row gap-8 px-4 md2:items-start md2:justify-between">
                
                {/* title */}
                <div className="md2:flex-1 order-2 md2:order-1 md2:pl-[2rem] lg:pl-[5rem]
                text-[min(1rem,calc(0.75rem+0.5vw))] max-w-[600px] mx-auto md2:mx-0 md2:max-w-full">

                    <h1 className="text-2xl uppercase">
                        About me
                    </h1>
    
                    <h1 className="gradientBoldHeader uppercase">
                        Introduction
                    </h1>

                    <p className="mt-4">
                        My name is <span className="gr">Sherif Khodeir</span>, I hold a&nbsp;
                        <span className="gr">Bachelor degree in Electrical Engineering and Electronics</span>
                        from a reputable university in Egypt.
                        I have always been <span className="gr">interested in technology and design</span>.
                        {/* this is why i am passionate about <span className="gr">Web Development</span> as it combines all of these points */}
                        <br/>
                        <br/>
                        Before I started Web-Development
                        I <span className="gr">worked in the Real-Estate field as a property consultant. </span> 
                        where I learnt the importance of client satisfaction which is achieved by adding value.
                        It was an exciting journey because I learnt many new skills, 
                        as everyday there were <span className="gr">new challenges to face and solve, new people to talk with and meet.</span>
                        <br/>
                        <br/>
                        I decided to <span className="gr">switch</span> to Web-Development as I want to <span className="gr">develop skills</span> that are more <span className="gr">relevant to my personal interests and talents</span>.
                        And to work in a field where it's challenges take me a <span className="gr">further</span> in the <span className="gr">development</span> of these skills I would like to learn and master.
                        <br/>
                        <br/>
                        I started learning about Web-Development from scratch.
                        I learned while I was working as a part-time consultant.
                        but knowing that if I have <span className="gr">perseverance and consistency</span>&nbsp;
                        I can <span className="gr">develop my skills</span> in Web-Development to a level 
                        where I can be <span className="gr">more confident and able</span> to work on more real-world projects and 
                        learn/use the latest techniques in these projects to add more value and quality to my clients.
                        
                        <br/>
                        <br/>
                        <span className="text-xs font-extralight">
                        find more details about my Education, Previous Career and my Web Development's learning path in the below drop down menus
                        </span>


                    </p>
                </div>

                <div className=" mx-auto order-1 m2:order-2 flex flex-col md2:w-[40%]
                relative mb-[4rem] w-full">

                    {/* user image/avatar */}
                    <div className="inline-block mx-auto
                    rounded-full border-4 opacity-90
                    bg-gradient-to-r from-[#50a3d4] from-30% to-[#39d0b7b4]
                    overflow-hidden 
                    max-w-[250px] lg:max-w-[350px]
                    ">
                        <Image src="/images/about/avatar2.png" height={300} width={300} alt="profile-photo" priority
                            className=""
                            id={"about_avatar"}
                            onMouseEnter={()=>{scaleAnimation("about_avatar")}}
                            onMouseLeave={()=>{scaleAnimation("about_avatar")}}>
                        </Image>
                    </div>

                    {/* goals drop down */}
                    <div className="absolute top-[100%] w-full z-[1] text-[min(0.65rem,calc(0.75rem+0.5vw))] 
                    lg:text-[min(0.85rem,calc(0.75rem+0.5vw))] ">
                        
                        <details className="mt-4 p-[3px] rounded-[9px] mx-auto
                         max-w-[300px] lg:max-w-[400px] glass_background_about">
                            
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
                                                    // set a text color depending on the goal progress value
                                                    goal.steps.length > 0 && (
                                                        goal.steps.map((step, index)=> (
                                                            <li 
                                                            key={goal.title+" "+index+" "+step}
                                                            className={` ml-8 font-extralight
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