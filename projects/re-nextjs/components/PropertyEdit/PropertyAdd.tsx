// import React from 'react'
"use client";

import { bodyScroll, hideEdit } from "@utils/bodyNoScroll";
import { useEffect } from "react";
import { ChangeEventHandler, FormEventHandler } from "react";

//03.01
import {useState} from "react";
import { useSession } from "next-auth/react";
import { updateUser_lastUpdate } from "@utils/dateGenerate";

//Part11
import { getFormData_multiple } from "@utils/ImgformDataGenerate";
import Image from "next/image";



//03.01
const PropertyAdd_Component = ({propertyEditId, setPropertyEditId, setReload}:{
    propertyEditId: string, 
    setPropertyEditId: React.Dispatch<React.SetStateAction<string>>,
    setReload: React.Dispatch<React.SetStateAction<boolean>>,
}) => {

    //on closing the window will have to reset everything
    function hidePropertyAdd () {
        let postAddContainer = document.getElementById("propertyAddContainer");
        if (postAddContainer) postAddContainer.style.display = "none";
    
        let children_container2 = document.getElementById("children_container2");
        if (children_container2) children_container2.style.opacity = "1";
        setPropertyEditId("");
        setAction("add");
        setPropertyInfo({
            country: "",
            city: "",
            district: "",
    
            type: "",
            area: "",
            bedrooms: "",
            bathrooms: "",
            images: ["","", ""],
    
            listing_type: "",
            price: "",
            description: "",
            availability: "",
            recommended: "",
        });
        setFile1("");
        setFile2("");
        setFile3("");
    
    }

    const [submitting, setSubmitting] = useState(false);
    const {data: session } = useSession();

    const [action, setAction] = useState("add");    //by default the state is add


    //this state will fill the inputs
    const [propertyInfo, setPropertyInfo] = useState({
        country: "",
        city: "",
        district: "",

        type: "",
        area: "",
        bedrooms: "",
        bathrooms: "",
        images: ["","",""],

        listing_type: "",
        price: "",
        description: "",
        availability: "",
        recommended: "",

    });

    //get values from the state to be used in the inputs
    const { country, city, district, type, area, bedrooms, bathrooms, listing_type,
    price, description, availability, recommended } = propertyInfo;


    const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({ target }) => {
        const { name, value } = target;
        setPropertyInfo({ ...propertyInfo, [name]:value});
    }


    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    //Part 11.01 - formData image upload
    const [file1, setFile1] = useState<File | string>("");
    const [file2, setFile2] = useState<File | string>("");
    const [file3, setFile3] = useState<File | string>("");


    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {

        e.preventDefault();

        ////Part 11.01 - formData image upload
        let formData = new FormData();
        //add the form information to formData, getFormData_multiple is local function
        if (propertyInfo) formData = getFormData_multiple(formData, null, null, propertyInfo);
        //add the images to the formData that also now has information
        if (file1 !== "" || file1 !== null) formData = getFormData_multiple(formData, file1, "1", null);
        if (file2 !== "" || file2 !== null) formData = getFormData_multiple(formData, file2, "2", null);
        if (file3 !== "" || file3 !== null) formData = getFormData_multiple(formData, file3, "3", null);
    
        //if we do have some information in a formData format
        if (formData) {

            try {
                //adding a property
                //put this page's i.e the userId in the params, to assign in the api the correct userId to the property
                if (action === "add") {
                    const current_url = window.location.href.toString().split("/agents/")[1];
                    const response = await fetch(`/api/properties/new/${current_url}`, {
                        method: "POST",
                            //Part 11.01 - formData image upload
                            body: formData,
                    });
        
                    if (response.ok) {
                        hidePropertyAdd(); bodyScroll();
                    }                    
                
                } else if (action === "edit") {
                    //the action is set to edit if there is a propertyEditId already from the useEffect
                    const response = await fetch(`/api/properties/edit/${propertyEditId}`, {
                        method: "PATCH",
                            //Part 11.01 - formData image upload
                            body: formData,
                    })
        
                    if (response.ok) {
                        hidePropertyAdd(); bodyScroll();
                    }                   


                }

                ////////////////////////////////////////////////////////////////////////////////////
                //Part 10
                //update the user last update-date, calls a patch api on this user id (the user page)
                //which user id want to update, session user
                let userId_session = session?.user.id;
                if (userId_session) updateUser_lastUpdate(userId_session);
                ////////////////////////////////////////////////////////////////////////////////////

                //once done reload the propertyComponent in the profile page to re-render the properties
                setReload(true);

                

            } catch (error) {
                console.log(error);
            } finally {
                //happens either way
                setSubmitting(true);
                hidePropertyAdd(); bodyScroll();

            }

        }     
    }


    //this works when the propertyEditId is changed by the add or edit buttons
    useEffect(()=>{

        //the edit passes and id and the add passes "", 
        //so if there is an id, set action to edit, 
        if (propertyEditId !== "") {
            setAction("edit");
            
            //if we are editing, then get the property's information to fill the values
            //by default we have an empty property state for an add button
            //if there is an id i.e edit button clicked, we would like to fetch this property,
            //and extract the needed parts into our property state
            const fetchPropertyInfo = async () => {
                const response = await fetch(`/api/properties/edit/${propertyEditId}`, {
                    method: "GET",
                });

                const jsonResponse = await response.json();

                //Part11
                const temp_property = {
                    country: jsonResponse.property_country,
                    city: jsonResponse.property_city,
                    district: jsonResponse.property_district,
            
                    type: jsonResponse.property_type,
                    area: jsonResponse.property_area,
                    bedrooms: jsonResponse.property_beds,
                    bathrooms: jsonResponse.property_baths,
            
                    listing_type: jsonResponse.property_listing_type,
                    price: jsonResponse.property_price,
                    description: jsonResponse.property_description,
                    images: jsonResponse.property_images,
                    availability: jsonResponse.property_availability,
                    recommended: jsonResponse.property_recommended,
            
                };

                if (temp_property.images[0]) setFile1(temp_property.images[0])
                if (temp_property.images[1]) setFile2(temp_property.images[1])
                if (temp_property.images[2]) setFile3(temp_property.images[2])

                setPropertyInfo(temp_property);

            }
            

            fetchPropertyInfo();

        }

    //trigger this use effect when the propertyEdit id on the profile page is set to a value, to fetch the property with that id
    }, [propertyEditId]);



    return (

            <div className="flex items-center justify-center w-full h-[90vh]
            centered_centered overflow-y-scroll pt-[30rem]">


            <div className="
            w-[90%] h-auto
            flex flex-col items-center gap-1 lg:gap-4  p-3 max-w-[500px]
            rounded-[17px] bg-[#ffffffbd]  dark:bg-[#ffffff10]
            border-[rgba(255,255,255,0.02)]
            dark:text-[#ffffffde] shadow-2xl dark:shadow-inner 
            pb-4 lg:pb-7 
            ">
            
                    {/* form title and close button */}
                    <div className="text-center relative w-full flex flex-row justify-center">
                        <div className="absolute right-0">
                            <button 
                            onClick={()=> {hidePropertyAdd(); bodyScroll();}}
                            className="
                            ml-auto bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545] h-5 w-5 rounded-[6px] text-white flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
                            </button>
                        </div>

                           <div className="mx-auto pt-0 lg:pt-6 flex flex-col lg:flex-row gap-1 flex-wrap justify-center">
                               <h3 className="mb-2 text_shadow-2 opacity-80">
                                   {action === "add" ? ("Add a new property") : ("Edit property")}</h3>
                           </div>
                        
                    </div>

                       <form className="flex flex-col gap-1 lg:gap-4 items-center
                       w-[90%] md:px-[5%]"
                        onSubmit={handleSubmit}>

                            <label className="w-[100%] flex flex-row justify-center text-center
                            label_field
                            bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                            
                            ">
                                <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                    Country
                                </span>

                                <input className="w-full input_field border-0 rounded-r-[6px] 
                                    dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                    border-[rgba(255,255,255,0.02)]" type="text" required
                                    // value={post.country}
                                    name="country" value={country} onChange={handleChange}
                                    />
                                
                            </label>

                            <label className="w-[100%] flex flex-row justify-center text-center
                            label_field
                            bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                            
                            ">
                                <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                    City
                                </span>

                                <input className="w-full input_field border-0 rounded-r-[6px] 
                                    dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                    border-[rgba(255,255,255,0.02)]" type="text" 
                                    // value={post.city}
                                    // onChange={(e) => {setPost({...post, city: e.target.value})}}
                                    name="city" value={city} onChange={handleChange}

                                    />
                                
                            </label>

                            <label className="w-[100%] flex flex-row justify-center text-center
                            label_field
                            bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                            ">
                                <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                    District
                                </span>

                                <input className="w-full input_field border-0 rounded-r-[6px] 
                                    dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                    border-[rgba(255,255,255,0.02)]" type="text" required
                                    // value={post.district}
                                    // onChange={(e) => {setPost({...post, district: e.target.value})}}
                                    name="district" value={district} onChange={handleChange} />
                                
                            </label>


                            <br></br>

                            <label className="w-[100%] flex flex-row justify-center text-center
                            label_field
                            bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                            ">
                                <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                    Type
                                </span>

                                <input className="w-full input_field border-0 rounded-r-[6px] 
                                    dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                    border-[rgba(255,255,255,0.02)]" type="text" required
                                    placeholder="apartment, villa, office etc."
                                    // value={post.type}
                                    // onChange={(e) => {setPost({post, type: e.target.value})}}
                                    name="type" value={type} onChange={handleChange}

                                    />
                                
                            </label>

                            <label className="w-[100%] flex flex-row justify-center text-center
                            label_field
                            bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                            
                            ">
                                <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                    Area
                                </span>

                                <input className="w-full input_field border-0 rounded-r-[6px] 
                                    dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                    border-[rgba(255,255,255,0.02)]" type="number" required
                                    placeholder="in sqm" 
                                    // value={post.area}
                                    // onChange={(e) => {setPost({...post, area: e.target.value})}}
                                    name="area" value={area} onChange={handleChange}

                                    />
                                
                            </label>

                            <div className="w-full flex flex-row">
                                <label className="w-[50%] flex flex-row justify-center text-center
                                label_field
                                bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                                
                                ">
                                    <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                        Bedrooms
                                    </span>

                                    <input className="w-full input_field border-0 rounded-r-[6px] 
                                        dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                        border-[rgba(255,255,255,0.02)]" type="number" required
                                        min={1} max={10} 
                                        // value={post.bedrooms}
                                        // onChange={(e) => {setPost({...post, bedrooms: e.target.value})}}
                                        name="bedrooms" value={bedrooms} onChange={handleChange}

                                        />
                                    
                                </label>

                                <label className="w-[50%] flex flex-row justify-center text-center
                                label_field
                                bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]">
                                <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                    Bathrooms
                                </span>

                                <input className="w-full input_field border-0 rounded-r-[6px] 
                                    dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                    border-[rgba(255,255,255,0.02)]" type="number" required
                                    min={1} max={10} 
                                    // value={post.bathrooms}
                                    // onChange={(e) => {setPost({...post, bathrooms: e.target.value})}}
                                    name="bathrooms" value={bathrooms} onChange={handleChange}

                                    />
                                
                                </label>
                            </div>

                            <br></br>

                            <label className="w-[100%] flex flex-row justify-center text-center
                            label_field
                            bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]                           
                            ">
                                <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                    Listing Type
                                </span>

                                <input className="w-full input_field border-0 rounded-r-[6px] 
                                    dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                    border-[rgba(255,255,255,0.02)]" type="text" required
                                    placeholder="rent, sale, etc." 
                                    // value={post.listing_type}
                                    // onChange={(e) => {setPost({...post, listing_type: e.target.value})}}
                                    name="listing_type" value={listing_type} onChange={handleChange}
                                    />
                                
                            </label>

                            <label className="w-[100%] flex flex-row justify-center text-center
                            label_field
                            bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                            
                            ">
                                <span className="min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                    Price
                                </span>

                                <input className="w-full input_field border-0 rounded-r-[6px] 
                                    dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                                    border-[rgba(255,255,255,0.02)]" type="number" required
                                    placeholder="" 
                                    // value={post.price}
                                    // onChange={(e) => {setPost({...post, price: e.target.value})}}
                                    name="price" value={price} onChange={handleChange}

                                    />
                                
                            </label>

                            <div className="flex flex-row label_field 
                            rounded-[7px] w-full border-2  bg-[#ffffff07] border-[#ffffff02]
                            items-center">
                            <span className="text-center min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                    Available
                                </span>

                                <label className="flex flex-row justify-center text-center gap-2 px-2
                                
                                ">
                                    Yes
                                <input className="
                                    dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]
                                    border-[rgba(255,255,255,0.02)]" type="radio" required
                                    name="availability" value={"Yes"} onChange={handleChange} 
                                    checked={Boolean(availability === "Yes")}/>
                                
                                </label>

                                <label className="flex flex-row justify-center text-center gap-2 px-2
                                ">
                                    No
                                <input className="
                                    dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]
                                    border-[rgba(255,255,255,0.02)]" type="radio" required
                                    name="availability" value={"No"} onChange={handleChange}
                                    checked={Boolean(availability === "No")}/>
                                
                                </label>
                            </div>

                            <div className="flex flex-row label_field 
                            rounded-[7px] w-full border-2  bg-[#ffffff07] border-[#ffffff02]
                            items-center">
                            <span className="text-center min-w-[7rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                    Favorite
                                </span>

                                <label className="flex flex-row justify-center text-center gap-2 px-2
                                
                                ">
                                    Yes
                                <input className="
                                    dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]
                                    border-[rgba(255,255,255,0.02)]" type="radio" required
                                    name="recommended" value={"Yes"} onChange={handleChange} 
                                    checked={Boolean(recommended === "Yes")}/>
                                
                                </label>

                                <label className="flex flex-row justify-center text-center gap-2 px-2
                                ">
                                    No
                                <input className="
                                    dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]
                                    border-[rgba(255,255,255,0.02)]" type="radio" required
                                    name="recommended" value={"No"} onChange={handleChange} 
                                    checked={Boolean(recommended === "No")}/>
                                
                                </label>
                            </div>

                            <br></br>

                            {/* //////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////// */}

                            <span className="mr-auto mb-1">
                                Add Images 
                                <span className="opacity-70 text-xs ml-2">(Image 1 required)</span>
                            </span>

                            {/* image 1 */}
                            <div className="w-[100%] flex flex-row justify-center text-center items-center
                            label_field mb-1 max-h-[36px]
                            bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                            
                            ">
                                <span className="min-w-[5rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                    Image 1
                                </span>

                                <div className="my-2">
                                    <Image width={100} height={50} src={typeof file1 === "string" && file1 !== "" ? (file1) : (file1 == "" ? "/icons/fileNot.svg": "/icons/fileUpload.svg")} alt="pic"
                                    className="max-w-[2rem] my-2">
                                    </Image>
                                </div>

                                {file1!== ""? (
                                    <div className="w-[1.5rem] my-auto mr-1">
                                        <button 
                                        onClick={(e)=> {e.preventDefault(); setFile1("")}}
                                        type="button"
                                        className="
                                        ml-auto bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545] h-5 w-5 rounded-[6px] text-white flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
                                        </button>
                                    </div>
                                ):("")}

                                <label className="flex-1 flex">
                                    <input className="w-full input_field border-0 rounded-r-[6px] 
                                        dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2
                                        border-[rgba(255,255,255,0.02)] my-auto hidden"
                                        type="file" name="file1" onChange={(e)=> setFile1(e.target.files?.[0]!)}
                                        
                                    />
                                    <span className="ml-auto px-2 my-2 mr-1 text-sm w-[8rem]
                                     bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545]
                                     rounded-[5px]">
                                        {typeof file1 === "string" && file1 !== "" ? "change" : (file1 == "" ? "upload": "image uploaded")}
                                    </span>
                                </label>

                                
                            </div>

                            {/* image 2 */}
                            <div className="w-[100%] flex flex-row justify-center text-center items-center
                            label_field mb-1 max-h-[36px]
                            bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                            
                            ">
                                <span className="min-w-[5rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                    Image 2
                                </span>

                                <div className="my-2">
                                    <Image width={100} height={50} src={typeof file2 === "string" && file2 !== "" ? (file2) : (file2 == "" ? "/icons/fileNot.svg": "/icons/fileUpload.svg")} alt="pic"
                                    className="max-w-[2rem] my-2">
                                    </Image>
                                </div>

                                {file2!== ""? (
                                    <div className="w-[1.5rem] my-auto mr-1">
                                        <button 
                                        onClick={(e)=> {e.preventDefault(); setFile2("")}}
                                        type="button"
                                        className="
                                        ml-auto bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545] h-5 w-5 rounded-[6px] text-white flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
                                        </button>
                                    </div>
                                ):("")}

                                <label className="flex-1 flex">
                                    <input className="w-full input_field border-0 rounded-r-[6px] 
                                        dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2
                                        border-[rgba(255,255,255,0.02)] my-auto hidden"
                                        type="file" name="file2" onChange={(e)=> {console.log(e.target); setFile2(e.target.files?.[0]!)}}
                                    />
                                    <span className="ml-auto px-2 my-2 mr-1 text-sm w-[8rem]
                                     bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545]
                                     rounded-[5px]">
                                        {typeof file2 === "string" && file2 !== "" ? "change" : (file2 == "" ? "upload": "image uploaded")}
                                    </span>
                                </label>

                                
                            </div>

                            {/* image 3 */}
                            <div className="w-[100%] flex flex-row justify-center text-center items-center
                            label_field mb-1 max-h-[36px]
                            bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                            
                            ">
                                <span className="min-w-[5rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                                    Image 3
                                </span>

                                <div className="my-2">
                                    <Image width={100} height={50} src={typeof file3 === "string" && file3 !== "" ? (file3) : (file3 == "" ? "/icons/fileNot.svg": "/icons/fileUpload.svg")} alt="pic"
                                    className="max-w-[2rem] my-2">
                                    </Image>
                                </div>

                                {file3!== ""? (
                                <div className="w-[1.5rem] my-auto mr-1">
                                    <button 
                                    onClick={(e)=> {e.preventDefault(); setFile3("")}}
                                    type="button"
                                    className="
                                    ml-auto bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545] h-5 w-5 rounded-[6px] text-white flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
                                    </button>
                                </div>
                                ):("")}

                                <label className="flex-1 flex">
                                    <input className="w-full input_field border-0 rounded-r-[6px] 
                                        dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2
                                        border-[rgba(255,255,255,0.02)] my-auto hidden"
                                        type="file" name="file3" onChange={(e)=> setFile3(e.target.files?.[0]!)}
                                    />
                                    <span className="ml-auto px-2 my-2 mr-1 text-sm w-[8rem]
                                     bg-theme-text-brighter opacity-80 hover:opacity-100 dark:opacity-100 dark:bg-[#912642] dark:hover:bg-[#9f2545]
                                     rounded-[5px]">
                                        {typeof file3 === "string" && file3 !== "" ? "change" : (file3 == "" ? "upload": "image uploaded")}
                                    </span>
                                </label>

                                
                            </div>

                            {/* //////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////// */}


                            <label className="w-[100%] flex flex-col gap-2
                            
                            ">
                                <span>Property Description</span>
                                <textarea className="w-[100%] label_field px-4 py-2
                                bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
                                resize-none"
                                rows={6} placeholder="describe your property"
                                // value={post.description}
                                // onChange={(e) => {setPost({...post, description: e.target.value})}}
                                name="description" value={description} onChange={handleChange}
                                >

                                </textarea>
                            </label>

                            {/* the submit button */}
                            <div className="mt-4 w-[80%] flex">
                                    <button type="submit" className="
                                    bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                                    rounded-[9px] py-1 px-3 w-full
                                    opacity-80 hover:opacity-90 mx-auto"
                                    >
                                        {action === "add" ? ("Add to properties" ) : ("Apply changes")}
                                    </button>
                            </div>

                        </form>


                    </div>
        
                
                </div>

    
            
      )
}


export default PropertyAdd_Component