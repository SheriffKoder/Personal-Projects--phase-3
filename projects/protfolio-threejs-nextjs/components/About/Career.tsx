"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import CaretDown from '@/public/icons/caret-down'
import CaretUp from '@/public/icons/caret-up'
import CloseSvg from '@/public/icons/close-svg'

const Career = () => {

    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);

    const showImage = (id:string) => {

        let container = document.getElementById(id);
        
        if (container) container.style.display = "flex";

    }

    const hideImage = (id:string) => {
        let container = document.getElementById(id);
        
        if (container) container.style.display = "none";
    }



  return (
    <div className="w-full border border-[#15151500] max-w-[1600px] mx-auto h-auto
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
                    Previous Career (Real-Estate)
                </span>
                
            </div>

            <div className="flex flex-col items-center py-8 text-xl gap-4 px-4">
                    

                    {/* Units */}
                    <span className="flex flex-col w-full lg:flex-row">

                       
                       
                        <div className="w-[20%]">
                        </div>

                        <div className="flex-1 order-2 opacity-90 relative">
                            <h1 className="text-2xl font-semibold gradient_text_1">Property Consultant (11-2016 to 11-2017)</h1>
                            <p className="gradient_text_1">1 yr</p>
                            <p><b>UNITS Real-Estate (Agency)</b></p>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                            <p>This was my first real job, it was very challenging. Given that i have never worked face to face 
                                with such large number of un-familiar and diverse range of people to promote one self, 
                                our company and products.</p>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                            <p>My Role was to:</p>
                            <ul className="list-disc px-10">
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

                            
                            <button className="px-4 py-1 gradientRoundButton mt-4"
                            onClick={()=>showImage("career-rec-1")}>
                                Recommendation Letter
                            </button>

                            <div className="absolute top-[10%] left-[0%] w-full h-full hidden items-center justify-center"
                            id="career-rec-1">
                                <div className="w-[420px] h-[550px] rounded-[17px] border-2 absolute">
                                    <Image src={"/images/career-rec-1.jpeg"} fill alt="recommendation letter 1"
                                    className="rounded-[17px] overflow-hidden"
                                    />
                                    <div className="absolute top-[2%] right-[2%] cursor-pointer"
                                    onClick={()=>hideImage("career-rec-1")}>
                                        <CloseSvg size={25} color1={"#e90059"} color2={"#ffffff"}/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    
                        <div className="lg:w-[20%] w-full my-4 order-1 lg:my-0 lg:order-3 flex flex-col">
                            <Image src="/images/career-logo-1.png" height={100} width={100} alt="Units"
                            className="mx-auto"/>

                            

                        </div>

                    </span>


                    <span className="flex lg:flex-col gap-2 flex-row my-4">
                        <div className="h-2 w-2 bg-white rounded-full"/>
                        <div className="h-2 w-2 bg-white rounded-full"/>
                        <div className="h-2 w-2 bg-white rounded-full"/>
                    </span>


                    {/* Coldwell */}
                    <span className="flex flex-col w-full lg:flex-row">

                       
                       
                        <div className="w-[20%]">
                        </div>

                        <div className="flex-1 order-2 opacity-90 relative">
                            <h1 className="text-2xl font-semibold gradient_text_1">Property Consultant (11-2017 to 07-2020) </h1>
                            <p className="gradient_text_1">2yr 8mth </p>
                            <p><b>Coldwell Banker</b></p>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                            <p>
                                one of the largest real-estate firms in the country, provided frequent training courses (a plus)
                                and allowed for more skill and personal growth through its larger teams and larger inventory which meant more client interaction.
                            </p>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                            <p>My Role was to:</p>
                            <ul className="list-disc px-10">
                                <li className="">
                                    Manage my day to day actions and goals to result in sales increasing the team's overall score.
                                </li>
                                <li>
                                    Study the market, competition and our inventory to structure a products map to help deliver the correct products to the customers.
                                </li>
                                <li>
                                    Manage pipeline and create new channels with new and exiting customers.
                                </li>
                            </ul>

                            
                            <button className="px-4 py-1 gradientRoundButton mt-4"
                            onClick={()=>showImage("career-rec-2")}>
                                Recommendation Letter
                            </button>

                            <div className="absolute top-[10%] left-[0%] w-full h-full hidden items-center justify-center"
                            id="career-rec-2">
                                <div className="w-[420px] h-[550px] rounded-[17px] border-2 absolute">
                                    <Image src={"/images/career-rec-2.jpeg"} fill alt="recommendation letter 1"
                                    className="rounded-[17px] overflow-hidden"
                                    />
                                    <div className="absolute top-[2%] right-[2%] cursor-pointer"
                                    onClick={()=>hideImage("career-rec-2")}>
                                        <CloseSvg size={25} color1={"#e90059"} color2={"#ffffff"}/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    
                        <div className="lg:w-[20%] w-full my-4 order-1 lg:my-0 lg:order-3 flex flex-col">
                            <Image src="/images/career-logo-2.jpg" height={125} width={125} alt="Coldwell Banker logo"
                            className="mx-auto"/>

                            

                        </div>

                    </span>


                    <span className="flex lg:flex-col gap-2 flex-row my-4">
                        <div className="h-2 w-2 bg-white rounded-full"/>
                        <div className="h-2 w-2 bg-white rounded-full"/>
                        <div className="h-2 w-2 bg-white rounded-full"/>
                    </span>



                    {/* Orascom */}
                    <span className="flex flex-col w-full lg:flex-row">
                       
                        <div className="w-[20%]">
                        </div>

                        <div className="flex-1 order-2 opacity-90 relative">
                            <h1 className="text-2xl font-semibold gradient_text_1">Senior Property Consultant (07-2020 to 05-2021) </h1>
                            <p className="gradient_text_1">10mth </p>
                            <p><b>Orascom Development</b></p>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                            <p>
                                one of the largest real-estate developers in the country, 
                                i joined the company as i was recommended for my character and work ethics.
                            </p>
                            <p>
                                I also wanted to join the company as it has a very reliable name in the market, and believed this would be a great value for my clients.
                            </p>
                            <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                            <p>My Role was to:</p>
                            <ul className="list-disc px-10">
                                <li>
                                    Study the market, competition and our projects to help deliver the correct products to the customers.
                                </li>
                                <li>
                                    Approach and join with new (sub) agencies who would promote for the company's projects.
                                </li>
                            </ul>


                        </div>
                    
                        <div className="lg:w-[20%] w-full my-4 order-1 lg:my-0 lg:order-3 flex flex-col">
                            <Image src="/images/career-logo-3.png" height={125} width={125} alt="Orascom Development logo"
                            className="mx-auto"/>

                            

                        </div>

                    </span>


                    <span className="flex lg:flex-col gap-2 flex-row my-4">
                        <div className="h-2 w-2 bg-white rounded-full"/>
                        <div className="h-2 w-2 bg-white rounded-full"/>
                        <div className="h-2 w-2 bg-white rounded-full"/>
                    </span>


                    {/* Manazel */}
                    <span className="flex flex-col w-full lg:flex-row">
                       
                       <div className="w-[20%]">
                       </div>

                       <div className="flex-1 order-2 opacity-90 relative">
                           <h1 className="text-2xl font-semibold gradient_text_1">Senior Property Consultant (05-2021 to 12-2022) </h1>
                           <p className="gradient_text_1">1yrs 7mths </p>
                           <p><b>Manazel Properties (Agency)</b></p>
                           <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                           <p>
                               At this time i wanted to leave the world of huge firms and work in a slower paced environment
                           </p>
                           <p>
                                As in this time i started to think about pursuing a new venture and needed more space to search and start
                           </p>
                           <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                           <p>My Role was to:</p>
                           <ul className="list-disc px-10">
                               <li>
                                   Find new properties to add to the company's inventory
                               </li>
                               <li>
                                   Team up with other colleagues to share and discuss exiting and possible market opportunities
                               </li>
                               <li>
                                    Open new opportunities with existing and new clients
                               </li>
                           </ul>


                       </div>
                   
                       <div className="lg:w-[20%] w-full my-4 order-1 lg:my-0 lg:order-3 flex flex-col">
                       <Image src="/images/career-logo-4.jpg" height={100} width={100} alt="Manazel logo"
                            className="rounded-[17px] overflow-hidden mx-auto"/>
                           

                       </div>

                   </span>


                   <span className="flex lg:flex-col gap-2 flex-row my-4">
                       <div className="h-2 w-2 bg-white rounded-full"/>
                       <div className="h-2 w-2 bg-white rounded-full"/>
                       <div className="h-2 w-2 bg-white rounded-full"/>
                   </span>



                    {/* Freelance */}
                    <span className="flex flex-col w-full lg:flex-row">
                       
                       <div className="w-[20%]">
                       </div>

                       <div className="flex-1 order-2 opacity-90 relative">
                           <h1 className="text-2xl font-semibold gradient_text_1">Freelance Property Consultant (01-2023 to Current) </h1>
                           <p className="gradient_text_1">1+ yrs </p>
                           <p><b>Freelance</b></p>
                           <div className="h-[2px] w-[200px] bg-white opacity-60 rounded-full my-4"/>
                            <p>
                                Working solo while studying was not the easiest route of all the previous,
                                but it was vital to achieve the results i want in learning and practicing.
                            </p>
                            <p>
                                As real-estate is more like a 24/7 job (you have to be ready and available all the time).
                            </p>
                            <p>
                                Working as a freelance gave me the possibility to set separate times for work and study
                            </p>

                        </div>

                        <div className="lg:w-[20%] w-full my-4 order-1 lg:my-0 lg:order-3 flex flex-col">
                       </div>

                   </span>


                   {/* <span className="flex lg:flex-col gap-2 flex-row my-4">
                       <div className="h-2 w-2 bg-white rounded-full"/>
                       <div className="h-2 w-2 bg-white rounded-full"/>
                       <div className="h-2 w-2 bg-white rounded-full"/>
                   </span> */}

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

export default Career;