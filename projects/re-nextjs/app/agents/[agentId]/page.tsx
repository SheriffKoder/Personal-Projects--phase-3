// import React from 'react'

"use client";
import Link from "next/link";
import Image from "next/image";

import PropertyCard from "@components/Home/HomeMain/PropertyCard";

interface propertyInterface {

    property_images : string[],        
    property_id : number,

    property_country: string,
    property_city: string,
    property_district: string,

    property_type: string,
    property_area: number,
    property_beds: number,
    property_baths: number,
    
    property_listing_type: string,
    property_availability: boolean,
    property_recommended: boolean,
    property_price: number,

    property_date: string,
    property_author: string,
    property_description: string,
  
  }


interface agentInterface {
    fullName: string,
    phone: number,
    email: string,
    avatar: string,
    password: string,
    position: string,
    role: string,
}




const page = () => {

    // let properties: propertyInterface[] = [];
    let properties: propertyInterface[] = [
        {
            property_images : ["/images/furniture.avif", "/images/logo.svg"],        
            property_id : 1,

            property_country: "Egypt",
            property_city: "Giza",
            property_district: "Zayed",

            property_type: "Apartment",
            property_area: 110,
            property_beds: 2,
            property_baths: 1,
            
            property_listing_type: "rent",
            property_availability: true,
            property_recommended: true,
            property_price: 6000,

            property_date: "25 Dec 2023",
            property_author: "John",
            property_description: "World Class property in a friendly neighborhood contains all facilities"

        },
        
        {
            property_images : ["/images/furniture.avif", "/images/logo.svg"],        
            property_id : 1,

            property_country: "Egypt",
            property_city: "Giza",
            property_district: "Zayed",

            property_type: "Apartment",
            property_area: 110,
            property_beds: 2,
            property_baths: 1,
            
            property_listing_type: "rent",
            property_availability: true,
            property_recommended: true,
            property_price: 7000,

            property_date: "25 Dec 2023",
            property_author: "John",
            property_description: "World Class property in a friendly neighborhood contains all facilities"


        },

        {
            property_images : ["/images/furniture.avif", "/images/logo.svg"],        
            property_id : 1,

            property_country: "Egypt",
            property_city: "Giza",
            property_district: "Zayed",

            property_type: "Apartment",
            property_area: 110,
            property_beds: 2,
            property_baths: 1,
            
            property_listing_type: "rent",
            property_availability: true,
            property_recommended: true,
            property_price: 8000,

            property_date: "25 Dec 2023",
            property_author: "John",
            property_description: "World Class property in a friendly neighborhood contains all facilities"


        },

        {
            property_images : ["/images/furniture.avif", "/images/logo.svg"],        
            property_id : 1,

            property_country: "Egypt",
            property_city: "Giza",
            property_district: "Zayed",

            property_type: "Apartment",
            property_area: 110,
            property_beds: 2,
            property_baths: 1,
            
            property_listing_type: "rent",
            property_availability: true,
            property_recommended: true,
            property_price: 9000,

            property_date: "25 Dec 2023",
            property_author: "John",
            property_description: "World Class property in a friendly neighborhood contains all facilities"


        },

        {
            property_images : ["/images/furniture.avif", "/images/logo.svg"],        
            property_id : 1,

            property_country: "Egypt",
            property_city: "Giza",
            property_district: "Zayed",

            property_type: "Apartment",
            property_area: 110,
            property_beds: 2,
            property_baths: 1,
            
            property_listing_type: "rent",
            property_availability: true,
            property_recommended: true,
            property_price: 10000,

            property_date: "25 Dec 2023",
            property_author: "John",
            property_description: "World Class property in a friendly neighborhood contains all facilities"


        },

    ];


    let agent: agentInterface = {
        fullName: "sherif koder",
        phone: 10423131353,
        email: "sheriff@gmail.com",
        avatar: "/images/furniture.avif",
        password: "eekrsmwr24sa",
        position: "senior advisor",
        role: "admin"

    }


    const currentPage : string = "agent";


    function allowInput (e:any) {
        console.log(e.target.previousSibling);
        e.target.previousSibling.removeAttribute("readOnly");
        // e.target.previousSibling.removeAttribute("value");
        e.target.previousSibling.focus();
        document.getElementById("infoApply_button")!.style.display = "block";
        document.getElementById("infoCancel_button")!.style.display = "block";

    }

    function disableInput (e:any) {
        const inputs = e.target.parentNode.parentNode.parentNode.querySelectorAll("input");

        inputs.forEach((input:HTMLInputElement) => {
            if (!input.getAttribute("readOnly")) {
                input.setAttribute("readOnly", "true");
            }
        })
        document.getElementById("infoApply_button")!.style.display = "none";
        document.getElementById("infoCancel_button")!.style.display = "none";

    }



    return (
        <div className="mt-28 mx-auto w-full max-w-[1230px] flex flex-row items-center
        md2:items-stretch
        flex-wrap gap-8 mb-8 px-4 md2:px-8">
        

            {/* nav links */}
            <div className="dark:text-white text-black text-shadow-3 w-full text-xs flex flex-row gap-1 opacity-70">        
                <Link className=""href="/">Home</Link>
                >
                <span className="text-theme-text-brighter">Your Profile</span>
            </div>

            
            {/* container 1 */}
            <h1 className="text_shadow-3 font-bold text-3xl text-[#000000d5] dark:text-[#ffffffe2] capitalize w-full
            text-center md2:text-start">
                Hello, {agent.fullName.split(" ")[0]}
            </h1>

            <div className="flex flex-row flex-wrap gap-4 w-full">

                {/* avatar */}
                <div className="bg-white rounded-[17px]
                glass-container-background-2
                border backdrop-blur-10 pt-4 md2:pb-6 pb-12 px-8
                dark:bg-[#68585806] dark:border-[#ffffff05]
                text-[#000000b3] dark:text-[#ffffffb0] text-center text-l 
                flex flex-col items-center justify-center flex-wrap capitalize h-full
                w-full md2:w-auto
                ">

                    <h3 className="text-base font-semibold">{agent.fullName}</h3>
                    <p className="text-xs font-light">{agent.position}</p>
                    <div className="h-[11.75rem] w-[11.75rem] bg-white overflow-hidden
                    rounded-full flex items-center justify-center dark:text-black
                    mt-4">
                    
                        <Image src={agent.avatar} height={150} width={150} alt=""
                        className="flex-1 h-full"
                        style={{objectFit:'cover'}}
                        ></Image>

                    </div>
                        
                </div>

                {/* info edit */}
                <div className="bg-white rounded-[17px]
                glass-container-background-2
                border backdrop-blur-10 pt-4 pb-4 px-4
                dark:bg-[#68585806] dark:border-[#ffffff05]
                text-[#000000b3] dark:text-[#ffffffb0]
                flex-1 flex flex-col md:gap-2 gap-4 justify-center md2:justify-end
                w-full items-center md2:items-start
                "
                >
        
                    {/* info container */}
                        <div className="w-full flex flex-col md:gap-2 gap-4 justify-center
                        items-center max-w-[500px]"
                        >

                        <h2 className="text_shadow-3 font-semibold text-lg text-white w-full
                        text-center md2:text-start mb-2 mt-2 text-[#000000d5] dark:text-[#ffffffe2]">Your information</h2>

                            <div className="capitalize
                            flex flex-row flex-wrap w-full justify-center md2:justify-start items-baseline">

                                <span className="
                                font-medium  text-start mb-2 mr-4 w-full md:w-[6rem]">
                                    full name:
                                </span>
                                
                                    <div className="flex flex-row w-full md:w-[70%]">
                                        <input readOnly={true} className="bg-transparent caret-theme-text-bright focus:outline-theme-text-bright 
                                        focus:outline focus:outline-2 outline-offset-1 rounded-[7px]
                                        mr-2 max-w-[65%] 
                                        " 
                                        placeholder={agent.fullName}/>

                                        <button type="button" onClick={(e)=>allowInput(e)} 
                                        className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                                        rounded-full min-w-[100px]
                                        opacity-40 hover:opacity-90 text-center ml-auto">
                                            edit
                                        </button>
                                    </div>
                            </div>


                            <div className="
                            flex flex-row flex-wrap w-full justify-center md2:justify-start items-baseline">

                                <span className="
                                font-medium capitalize text-start mb-2 mr-4 w-full md:w-[6rem]">
                                    Phone:
                                </span>
                                
                                    <div className="flex flex-row w-full md:w-[70%]">
                                        <input readOnly={true} className="bg-transparent caret-theme-text-bright focus:outline-theme-text-bright 
                                        focus:outline focus:outline-2 outline-offset-1 rounded-[7px]
                                        mr-2 max-w-[65%]
                                        " 
                                        placeholder={agent.phone.toString()}/>

                                        <button type="button" onClick={(e)=>allowInput(e)} 
                                        className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                                        rounded-full min-w-[100px]
                                        opacity-40 hover:opacity-90 text-center ml-auto">
                                            edit
                                        </button>
                                    </div>


                            </div>

                            <div className="
                            flex flex-row flex-wrap w-full justify-center md2:justify-start items-baseline">

                                <span className="
                                font-medium capitalize text-start mb-2 mr-4 w-full md:w-[6rem]">
                                    E-mail:
                                </span>
                                
                                    <div className="flex flex-row w-full md:w-[70%]">
                                        <input readOnly={true} className="bg-transparent caret-theme-text-bright focus:outline-theme-text-bright 
                                        focus:outline focus:outline-2 outline-offset-1 rounded-[7px]
                                        mr-2 max-w-[65%]
                                        " 
                                        placeholder={agent.email}/>

                                        <button type="button" onClick={(e)=>allowInput(e)} 
                                        className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                                        rounded-full min-w-[100px]
                                        opacity-40 hover:opacity-90 text-center ml-auto">
                                            edit
                                        </button>
                                    </div>


                            </div>

                            <div className="
                            flex flex-row flex-wrap w-full justify-center md2:justify-start items-baseline">

                                <span className="
                                font-medium capitalize text-start mb-2 mr-4 w-full md:w-[6rem]">
                                    Password:
                                </span>
                                
                                    <div className="flex flex-row w-full md:w-[70%]">
                                        <input readOnly={true} className="bg-transparent caret-theme-text-bright focus:outline-theme-text-bright 
                                        focus:outline focus:outline-2 outline-offset-1 rounded-[7px]
                                        mr-2 max-w-[65%]
                                        " 
                                        placeholder={agent.password}/>

                                        <button type="button" onClick={(e)=>allowInput(e)} 
                                        className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                                        rounded-full min-w-[100px]
                                        opacity-40 hover:opacity-90 text-center ml-auto">
                                            edit
                                        </button>
                                    </div>
                            </div>

                            { agent.role === "admin" ? (

                                <div className="capitalize
                                flex flex-row flex-wrap w-full justify-center md2:justify-start items-baseline">

                                    <span className="
                                    font-medium  text-start mb-2 mr-4 w-full md:w-[6rem]">
                                        Position:
                                    </span>
                                    
                                        <div className="flex flex-row w-full md:w-[70%]">
                                            <input readOnly={true} className="bg-transparent caret-theme-text-bright focus:outline-theme-text-bright 
                                            focus:outline focus:outline-2 outline-offset-1 rounded-[7px]
                                            mr-2 max-w-[65%]
                                            " 
                                            placeholder={agent.position}/>

                                            <button type="button" onClick={(e)=>allowInput(e)} 
                                            className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                                            rounded-full min-w-[100px]
                                            opacity-40 hover:opacity-90 text-center ml-auto">
                                                edit
                                            </button>
                                        </div>
                                </div>

                            ): ("")}

                            <div className="mt-8 md2:mt-0 h-[1.5rem]
                            flex flex-row flex-wrap w-full justify-center md2:justify-end items-baseline md2:mr-[4.65rem]">


                                        <button type="button" id="infoCancel_button"
                                        onClick={(e)=>disableInput(e)} 
                                        className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                                        rounded-full min-w-[100px]
                                        opacity-80 hover:opacity-90 text-center mt-6 md:mt-0 mr-[16px] hidden">
                                            cancel
                                        </button>

                                                                                                                    <button type="submit" id="infoApply_button" 
                                        className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                                        rounded-full min-w-[100px]
                                        opacity-80 hover:opacity-90 text-center  mt-6 md:mt-0 hidden">
                                            apply
                                        </button>


                            </div>
                        </div>


                </div>


            </div>



            {/* container 2 */}
            <div className="bg-white rounded-[17px]
            glass-container-background-2 min-w-[100%]
            border backdrop-blur-10 pt-7 pb-8 px-4 mt-8
            dark:bg-[#68585806] dark:border-[#ffffff05]
            text-[#000000b3] dark:text-[#ffffffb0] text-center text-l flex flex-col gap-1
            ">

                {/* here are the properties */}
                <h4 className="text_shadow-3 font-semibold text-lg text-white md2:text-start
                text-[#000000d5] dark:text-[#ffffffe2]
                ">
                    Your properties
                </h4>

                {/* properties container */}
                <div className="flex flex-row gap-6 my-6 flex-wrap justify-center md:justify-start mx-auto last-of-type:mr-auto">

                    {/* property */}
                    {properties.length > 0 ? (
                    <>
                        {properties.map((property: propertyInterface) => (
                        <div className="h-auto w-full max-w-[390px] md:w-[calc(50%-16px)] md2:w-[calc(33.3%-16px)] ">
                            <PropertyCard {...property as propertyInterface} currentPage = "agent" />
                    
                            

                        </div>
                        )
                        )}
                    </>
                    ) : (
                    <><h1 className="text_shadow-3">You do not have any properties yet</h1></>
                    )
                    }

                </div>
                
            </div>




        </div>
    )
}

export default page