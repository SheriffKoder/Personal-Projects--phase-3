// import React from 'react'

//This is the profile page for signed in users
//a guard is set by the session-guard in this folder's layout.tsx


"use client";
import Link from "next/link";
import Image from "next/image";

import AgentCard from "@components/agentId/agentCard";
import { bodyNoScroll } from "@utils/bodyNoScroll";
import { useEffect, useState } from "react";


//05.01
import { useSession } from "next-auth/react";
import { UserDocument } from "@models/userModel";
import { PropertyDocument } from "@models/propertyModel";


import AgentInfo from "@components/agentId/agentInfo";

//Part9
import PostAdd_Component from "@components/PropertyEdit/PostAdd";
import { PostDocument } from "@models/postModel";
import PropertyAdd_Component from "@components/PropertyEdit/PropertyAdd";

//Part 10
import PropertiesContainer from "@components/agentId/propertiesContainer";
import PostsContainer from "@components/agentId/postsContainer";





const page = () => {

    //used to make a UI refresh
    const [reload, setReload] = useState(false);


    ////////////////////////////////////////////////////////////////////////////////////
    //Part 10 - FIXES - Inline Properties add/edit/delete

    const [propertyEditId, setPropertyEditId] = useState("");
    const [postEditId, setPostEditId] = useState("");

    //show the property add form component
    function showPropertyAdd () {
        let postAddContainer = document.getElementById("propertyAddContainer");
        if (postAddContainer) postAddContainer.style.display = "inline";
        
        let children_container2 = document.getElementById("children_container2");
        if (children_container2) children_container2.style.opacity = "0";
        
    }



    
    ////////////////////////////////////////////////////////////////////////////////////
    //Part 5 - Properties get
    //05.01
    const { data: session, status } = useSession();      //get the session.user

    //get this page's user related data of : userInfo, authority, and all agents in case of an admin agent
    type userInterface = {
        authority: string;
        userInfo: UserDocument;
        allAgents: UserDocument[];
    }

    const [sessionId, setSessionId] = useState<string>("");
    const [user, setUser] = useState<userInterface | null>(null);


  

    useEffect(()=> {

        //get current browsing user
        if (session?.user) setSessionId(session?.user.id);

        //get page url as it includes the id for the user page in question
        const current_url = window.location.href.toString().split("/agents/")[1];

        //fetch the user info from the database
        const fetchUserInfo = async () => { 
            
            const response = await fetch(`/api/users/${current_url}`, {
                method: "POST",
                body: JSON.stringify(sessionId),
            })

            const jsonResponse = await response.json();

            //store the user info on the webpage
            setUser(jsonResponse);
            //returns {allUsers, authority, userInfo}
            //however could have separated into separate api routes and not be combined

        }

        //reload is set to true after adding/deleting/editing, which will trigger a user re-fetch
        //set to false to be used again
        setReload(false);

        //call the fetch function above
        fetchUserInfo();

    }, [session, sessionId, reload]);


    




    return (

        <div className="mt-28 mx-auto w-full max-w-[1230px] flex flex-row items-center
        md2:items-stretch
        flex-wrap gap-8 mb-8 px-4 md2:px-8 relative">    

            {/* the post add form component */}
            {/* it has to be on top of all components on this page */}
            <div className="absolute z-[99] w-full h-[100vh]
            left-0 top-0 hidden"
            id="postAddContainer">
                <PostAdd_Component postEditId={postEditId} setPostEditId={setPostEditId} setReload={setReload}/>
            </div>
        
            {/* the property add form component */}
            {/* it has to be on top of all components on this page */}
            <div className="absolute z-[99] w-full h-[100vh]
            left-0 top-0 hidden"
            id="propertyAddContainer">
                <PropertyAdd_Component propertyEditId={propertyEditId} setPropertyEditId={setPropertyEditId} setReload={setReload}/>
            </div>

        {user !== null ? ( 
        <>
        <span id="children_container2" className="w-[100%]">
            {/* nav links */}
            <div className="dark:text-white text-black text-shadow-3 w-full text-xs flex flex-row gap-1 opacity-70">        
                <Link className=""href="/">Home</Link>
                &#62;
                <span className="text-theme-text-brighter">
                { user.authority === "viewer" ? (`${user.userInfo.name}'s profile`) : ("Your Profile")}
                </span>
            </div>

            {user.userInfo ? (
                <>
            {/* container 1 - this page's user related info */}
            <h1 className="mb-6 mt-8 text_shadow-3 font-bold text-3xl text-[#000000c7] dark:text-[#ffffffe2] capitalize w-full
            text-center md2:text-start">
                { user.authority === "viewer" ? 
                ( `Viewing ${user.userInfo.name} as admin`
                ):(
                `Hello, ${user.userInfo.name.split(" ")[0]}`
                )}
            </h1>

            <div className="flex flex-row flex-wrap gap-4 w-full">

                {/* user's avatar/photo along with name, position, admin or not*/}
                <div className="bg-white rounded-[17px]
                glass-container-background-2
                border backdrop-blur-10 pt-4 md2:pb-6 pb-12 px-8
                dark:bg-[#68585806] dark:border-[#ffffff05]
                text-[#000000b3] dark:text-[#ffffffb0] text-center text-l 
                flex flex-col items-center justify-center flex-wrap capitalize h-full
                w-full md2:w-auto md2:min-h-[353px]
                ">

                    <h3 className="text-lg font-semibold">{user.userInfo.name}</h3>
                    <p className="text-xs font-light">{user.userInfo.position}
                        { user.userInfo.role === "admin" ? (
                            <span className="ml-1 text-[#279b72] dark:text-[#32b084]">[admin]</span>
                        ): ("")}
                    </p>
                    <div className="h-[11.75rem] w-[11.75rem] bg-white overflow-hidden
                    rounded-full flex items-center justify-center dark:text-black
                    mt-4">
                    
                        <Image src={user.userInfo.avatar} height={150} width={150} alt=""
                        className="flex-1 h-full"
                        style={{objectFit:'cover'}}
                        ></Image>

                    </div>
                        
                </div>

                {/* user's info and edits */}
                <div className="bg-white rounded-[17px]
                glass-container-background-2
                border backdrop-blur-10 pt-4 pb-4 px-4
                dark:bg-[#68585806] dark:border-[#ffffff05]
                text-[#000000b3] dark:text-[#ffffffb0]
                flex-1 flex flex-col md:gap-2 gap-4 justify-center md2:justify-end
                w-full items-center md2:items-start
                "
                >
        
                    {/* user's info container, name, email etc... with edit functionalities */}
                        <AgentInfo user={user} setReload={setReload}/>


                </div>


            </div>



            {/* container 2 - user's properties */}
            <div className="bg-white rounded-[17px]
            glass-container-background-2 min-w-[100%]
            border backdrop-blur-10 pt-7 pb-8 px-4 mt-8
            dark:bg-[#68585806] dark:border-[#ffffff05]
            text-[#000000b3] dark:text-[#ffffffb0] text-center text-l flex flex-col gap-1
            ">

                {/* properties container's header and add property button */}
                <div className="w-full flex flex-row justify-center h-[2rem]">
                    <h4 className="text_shadow-3 font-semibold text-xl md2:text-start
                    text-[#000000c7] dark:text-[#ffffffe2]
                    ">
                        { user.authority === "viewer" ? (`${user.userInfo.name}'s Properties`) : ("Your properties")}
                    </h4>

                    <button type="button" 
                    onClick={() => {bodyNoScroll(); setPropertyEditId(""); showPropertyAdd();}}
                    className="
                    bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                    rounded-[17px] text-sm py-1 px-3
                    opacity-60 hover:opacity-90 ml-auto w-[120px]">
                        Add a Property 
                    </button>
                </div>

                {/* properties container - which will generate propertyCardAdmin 
                and fetch this page's user properties*/}
                <PropertiesContainer 
                setPropertyEditId={setPropertyEditId} 
                setReload={setReload} 
                reload={reload}
                userAuthority={user.authority} 
                userName={user.userInfo.name}
                />
                    
            </div>



            {/* container 3 - user's posts */}
            <div className="bg-white rounded-[17px]
            glass-container-background-2 min-w-[100%]
            border backdrop-blur-10 pt-7 pb-8 px-4 mt-8
            dark:bg-[#68585806] dark:border-[#ffffff05]
            text-[#000000b3] dark:text-[#ffffffb0] text-center text-l flex flex-col gap-1
            ">

                {/* here are the posts */}
                    {/* the container header and add a new post button exist on the PostsContainer below */}


                {/* Posts container */}
                <PostsContainer 
                setPostEditId={setPostEditId}
                setReload={setReload}
                reload={reload}
                userAuthority={user.authority} 
                userName={user.userInfo.name}
                />
                
            </div>





            {/* container 4 - other users on the database
            in case this user is an admin and owner of the currently open page
            as we do not need to show all users on a page viewed as a viewer (other agent's page)*/}
            { (user.userInfo.role === "admin" && user.authority === "owner") ? (
                <AgentCard userIncoming={user} setUserIncoming={setUser} sessionId={sessionId}/>

            ) : ("")}

            {/* in case the profile page is not the admin's page and we will not show other agents
            we can display a return back to profile button instead */}
            {(user.userInfo.role === "admin" && user.authority === "viewer") ? (

                <div className="bg-white rounded-[17px]
                glass-container-background-2
                border backdrop-blur-10 pt-4 pb-4 px-4
                dark:bg-[#68585806] dark:border-[#ffffff05]
                text-[#000000dd] dark:text-[#ffffffd3]  
                opacity-80 hover:opacity-100
                flex flex-col items-center justify-center text-center capitalize text-l 
                w-full mt-8
                
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
                ) : ("")}

                
                
            </>) : ("")}
            
        </span>
        </>
            ):("")}

        </div>
        
    )
}

export default page;