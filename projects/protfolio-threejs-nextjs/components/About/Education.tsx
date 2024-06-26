"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import CaretDown from '@/public/icons/caret-down'
import CaretUp from '@/public/icons/caret-up'
import ThreeDots from './threeDots'

const Education = () => {

    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);


  return (
    <div className="w-full border border-[#15151500] max-w-[1600px] mx-auto h-auto mt-8
    ">

        <div className={`glass_background rounded-[17px] min-h-[70px] w-full p-1 overflow-hidden
        ${open ? "openAnimation" : "closeAnimation"}
        max-w-[90%] mx-auto`}
        >
            {/* when hovered, will change background color and reverse on hover out */}
            {/* when clicked increase the height to show the information and content */}
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

                {/* caret icon with rotation depending on open state for this container */}
                <span className="z-[1]">
                {open ? (
                    <CaretUp color="white" size="40px" />
                    
                ) : (
                    <CaretDown color="white" size="40px" />
                )}
                </span>

                {/* the button's title */}
                <span className="text-sm md:text-xl lg:text-2xl z-[1]">
                    Education (Engineering)
                </span>
                
            </div>

            <div className="flex flex-col items-center py-8 gap-4 px-4
            text-[min(1.05rem,calc(0.75rem+0.5vw))]">


                    {/* School */}
                    <span className="text-center max-w-[680px] opacity-90">
                        <h1 className="text-[1.5em] font-bold gradient_text_1">School</h1>
                        <p>Been taught in english since I have been 4 years, learnt some french language also.</p>
                        <p>Studied subjects like Maths (Algebra, Geometry), Physics, Arts, Computer, Biology, Chemistry, History etc..</p>
                    </span>

                    <ThreeDots/>
                    

                    {/* University */}
                    <span className="text-center flex flex-col w-full lg:flex-row">
                       
                       {/* empty space for a row alignment */}
                        <div className="w-[20%]">
                        </div>

                        <div className="flex-1 order-2 opacity-100">
                            <h1 className="text-[1.5em] mb-1 font-bold gradient_text_1">University</h1>
                            <p><b>MSA University (October University for Modern Sciences & Arts) : Giza, Egypt</b></p>
                            <p><b>B.Sc in Engineering, Electrical Communication and Electronic Systems Engineering</b></p>
                            <p><b>With a BACHELOR OF SCIENCE awarded degree from the University of Greenwich, London, UK.</b></p>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full mx-auto my-4"/>
                            <p>Some of the Courses I have taken:</p>
                            <p className="text-sm opacity-90 mt-1 font-light">Physics, 5 Math Courses, Electric Circuits Analysis, Digital Logic Design, Electromagnetic signals, Microprocessor Systems 
                            Satellite Communication, Cryptography and more courses to understand different kinds of Electromagnetic Waves, which are the basic of electrical communication.
                            </p>

                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full mx-auto my-4"/>
                            <p>Some of the courses I enjoyed: </p>
                            <p className="text-sm opacity-90 mt-1 font-light">Math courses, Digital Logic Courses, Cryptography (encrypting/decrypting)</p>
                            <p className="mt-2">I choose a graduation project more related to programming and circuit design and it was my first attempt to write code.</p>
                        </div>
                    
                        {/* empty space for a row alignment that contains images for this content */}
                        <div className="lg:w-[20%] w-full my-4 order-1 lg:my-0 lg:order-3 flex flex-col">
                            <Image src="/images/about/uniLogo1.png" height={300} width={300} alt="MSA University Logo"
                            className="mx-auto"/>

                            <Image src="/images/about/uniLogo2.jpg" height={150} width={150} alt="Greenwich University Logo"
                            className="rounded-[17px] overflow-hidden mx-auto"/>

                        </div>

                    </span>


                    <ThreeDots/>


                    {/* Embedded Systems */}
                    <span className="text-center max-w-[680px]">
                        <h1 className="text-[1.5em] mb-1 font-bold gradient_text_1">Post-Graduate Course</h1>
                        <p><b>Enhanced Embedded Systems - EmbeddedFab</b></p>
                        <p>Embedded systems was the closest field to connect</p>
                        <p>between my University Courses and programming</p>
                        <p className="text-sm opacity-80 mt-1 font-light">i.e programming a micro-controller which contains one or more processor cores, along with additional peripherals (memory, serial interface, timer, programmable I/O peripherals, etc.) on the same chip.</p>
                        <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full mx-auto my-4"/>
                        <p>I learnt things like:</p>
                        <span className="text-sm opacity-90 mt-1 font-light">
                            <p>Programming languages like C++, Assembly.</p>
                            <p>Understand Software development methods like (Agile, Scrum, Waterfall, V Model).</p>
                            <p>Develop a personal project - ID Entry Controller and Register for Building Access.</p>
                        </span>

                    </span>


                    <ThreeDots/>

                   
                   {/* Vodafone */}
                    <span className="text-center flex flex-col lg:flex-row w-full">
                       
                        {/* empty space for a row alignment */}
                       <div className="w-[20%]">
                       </div>

                       <div className="flex-1 order-2 opacity-100">
                       <h1 className="text-[1.5em] mb-1 font-bold gradient_text_1">First Job</h1>
                            <p><b>Customer Service Representative - Vodafone UK Egypt</b></p>
                            <p className="text-sm opacity-90 mt-1 font-light">
                                I consider this job more as an education role due to the 
                                benefits I gained in developing my english language
                            </p> 
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full mx-auto my-4"/>
                            <span>The couple of months I spent working there, did take my <p className="gr">language and communication skills</p> to much higher levels.</span>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full mx-auto my-4"/>
                            <span className="text-sm opacity-90 font-light">
                                <p><b className="opacity-100 font-semibold text-base">My role</b> was to talk with English customers in the UK and solve their problems with the company's services in a fast, professional and friendly manner.</p>
                                <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full mx-auto my-4"/>
                                <p>this experience did make me much more confident in my language, listening and communication skills,
                                    as i noticed that with time, customers started to be greatly satisfied with my service.</p>
                            </span>
                       </div>
                   
                        {/* empty space for a row alignment that contains images for this content */}
                       <div className="lg:w-[20%] w-full my-4 order-1 lg:my-0 lg:order-3 flex flex-row lg:flex-col">
                            <Image src="/images/about/vf-logo.png" height={200} width={200} alt="Vodafone Logo"
                            className="opacity-80 mx-auto"/>
                       </div>

                   </span>

                    {/* single dot */}
                   <div className="h-2 w-2 bg-white rounded-full mt-4"/>

                    {/* element to close/collapse i.e decrease width for this content area */}
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