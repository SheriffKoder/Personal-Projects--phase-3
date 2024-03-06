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
        className: "my-auto pr-2 md2:p-2 md2:mt-3 md2:mb-0"

    },
    {
        title: "Reliability",
        description: "If there is an issue with the website, no worries. it will be fixed right away ",
        image: "/images/extra1/reliable.png",
        className: "p-2 md2:pl-4"
    },
    {
        title: "Modern style",
        description: "Brand personalized, sleek, upto date and catchy design styles",
        image: "/images/extra1/style.png",
        className: "md2:p-1"
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
        md2:flex-row md2:justify-center">


            {
                contents.map((content)=> (
                    <Tilt 
                    className=""
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
                        
                        md2:flex-col md2:h-[275px] md2:text-center
                        md2:p-4 md2:max-w-[250px]
                        "
                        >
                            <div className={`w-[30%] h-full relative
                            flex items-center justify-center
                            md2:w-full md2:h-[50%]`}>
                                <div className="radialContainer"></div>

                                <Image src={content.image} height={100} width={100} alt={content.title +" image"}
                                className={`${content.className} bgImage opacity-90 max-h-full
                                md2:w-full`}
                                style={{objectFit: "contain"}}/>
                            </div>
                            
                            <div className="flex-1 flex flex-col gap-1 items-start 
                            md2:items-center text-[calc(0.9rem+0.5vw)]
                            md2:h-[50%] md2:justify-start">
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