// import React from 'react'

"use client";
import Link from "next/link";
import Image from "next/image";

import PropertyCardAdmin from "@components/Home/HomeMain/PropertyCardAdmin";
import AgentCard from "@components/agentId/agentCard";
import { bodyNoScroll, showEdit } from "@utils/bodyNoScroll";
import { useEffect, useState } from "react";

import { useRef } from "react";

//05.01
import { useSession } from "next-auth/react";
import { UserDocument } from "@models/userModel";
import { PropertyDocument } from "@models/propertyModel";


import AgentInfo from "@components/agentId/agentInfo";




const page = () => {

    //05.01
    const { data: session, status } = useSession();      //get the session.user


    type userInterface = {
        authority: string;
        properties: PropertyDocument[];
        userInfo: UserDocument;
        allAgents: UserDocument[];
    }

    const [sessionId, setSessionId] = useState<string>("");
    const [user, setUser] = useState<userInterface | null>(null);


    useEffect(()=> {

        //get current browsing user
        if (session?.user) {
            setSessionId(session?.user.id);
        }
        console.log(sessionId);

        //get page url as it included the id for the user page in question
        const current_url = window.location.href.toString().split("/agents/")[1];
        console.log(current_url);

        //connect to data base
        const fetchUserInfo = async () => { 
            
            const response = await fetch(`/api/users/${current_url}`, {
                method: "POST",
                body: JSON.stringify(sessionId),
            })

            const jsonResponse = await response.json();
            console.log(jsonResponse);

            setUser(jsonResponse);
            //returns {properties, authority, userInfo}

        }

        fetchUserInfo();

    }, [session, sessionId]);


    
    const handleDelete = (element:HTMLButtonElement) => {
        // return (event: React.MouseEvent) => {
            console.log("delete");
            // event.preventDefault();
        //   }
    }



    return (

        <div className="mt-28 mx-auto w-full max-w-[1230px] flex flex-row items-center
        md2:items-stretch
        flex-wrap gap-8 mb-8 px-4 md2:px-8">    


        {user !== null ? ( 
        <>
            {/* nav links */}
            <div className="dark:text-white text-black text-shadow-3 w-full text-xs flex flex-row gap-1 opacity-70">        
                <Link className=""href="/">Home</Link>
                >
                <span className="text-theme-text-brighter">
                { user.authority === "viewer" ? (`${user.userInfo.name}'s profile`) : ("Your Profile")}
                </span>
            </div>

            {user.userInfo ? (
                <>
            {/* container 1 */}
            <h1 className="text_shadow-3 font-bold text-3xl text-[#000000c7] dark:text-[#ffffffe2] capitalize w-full
            text-center md2:text-start">
                { user.authority === "viewer" ? 
                ( `Viewing ${user.userInfo.name} as admin`
                ):(
                `Hello, ${user.userInfo.name.split(" ")[0]}`
                )}
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

                    <h3 className="text-lg font-semibold">{user.userInfo.name}</h3>
                    <p className="text-xs font-light">{user.userInfo.position}</p>
                    <div className="h-[11.75rem] w-[11.75rem] bg-white overflow-hidden
                    rounded-full flex items-center justify-center dark:text-black
                    mt-4">
                    
                        <Image src={user.userInfo.avatar} height={150} width={150} alt=""
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
                        <AgentInfo user={user}/>


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
                <div className="w-full flex flex-row justify-center h-[2rem]">
                    <h4 className="text_shadow-3 font-semibold text-xl md2:text-start
                    text-[#000000c7] dark:text-[#ffffffe2]
                    ">
                        { user.authority === "viewer" ? (`${user.userInfo.name}'s Properties`) : ("Your properties")}
                    </h4>

                    <button type="button" 
                    onClick={() => {bodyNoScroll(); showEdit("Add")}}
                    className="
                    bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                    rounded-[17px] text-sm py-1 px-3
                    opacity-60 hover:opacity-90 ml-auto">
                        Add a Property 
                    </button>
                </div>

                {/* properties container */}
                <div className="flex flex-row gap-6 my-6 flex-wrap justify-center md:justify-start mx-auto last-of-type:mr-auto">

                    {/* property */}
                    {user.properties.length > 0 ? (
                    <>
                        {user.properties.map((property: PropertyDocument) => (
                        <div className="h-auto w-full max-w-[390px] md:w-[calc(50%-16px)] md2:w-[calc(33.3%-16px)] ">
                            <PropertyCardAdmin property={property} currentPage="agent" userIncoming={user} setUserIncoming={setUser}/>
                    
                            

                        </div>
                        )
                        )}
                    </>
                    ) : (
                    <>
                        <h1 className="text_shadow-3">
                            
                            { user.authority === "viewer" ? (`${user.userInfo.name} does not have any properties yet`) : ("You do not have any properties yet")}

                        </h1>
                    </>
                    )
                    }

                </div>
                
            </div>


            {/* container 3 */}
            { (user.userInfo.role === "admin" && user.authority === "owner") ? (
                <AgentCard userIncoming={user} setUserIncoming={setUser} sessionId={sessionId}/>

                ):(

                    <div className="bg-white rounded-[17px]
                    glass-container-background-2
                    border backdrop-blur-10 pt-4 pb-4 px-4
                    dark:bg-[#68585806] dark:border-[#ffffff05]
                    text-[#000000dd] dark:text-[#ffffffd3]  
                    opacity-80 hover:opacity-100
                    flex flex-col items-center justify-center text-center capitalize text-l 
                    w-full
                    
                    ">
                    <Link href={"/agents/"+session?.user.id} type="button" 
                                    className="border border-1
                                    dark:bg-[#68585806] bg-[#ffffffd3] 
                                    dark:border-[#ffffff19] dark:hover:border-[#ffffff36]
                                    text-[#000000dd] dark:text-[#ffffffd3] 
                                    rounded-[10px] text-sm w-fit px-4 py-2
                                    opacity-90 hover:opacity-100">
                                        Back to your profile
                                    </Link>

                    </div>

                )}
                
            </>) : ("")}
            
        </>
            ):("")}

        </div>
        
    )
}

export default page