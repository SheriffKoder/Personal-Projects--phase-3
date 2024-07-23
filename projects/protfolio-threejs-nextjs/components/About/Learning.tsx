"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import CaretDown from '@/public/icons/caret-down'
import CaretUp from '@/public/icons/caret-up'
import Link from 'next/link'
import ThreeDots from './threeDots'


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
                    Learning Path (Web-Development)
                </span>
                
            </div>

            <div className="flex flex-col items-center py-8 text-lg gap-4 px-4">
                    

                    <span className="flex flex-col w-full lg:flex-row">


                        <div className="flex-1 order-2 opacity-90 relative text-center text-[min(1.05rem,calc(0.75rem+0.5vw))]">

                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                                                                            {/* Phase 1 */}
                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                            <h1 className="text-[2em] font-bold gradient_text_1">Phase 1</h1>
                            <p className="font-extralight text-[0.85em]">HTML, CSS, Javascript</p>
                            

                            {/* ////////////////////////////////////////////  Wordpress  ///////////////////////////////////////////// */}
                            {/* <div className="h-[2px] w-full bg-white opacity-60 rounded-full my-4 mb-10 mx-auto"/> */}
                            <p className="text-[1.5em] mt-[4rem]"><b>Videos: Wordpress</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>
                            <p>
                                Watched a couple of videos by
                                <Link href="https://www.youtube.com/@TylerMoore" className="mx-1 blueLink">
                                Tyler Moore
                                </Link>
                                on how to setup some nice looking wordpress websites on youtube and followed along to create a website for a company I was working in.
                            </p>
                            <p>But I wanted to create websites with more control and customization, therefore I decided to learn HTML/CSS/Javascript.</p>
                            
                            
                            {/* ////////////////////////////////////////////  Udacity  ///////////////////////////////////////////// */}
                            <p className="text-[1.5em] mt-[4rem]"><b>Course: Web Development Challenger Track (Udacity)</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>
                            <span>Introduction to <span className="gr">HTML and CSS</span>.</span>
                            <div>Duration about <span className="gr">1 month</span></div>

                            <div className="w-full flex flex-row items-center justify-center gap-4 text-xs md2:text-sm">
                                <a href="/files/challengerTrackCert.pdf" target="_blank"
                                className="px-3 py-1 gradientRoundButton mt-4 w-[12rem]">
                                    View Certificate
                                </a>
                                <a href="https://learn.udacity.com/nanodegrees/nd001-mena-nfp1/parts/0707d3a2-62dd-4e8c-86fa-348c2b8c2f46" target="_blank"
                                className="px-3 py-1 gradientRoundButton mt-4 w-[12rem]">
                                    Course's Site
                                </a>
                            </div>
                            
                            {/* ////////////////////////////////////////////  Book  ///////////////////////////////////////////// */}
                            <p className="text-[1.5em] mt-[4rem]"><b>Book: Head First JavaScript Programming</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>
                            <p>A 700 pages book. teaching in a friendly manner <span className="gr">javascript from the very basics to advanced levels</span> with some interesting projects</p>
                            <div>Duration about <span className="gr">2 months</span></div>
                            <div className="w-full flex flex-row items-center justify-center gap-4 text-xs md2:text-sm">
                                <div
                                className="px-3 py-1 bg-[#4747475c] mt-4 w-[12rem] rounded-[1rem]">
                                    No Certificate
                                </div>
                                <a href="https://www.oreilly.com/library/view/head-first-javascript/9781449340124/" target="_blank"
                                className="px-3 py-1 gradientRoundButton mt-4 w-[12rem]">
                                    Books's Site
                                </a>
                            </div>


                            <ThreeDots/>


                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                                                                            {/* Phase 2 */}
                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <h1 className="text-[2em] font-bold gradient_text_1 pt-12">Phase 2</h1>
                            <p className="font-extralight text-[0.85em] opacity-60">Advanced HTML, CSS, Javascript and more extras</p>


                            {/* ////////////////////////////////////////////  Odin  ///////////////////////////////////////////// */}
                            <p className="text-[1.5em] mt-[4rem]"><b>Major Course: The Odin Project</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>

                            <div className="flex flex-col gap-2">
                            <p>
                                A more detailed course. Covering many subjects in Web-Development in small details.
                                With many external theoretical and practical references to read from on the subjects being discussed.
                            </p>

                            <p>
                                Also the course contains many milestone projects to do after each step. 
                                Which I made sure to complete most of them, especially if the project is challenging has a good learning outcome.</p>

                            <p className="mt-2 gradient_text_1"><b>Some of the course's highlights</b></p>
                            <p className="gradient_text_1">HTML, CSS, Forms, Javascript, Git, Javascript testing, Advanced HTML/CSS, Accessibility, Responsiveness, ReactJS, NodeJS </p>
                            </div>
                            <div>Duration about <span className="gr">6 months</span></div>


                            <div className="w-full flex flex-row items-center justify-center gap-4 text-xs md2:text-sm">
                                <div
                                className="px-3 py-1 bg-[#4747475c] mt-4 w-[12rem] rounded-[1rem]">
                                    No Certificate
                                </div>
                                <a href="https://www.theodinproject.com/" target="_blank"
                                className="px-3 py-1 gradientRoundButton mt-4 w-[12rem]">
                                    Course's Site
                                </a>
                            </div>



                            
                           

                            {/* ////////////////////////////////////////////  Kevin Powell  ///////////////////////////////////////////// */}
                            <p className="text-[1.5em] mt-[4rem]"><b>Course: Conquering Responsive Layouts by Kevin Powell</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>
                            <div className="flex flex-col gap-2">
                                <p> Kevin is a great teacher and youtube instructor teaching quality topics about CSS in simple and clear way.</p>
                                <p> His course teaches how to <span className="gr">correctly approach and make websites responsive</span>
                                </p>
                                <div>Duration about <span className="gr">3 weeks</span> (side course)</div>

                            </div>

                            <div className="w-full flex flex-row items-center justify-center gap-4 text-xs md2:text-sm">
                                <div
                                className="px-3 py-1  bg-[#4747475c] mt-4 w-[12rem] rounded-[1rem]">
                                    No Certificate
                                </div>
                                <a href="https://courses.kevinpowell.co/conquering-responsive-layouts" target="_blank"
                                className="px-3 py-1 gradientRoundButton mt-4 w-[12rem]">
                                    Course's Site
                                </a>
                            </div>


                            <ThreeDots/>



                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                                                                            {/* Phase 3 */}
                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <h1 className="text-[2em] font-semibold gradient_text_1 pt-12">Phase 3</h1>
                            <p className="font-extralight text-[0.85em] opacity-60">Backend and jQuery</p>


                            {/* ////////////////////////////////////////////  NodeJS  ///////////////////////////////////////////// */}
                            {/* <div className="h-[2px] w-full bg-white opacity-60 rounded-full my-4 mb-10 mx-auto"/> */}
                            <p className="text-[1.5em] mt-[4rem]"><b>Course: NodeJS - The Complete Guide <br/>(MVC, REST APIs, GraphQL, Deno) Backend</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>
                            <div className="flex flex-col gap-2">
                                <p>The instructor Maximilian Schwarzmüller is a great teacher. 
                                    His 500+ videos course presented NodeJS from 
                                    its beginnings to its more advanced forms and applications alongside with teaching more about Javascript and better coding practices.</p>

                                <p className="mt-4 gradient_text_1"><b>By the end of this course I was able to:</b></p>
                                    <p>Store from any front-end onto a MongoDB Database.</p>
                                    <p>Create Databases that sends back HTML documents with Templating Engines.</p>
                                    <p>Create RESTful APIs (Databases) that can be accessed from any front-end application with the normal fetching methods or with GraphQL queries.</p>
                                    <p>Develop applications with many types. like online shops and company & services sites etc. </p>
                            </div>

                            <p className="mt-4 gradient_text_1"><b>What is was taught and practiced in this course</b></p>
                            <div className="gr">
                                <p>Databases, SQL vs NoSQL, using SQL with Sequelize</p>
                                <p>Express.js, NodeJS, MongoDB, Mongoose, GraphQL, Deno, RESTful APIs</p>
                                <p>Then/Catch, Async/Await, Fetching Data, CRUD Operations</p>
                                <p>Sessions & Cookies, Authentications, Validations, Error handling techniques</p>
                                <p>Payments, Uploading, Pagination, using Templatating Engines </p>
                            </div>
                            <div>Duration about <span className="gr">2.5 months</span></div>


                            <div className="w-full flex flex-row items-center justify-center gap-4 text-xs md2:text-sm">
                                <a href="/files/NodeJsCert.pdf" target="_blank"
                                className="px-3 py-1 gradientRoundButton mt-4 w-[12rem]">
                                    View Certificate
                                </a>
                                <a href="https://www.udemy.com/course/nodejs-the-complete-guide/" target="_blank"
                                className="px-3 py-1 gradientRoundButton mt-4 w-[12rem]">
                                    Course's Site
                                </a>
                            </div>


                            {/* ////////////////////////////////////////////  jQuery  ///////////////////////////////////////////// */}
                            <p className="text-[1.5em] mt-[4rem]"><b>Course: The Complete jQuery Course <br/>From Beginner To Advanced!</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>
                            <div className="flex flex-col gap-2">
                                <div>I thought about exploring <span className="gr">jQuery</span> as it is a very popular javascript framework and many people are using it</div>
                                <p className="mt-4 gradient_text_1"><b>By the end of this course I was able to:</b></p>
                                <span>
                                    <p>use jQuery to select, manipulate and create animations with DOM elements.</p>
                                    <p>use jQuery to fetch from APIs</p>
                                </span>
                            </div>
                            <div>Duration about <span className="gr">1 week</span> (side course)</div>

                            
                            <div className="w-full flex flex-row items-center justify-center gap-4 text-xs md2:text-sm">
                                <a href="/files/jQueryCert.pdf" target="_blank"
                                className="px-3 py-1  gradientRoundButton mt-4 w-[12rem]">
                                    View Certificate
                                </a>
                                <a href="https://www.udemy.com/course/jquery-tutorial/" target="_blank"
                                className="px-3 py-1 gradientRoundButton mt-4 w-[12rem]">
                                    Course's Site
                                </a>
                            </div>


                            <ThreeDots/>



                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                                                                            {/* Phase 4 */}
                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <h1 className="text-[2em] font-semibold gradient_text_1 pt-12">Phase 4</h1>
                            <p className="font-extralight text-[0.85em] opacity-60">frontend frameworks and project development</p>

                            {/* ////////////////////////////////////////////  ReactJS, NextJS  ///////////////////////////////////////////// */}
                            <p className="text-[1.5em] mt-[4rem]"><b>ReactJS, NextJS</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>
                            <div className="flex flex-col gap-2">
                                <p>Building on the theoretical foundation I had from the Odin project course and
                                through selected tutorials I learnt how to use ReactJS, NextJS to be able to</p>
                                <p className="gr">build websites with a rich front-end that contains many separated components and to use modern libraries like (framer-motion, gsap etc.) for styling, animations, interactivity and code separation/expansion </p>
                                <p>and connect the front-end to back-end applications that use Mongoose (or other) Databases as can be seen on my
                                    <Link href="/projects" className="blueLink ml-1">
                                        practice projects
                                    </Link>.
                                </p>
                            </div>


                            {/* ////////////////////////////////////////////  ThreeJS  ///////////////////////////////////////////// */}
                            <p className="text-[1.5em] mt-[4rem]"><b>ThreeJS (Youtube)</b></p>
                            <div className="h-[2px] w-[400px] max-w-[80%] bg-white opacity-60 rounded-full mt-2 mb-4 mx-auto"/>
                            <div className="flex flex-col gap-2">
                                <span><span className="gr">ThreeJS</span> is like the icing on the cake for modern websites where you use place 3D models in websites
                                as can be seen on my website's
                                    <Link href="/" className="blueLink ml-1">
                                        Home
                                    </Link>, 
                                    <Link href="/projects" className="blueLink ml-1">
                                        Projects
                                    </Link>,
                                    <Link href="/contact" className="blueLink ml-1">
                                        Contact
                                    </Link>,
                                    pages.
                                </span>
                            </div>


                            <ThreeDots/>



                            {/* ////////////////////////////////////////////  Conclusion  ///////////////////////////////////////////// */}
                            <h2 className="gradient_text_1 text-[1.5em] mb-2">
                                My learning journey does not end here as there are still many new things yet to discover, practice and use
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
                            <div className="mt-2 text-sm">
                                you can also visit my 
                                <Link href="/contact" className="blueLink mx-1">
                                X profile
                                </Link>
                                and check what I'm currently working on
                            </div>

                        
                        </div>
                    
                       

                    </span>


                    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}


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

export default Learning;