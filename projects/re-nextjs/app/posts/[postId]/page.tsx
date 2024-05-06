// import React from 'react'
"use client"

import Link from "next/link";
import Image from "next/image";
import { PostDocument } from "@models/postModel";
import { useEffect, useState } from "react";
import MyLoading2 from "@components/Home/myLoading2";


//single post page: we render the post info, and side posts

// const page = async () => {   // to use the loading.tsx
const page = () => {


    type post_andRecPosts = {
        post: PostDocument;
        posts: PostDocument[];
    }

    //not used since we used the loading.tsx, now we store in a const as this page does not change
    const [post_andRecPosts, setPost_andRecPosts] = useState<post_andRecPosts | null>(null);



    //connect to the data base, fetch this post
    
    // let current_url = window.location.href.toString().split("/posts/")[1];

    // const response = await fetch(`/api/posts/${current_url}`, {
    //     method: "GET",
    // })

    // const jsonResponse = await response.json();
    // const post_andRecPosts = jsonResponse;


    //not used since we used the loading.tsx, to make the loading work we need to fetch outside of a useEffect
    useEffect(()=> {

    //get page url as it included the id for the user page in question
    const current_url = window.location.href.toString().split("/posts/")[1];
    console.log(current_url);

    //connect to data base
    const fetchPost = async () => { 
        
        let current_url = window.location.href.toString().split("/posts/")[1];

        const response = await fetch(`/api/posts/${current_url}`, {
            method: "GET",
        })

        const jsonResponse = await response.json();
        // console.log(jsonResponse);

        setPost_andRecPosts(jsonResponse);

    }

        fetchPost();

    },[]);


  return (

    <>
    { post_andRecPosts ? 

        <div className="flex flex-col pb-6 pt-32 px-3">

        {post_andRecPosts !== null ? (
        <div className="mx-auto lg:max-w-[1230px] max-w-[calc(100vw-1.5rem)]">

            {/* navigation current location links */}
            <div className="dark:text-white text-black text-shadow-3 w-full pr-3 text-xs flex flex-wrap flex-row gap-1 opacity-70 ml-2">
            
            <Link className=""href="/#home-news">Home</Link>
            <span>&#62;</span>
            <Link className="" href="/news">News</Link>
            <span className="">&#62;</span>
            <span className="text-theme-text-brighter capitalize w-[80%] md:min-w-min"><span>{post_andRecPosts.post.title}</span></span>
            </div>

            {/* the post whole container */}
            <div className="bg-white rounded-[17px]
            glass-container-background-2 
            border backdrop-blur-10 pt-7 pb-7 px-7 mt-8
        dark:bg-[#68585806] dark:border-[#ffffff05]
        text-[#000000b3] dark:text-[#ffffffb0] text-l flex flex-row flex-wrap gap-6
        
            ">

                {/* the post's title */}
                <div className="w-full 
                bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                backdrop-blur-10
                dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                flex flex-col rounded-[7px] box-shadow-1 p-2 border border-[rgba(255,255,255,0.02)]
                text_shadow-2
                
                ">

                    <h4 className="flex flex-row items-baseline font-bold uppercase px-2">
                        <span className="text-start dark:text-[#ffffffde] text_shadow-3 
                        slide_right__text__animation">
                            <span className="inline-block shrink-0 h-3 w-3 bg-red-500 opacity-80 rounded-full mr-4"></span>
                            <span>{post_andRecPosts.post.title}</span>
                        </span>
                    </h4>
                </div>        

                {/* the post's image  and contents*/}
                {post_andRecPosts.post ? (
                <>

                <div className="flex flex-col gap-6 w-[100%] md2:flex-1">

                    {/* the post's image */}
                    <div className="h-auto w-full 
                    bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                    glass-container-background-2 backdrop-blur-10
                    dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                    flex flex-col rounded-[17px] box-shadow-1 p-2 border border-[rgba(255,255,255,0.02)]
                    text_shadow-2 max-w-[100%]
                    ">

                        <div className="max-h-[855px] overflow-hidden">
                            <Image src={post_andRecPosts.post.image} height={600} width={600} alt={post_andRecPosts.post.title}
                            id={post_andRecPosts.post._id}
                            className="border-0 w-full
                            rounded-[10px]"
                            
                            style={{objectFit:'cover'}}
                            priority>

                            </Image>
                        </div>
                        
                    </div>

                    {/* the posts contents */}
                    <div className="h-auto w-full 
                    bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                    glass-container-background-2 backdrop-blur-10
                    dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                    flex flex-col rounded-[17px] box-shadow-1 p-2 border border-[rgba(255,255,255,0.02)]
                    text_shadow-2 max-w-[100%] md2:min-h-max min-h-[500px] mb-20 md2:mb-0 flex-1
                    ">
                        <div className="p-2">
                        
                        <span className="flex flex-row items-baseline">
                            <span className="text-start max-w-[900px] text-sm ">
                                <span className="inline-block shrink-0 h-3 w-3 bg-green-500 opacity-80 rounded-full mr-2"></span>
                                    {post_andRecPosts.post.content.indexOf("credits:") ? 
                                    (
                                    <>
                                    <span>{post_andRecPosts.post.content.split("credits:")[0]}</span>
                                    <a className="text-blue-500 underline" 
                                    href={post_andRecPosts.post.content.split("credits:")[1]}>credits</a>
                                    </>)
                                    :
                                    (post_andRecPosts.post.content)
                                    }
                            </span>
                        </span>
                    </div>
                    </div>

                </div>


                {/* the side container - author and side posts container */}
                <div className=" w-[100%] md2:w-[20%] min-w-[215px] h-auto
                bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                glass-container-background-2 backdrop-blur-10
                dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                flex flex-col rounded-[7px] box-shadow-1 p-2 border border-[rgba(255,255,255,0.02)]
                text_shadow-2 md2:rounded-[17px] md2:h-[872px]
                ">
                    <span className="flex flex-col items-baseline p-2 md2:p-2 md2:flex-col">
                        <span className="inline-block shrink-0 h-3 w-3 bg-[rgba(0,89,255,0.7)] rounded-full mr-4"></span>
                        <span className="w-full text-start font-light text-sm
                        lowercase flex flex-row items-center">
                            <span className="opacity-60 mr-2 hidden">{post_andRecPosts.post.date_update} by {post_andRecPosts.post.userId.name} </span>

                            <div className="flex flex-col gap-4 mt-2 capitalize text-center w-full items-center">

                                {/* section - author and date */}
                                <div className="flex flex-col md:flex-row  md2:flex-col items-center justify-center md2:gap-4 gap-4 md:gap-8">
                                <div className="h-[6rem] w-[6rem] bg-white rounded-full flex items-center justify-center dark:text-black overflow-hidden">
                                    <Image src={post_andRecPosts.post.userId.avatar} height={100} width={100} alt="agent's photo"
                                    className="
                                    border-0
                                    rounded-[7px] w-full
                                    h-[100%]
                                    "
                                    style={{objectFit:'cover'}}
                                    priority>
                                    </Image>
                                    </div>



                                    <div className="">
                                        <div>Published By</div>
                                        <div>{post_andRecPosts.post.userId.name}                                    </div>

                                    </div>

                                    <div>
                                        <div>Published Date</div>
                                        <div>{post_andRecPosts.post.date_update}</div>
                                    </div>

                                </div>
                                

                                {/* section - side posts */}
                                <h4 className="text_shadow-2 opacity-90 md2:mt-8 mt-4 text-black dark:text-white">
                                    You may also be interested to read
                                </h4>

                                {post_andRecPosts.posts.map((post:PostDocument) => (

                                    <Link href={"/posts/"+post._id} key={post._id} 
                                    className="h-auto max-w-full 
                                    bg-[#fffffff0] focus:bg-[#ffffff] hover:bg-[#ffffff] 
                                    dark:bg-[#ffffff07] dark:hover:bg-[#ffffff0a] dark:focus:bg-[#ffffff0a]
                                    flex flex-col rounded-[17px] box-shadow-1 p-3 border border-[rgba(255,255,255,0.02)]
                                    text_shadow-2 text-xs w-full min-h-[158px]
                                    ">
                                        <p className="flex flex-row items-baseline font-bold uppercase">
                                        <span className="inline-block shrink-0 h-2 w-2 bg-red-500 opacity-50 rounded-full mr-2"></span>
                                        <span className="text-start dark:text-[#ffffffde] dot-text line-clamp-1">
                                            {post.title}
                                        </span>
                                        </p>
                                        
                                        <span className="flex flex-row items-baseline mt-2">
                                        <span className="inline-block  shrink-0 h-2 w-2 bg-green-500 opacity-50 rounded-full mr-2"></span>
                                        <span className="text-start max-h-[4rem] max-w-[900px] text-sm dot-text line-clamp-3">
                                            {post.content}
                                        </span>
                                        </span>

                                        <span className="flex-1 flex flex-col justify-end">
                                            <span className="flex flex-row items-baseline mt-auto h-full">
                                            <span className="inline-block shrink-0 h-2 w-2 bg-[rgba(0,89,255,0.5)] rounded-full mr-2"></span>
                                            <span className="w-full text-start font-light text-sm
                                            lowercase flex flex-row items-end">
                                                <span className="opacity-60 ">{post.date_update} 
                                                <span className="md2:block">by {post.userId.name}</span>
                                                </span>
                                                <p className="ml-auto mr-[-0.2rem] md2:mr-0 md2:px-1 bg-theme-text-bright h-5 w-5 right_caret rounded-[5px] border-0"> </p>
                                            </span>
                                            </span>            
                                        </span>
                                    </Link>

                                ))}

                            </div>

                        </span>
                    </span>            
                </div>

                        
                </>
                ) : (
                <>
                    <h1 className="text_shadow-3">This post does not exist</h1>
                </>
                )
                }

                </div>
                    
            </div>

        ):("")}

        </div>
    :
        <MyLoading2 loadingText="Loading post..."/>      
    }
    </>
    

  )
}

export default page;