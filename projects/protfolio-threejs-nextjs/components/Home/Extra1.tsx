import React from "react"
import Image from "next/image"
import { Tilt } from "react-tilt"

// things i make sure of

const contents = [
    {
        title: "Multi device support",
        description: "All website pages should be responsive across all devices",
        image: "/images/extra1/responsive.png",
        className: "w-full mt-1"

    },
    {
        title: "Reliability",
        description: "If there is an issue with the website, no worries. it will be fixed right away ",
        image: "/images/extra1/reliable.png",
        className: "ml-3 scale-90"
    },
    {
        title: "Modern style",
        description: "Brand personalized, sleek, upto date and catchy design styles",
        image: "/images/extra1/style.png",
        className: "w-full"
    },
]



const Extra1 = () => {
  return (
    <div className="h-[300px] flex flex-col items-center justify-center
    gap-8">
        
        <h1 className="w-full text-center  text-2xl lg:text-3xl font-medium capitalize  ">Things i make sure of</h1>

        <div className="w-[80%] flex flex-row gap-8 rounded-[17px]
        p-4 flex-wrap">


            {
                contents.map((content)=> (
                    <Tilt 
                    className="flex-1"
                    options={{
                        max:45,
                        scale: 1,
                        speed: 450
                      }}>
                        <div className="extra1_card_bg border p-4 flex flex-col items-center justify-center
                        rounded-[7px] text-center min-h-full"
                        >
                            <div className={`mb-2 flex-1 relative`}>
                                <div className="radialContainer"></div>

                                <Image src={content.image} height={100} width={100} alt={content.title +" image"}
                                className={`${content.className} bgImage opacity-90 scale`}/>
                            </div>
                           
                            <span className="mb-1 h-[1.5rem] capitalize">{content.title}</span>
                            <span className="opacity-60 font-extralight text-sm h-[3rem]"
                            id="extra1_card_desc">{content.description}</span>
                        </div>
                    </Tilt>

                ))
            }

            
        </div>

    </div>
  )
}

export default Extra1