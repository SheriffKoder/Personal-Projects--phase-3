import React from 'react'

import { PropertyDocument } from '@models/propertyModel';
import PropertyCardAdmin from '@components/Home/HomeMain/PropertyCardAdmin';
import { useState, useEffect, useRef } from 'react';
import { PostDocument } from '@models/postModel';
import Link from 'next/link';
import Image from 'next/image';
import { bodyNoScroll } from '@utils/bodyNoScroll';

import { updateUser_lastUpdate } from "@utils/dateGenerate";
import { useSession } from "next-auth/react";




interface postInputs_interface {
    title: string;
    content: string;
    _id: string;
    action: string;
}

const PostsContainer = ({userAuthority, userName, setPostInfo}:{
    userAuthority: string,
    userName: string,
    setPostInfo: React.Dispatch<React.SetStateAction<postInputs_interface>>

}) => {

    const { data: session, status } = useSession();      //get the session.user
    const [reload, setReload] = useState(false);


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

        //Part 10
        //update the user last update-date, calls a patch api on this user id
        //which user id want to update, session user
        let userId_session = session?.user.id;
        if (userId_session) updateUser_lastUpdate(userId_session);
        //
        setReload(true);
    }


    const [userPosts, setUserPosts] = useState<PostDocument[]|[]>([]);

    //Part 11.03
    const [pageId, setPageId] = useState(1);
    const endPage = useRef(1);


    useEffect(()=> {

        //connect to data base
        const fetchPosts = async () => { 
            
            let userId = window.location.href.toString().split("/agents/")[1];
    
            console.log(userPosts);
            //state needs to have a different value to take the same value again which is jsonResponse.properties
            if (userPosts.length > 0) {
                let loadingProperties:PropertyDocument[] = [];
                
                // console.log("loadingProperties");
                // console.log(loadingProperties);
                // setUserProperties(loadingProperties);

                setUserPosts([]);
    
            }
            
            const response = await fetch(`/api/posts/user/${userId}/${pageId}`);
            const jsonResponse = await response.json();
            console.log(jsonResponse);
    
            endPage.current = jsonResponse.pagesEnd;
            console.log("end page: "+endPage.current);
            console.log("current page: "+ pageId);
    
            // console.log("properties were");
            // console.log(userProperties);
        
            // console.log(jsonResponse.properties);
    
            // setUserProperties([]);
            setUserPosts(jsonResponse.posts);

            
            // console.log("properties now are");
            // console.log(userProperties);
    
        }
    
        fetchPosts();
    
      },[pageId, reload]);
    

  return (

        <>
        <div className="w-full flex flex-row justify-center h-[2rem]">
            <h4 className="text_shadow-3 font-semibold text-xl md2:text-start
            text-[#000000c7] dark:text-[#ffffffe2]
            ">
                { userAuthority === "viewer" ? (`${userName}'s posts`) : ("Your posts")}
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
        {userPosts.length > 0 ? (
        <>
            {userPosts.map((post) => (


                <div className="h-auto max-w-full 
                bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                flex flex-col rounded-[17px] box-shadow-1 p-1 border border-[rgba(255,255,255,0.02)]
                text_shadow-2
                md2:flex-row md:w-[calc(50%-16px)] md2:min-w-[100%] md2:h-[166px]
                ">

                    <div className="md2:order-2 md2:w-[20%] md2:ml-8">
                    
                        <Link href={"/posts/"+post._id} key={post._id} className="lg:order-2 ">
                            <Image src={post.image} height={300} width={300} alt={post.title}
                            id={post._id}
                            className="border-0 rounded-t-[10px] w-full
                            md2:rounded-r-[10px] md2:rounded-l-none mb-4 md2:mb-0
                            md2:h-full md2:w-auto
                            ">
                            </Image>
                        </Link>
                    </div>

                    <div className="md2:order-1 px-2 md2:py-2 md2:px-3 md:flex-1 md2:h-full md:flex md:flex-col">

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

                        <div className="flex-1 flex flex-col justify-end">
                        <span className="flex flex-row items-baseline mt-2 md2:flex-1 md2:h-full md2:items-end">
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

                </div>

            )
            )}
        </>
        ) : (
        <>
            <h1 className="text_shadow-3">
                
                { userAuthority === "viewer" ? (`${userName} does not have any posts yet`) : ("You do not have any posts yet")}

            </h1>
        </>
        )
        }

        </div>

    {/* pagination buttons */}
    <div className="w-full flex flex-row justify-center items-center gap-2">

        <div className="relative">

            {/* previous buttons */}
            <div className="absolute right-7 top-0 flex flex-row gap-2">

                {/* first page button */}
                {pageId-1 > 1 ? (
                <button 
                onClick={()=> {setPageId(1)}}
                className="
                bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 
                dark:bg-[#912642] dark:hover:bg-[#9f2545] 
                h-5 w-12 rounded-[6px] text-white flex items-center justify-center
                text-xs">
                    first
                </button>
                ):(
                    <div 
                    className="
                    bg-theme-text-brighter opacity-50 dark:opacity-50 
                    dark:bg-[#912642] dark:hover:bg-[#9f2545] 
                    h-5 w-12 rounded-[6px] text-black flex items-center justify-center
                    text-xs">    
                    </div>
                
                )}


                {/* previous page button */}
                {pageId > 1 ? (
                <button 
                onClick={()=> {setPageId(pageId-1)}}
                className="
                bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 
                dark:bg-[#912642] dark:hover:bg-[#9f2545] 
                h-5 w-5 rounded-[6px] text-white flex items-center justify-center
                text-xs">
                    {pageId-1}
                </button>
                ):(
                    <div 
                    className="
                    bg-theme-text-brighter opacity-50 dark:opacity-50 
                    dark:bg-[#912642] dark:hover:bg-[#9f2545] 
                    h-5 w-5 rounded-[6px] text-black flex items-center justify-center
                    text-xs">    
                    </div>
                
                )}

            </div>

            {/* middle/current button */}
            <button 
            onClick={()=> {}}
            className="
            bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 
            dark:bg-[#912642] dark:hover:bg-[#9f2545] 
            h-5 w-5 rounded-[6px] text-white flex items-center justify-center
            text-xs outline outline-1 outline-offset-2 dark:outline-[#ffffff4f] outline-[#0000005a]">
                {pageId}
            </button>

            {/* next buttons */}
            <div className="absolute left-7 top-0 flex flex-row gap-2">
                {/* next page button */}
                {pageId < Math.ceil(endPage.current) ? (
                <button 
                onClick={()=> {setPageId(pageId+1)}}
                className="
                bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 
                dark:bg-[#912642] dark:hover:bg-[#9f2545] 
                h-5 w-5 rounded-[6px] text-white flex items-center justify-center
                text-xs">
                    {pageId+1}
                </button>
                ):(
                    <div 
                    className="
                    bg-theme-text-brighter opacity-50 dark:opacity-50 
                    dark:bg-[#912642] dark:hover:bg-[#9f2545] 
                    h-5 w-5 rounded-[6px] text-black flex items-center justify-center
                    text-xs">    
                    </div>
                )}

                {/* last page button */}
                {pageId+1 < Math.ceil(endPage.current) ? (
                <button 
                onClick={()=> {setPageId(Math.ceil(endPage.current))}}
                className="
                bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 
                dark:bg-[#912642] dark:hover:bg-[#9f2545] 
                h-5 w-12 rounded-[6px] text-white flex items-center justify-center
                text-xs">
                    last
                </button>
                ):(
                    <div 
                    className="
                    bg-theme-text-brighter opacity-50 dark:opacity-50 
                    dark:bg-[#912642] dark:hover:bg-[#9f2545] 
                    h-5 w-12 rounded-[6px] text-black flex items-center justify-center
                    text-xs">    
                    </div>
                )}

            </div>


        </div>





    </div>

        </>
    
      );
}

export default PostsContainer;