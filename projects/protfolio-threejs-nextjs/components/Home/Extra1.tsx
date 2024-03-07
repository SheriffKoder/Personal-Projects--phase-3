import React from "react";
import Image from "next/image";
import { Tilt } from "react-tilt";

// component: things i make sure of
// a component displays tilt cards containing 
// - icon
// - title, description
// for an array of contents


const contents = [
    {
        title: "Multi device support",
        description: "All website pages should be responsive across all devices",
        image: "/images/extra1/responsive.png",
        className: "my-auto pr-2 md1:p-2 md1:mt-4 md1:mb-0"

    },
    {
        title: "Reliability",
        description: "If there is an issue with the website, no worries. it will be fixed right away ",
        image: "/images/extra1/reliable.png",
        className: "p-3 md1:pl-4"
    },
    {
        title: "Modern style",
        description: "Brand personalized, sleek, upto date and catchy design styles",
        image: "/images/extra1/style.png",
        className: "md1:p-1"
    },
]



const Extra1 = () => {
  return (

    // container holding the main title and the cards
    <div className="flex flex-col items-center gap-8">
        
        <h1 className="w-full text-center  text-2xl lg:text-3xl font-medium capitalize  ">
            Things i make sure of
        </h1>

        {/* container holding the cards */}
        <div className="w-[90%] flex flex-col gap-8 rounded-[17px]
        p-4 flex-wrap
        md1:flex-row md1:justify-between md1:gap-0 max-w-[1000px]">


            {
                contents.map((content)=> (
                    <Tilt 
                    className="md1:w-[30%]"
                    options={{
                    max:45,
                    scale: 1,
                    speed: 450
                    }}
                    key={content.title}>

                        {/* inside the Tilt */}
                        <div className="extra1_card_bg border py-2 pl-6 pr-3
                        flex flex-row gap-4 items-center justify-center
                        rounded-[7px] h-[15vw] min-h-[100px] max-w-[500px] mx-auto
                        
                        md1:flex-col md1:h-[275px] md1:text-center
                        md1:p-4 md1:max-w-[250px] 
                        "
                        >
                            <div className={`w-[30%] h-full relative
                            flex items-center justify-center
                            md1:w-full md1:h-[50%]`}>
                                <div className="radialContainer"></div>

                                <Image src={content.image} height={100} width={100} alt={content.title +" image"}
                                className={`${content.className} bgImage opacity-90 max-h-full
                                md1:w-full`}
                                style={{objectFit: "contain"}}/>
                            </div>
                            
                            <div className="flex-1 flex flex-col gap-1 items-start 
                            md1:items-center text-[calc(0.9rem+0.5vw)]
                            md1:h-[50%] md1:justify-start">
                                <span className="capitalize
                                text-[min(0.8em,1rem)]">{content.title}</span>
                                <span className="opacity-60 font-extralight
                                text-[min(0.65em,0.9rem)]"
                                id="extra1_card_desc">
                                    {content.description}
                                </span>
                            </div>
                        </div>
                    </Tilt>

                ))
            }

            
        </div>

    </div>
  )
}

export default Extra1;