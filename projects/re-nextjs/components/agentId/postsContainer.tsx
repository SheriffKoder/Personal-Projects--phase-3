// import React from 'react'

// the posts container in the profile page (title, add button, post cards)

import { useState, useEffect, useRef } from 'react';
import { PostDocument } from '@models/postModel';
import Link from 'next/link';
import Image from 'next/image';
import { bodyNoScroll } from '@utils/bodyNoScroll';

import { updateUser_lastUpdate } from "@utils/dateGenerate";
import { useSession } from "next-auth/react";



const PostsContainer = ({setPostEditId, userAuthority, setReload, reload, userName}:{
    setPostEditId: React.Dispatch<React.SetStateAction<string>>
    setReload: React.Dispatch<React.SetStateAction<boolean>>,
    reload: any,
    userAuthority: string,
    userName: string,

}) => {

    const { data: session, status } = useSession();      //get the session.user
    // const [reload, setReload] = useState(false);


    //show the post add form
    function showPostAdd () {

        let postAddContainer = document.getElementById("postAddContainer");
        if (postAddContainer) postAddContainer.style.display = "inline";
        
        let children_container2 = document.getElementById("children_container2");
        if (children_container2) children_container2.style.opacity = "0";
        document.querySelector("footer")!.style.opacity = "0";

        // setPostInfo({title:inputs.title, content: inputs.content, _id:inputs._id, action: inputs.action});
        
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

    //Part 11.03 - pagination
    const [pageId, setPageId] = useState(1);
    const endPage = useRef(1);

    const [dataCondition,setDataCondition] = useState("Loading posts...");

    // fetch the posts
    useEffect(()=> {

        setDataCondition("Loading posts...");

        //connect to data base, fetch user's posts with the pagination reference pageId
        const fetchPosts = async () => { 
            
            let userId = window.location.href.toString().split("/agents/")[1];
            
            const response = await fetch(`/api/posts/user/${userId}/${pageId}`);
            const jsonResponse = await response.json();

            //last page button value, to jump to the last page of results
            endPage.current = jsonResponse.pagesEnd;

            if (jsonResponse.posts.length > 0) {            
                setUserPosts(jsonResponse.posts);
            } else {
                if (userAuthority === "viewer") {
                setDataCondition(`${userName} does not have any posts yet`)
                } else {
                setDataCondition("You do not have any posts yet");
                }
            }
            setReload(false);
        }
    
        //call the fetching function above
        fetchPosts();
    
    //we fetch posts when the pagination reference pageId or reload (set to true when editing deleting) are changed 
    },[pageId,reload]);
    

  return (

        <>

        {/* title and add a post button */}
        <div className="w-full flex flex-row justify-center h-[2rem]">
            <h4 className="text_shadow-3 font-semibold text-xl md2:text-start
            text-[#000000c7] dark:text-[#ffffffe2]
            ">
                { userAuthority === "viewer" ? (`${userName}'s posts`) : ("Your posts")}
            </h4>

            <button type="button" 
            onClick={() => {bodyNoScroll(); showPostAdd()}}
            className="
            bg-theme-text-brighter dark:bg-theme-text-dark text-white 
            rounded-[17px] text-sm py-0 px-3
            opacity-60 hover:opacity-90 ml-auto w-[120px]">
                Add a Post
            </button>
        </div>

        {/* posts container */}
        <div className="flex flex-row gap-6 my-6 flex-wrap justify-center md:justify-start mx-auto last-of-type:mr-auto w-full">

            {/* posts map iteration */}
            {userPosts.length > 0 ? (
            <>
                {userPosts.map((post) => (

                    <div className="max-w-full 
                    bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                    dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                    flex flex-col rounded-[17px] box-shadow-1 p-1 border border-[rgba(255,255,255,0.02)]
                    text_shadow-2
                    md2:flex-row md:w-[calc(50%-16px)] md2:min-w-[100%] md2:h-[220px] h-[135vw] md:h-[calc(15vh+50vw)]
                    ">

                        <div className="
                        md2:order-2 md2:w-[30%] md2:ml-8 overflow-hidden rounded-t-[10px] md2:rounded-tl-none md2:rounded-br-[10px] 
                        h-[40%] mb-4 md2:mb-0 md2:min-h-full flex
                        ">
                        
                            <Link href={"/posts/"+post._id} key={post._id} 
                            className="overflow-hidden lg:order-2 min-h-full w-full">
                                <Image src={post.image} height={300} width={300} alt={post.title}
                                id={post._id}
                                className="border-0 h-full w-full flex
                                mb-4 md2:mb-0
                                
                                "
                                style={{objectFit:'cover'}}>
                                </Image>
                            </Link>
                        </div>

                        <div className="md2:order-1 px-2 md2:py-2 md2:px-3 md:flex-1 md2:h-full flex flex-col
                        flex-1">

                            <p className="flex flex-row items-baseline font-bold uppercase min-h-[3rem]">
                                <span className="inline-block shrink-0 h-3 w-3 bg-red-500 opacity-80 rounded-full mr-4"></span>
                                <span className="text-start dark:text-[#ffffffde] dot-text line-clamp-2">
                                {post.title}
                                </span>
                            </p>
                            
                            <span className="flex flex-row items-baseline mt-2">
                                <span className="inline-block  shrink-0 h-3 w-3 bg-green-500 opacity-80 rounded-full mr-4"></span>
                                <span className="text-start max-h-[4rem] max-w-[900px] text-sm dot-text line-clamp-3">
                                    {post.content}
                                </span>
                            </span>

                            <div className="flex-1 flex flex-col justify-end mt-auto">
                            <span className="flex flex-row items-baseline mt-2 md2:flex-1 md2:h-full md2:items-end">
                                    <span className="inline-block shrink-0 h-3 w-3 bg-[rgba(0,89,255,0.7)] rounded-full mr-4"></span>
                                        <div className="flex flex-col w-full items-start 
                                        md2:flex-row md2:justify-start md2:h-full md2:mb-[-0.25rem] md2:items-end md2:gap-2">
                                            <div className="font-light text-xs w-full flex flex-row text-start
                                            md2:w-auto md2:gap-1">
                                                <span className="w-[4rem] md2:w-auto inline-block">Added:</span>
                                                <span>{post.date_add}</span>
                                            </div>
                                            <div className="font-light text-xs w-full flex flex-row text-start 
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
                                onClick={() => {bodyNoScroll(); setPostEditId(post._id); showPostAdd();}}
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

                {/* pagination buttons */}
                <div className="w-full flex flex-row justify-center items-center gap-2">

                    <div className="relative">

                        {/* previous buttons */}
                        <div className="absolute right-7 top-0 flex flex-row gap-2">

                            {/* first page button */}
                            {pageId-1 > 1 ? (
                            <button 
                            onClick={()=> {setPageId(1); setReload(true);}}
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
                            onClick={()=> {setPageId(pageId-1); setReload(true);}}
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
                            onClick={()=> {setPageId(pageId+1); setReload(true);}}
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
                            onClick={()=> {setPageId(Math.ceil(endPage.current)); setReload(true);}}
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
            ) : (
            <>
                <h1 className="text_shadow-3 w-full text-center">
                    {dataCondition}
                </h1>
            </>
            )
            }

        </div>



        </>
    
      );
}

export default PostsContainer;