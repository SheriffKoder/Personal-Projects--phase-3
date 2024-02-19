"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import CaretDown from '@/public/icons/caret-down'
import CaretUp from '@/public/icons/caret-up'

const Education = () => {

    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);


  return (
    <div className="w-full border border-[#15151500] max-w-[1600px] mx-auto h-auto mt-8
    ">

        <div className={`glass_background rounded-[17px] min-h-[70px] w-full p-1 overflow-hidden
        ${open ? "openAnimation" : "closeAnimation"}`}
        >
            <div className={`button_background rounded-[13px] h-[60px] w-full flex items-center px-[1rem] 
            relative cursor-pointer
            `}
            onMouseEnter={()=>(setHover(true))}
            onMouseLeave={()=>(setHover(false))}
            onClick={()=>{setOpen((prev)=> !prev)}}
            >

                <div className={`absolute top-0 left-0 h-full rounded-[13px] w-full 
                ${open ? "openAnimationBG" : "closeAnimationBG"}
                ${hover && !open ? "hoverAnimationBG" : ""}
                ${!hover && !open ? "hoverOutAnimationBG" : ""}

                `}
               
                />

                <span className="z-[1]">
                {open ? (
                    <CaretUp color="white" size="40px" />
                    
                ) : (
                    <CaretDown color="white" size="40px" />
                )}
                </span>

                <span className="text-sm md:text-xl lg:text-2xl z-[1]">
                    Education (Engineering)
                </span>
                
            </div>

            <div className="flex flex-col items-center py-8 text-xl gap-4 px-4">


                    {/* School */}
                    <span className="text-center max-w-[680px] opacity-90">
                        <h1 className="text-2xl font-semibold gradient_text_1">School</h1>
                        <p>Been to different schools depending on my location.</p>
                        <p>Been taught since 4 yo in english, learnt some french language also.</p>
                        <p>Studied subjects like Maths (Algebra, Geometry), Physics, Arts, Computer, Biology, Chemistry, History etc..</p>
                    </span>

                    <span className="flex lg:flex-col gap-2 flex-row my-4 lg:my-0">
                        <div className="h-2 w-2 bg-white rounded-full"/>
                        <div className="h-2 w-2 bg-white rounded-full"/>
                        <div className="h-2 w-2 bg-white rounded-full"/>
                    </span>
                    

                    {/* University */}
                    <span className="text-center flex flex-col w-full lg:flex-row">
                       
                        <div className="w-[20%]">
                        </div>

                        <div className="flex-1 order-2 opacity-90">
                            <h1 className="text-2xl font-semibold gradient_text_1">University</h1>
                            <p><b>MSA University (October University for Modern Sciences & Arts) : Giza, Egypt</b></p>
                            <p><b>B.Sc in Engineering, Electrical Communication and Electronic Systems Engineering</b></p>
                            <p><b>With an awarded degree of BACHELOR OF SCIENCE from University of Greenwich, London, UK.</b></p>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full mx-auto my-4"/>
                            <p>Some of the Courses i have taken</p>
                            <p>Physics, 5 Math Courses, Electric Circuits Analysis, Digital Logic Design, Electromagnetic signals, Microprocessor Systems 
                            Satellite Communication, Cryptography and more courses for different kinds of Electromagnetic Waves.
                            </p>

                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full mx-auto my-4"/>
                            <p>Some of the courses i enjoyed where the Math courses, Digital Logic Courses, Cryptography was cool too.</p>
                            <p>I choose a graduation project more related to programming and circuit design and it was my first attempt to write code.</p>
                        </div>
                    
                        <div className="lg:w-[20%] w-full my-4 order-1 lg:my-0 lg:order-3 flex flex-col">
                            <Image src="/images/uniLogo1.png" height={300} width={300} alt="MSA University Logo"
                            className="mx-auto"/>

                            <Image src="/images/uniLogo2.jpg" height={150} width={150} alt="Greenwich University Logo"
                            className="rounded-[17px] overflow-hidden mx-auto"/>

                        </div>

                    </span>


                    <span className="flex lg:flex-col gap-2 flex-row my-4 lg:my-0">
                        <div className="h-2 w-2 bg-white rounded-full"/>
                        <div className="h-2 w-2 bg-white rounded-full"/>
                        <div className="h-2 w-2 bg-white rounded-full"/>
                    </span>


                    {/* Embedded Systems */}
                    <span className="text-center max-w-[680px] opacity-90">
                        <h1 className="text-2xl font-semibold gradient_text_1">Post-Graduate Course</h1>
                        <p><b>Enhanced Embedded Systems - EmbeddedFab</b></p>
                        <p>Embedded systems was the closest field to connect</p>
                        <p>between my University Courses and programming.</p>
                        <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full mx-auto my-4"/>
                        <p>I learnt things like:</p>
                        <p>Practicing programming languages like C++, Assembly.</p>
                        <p>Understand Software development methods like (Agile, Scrum, Waterfall, V Model).</p>
                        <p>Develop a personal project - ID Entry Controller and Register for Building Access.</p>

                    </span>


                    <span className="flex lg:flex-col gap-2 flex-row my-4 lg:my-0">
                        <div className="h-2 w-2 bg-white rounded-full"/>
                        <div className="h-2 w-2 bg-white rounded-full"/>
                        <div className="h-2 w-2 bg-white rounded-full"/>
                    </span>

                   
                   {/* Vodafone */}
                    <span className="text-center flex flex-col lg:flex-row w-full">
                       
                       <div className="w-[20%]">
                       </div>

                       <div className="flex-1 order-2 opacity-90">
                       <h1 className="text-2xl font-semibold gradient_text_1">First Job</h1>
                            <p><b>Customer Service Representative - Vodafone UK Egypt</b></p>
                            <p>the reason i placed this here as a part of my education</p>
                            <p>Is because i do consider it more as an English language course.</p>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full mx-auto my-4"/>
                            <p>The couple of months i spent working there, did take my language and communication skills to much higher levels.</p>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full mx-auto my-4"/>
                            <p><b>My role</b> was to talk with English people in the UK and solve their problems with the company's services in a fast, professional and friendly manner.</p>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full mx-auto my-4"/>
                            <p>this did make me much more confident in my language skills as i noticed that with practice, customers started to not realize that i am not actually in the UK.</p>
                            <p>not to mention my increased listening and communication skills.</p>
                       </div>
                   
                       <div className="lg:w-[20%] w-full my-4 order-1 lg:my-0 lg:order-3 flex flex-row lg:flex-col">
                            <Image src="/images/vf-logo.png" height={200} width={200} alt="Vodafone Logo"
                            className="opacity-80 mx-auto"/>
                       </div>

                   </span>

                   <div className="h-2 w-2 bg-white rounded-full mt-4"/>
                   <span className="lg:ml-auto lg:mr-[4rem] ml-4 flex flex-row items-center cursor-pointer"
                   onClick={()=>{setOpen((prev)=> !prev)}}>
                        <span>close</span>
                        <CaretUp color="white" size="40px" />
                    </span>


            </div>


        </div>
        
    </div>
  )
}

export default Education