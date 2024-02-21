import React from "react"
import Image from "next/image"
const Introduction = () => {
  return (
    <div className="w-full border border-[#15151500] max-w-[1600px] mx-auto
    ">

           

            <div className="flex flex-col lg:flex-row gap-8 px-4">
                <div className="lg:flex-1 order-2 lg:order-1">

                    <h1 className="text-2xl uppercase">
                        About me
                    </h1>
    
                    <h1 className="gradientBoldHeader uppercase">
                        Introduction
                    </h1>

                    <p className="mt-4 text-xl">
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

                <div className="my-auto mx-auto order-1 lg:order-2">
                    <Image src="/images/avatar2.png" height={300} width={300} alt="profile-photo" priority
                        className="rounded-full border-4 opacity-90 bg-gradient-to-r from-[#50a3d4] from-30% to-[#39d0b7b4]">

                    </Image>
                </div>
                
        </div>

        <details className="mt-4 bg-red-800 p-[3px] rounded-[9px] 
        text-base glass_background w-full lg:w-[50%]">
            <summary className="px-4 py-1 rounded-[9px] 
            bg-gradient-to-r from-[#387ca4] to-[#39d0b7b4]">
                My goal list
            </summary>
            
            <ul className="px-4 pb-2 mt-2 flex flex-col gap-2">

                <li className="flex gap-1 px-1"><span>&raquo;</span>Make projects for others</li>
                <li className="flex gap-1 opacity-60"><span>&#10003;</span> Learn: ThreeJS and modern animations</li>
                <li className="flex gap-1 opacity-60"><span>&#10003;</span> Practice: convert the (Car Mainenance App)'s API to a GraphQL version </li>
                <li className="flex gap-1 opacity-60"><span>&#10003;</span> Practice: make a web-app with ReactJS and Mongoose (RESTful API) as a Database (Car Maintenance App)</li>
                <li className="flex gap-1 opacity-60"><span>&#10003;</span> Practice: make a website using NextJS with a Mongoose Database (Real-Estate Admin website)</li>
                <li className="flex gap-1 opacity-60"><span>&#10003;</span> Learn: a front-end framework (ReactJS, NextJS)</li>
                <li className="flex gap-1 opacity-60"><span>&#10003;</span> Practice: make a website and use #1 skills and hookup with a backend for storage (Amazon clone website)</li>
                <li className="flex gap-1 opacity-60"><span>&#10003;</span> Learn: how to setup a back-end using MongoDB/Mongoose</li>
                <li className="flex gap-1 opacity-60"><span>&#10003;</span> Learn: HTML, CSS, Javascript #1</li>
            </ul>


        </details>

    </div>
  )
}

export default Introduction