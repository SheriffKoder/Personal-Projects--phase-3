import React from "react"
import Image from "next/image"
import { Tilt } from "react-tilt"

// Why choose me

const contents = [
    {
        title: "Dedication",
        description: "As I am a dedicated and self-driven person, I am accustomed to the habit of progressing every day in my goals",
        image: "/images/extra3/dedication.png",
        className: "w-full scale-90"

    },
    {
        title: "Ability to learn",
        description: "I am willing to learn new skills while working on projects to achieve the desired outcome",
        image: "/images/extra3/learning.png",
        className: "scale-90"
    },
    {
        title: "Passion",
        description: "Web-Development for me is a passion and the best thing is that I love what I do",
        image: "/images/extra3/passion.png",
        className: "w-[65%]"
    },
]



const Extra3 = () => {
  return (
    <div className="h-[300px] flex flex-col items-center justify-center my-[5rem]
    gap-8">
        
        <h1 className="w-full text-center  text-2xl lg:text-3xl font-medium capitalize  ">
            Why Choose me</h1>

        <div className="w-[80%] flex flex-row gap-8 rounded-[17px]
        p-4 flex-wrap">


            {
                contents.map((content)=> (
                    <Tilt className="w-[45%] mx-auto">
                        <div className="extra1_card_bg border p-4 flex flex-row items-center justify-center
                        rounded-[7px] min-h-full gap-4"
                        options={{
                            max:45,
                            scale: 1,
                            speed: 450
                          }}>
                            <div className={`w-[30%] relative`}>
                                <div className="radialContainer"></div>

                                <Image src={content.image} height={100} width={100} alt={content.title +" image"}
                                className={`${content.className} opacity-90 mx-auto`}/>
                            </div>
                           
                           
                            <span className="flex-1 flex flex-col items-start justify-center h-full">
                                <span className="h-[1.5rem] capitalize">{content.title}</span>
                                <span className="opacity-60 font-extralight text-sm flex-1"
                                id="extra1_card_desc">{content.description}</span>
                            </span>
                        </div>
                    </Tilt>

                ))
            }

            
        </div>

    </div>
  )
}

export default Extra3;