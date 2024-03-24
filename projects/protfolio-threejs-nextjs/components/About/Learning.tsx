"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import CaretDown from '@/public/icons/caret-down'
import CaretUp from '@/public/icons/caret-up'
import Link from 'next/link'


const Learning = () => {

    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);





  return (
    <div className="w-full border border-[#15151500] max-w-[1600px] mx-auto h-auto mt-8
    ">

        <div className={`glass_background rounded-[17px] min-h-[70px] w-full p-1 overflow-hidden
        ${open ? "openAnimation" : "closeAnimation"}
        max-w-[90%] mx-auto`}
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
                    Learning Path (Web-Development)
                </span>
                
            </div>

            <div className="flex flex-col items-center py-8 text-lg gap-4 px-4">
                    

                    <span className="flex flex-col w-[80%] lg:flex-row">


                        <div className="flex-1 order-2 opacity-90 relative text-center text-[min(1.05rem,calc(0.75rem+0.5vw))]">

                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                                                                            {/* Phase 1 */}
                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                            <h1 className="text-[2em] font-bold gradient_text_1">Phase 1</h1>
                            <p className="font-extralight text-[0.85em] opacity-60">HTML, CSS, Javascript</p>
                            

                            {/* ////////////////////////////////////////////  Wordpress  ///////////////////////////////////////////// */}
                            {/* <div className="h-[2px] w-full bg-white opacity-60 rounded-full my-4 mb-10 mx-auto"/> */}
                            <p className="text-[1.5em] mt-[4rem]"><b>Videos: Wordpress</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>
                            <p>
                                Watched a couple of videos by
                                <Link href="https://www.youtube.com/@TylerMoore" className="mx-1 blueLink">
                                Tyler Moore
                                </Link>
                                on how to setup some nice looking wordpress websites on youtube and followed along while creating a site for the company i was working on
                            </p>
                            <p>however the idea was not very appealing to me as i wanted to create websites with more control and customization</p>
                            
                            
                            {/* ////////////////////////////////////////////  Udacity  ///////////////////////////////////////////// */}
                            <p className="text-[1.5em] mt-[4rem]"><b>Course: Web Development Challenger Track (Udacity)</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>
                            <p>A course introducing HTML, CSS, duration about <span className="gr">1 month</span></p>

                            <div className="w-full flex flex-row items-center justify-center gap-4">
                                <a href="/files/challengerTrackCert.pdf" target="_blank"
                                className="px-4 py-0 gradientRoundButton mt-4 w-[13rem]">
                                    View Certificate
                                </a>
                                <a href="https://learn.udacity.com/nanodegrees/nd001-mena-nfp1/parts/0707d3a2-62dd-4e8c-86fa-348c2b8c2f46" target="_blank"
                                className="px-4 py-0 gradientRoundButton mt-4 w-[13rem]">
                                    Course's Site
                                </a>
                            </div>
                            
                            {/* ////////////////////////////////////////////  Book  ///////////////////////////////////////////// */}
                            <p className="text-[1.5em] mt-[4rem]"><b>Book: Head First JavaScript Programming</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>
                            <p>A 700 pages book that took me about <span className="gr">2-3 months</span> to complete as i read it twice and took notes to stay with me for future reference</p>
                            <p>This book teaches in a friendly manner <span className="gr">javascript from the very basics to advanced levels</span> with some interesting projects</p>

                            <div className="w-full flex flex-row items-center justify-center gap-4 text-sm">
                                <div
                                className="px-4 py-1 bg-[#4747475c] mt-4 w-[13rem] rounded-[1rem]">
                                    No Certificate
                                </div>
                                <a href="https://www.oreilly.com/library/view/head-first-javascript/9781449340124/" target="_blank"
                                className="px-4 py-1 gradientRoundButton mt-4 w-[13rem]">
                                    Books's Site
                                </a>
                            </div>


                            <span className="flex lg:flex-col gap-2 flex-row my-8 w-full items-center justify-center">
                                <div className="h-2 w-2 bg-white rounded-full"/>
                                <div className="h-2 w-2 bg-white rounded-full"/>
                                <div className="h-2 w-2 bg-white rounded-full"/>
                            </span>


                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                                                                            {/* Phase 2 */}
                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <h1 className="text-[2em] font-bold gradient_text_1">Phase 2</h1>
                            <p className="font-extralight text-[0.85em] opacity-60">Advanced HTML, CSS, Javascript and more extras</p>


                            {/* ////////////////////////////////////////////  Odin  ///////////////////////////////////////////// */}
                            <p className="text-[1.5em] mt-[4rem]"><b>Major Course: The Odin Project</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>

                            <div className="flex flex-col gap-2">
                            <p>This is a very long course, took me about <span className="gr">6 months</span> to complete, 
                            that would be due to the fact that the course covers each subject in the smallest detail,
                            always referring to external links (i read them all even the extras) for video/video-series or other articles written by other developers on the subject being discussed
                            and contained a lot of theoretical explanations beside the code.</p>
                            <p>Also as it has many milestone projects for us students to do after completing each step 
                                and i made sure to make most of them, especially if the project challenging, makes a 
                                good practice and has a learning potential.</p>

                            <p className="mt-2 gradient_text_1"><b>Some of the course's highlights</b></p>
                            <p>HTML, CSS, Forms, Javascript, Git, Javascript testing, Advanced HTML/CSS, Accessibility, Responsiveness, ReactJS, NodeJS(skipped), Getting Hired </p>
                            </div>

                            <div className="w-full flex flex-row items-center justify-center gap-4 text-sm">
                                <div
                                className="px-4 py-0 bg-[#4747475c] mt-4 w-[13rem] rounded-[1rem]">
                                    No Certificate
                                </div>
                                <a href="https://www.theodinproject.com/" target="_blank"
                                className="px-4 py-0 gradientRoundButton mt-4 w-[13rem]">
                                    Course's Site
                                </a>
                            </div>



                            
                           

                            {/* ////////////////////////////////////////////  Kevin Powell  ///////////////////////////////////////////// */}
                            <p className="text-[1.5em] mt-[4rem]"><b>Course: Conquering Responsive Layouts by Kevin Powell</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>
                            <div className="flex flex-col gap-2">
                                <p> Kevin is a great teacher, i have been following his videos on Youtube for a long time.</p>
                                <p> He has a simple and sleek approach to css, and was kind enough to construct a course,
                                    dedicated to <span className="gr">teach how to approach making websites responsive</span> in <span className="gr">21 days</span>
                                </p>
                                <p> This course and other Kevin teachings have greatly influenced my design 
                                    and code even in my next advanced steps
                                </p>
                            </div>

                            <div className="w-full flex flex-row items-center justify-center gap-4 text-sm">
                                <div
                                className="px-4 py-0 bg-[#4747475c] mt-4 w-[13rem] rounded-[1rem]">
                                    No Certificate
                                </div>
                                <a href="https://courses.kevinpowell.co/conquering-responsive-layouts" target="_blank"
                                className="px-4 py-0 gradientRoundButton mt-4 w-[13rem]">
                                    Course's Site
                                </a>
                            </div>


                            <span className="flex lg:flex-col gap-2 flex-row my-8 items-center justify-center">
                                <div className="h-2 w-2 bg-white rounded-full"/>
                                <div className="h-2 w-2 bg-white rounded-full"/>
                                <div className="h-2 w-2 bg-white rounded-full"/>
                            </span>


                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                                                                            {/* Phase 3 */}
                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <h1 className="text-[2em] font-semibold gradient_text_1">Phase 3</h1>
                            <p className="font-extralight text-[0.85em] opacity-60">Backend and jQuery</p>


                            {/* ////////////////////////////////////////////  NodeJS  ///////////////////////////////////////////// */}
                            {/* <div className="h-[2px] w-full bg-white opacity-60 rounded-full my-4 mb-10 mx-auto"/> */}
                            <p className="text-[1.5em] mt-[4rem]"><b>Course: NodeJS - The Complete Guide <br/>(MVC, REST APIs, GraphQL, Deno) Backend</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>
                            <div className="flex flex-col gap-2">
                                <p>This is a <b>Great</b> course, i learnt so much from it not just NodeJS but also in Javascript and coding practices in general.</p>
                                <p>The instructor Maximilian Schwarzmüller is a great teacher, he constructed the course very well and presented NodeJS from 
                                    its beginnings to its advanced forms.</p>
                                <p>It is also a lengthy course to complete and practice, the 40h duration is tricky, it is meant for straight watching. 
                                    but in reality the 500+ videos took me about <span className="gr">2.5 months</span> to complete as i made sure to code 
                                    along and take notes to assist me in the future.</p>

                                <p className="mt-4 gradient_text_1"><b>By the end of this course i was able to:</b></p>
                                    <p>store from any front-end onto a MongoDB Database.</p>
                                    <p>Create Databases that sends back HTML documents with Templating Engines.</p>
                                    <p>Create RESTful APIs (Databases) that can be accessed from any front-end application with the normal fetching methods or with GraphQL queries.</p>
                                    <p>Application types can be many, like online shops and company & services sites etc. </p>
                            </div>

                            <p className="mt-4 gradient_text_1"><b>What is was taught and practiced in this course</b></p>
                            <p>Databases, SQL vs NoSQL, using SQL with Sequelize</p>
                            <p>Express.js, NodeJS, MongoDB, Mongoose, GraphQL, Deno, RESTful APIs</p>
                            <p>Then/Catch, Async/Await, Fetching Data, CRUD Operations</p>
                            <p>Sessions & Cookies, Authentications, Validations, Error handling techniques</p>
                            <p>Payments, Uploading, Pagination, using Templatating Engines </p>

                            <div className="w-full flex flex-row items-center justify-center gap-4 text-sm">
                                <a href="/files/NodeJsCert.pdf" target="_blank"
                                className="px-4 py-1 gradientRoundButton mt-4 w-[13rem]">
                                    View Certificate
                                </a>
                                <a href="https://www.udemy.com/course/nodejs-the-complete-guide/" target="_blank"
                                className="px-4 py-1 gradientRoundButton mt-4 w-[13rem]">
                                    Course's Site
                                </a>
                            </div>


                            {/* ////////////////////////////////////////////  jQuery  ///////////////////////////////////////////// */}
                            <p className="text-[1.5em] mt-[4rem]"><b>Course: The Complete jQuery Course <br/>From Beginner To Advanced!</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>
                            <div className="flex flex-col gap-2">
                                <p>As i have seen "JQuery" been mentioned on many places around the web, 
                                    i was curious to check it out on the side with NodeJS and discover what i can do with it</p>
                                <p>In this course i learnt how to use jQuery to select DOM elements, create animations for DOM elements and to fetch from APIs
                                    in <span className="gr">1 Week</span>
                                </p>
                            </div>
                            
                            <div className="w-full flex flex-row items-center justify-center gap-4 text-sm">
                                <a href="/files/jQueryCert.pdf" target="_blank"
                                className="px-4 py-0 gradientRoundButton mt-4 w-[13rem]">
                                    View Certificate
                                </a>
                                <a href="https://www.udemy.com/course/jquery-tutorial/" target="_blank"
                                className="px-4 py-0 gradientRoundButton mt-4 w-[13rem]">
                                    Course's Site
                                </a>
                            </div>


                            <span className="flex lg:flex-col gap-2 flex-row my-8 items-center justify-center">
                                <div className="h-2 w-2 bg-white rounded-full"/>
                                <div className="h-2 w-2 bg-white rounded-full"/>
                                <div className="h-2 w-2 bg-white rounded-full"/>
                            </span>


                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                                                                            {/* Phase 4 */}
                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <h1 className="text-[2em] font-semibold gradient_text_1">Phase 4</h1>
                            <p className="font-extralight text-[0.85em] opacity-60">frontend frameworks and project development</p>

                            {/* ////////////////////////////////////////////  ReactJS, NextJS  ///////////////////////////////////////////// */}
                            <p className="text-[1.5em] mt-[4rem]"><b>ReactJS, NextJS</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>
                            <div className="flex flex-col gap-2">
                                <p>My learning would have not been complete without modern front-end frameworks</p>
                                <p>I changed the learning approach and decided to learn from selected videos on Youtube that would direct me to the result i want.</p>
                                <p>Building on the theoretical foundation i had from the Odin project</p>
                                <p>Now i can build catchy front-ends with ReactJS or with NextJS</p>
                                <p>and connect them to my NodeJS Database as can be seen on my
                                    <Link href="/projects" className="blueLink mx-1">
                                        practice projects
                                    </Link>.
                                </p>
                            </div>


                            {/* ////////////////////////////////////////////  ThreeJS  ///////////////////////////////////////////// */}
                            <p className="text-[1.5em] mt-[4rem]"><b>ThreeJS (Youtube)</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>
                            <div className="flex flex-col gap-2">
                                <p>This is something i wanted to learn from the start of my journey, but i kept it until i acquire the basics of Web-Development first.</p>
                                <p>ThreeJS is like the icing on the cake for modern websites where you can place 3D models on the website, and i am not talking about ThreeJS only here.</p>
                                <p>Also other animations/libraries that can enhance the user experience with less code and more optimized output,
                                    like smooth scrolling, parallax effect, framer-motion for animating various elements.
                                as can be seen on my website's
                                    <Link href="/projects" className="blueLink mx-1">
                                        Home page
                                    </Link>.
                                </p>
                            </div>


                            <span className="flex lg:flex-col gap-2 flex-row my-8 items-center justify-center">
                                <div className="h-2 w-2 bg-white rounded-full"/>
                                <div className="h-2 w-2 bg-white rounded-full"/>
                                <div className="h-2 w-2 bg-white rounded-full"/>
                            </span>


                            {/* ////////////////////////////////////////////  Conclusion  ///////////////////////////////////////////// */}
                            <h2 className="gradient_text_1 text-[1.5em] mb-2">
                                It has been quite a journey, And still better to come
                            </h2>
                            <p>
                                Now i can use HTML, CSS, Javascript in their basic form
                            </p>
                            <p>
                                Use modern front-end frameworks like ReactJS, NextJS, jQuery for enhanced user experience
                            </p>
                            <p>
                                Allow websites to be fully independent by having their own Database to store new website data
                            </p>
                            <p>
                                Now i can move forward into learning how to make more beautiful, more optimized, modern and personalized Websites and Web applications 
                            </p>



                        
                        </div>
                    
                       

                    </span>


                    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}



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

export default Learning;