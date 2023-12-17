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

//Part9
import PostAdd_Component from "@components/PropertyEdit/PostAdd";
import { PostDocument } from "@models/postModel";
import PropertyAdd_Component from "@components/PropertyEdit/PropertyAdd";

//Part 9
type postsType = postsInterface[];

interface postsInterface {
    id: number,
    title: string,
    content: string,
    author: string,
    image: string,
    date_add: string,
    date_update: string,
}





const page = () => {

    ////////////////////////////////////////////////////////////////////////////////////
    //Part 9 - Posts
    // let posts: postsType = [
    //     {
    //       id : 1,
    //       title: "A new release on houses",
    //       content: "This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better, This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better, This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better",
    //       author: "John",
    //       date: "Thu, 19 Sept 23",
    //       image : "/images/furniture.avif",
    //       date_add: "25 dec 2023",
    //       date_update: "26 dec 2023",      
    //     },
    //     {
    //       id : 2,
    //       title: "A new release on houses",
    //       content: "This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better",
    //       author: "John",
    //       date: "Thu, 19 Sept 23",
    //       image : "/images/furniture.avif",
    //       date_add: "25 dec 2023",
    //       date_update: "26 dec 2023",      
    //     },
    //     {
    //       id : 3,
    //       title: "A new release on houses",
    //       content: "This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better This company has released many new houses, with a good price too, it sounds to good to be true but they are here telling all the new stuff and with gardens, cant be better",
    //       author: "John",
    //       date: "Thu, 19 Sept 23",
    //       image : "/images/furniture.avif",   
    //       date_add: "25 dec 2023",
    //       date_update: "26 dec 2023",         
          
    //     }
    //   ]

    const [reload, setReload] = useState(false);

    const [postInfo, setPostInfo] = useState<postInputs_interface>({
        title: "",
        content: "",
        _id: "",
        action: "add",
    });

    interface postInputs_interface {
        title: string;
        content: string;
        _id: string;
        action: string;
    }


    function showPostAdd (inputs:postInputs_interface) {
        let postAddContainer = document.getElementById("postAddContainer");
        if (postAddContainer) postAddContainer.style.display = "inline";
        
        let children_container2 = document.getElementById("children_container2");
        if (children_container2) children_container2.style.opacity = "0";

        setPostInfo({title:inputs.title, content: inputs.content, _id:inputs._id, action: inputs.action});
        
    }

    //Part 9.1
    const handlePostDelete = async (postId:string) => {

        const response = await fetch(`/api/posts/delete`, {
            method: "DELETE",
            body: JSON.stringify({postId}),
        })

        const jsonResponse = await response.json();
        console.log(jsonResponse);
        setReload(true);
    }


    ////////////////////////////////////////////////////////////////////////////////////
    //Part 10 - FIXES - Inline Properties add/edit/delete

    const [propertyEditId, setPropertyEditId] = useState("");

    interface propertyInputs_interface {
        country: string;
        city: string;
        district: string;

        type: string;
        area: number;
        bedrooms: number;
        bathrooms: number;

        listing_type: string;
        price: number;
        description: string;
        _id: string;
        action: string;
    }


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


    type userInterface = {
        authority: string;
        properties: PropertyDocument[];
        userInfo: UserDocument;
        allAgents: UserDocument[];
        posts: PostDocument[];
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

        //reload is set to true after adding/deleting/editing, which will trigger a user re-fetch
        //set to false to be used again
        setReload(false);
        fetchUserInfo();

    }, [session, sessionId, reload]);


    




    return (

        <div className="mt-28 mx-auto w-full max-w-[1230px] flex flex-row items-center
        md2:items-stretch
        flex-wrap gap-8 mb-8 px-4 md2:px-8 relative">    

            <div className="absolute z-[99] w-full h-[100vh]
            left-0 top-0 hidden"
            id="postAddContainer">
                <PostAdd_Component postInfo={postInfo} setPostInfo={setPostInfo} setReload={setReload}/>
            </div>
        
            <div className="absolute z-[99] w-full h-[100vh]
            left-0 top-0 hidden"
            id="propertyAddContainer">
                <PropertyAdd_Component propertyEditId={propertyEditId} setPropertyEditId={setPropertyEditId} setReload={setReload}/>
            </div>

        {user !== null ? ( 
        <>
        <span id="children_container2" className="max-w-[100%]">
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
            <h1 className="mb-6 mt-8 text_shadow-3 font-bold text-3xl text-[#000000c7] dark:text-[#ffffffe2] capitalize w-full
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
                w-full md2:w-auto md2:min-h-[353px]
                ">

                    <h3 className="text-lg font-semibold">{user.userInfo.name}</h3>
                    <p className="text-xs font-light">{user.userInfo.position}
                        { user.userInfo.role === "admin" ? (
                            " [admin]"
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
                        <AgentInfo user={user} setReload={setReload}/>


                </div>


            </div>



            {/* container 2 - properties */}
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
                    onClick={() => {bodyNoScroll(); setPropertyEditId(""); showPropertyAdd();}}
                    className="
                    bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                    rounded-[17px] text-sm py-1 px-3
                    opacity-60 hover:opacity-90 ml-auto w-[120px]">
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
                            <PropertyCardAdmin setPropertyEditId={setPropertyEditId} property={property} currentPage="agent" setReload={setReload}/>
                    
                            

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



            {/* container 3 - posts */}
            <div className="bg-white rounded-[17px]
            glass-container-background-2 min-w-[100%]
            border backdrop-blur-10 pt-7 pb-8 px-4 mt-8
            dark:bg-[#68585806] dark:border-[#ffffff05]
            text-[#000000b3] dark:text-[#ffffffb0] text-center text-l flex flex-col gap-1
            ">

                {/* here are the posts */}
                <div className="w-full flex flex-row justify-center h-[2rem]">
                    <h4 className="text_shadow-3 font-semibold text-xl md2:text-start
                    text-[#000000c7] dark:text-[#ffffffe2]
                    ">
                        { user.authority === "viewer" ? (`${user.userInfo.name}'s posts`) : ("Your posts")}
                    </h4>

                    <button type="button" 
                    onClick={() => {bodyNoScroll(); showPostAdd({title: "", content:"", _id:"", action: "add"})}}
                    className="
                    bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                    rounded-[17px] text-sm py-0 px-3
                    opacity-60 hover:opacity-90 ml-auto w-[120px]">
                        Add a Post
                    </button>
                </div>

                {/* posts container */}
                <div className="flex flex-row gap-6 my-6 flex-wrap justify-center md:justify-start mx-auto last-of-type:mr-auto w-full">

                    {/* post */}
                    {user.posts.length > 0 ? (
                    <>
                        {user.posts.map((post) => (


                            <div className="h-auto max-w-full 
                            bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                            dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                            flex flex-col rounded-[17px] box-shadow-1 p-1 border border-[rgba(255,255,255,0.02)]
                            text_shadow-2
                            md2:flex-row md:w-[calc(50%-16px)] md2:min-w-[100%]
                            ">

                                <div className="md2:order-2 md2:w-[20%] md2:ml-8">
                                
                                    <Link href={"/news/"+post._id} key={post._id} className="lg:order-2 ">
                                        <Image src={post.image} height={300} width={300} alt={post.title}
                                        id={post._id}
                                        className="border-0 rounded-t-[10px] w-full
                                        md2:rounded-r-[10px] md2:rounded-l-none mb-4 md2:mb-0
                                        md2:h-full md2:w-auto
                                        ">
                                        </Image>
                                    </Link>
                                </div>

                                <div className="md2:order-1 px-2 md2:py-2 md2:px-3 md2:flex-1 md2:h-full md2:flex md2:flex-col">

                                    <p className="flex flex-row items-baseline font-bold uppercase">
                                        <span className="inline-block shrink-0 h-3 w-3 bg-red-500 opacity-80 rounded-full mr-4"></span>
                                        <span className="text-start dark:text-[#ffffffde]">
                                        {post.title}
                                        </span>
                                    </p>
                                    
                                    <span className="flex flex-row items-baseline mt-2">
                                        <span className="inline-block  shrink-0 h-3 w-3 bg-green-500 opacity-80 rounded-full mr-4"></span>
                                        <span className="text-start max-h-[4rem] max-w-[900px] text-sm dot-text line-clamp-3">
                                            {post.content}
                                        </span>
                                    </span>

                                    <span className="flex flex-row items-baseline mt-2 md2:flex-1 md2:h-full">
                                            <span className="inline-block shrink-0 h-3 w-3 bg-[rgba(0,89,255,0.7)] rounded-full mr-4"></span>
                                                <div className="flex flex-col w-full items-start 
                                                md2:flex-row md2:justify-start md2:gap-2">
                                                    <div className="font-light text-sm w-full flex flex-row text-start
                                                    md2:w-auto md2:gap-1">
                                                        <span className="w-[4rem] md2:w-auto inline-block">Added:</span>
                                                        <span>{post.date_add}</span>
                                                    </div>
                                                    <div className="font-light text-sm w-full flex flex-row text-start 
                                                    md2:w-auto md2:gap-1">
                                                        <span className="w-[4rem] md2:w-auto inline-block">Updated:</span>
                                                        <span>{post.date_update}</span>
                                                    </div>
                                                </div>
                                    </span>

                                    <div className="text-sm font-light w-full flex flex-row gap-2
                                    mt-2 mb-1 justify-center
                                    md2:mt-auto md2:justify-end md2:mb-0">

                                        <button type="button"
                                        onClick={() => {bodyNoScroll(); showPostAdd({title: post.title, content:post.content, _id: post._id.toString(), action: "edit"})}}
                                        className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                                        rounded-full w-[65px]
                                        opacity-40 hover:opacity-90 text-center">
                                            Edit
                                        </button>

                                        <button type="button" 
                                        onClick={()=>{handlePostDelete(post._id);}}                           
                                        className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                                        rounded-full w-[65px]
                                        opacity-40 hover:opacity-90 text-center">
                                            Delete
                                        </button>

                                    </div>
                                
                                </div>

                            </div>

                        )
                        )}
                    </>
                    ) : (
                    <>
                        <h1 className="text_shadow-3">
                            
                            { user.authority === "viewer" ? (`${user.userInfo.name} does not have any posts yet`) : ("You do not have any posts yet")}

                        </h1>
                    </>
                    )
                    }

                </div>
                
            </div>





            {/* container 4 */}
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
            
        {/* </div> */}
        </span>
        </>
            ):("")}

        </div>
        
    )
}

export default page