// import React from 'react'
"use client";

import { bodyScroll, hideEdit } from "@utils/bodyNoScroll";
import { useEffect } from "react";
import Link from "next/link";

import { ChangeEventHandler, FormEventHandler } from "react";


//03.01
import {useState} from "react";
import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";


function hidePostAdd () {
    let postAddContainer = document.getElementById("postAddContainer");
    if (postAddContainer) postAddContainer.style.display = "none";

    let children_container2 = document.getElementById("children_container2");
    if (children_container2) children_container2.style.opacity = "1";

}


interface postInputs_interface {
    title: string;
    content: string;
    _id: string;
    action: string;
}

//03.01
const PostAdd_Component = ({postInfo, setPostInfo, setReload}:{
    postInfo: postInputs_interface, 
    setPostInfo: React.Dispatch<React.SetStateAction<postInputs_interface>>,
    setReload: React.Dispatch<React.SetStateAction<boolean>>,

    }) => {

    const {data: session } = useSession();

    // const [action, setAction] = useState ("add");
    const [submitting, setSubmitting] = useState(false);
    // const [postInfo, setPostInfo] = useState({
    //     title: "",
    //     content: "",
    // });

    const { title, content } = postInfo;

    const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({ target }) => {
        const { name, value } = target;
        setPostInfo({ ...postInfo, [name]:value});
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        //creating first property
        try {

            const current_url = window.location.href.toString().split("/agents/")[1];

            //put this page's i.e the userId in the params
            if (postInfo.action === "add") {
                const response = await fetch(`/api/posts/new/${current_url}`, {
                    method: "POST",
                    body: JSON.stringify({
                        ...postInfo,
                        // userId: current_url,
                        date_add: "25 dec 2023",
                        date_update: "26 dec 2023",
                    })
                })
    
                if (response.ok) {
                    // router.push("/");
                    hidePostAdd(); bodyScroll();
                }                    
            
            } else if (postInfo.action === "edit") {
                const response = await fetch(`/api/posts/new/${current_url}`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        ...postInfo,
                        // userId: current_url,
                        date_update: "26 dec 2023",
                    })
                })
    
                if (response.ok) {
                    // router.push("/");
                    hidePostAdd(); bodyScroll();
                }                   


            }

            setReload(true);



        } catch (error) {
            console.log(error);
        } finally {
            //happens either way
            setSubmitting(true);
        }
    }
    


    return (

                <div className="centered_centered
                w-[90%] h-auto
                flex flex-col items-center gap-1 lg:gap-4  p-3 max-w-[500px]
                rounded-[17px] bg-[#ffffffbd]  dark:bg-[#ffffff10]
                border-[rgba(255,255,255,0.02)]
                dark:text-[#ffffffde] shadow-2xl dark:shadow-inner 
                pb-4 lg:pb-7
                ">
            
                    <div className="text-center relative w-full flex flex-row justify-center">
                        <div className="">
                            <button 
                            onClick={()=> {hidePostAdd(); bodyScroll();}}
                            className="
                            ml-auto bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545] h-5 w-5 rounded-[6px] text-white flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
                            </button>
                        </div>

                        <div className="mx-auto pt-0 lg:pt-6 flex flex-col lg:flex-row gap-1 flex-wrap justify-center">
                            <h3 className="mb-2 text_shadow-2 opacity-80">
                                {postInfo.action === "add" ? ("Add a new property") : ("Edit property")}
                            </h3>
                        </div>
                        
                    </div>

                    <form className="flex flex-col gap-1 lg:gap-4 items-center
                    w-[90%] md:px-[5%]"
                    onSubmit={handleSubmit}
                    >

                        <label className="w-[100%] flex flex-row justify-center text-center
                        label_field
                        bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                        
                        ">
                            <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                Post's Title
                            </span>

                            <input className="w-full input_field border-0 rounded-r-[6px] 
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                border-[rgba(255,255,255,0.02)]" type="text" required
                                // value={post.country}
                                name="title" value={title} onChange={handleChange}
                                />
                            
                        </label>

                        <label className="w-[100%] flex flex-row justify-center text-center
                        label_field
                        bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                        
                        ">
                            <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                Add Images
                            </span>

                            <input className="w-full input_field border-0 rounded-r-[6px] 
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2
                                border-[rgba(255,255,255,0.02)]" type="file"
                                placeholder=""/>
                            
                        </label>

                        <label className="w-[100%] flex flex-col gap-2
                        
                        ">
                            <span>More details</span>
                            <textarea className="w-[100%] label_field px-4 py-2
                            bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                            resize-none"
                            rows={6} placeholder="describe your property"
                            // value={post.description}
                            // onChange={(e) => {setPost({...post, description: e.target.value})}}
                            name="content" value={content} onChange={handleChange}
                            >

                            </textarea>
                        </label>


                        <div className="mt-4 w-[80%] flex">
                                <button type="submit" className="
                                bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                                rounded-[9px] py-1 px-3 w-full
                                opacity-80 hover:opacity-90 mx-auto"
                                // disabled={submitting}
                                >
                                    {postInfo.action === "add" ? ("Add Post" ) : ("Apply changes")}
                                </button>
                        </div>

                    </form>


                </div>
                
      )
}

export default PostAdd_Component