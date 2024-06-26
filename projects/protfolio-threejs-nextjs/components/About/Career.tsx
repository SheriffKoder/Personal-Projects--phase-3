"use client"

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import CaretDown from '@/public/icons/caret-down'
import CaretUp from '@/public/icons/caret-up'
import CloseSvg from '@/public/icons/close-svg'
import ThreeDots from './threeDots'

const Career = () => {

    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);



 


    const UnitsContainer = useRef<HTMLDivElement>(null); 
    const CbeContainer = useRef<HTMLDivElement>(null); 

    const CareerRec1 = useRef<HTMLDivElement>(null);
    const CareerRec2 = useRef<HTMLDivElement>(null);

    // const showImage = (id:string) => {

    //     let container = document.getElementById(id);
        
    //     if (container) container.style.display = "flex";

    // }

    // const hideImage = (id:string) => {
    //     let container = document.getElementById(id);
        
    //     if (container) container.style.display = "none";
    // }
    
    //auto open the career section if redirected with an href #id
    useEffect(() => { 



        let career = window.location.href.toString().split("?career_")[1];
        console.log(career);
        setOpen(Boolean(career));   //set to true if there is a link to open the div
        setTimeout(()=> {
            if (UnitsContainer.current !== null && CbeContainer.current !== null) {
                if (career === "units") UnitsContainer.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" }); 
                if (career === "cbe") CbeContainer.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });     
            }
           
        }, 1000)

    },[]);

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
                <span className="text-sm md:text-xl lg:text-2xl z-[1]" ref={UnitsContainer}>
                    Previous Career (Real-Estate)
                </span>
                
            </div>

            <div className="flex flex-col items-center py-8 text-lg gap-4 px-4
            text-[min(1.05rem,calc(0.75rem+0.5vw))]">
                    

                    {/* Units */}
                    <span className="flex flex-col w-full lg:flex-row">

                       
                        {/* empty space for a row alignment */}
                        <div className="w-[20%]">
                        </div>

                        <div className="flex-1 order-2 opacity-100 relative text-[min(1.05rem,calc(0.75rem+0.5vw))]">
                            <h1 className="text-[1.5em] font-bold gradient_text_1">Property Consultant (11-2016 to 11-2017)</h1>
                            <p className="gradient_text_1">1 yr</p>
                            <p><b>UNITS Real-Estate (Agency)</b></p>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                            <p>This was my first real job, it was very challenging. Given that i have never worked face to face 
                                with such large number of un-familiar and diversity of people to promote myself, 
                                my company and products.</p>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                            <p>My Role was to:</p>
                            <ul className="list-disc px-6 lg:px-10 text-sm opacity-90 font-light flex flex-col gap-2">
                                <li className="">
                                    Approach and meet with new clients to promote the company's properties.
                                </li>
                                <li>
                                    Daily pipeline management and incoming lead qualification
                                </li>
                                <li>
                                    Work on my presentation, communication and sales skills to enhance my sales results
                                </li>
                            </ul>

                            
                            {/* /////// show the recommendation letter for this job */}
                            <button className="px-4 py-0 gradientRoundButton mt-4"
                            onClick={()=>{CareerRec1.current && (CareerRec1.current.style.display = "flex")}}>
                                Recommendation Letter
                            </button>

                            <div className="absolute top-[10%] left-[0%] w-full h-full hidden items-center justify-center"
                            ref={CareerRec1}>
                                <div className="w-[420px] h-[550px] rounded-[17px] border-2 absolute">
                                    <Image src={"/images/about/career-rec-1.jpeg"} fill alt="recommendation letter 1"
                                    className="rounded-[17px] overflow-hidden"
                                    />
                                    <div className="absolute top-[2%] right-[2%] cursor-pointer"
                                    onClick={()=>{CareerRec1.current && (CareerRec1.current.style.display = "none")}}>
                                        <CloseSvg size={25} color1={"#e90059"} color2={"#ffffff"}/>
                                    </div>
                                </div>
                            </div>
                            {/* /////// /////////////////////////////////////////// */}

                        </div>
                    
                        {/* element to close/collapse i.e decrease width for this content area */}
                        <div className="lg:w-[20%] w-full my-4 order-1 lg:my-0 lg:order-3 flex flex-col">
                            <Image src="/images/about/career-logo-1.png" height={100} width={100} alt="Units"
                            className="mx-auto"/>
                        </div>

                    </span>


                    <span className="flex lg:flex-col gap-2 flex-row my-4" ref={CbeContainer}>
                        <div className="h-2 w-2 bg-white rounded-full"/>
                        <div className="h-2 w-2 bg-white rounded-full"/>
                        <div className="h-2 w-2 bg-white rounded-full"/>
                    </span>


                    {/* Coldwell */}
                    <span className="flex flex-col w-full lg:flex-row">

                       
                        {/* empty space for a row alignment */}
                        <div className="w-[20%]">
                        </div>

                        <div className="flex-1 order-2 opacity-100 relative text-[min(1.05rem,calc(0.75rem+0.5vw))]">
                            <h1 className="text-[1.5em] font-bold gradient_text_1">Property Consultant (11-2017 to 07-2020) </h1>
                            <p className="gradient_text_1">2yr 8mth </p>
                            <p><b>Coldwell Banker</b></p>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                            <p>
                                One of the largest real-estate firms in the country, provided frequent training courses (a plus for me)
                                and allowed for more skill and personal growth through its larger teams and larger inventory which meant more client interaction.
                            </p>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                            <p>My Role was to:</p>
                            <ul className="list-disc px-6 lg:px-10 text-sm opacity-90 font-light flex flex-col gap-2">
                                <li className="">
                                    Manage my day to day actions and goals to result in increasing my team's overall score.
                                </li>
                                <li>
                                    Study the market, competition and our inventory to structure a products map to help deliver the correct products to clients.
                                </li>
                                <li>
                                    Manage pipeline and open new channels with new and exiting clients.
                                </li>
                            </ul>

                            {/* /////// show the recommendation letter for this job */}
                            <button className="px-4 py-0 gradientRoundButton mt-4"
                            onClick={()=>{CareerRec2.current && (CareerRec2.current.style.display = "flex")}}>
                            Recommendation Letter
                            </button>

                            <div className="absolute top-[10%] left-[0%] w-full h-full hidden items-center justify-center"
                            // id="career-rec-2"
                            ref={CareerRec2}>
                                <div className="w-[420px] h-[550px] rounded-[17px] border-2 absolute">
                                    <Image src={"/images/about/career-rec-2.jpeg"} fill alt="recommendation letter 1"
                                    className="rounded-[17px] overflow-hidden"
                                    />
                                    <div className="absolute top-[2%] right-[2%] cursor-pointer"
                                    onClick={()=>{CareerRec2.current && (CareerRec2.current.style.display = "none")}}>
                                    <CloseSvg size={25} color1={"#e90059"} color2={"#ffffff"}/>
                                    </div>
                                </div>
                            </div>
                            {/* /////// /////////////////////////////////////////// */}

                        </div>
                    
                        {/* empty space for a row alignment that contains images for this content */}
                        <div className="lg:w-[20%] w-full my-4 order-1 lg:my-0 lg:order-3 flex flex-col">
                            <Image src="/images/about/career-logo-2.jpg" height={125} width={125} alt="Coldwell Banker logo"
                            className="mx-auto"/>
                        </div>

                    </span>


                    <ThreeDots/>




                    {/* Orascom */}
                    <span className="flex flex-col w-full lg:flex-row">
                       
                        {/* empty space for a row alignment */}
                        <div className="w-[20%]">
                        </div>

                        <div className="flex-1 order-2 opacity-90 relative text-[min(1.05rem,calc(0.75rem+0.5vw))]">
                            <h1 className="text-[1.5em] font-bold gradient_text_1">Senior Property Consultant (07-2020 to 05-2021) </h1>
                            <p className="gradient_text_1">10mth </p>
                            <p><b>Orascom Development</b></p>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                            <p>
                                One of the largest real-estate developers in the country, 
                                I joined the company as I was recommended for my character and work ethics.
                            </p>
                            <p>
                                I also wanted to join the company as it has a very reliable name in the market and believed this would be a great chance to add value for my clients.
                            </p>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                            <p>My Role was to:</p>
                            <ul className="list-disc px-6 lg:px-10 text-sm opacity-90 font-light flex flex-col gap-2">
                                <li>
                                    Study the market, competition and our projects to help deliver the correct products to the customers.
                                </li>
                                <li>
                                    Approach and join with new (sub) agencies who would promote for the company's projects.
                                </li>
                            </ul>


                        </div>
                    
                        {/* empty space for a row alignment that contains images for this content */}
                        <div className="lg:w-[20%] w-full my-4 order-1 lg:my-0 lg:order-3 flex flex-col">
                            <Image src="/images/about/career-logo-3.png" height={125} width={125} alt="Orascom Development logo"
                            className="mx-auto"/>
                        </div>

                    </span>


                    <ThreeDots/>


                    {/* Manazel */}
                    <span className="flex flex-col w-full lg:flex-row">
                       
                        {/* empty space for a row alignment */}
                       <div className="w-[20%]">
                       </div>

                       <div className="flex-1 order-2 opacity-100 relative text-[min(1.05rem,calc(0.75rem+0.5vw))]">
                           <h1 className="text-[1.5em] font-bold gradient_text_1">Senior Property Consultant (05-2021 to 12-2022) </h1>
                           <p className="gradient_text_1">1yrs 7mths </p>
                           <p><b>Manazel Properties (Agency)</b></p>
                           <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                           <p>
                            Joined this agency as it has smaller market scope which allowed me to have more experience and listings in specific regions where most of my clients would be interested in. 
                           </p>
                          
                           <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                           <p>My Role was to:</p>
                           <ul className="list-disc px-6 lg:px-10 text-sm opacity-90 font-light flex flex-col gap-2">
                               <li>
                                   Find new properties to add to the company's inventory
                               </li>
                               <li>
                                   Team up with other colleagues to share and discuss exiting and possible market opportunities
                               </li>
                               <li>
                                    Create new opportunities for existing and new clients
                               </li>
                           </ul>


                       </div>
                   
                        {/* empty space for a row alignment that contains images for this content */}
                       <div className="lg:w-[20%] w-full my-4 order-1 lg:my-0 lg:order-3 flex flex-col">
                            <Image src="/images/about/career-logo-4.jpg" height={100} width={100} alt="Manazel logo"
                            className="rounded-[17px] overflow-hidden mx-auto"/>
                       </div>

                   </span>


                    <ThreeDots/>



                    {/* Freelance */}
                    <span className="flex flex-col w-full lg:flex-row">
                       
                        {/* empty space for a row alignment */}
                       <div className="w-[20%]">
                       </div>

                       <div className="flex-1 order-2 opacity-100 relative text-[min(1.05rem,calc(0.75rem+0.5vw))]">
                           <h1 className="text-[1.5em] font-bold gradient_text_1">Freelance Property Consultant (01-2023 to Current) </h1>
                           <p className="gradient_text_1">1+ yrs </p>
                           <p><b>Freelance</b></p>
                           <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                            <p>
                                As real-estate is more like a 24/7 job (you have to be ready and available all the time).
                            </p>
                            <p>
                                Working as a freelance gave me the possibility to set separate times for work and study
                            </p>
                            <p className="mt-4 text-sm opacity-90 font-light">
                                Working outside a company while studying was not easy 
                                but it was a vital step to achieve the results I wanted in learning and practicing Web-development.
                            </p>

                        </div>

                        {/* empty space for a row alignment that can contain images for this content */}
                        <div className="lg:w-[20%] w-full my-4 order-1 lg:my-0 lg:order-3 flex flex-col">
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

export default Career;