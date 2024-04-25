// import React from 'react'
"use client";

// this is the post add/edit container

import { bodyScroll, hideEdit } from "@utils/bodyNoScroll";
import { useEffect, useRef } from "react";
import Link from "next/link";

import { ChangeEventHandler, FormEventHandler } from "react";


//03.01
import {useState} from "react";
import { useSession } from "next-auth/react";

//Part 10
import { updateUser_lastUpdate } from "@utils/dateGenerate";

//Part11
import Image from "next/image";
import { getFormData_multiple } from "@utils/ImgformDataGenerate";  //local function for a reused function


function hidePostAdd () {
    let postAddContainer = document.getElementById("postAddContainer");
    if (postAddContainer) postAddContainer.style.display = "none";

    let children_container2 = document.getElementById("children_container2");
    if (children_container2) children_container2.style.opacity = "1";

}



//03.01
const PostAdd_Component = ({postEditId, setPostEditId, setReload}:{
    postEditId: string, 
    setPostEditId: React.Dispatch<React.SetStateAction<string>>,
    setReload: React.Dispatch<React.SetStateAction<boolean>>,

    }) => {

    //close form, show the body behind, clear form inputs
    function hidePostAdd () {
        let postAddContainer = document.getElementById("postAddContainer");
        if (postAddContainer) postAddContainer.style.display = "none";
    
        let children_container2 = document.getElementById("children_container2");
        if (children_container2) children_container2.style.opacity = "1";
        document.querySelector("footer")!.style.opacity = "1";

        setPostEditId("");
        setAction("add");
        setPostInfo({
            title: "",
            content: "",
            image: "",
            _id: "",
        });
        setFile("");
    
    }

    const {data: session } = useSession();

    const [action, setAction] = useState ("add");
    const [submitting, setSubmitting] = useState(false);

    const [postInfo, setPostInfo] = useState({
        title: "",
        content: "",
        image: "",
        _id: "",

    });

    const {title, content} = postInfo;

    //Part 11.01 - formData image upload
    const [file, setFile] = useState<File | string>("");


    //////////////////////////////////
    //part 10 - addon input validation
    const errorMessage = useRef({
        title: "",
        content: ""
    });

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    //Part 10 - Addon input validation 

    const inputCheckHandler = ({target}:any) => {
        // console.log(e.target.value);
        // console.log(target);
        const {name, value} = target;

        //get the input
        //check the input's value from the patterns available

        const patterns: {} = {
            // telephone: /^\d{12}$/ ,         // only, country code+10 digits - login
            // telephoneShort: /^\d{10}$/ ,         // only, 10 digits - signup
            // password: /^[\w@-]{8,20}$/,     //the pattern is repeated, looking for (a-z A-Z also 0-9 and _)or @ or -
            // email: /^([a-zA-Z\d\.-\_]+)@([a-zA-Z\d-]+)\.([a-z]{2,8})\.?([a-z]{2,8})?$/,               //also dots \.
            //        // domain with . - .. @ .. domain .. dot .. com ..  .uk(optional)
            // name: /^([a-zA-Z]{3,15})\s([a-zA-Z]{3,15})\s?([a-zA-Z]{3,15})?$/,
            
            //8 or more any characters
            title: /^.{8,}$/,
            content: /^.{30,}$/,
        };
    
        //the error message for each regex
        const errorMessages = {
            title: "at least 8 characters",
            content: "at least 30 characters"
        }

        //test the incoming input value with its corresponding regex
        const regex: RegExp = patterns[name as keyof typeof patterns];
        const validInput = regex.test(value);

        // console.log(validInput);


        //// render to the ui the error messages
        const errorText = document.getElementById("errorMsg_postSubmit");
        
        //if not valid, store the message in the errorMessage Ref
        if(!validInput) {
            //give the ref the text 
            //give the jsx element the ref as a string
            errorMessage.current[name as keyof typeof errorMessage.current] = `<b>${name}:</b> should be ${errorMessages[name as keyof typeof errorMessages]} </br>`;
        //if valid, clear the message of this key-name in the errorMessage Ref
        } else if (validInput) {
            errorMessage.current[name as keyof typeof errorMessage.current] = "";
        }      

        //now clear the message in the ui and store all error messages again
        if (errorText) {
            errorText.innerHTML = "";
            for (const errorName in errorMessage.current) {
                errorText.innerHTML = errorText.innerHTML + errorMessage.current[errorName as keyof typeof errorMessage.current];
                // console.log(errorName);
            }

            //if the errorText jsx element has some error content
            if(errorText.innerHTML !== "") {
                //show the input jsx container
                document.getElementById("errorMsgContainer_postSubmit")!.style.display="flex";
            }

            else {
                document.getElementById("errorMsgContainer_postSubmit")!.style.display="none";

            }

        }


    }
    
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////



    const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({ target }) => {
        const { name, value } = target;
        setPostInfo({ ...postInfo, [name]:value});
    }

    //post the form data to the api depending on state if edit or add
    //post with a formData to have information + file (image)
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        //Part 11.01 - formData image upload
        let formData = new FormData();
        //add the form information to formData 
        if (postInfo) formData = getFormData_multiple(formData, null, null, postInfo);
        //add the image with out a key (as we have a single image) to the formData that also now has information
        if (file !== "" || file !== null) formData = getFormData_multiple(formData, file, "", null);

         if (formData) {

            //creating first post
            try {

                const current_url = window.location.href.toString().split("/agents/")[1];

                //put this page's i.e the userId in the params
                if (action === "add") {
                    const response = await fetch(`/api/posts/new/${current_url}`, {
                        method: "POST",
                        // body: JSON.stringify({
                        //     ...postInfo,
                        //     // userId: current_url,
                        //     // date_add: "25 dec 2023",
                        //     // date_update: "26 dec 2023",
                        // })
                        //Part 11.01 - formData image upload
                        body: formData,
                    })
        
                    if (response.ok) {
                        // router.push("/");
                        hidePostAdd(); bodyScroll();
                    }                    
                
                } else if (action === "edit") {
                    const response = await fetch(`/api/posts/new/${current_url}`, {
                        method: "PATCH",
                        // body: JSON.stringify({
                        //     ...postInfo,
                        //     // userId: current_url,
                        //     // date_update: "26 dec 2023",
                        // })
                        //Part 11.01 - formData image upload
                        body: formData,

                    })
        
                    if (response.ok) {
                        // router.push("/");
                        hidePostAdd(); bodyScroll();
                    }                   


                }

                //Part 10
                //update the user last update-date, calls a patch api on this user id
                //which user id want to update, session user
                let userId_session = session?.user.id;
                if (userId_session) updateUser_lastUpdate(userId_session);
                //
                
                setReload(true);



            } catch (error) {
                console.log(error);
            } finally {
                //happens either way
                setSubmitting(true);
                hidePostAdd(); bodyScroll();
            }
         }


    }
    
    useEffect(()=> {

        console.log(postEditId);

        //the edit passes and id and the add passes "", 
        //so if there is an id, set action to edit, 
        if (postEditId !== "") {
            setAction("edit");        

            //if we are editing, then get the post's information to fill the values
            //by default we have an empty property state for an add button
            //if there is an id i.e edit button clicked, we would like to fetch this property,
            //and extract the needed parts into our property state
            const fetchPostInfo = async () => {
                const response = await fetch(`/api/posts/new/${postEditId}`, {
                    method: "GET",
                });

                const jsonResponse = await response.json();

                //Part11
                const temp_post = {
                    title: jsonResponse.title,
                    content: jsonResponse.content,
                    image: jsonResponse.image,
                    _id: jsonResponse._id        
                };

                //if there is an image, store it (url path)
                if (temp_post.image) setFile(temp_post.image);

                setPostInfo(temp_post);

            }
            

            fetchPostInfo();

        }

        document.getElementById("errorMsgContainer_postSubmit")!.style.display="none";

    },[postEditId, setFile]);


    return (

        <div className="centered_centered
        w-[90%] h-auto
        flex flex-col items-center gap-1 lg:gap-4  p-3 max-w-[500px]
        rounded-[17px] bg-[#ffffffbd]  dark:bg-[#ffffff10]
        border-[rgba(255,255,255,0.02)]
        dark:text-[#ffffffde] shadow-2xl dark:shadow-inner 
        pb-4 lg:pb-7 relative
        ">

            <span id="errorMsgContainer_postSubmit"
        className="border-[rgba(255,255,255,0.02)] shadow-lg dark:shadow-inner 
        absolute top-[50%] left-[50%] centered_centered text-theme-text-dark text-xs
        p-2 dark:bg-[#151515f8] bg-[#fdfdfd] rounded-[7px] flex flex-col">
            
            <span className="dark:text-white  text-black flex flex-row">
                <span className="mt-auto ml-1 opacity-70">
                    Please check the following inputs
                </span>
                    <button 
                        onClick={()=> {document.getElementById("errorMsgContainer_postSubmit")!.style.display="none"}}
                        className="
                        ml-auto bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545] h-5 w-5 rounded-[6px] text-white flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
                    </button>
                </span>

                <span id="errorMsg_postSubmit" className="w-[95%] mx-auto mt-2">

                </span>
            </span>

            {/* form title */}
            <div className="text-center relative w-full flex flex-row justify-center">
                
                <div className="mx-auto pt-0 lg:pt-6 flex flex-col lg:flex-row gap-1 flex-wrap justify-center">
                    <h3 className="mb-2 text_shadow-2 opacity-80">
                        {action === "add" ? ("Add a new post") : ("Edit post")}
                    </h3>
                </div>

                <div className="">
                    <button 
                    onClick={()=> {hidePostAdd(); bodyScroll();}}
                    className="
                    ml-auto bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545] h-5 w-5 rounded-[6px] text-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
                    </button>
                </div>

                
            </div>

            <form className="flex flex-col gap-1 lg:gap-4 items-center
            w-[90%] md:px-[5%]"
            onSubmit={handleSubmit}
            >

                {/* post's title */}
                <label className="w-[100%] flex flex-row justify-center text-center
                label_field
                bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                
                ">
                    <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                        Post's Title
                    </span>

                    <input className="w-full input_field border-0 rounded-r-[6px] 
                        dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2
                        bg-[#ffff] focus:bg-[#ebeffc]
                        border-[rgba(255,255,255,0.02)]" type="text" required
                        // value={post.country}
                        name="title" value={title} onChange={handleChange} onBlur={inputCheckHandler}
                        />                            
                </label>

                {/* the image input */}
                <div className="w-[100%] flex flex-row justify-center text-center
                label_field
                bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                max-h-[36px]
                ">
                    <span className="md:min-w-[7rem] min-w-[6rem] md:pl-0 md:px-2 pl-4 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                        Add Image
                    </span>

                    {/* <input className="w-full input_field border-0 rounded-r-[6px] 
                        dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2
                        border-[rgba(255,255,255,0.02)]"
                        // Part 11.01 - formData image upload
                        type="file" name="file" onChange={(e)=> setFile(e.target.files?.[0])}/> */}
                        
                        <div className="">
                            <Image width={100} height={50} src={typeof file === "string" && file !== "" ? (file) : (file == "" ? "/icons/fileNot.svg": "/icons/fileUpload.svg")} alt="pic"
                            className="max-w-[2rem]">
                            </Image>
                        </div>

                        {file!== ""? (
                            <div className="w-[1.5rem] my-auto mr-1">
                                <button 
                                onClick={(e)=> {e.preventDefault(); setFile("")}}
                                type="button"
                                className="
                                ml-auto bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545] h-5 w-5 rounded-[6px] text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
                                </button>
                            </div>
                        ):("")}
                        
                        <label className="flex-1 flex items-center">
                            <input className="w-full input_field border-0 rounded-r-[6px] 
                                dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2
                                border-[rgba(255,255,255,0.02)] my-auto hidden"
                                type="file" name="file1" onChange={(e)=> setFile(e.target.files?.[0]!)}
                            />
                            <span className="ml-auto px-2 mr-1 my-1 text-sm w-[8rem]
                                bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545]
                                rounded-[5px]">
                                {typeof file === "string" && file !== "" ? "change" : (file == "" ? "upload": "image uploaded")}
                            </span>
                        </label>

                        
                    
                </div>

                {/* post's description */}
                <label className="w-[100%] flex flex-col gap-2        ">
                    <span>More details</span>
                    <textarea className="w-[100%] label_field px-4 py-2
                    dark:bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                    bg-[#ffff] focus:bg-[#ebeffc]
                    resize-none"
                    rows={6} placeholder="describe your property"
                    // value={post.description}
                    // onChange={(e) => {setPost({...post, description: e.target.value})}}
                    name="content" value={content} onChange={handleChange} onBlur={inputCheckHandler}
                    >

                    </textarea>
                </label>

                {/* submit button */}
                <div className="mt-4 w-[80%] flex relative">
                        <button type="submit" className="
                        bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                        rounded-[9px] py-1 px-3 w-full
                        opacity-80 hover:opacity-90 mx-auto"
                        // disabled={submitting}
                        >
                            {action === "add" ? ("Add Post" ) : ("Apply changes")}
                        </button>
                </div>

            </form>


        </div>
                
      )
}

export default PostAdd_Component;