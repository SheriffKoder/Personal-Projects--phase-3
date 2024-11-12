"use client";

//this is a container that takes allAgents from the profile page and render for each (map)
//an agent card with his/her information

import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { UserDocument } from '@models/userModel'



type userInterface = {
    authority: string;
    userInfo: UserDocument;
    allAgents: UserDocument[];
}




const AgentCard = ({userIncoming, setUserIncoming, sessionId}:{
    userIncoming:userInterface, 
    setUserIncoming: React.Dispatch<React.SetStateAction<userInterface | null>>,
    sessionId: string
    }) => {

    //as we fetch allAgents on the admin profile page, this card will get one of these agents/user 
    const [user, setUser] = useState<userInterface>(userIncoming);

  
    //delete a specific user from DB using their Id, also the api checks on the page we are on to see if it is an admin user page, of course it is as we cannot render it if we are not agents, maybe can use session info... 
    const handleUserDelete = async (removableUserId:string) => {

        // e.preventDefault();
        const current_url = window.location.href.toString().split("/agents/")[1];

        const response = await fetch(`/api/users/${current_url}`, {
            method: "DELETE",
            body: JSON.stringify({sessionId,removableUserId}),

        })


        const jsonResponse = await response.json();
        console.log(jsonResponse);
    }

    //once deleted, the component should be refreshed without this user without refreshing the profile page itself
    //this can be from the database or from the UI
    const reloadUsers = (removableUserId:string) => {

        let temp_user = user;
        if (user) {

        
        const filteredAgents = user.allAgents.filter((agent) => agent._id.toString() !== removableUserId);
        temp_user.allAgents = filteredAgents;

        setUser(temp_user);
        }
    }


    // const [dataCondition,setDataCondition] = useState("Loading agents...");
    let dataCondition: string;

    // useEffect(()=> {

        if (user.allAgents.length <= 0) {
            
            // setDataCondition("No agents exist yet");
            dataCondition = "No agents exist yet";
        } else {
            dataCondition = "Loading agents...";
            // setDataCondition("Loading agents...");
        }

    // },[])



  return (
    

    <div className="bg-white rounded-[17px]
    glass-container-background-2 min-w-[100%]
    border backdrop-blur-10 pt-7 pb-8 px-4 mt-8
    dark:bg-[#68585806] dark:border-[#ffffff05]
    text-[#000000b3] dark:text-[#ffffffb0] text-center text-l flex flex-col gap-1
    ">

        {/* container title */}
        <h4 className="text_shadow-3 font-semibold text-xl md2:text-start
        text-[#000000c7] dark:text-[#ffffffe2] capitalize
        ">
            The Team
        </h4>

        {/* display a card for each user in the user.AllAgents passed to this component */}
        <div className="flex flex-row gap-6 my-6 w-full flex-wrap justify-center last-of-type:mr-auto">
        {user.allAgents.length > 0 ? (
        <>
            {user.allAgents.map((agent: UserDocument) => (
            // <div className="h-auto w-full max-w-[390px] md:w-[calc(50%-16px)] md2:w-[calc(33.3%-16px)] ">
                
                <div key={agent._id} className={`bg-white rounded-[17px]
                glass-container-background-2
                border backdrop-blur-10 pt-4 pb-4 px-4
                dark:bg-[#68585806] dark:border-[#ffffff05]
                text-[#000000dd] dark:text-[#ffffffd3]  
                opacity-80 hover:opacity-100
                flex flex-col items-center justify-center text-center capitalize text-l 
                md2:w-[calc(33.3%-16px)] w-full  lg:w-[calc(24%-16px)]
                ${user.allAgents.length === 1 ? 'sm-w-[100%] max-w-[205.4px]' : 'sm:w-[calc(50%-16px)]' }
                relative`}>

                    <div className="absolute w-full h-full rounded-b-[10px] rounded-[17px] z-[-1] overflow-hidden border-2 dark:border-[#ffffff05] border-[#f0f0f0]">
                        <div className="w-full h-full z-[0] opacity-[0.15] dark:opacity-10 rounded-[17px]"
                          style={{backgroundImage: "url('/images/deco.png')", backgroundSize: "", backgroundPosition: "0px -40px" }}>
                          </div>
                    </div>

                    <h3 className="text-base font-semibold">{agent.name}</h3>
                    <p className="text-xs font-light h-[2em] ">{agent.position}</p>

                    <div className="h-[30vw] w-[30vw] max-w-[100px] max-h-[100px]
                    bg-white overflow-hidden
                    rounded-full flex items-center justify-center dark:text-black
                    mt-4 mb-4">
                    
                        <Image src={agent.avatar} height={150} width={150} alt=""
                        className="flex-1 h-full "
                        style={{objectFit:'cover'}}
                        priority
                        ></Image>

                    </div>

                    <p className='text-xs mb-1 font-light'>
                        { agent.role === "admin" ? (
                            <span className="text-[#279b72] dark:text-[#32b084]">[admin]</span>
                        ): ("")}
                        { agent.role === "user" ? (
                            <span className="">[agent]</span>
                        ): ("")}
                        { agent.role === "dummyVisitor" ? (
                            <span className="">[demo]</span>
                        ): ("")}
                    </p>
                  

                    <p className="text-[0.6rem] font-light">Last Update: {agent.update}</p>
                    <p className="text-[0.6rem] font-light">Properties [{agent.properties_count}]</p>
                    <p className="text-[0.6rem] font-light">Posts [{agent.posts_count}]</p>

                    <div className="mt-2 flex flex-row items-center justify-center px-1">
                        <Link href={"/agents/"+agent._id} type="button" 
                        className="border border-1
                        dark:bg-[#68585806] bg-[#ffffffd3] 
                        dark:border-[#ffffff19] dark:hover:border-[#ffffff36]
                        text-[#000000dd] dark:text-[#ffffffd3] 
                        rounded-[17px] text-sm  w-[65px]
                        opacity-90 hover:opacity-100">
                            View
                        </Link>

                        <button type="button" onClick={()=>{if (userIncoming.authority !== "dummyVisitorOwner") {console.log(userIncoming.authority); handleUserDelete(agent._id.toString()); reloadUsers(agent._id.toString()); setUserIncoming(user);}}}
                        className="border border-1
                        dark:bg-[#68585806] bg-[#ffffffd3] 
                        dark:border-[#ffffff19] dark:hover:border-[#ffffff36]
                        text-[#000000dd] dark:text-[#ffffffd3] 
                        rounded-[17px] text-sm  w-[65px]
                        opacity-90 hover:opacity-100">
                            Remove
                        </button>
                    </div>
                        
                </div>
                ))}

        </>
        ) : (
        <>
            <h1 className="text_shadow-3 w-full text-center">            
                {dataCondition}
            </h1>
        </>
        )
        }

        </div>


    </div>


  )
}

export default AgentCard;