"use client";

import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { PropertyDocument } from '@models/propertyModel'
import { UserDocument } from '@models/userModel'
import { ChangeEventHandler, FormEventHandler } from 'react';
import { PostDocument } from '@models/postModel';


type userInterface = {
    authority: string;
    properties: PropertyDocument[];
    userInfo: UserDocument;
    allAgents: UserDocument[];
    posts: PostDocument[];
}




const AgentCard = ({userIncoming, setUserIncoming, sessionId}:{
    userIncoming:userInterface, 
    setUserIncoming: React.Dispatch<React.SetStateAction<userInterface | null>>,
    sessionId: string
    }) => {


    // const [userUpdate, setUserUpdate] = useState(user);
    // const [reload, setReload] = useState(false);

    const [user, setUser] = useState(userIncoming);

    const handleUserDelete = async (removableUserEmail:string) => {

        // e.preventDefault();
        const current_url = window.location.href.toString().split("/agents/")[1];
        console.log(current_url);

        const response = await fetch(`/api/users/${current_url}`, {
            method: "DELETE",
            body: JSON.stringify({sessionId,removableUserEmail}),

        })


        const jsonResponse = await response.json();
        console.log(jsonResponse);
    }





    const reloadUsers = (removableUserEmail:string) => {

        //once deleted, the user interface should be updated without this user
        //this can be from the database or from the UI
        let temp_user = user;
        const filteredAgents = user.allAgents.filter((agent) => agent.email !== removableUserEmail);
        temp_user.allAgents = filteredAgents;

        setUser(temp_user);
    }




  return (
    

<div className="bg-white rounded-[17px]
                glass-container-background-2 min-w-[100%]
                border backdrop-blur-10 pt-7 pb-8 px-4 mt-8
                dark:bg-[#68585806] dark:border-[#ffffff05]
                text-[#000000b3] dark:text-[#ffffffb0] text-center text-l flex flex-col gap-1
                ">

                    <h4 className="text_shadow-3 font-semibold text-xl md2:text-start
                    text-[#000000c7] dark:text-[#ffffffe2] capitalize
                    ">
                        The Team
                    </h4>

                    <div className="flex flex-row gap-6 my-6 w-full flex-wrap justify-center last-of-type:mr-auto">
                    {user.allAgents.length > 0 ? (
                    <>
                        {user.allAgents.map((agent: UserDocument) => (
                        // <div className="h-auto w-full max-w-[390px] md:w-[calc(50%-16px)] md2:w-[calc(33.3%-16px)] ">
                            
                            <div className="bg-white rounded-[17px]
                            glass-container-background-2
                            border backdrop-blur-10 pt-4 pb-4 px-4
                            dark:bg-[#68585806] dark:border-[#ffffff05]
                            text-[#000000dd] dark:text-[#ffffffd3]  
                            opacity-80 hover:opacity-100
                            flex flex-col items-center justify-center text-center capitalize text-l 
                            md2:w-[calc(33.3%-16px)] w-full sm:w-[calc(50%-16px)] lg:w-[calc(24%-16px)]
                            
                            ">

                                <h3 className="text-base font-semibold">{agent.name}</h3>
                                <p className="text-xs font-light">{agent.position}</p>

                                <div className="h-[30vw] w-[30vw] max-w-[100px] max-h-[100px]
                                bg-white overflow-hidden
                                rounded-full flex items-center justify-center dark:text-black
                                mt-4 mb-4">
                                
                                    <Image src={agent.avatar} height={150} width={150} alt=""
                                    className="flex-1 h-full "
                                    style={{objectFit:'cover'}}
                                    ></Image>

                                </div>

                                <p className="text-xs font-light">Last Update {agent.update}</p>
                                <p className="text-xs font-light">Properties [{agent.properties.length}]</p>

                                <div className="mt-2 flex flex-row items-center justify-center">
                                    <Link href={"/agents/"+agent._id} type="button" 
                                    className="border border-1
                                    dark:bg-[#68585806] bg-[#ffffffd3] 
                                    dark:border-[#ffffff19] dark:hover:border-[#ffffff36]
                                    text-[#000000dd] dark:text-[#ffffffd3] 
                                    rounded-[17px] text-sm  w-[65px]
                                    opacity-90 hover:opacity-100">
                                        View
                                    </Link>


                                    {/* <form method="post" action="" className="inline"> */}
                                    <button type="button" onClick={()=>{handleUserDelete(agent.email); reloadUsers(agent.email); setUserIncoming(user);}}
                                    className="border border-1
                                    dark:bg-[#68585806] bg-[#ffffffd3] 
                                    dark:border-[#ffffff19] dark:hover:border-[#ffffff36]
                                    text-[#000000dd] dark:text-[#ffffffd3] 
                                    rounded-[17px] text-sm  w-[65px] ml-2
                                    opacity-90 hover:opacity-100">
                                        Remove
                                    </button>
                                    {/* </form> */}
                                </div>
                                    
                            </div>
                            

                        // </div>
                        )
                        )}
                    </>
                    ) : (
                    <><h1 className="text_shadow-3">No agents exist yet</h1></>
                    )
                    }

                    </div>


                </div>


  )
}

export default AgentCard