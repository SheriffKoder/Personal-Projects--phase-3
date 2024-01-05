"use client";
// import React from 'react'

import Link from "next/link";
import Image from "next/image";

// import PropertyCard from "@components/Home/HomeMain/PropertyCard";
import PropertyCard from "@components/Home/HomeMain/PropertyCard -allProperties";
import { PropertyDocument } from "@models/propertyModel";
import { useState, useEffect, useRef } from "react";

import { FormEventHandler, ChangeEventHandler } from "react";


  
const page = () => {

  
    const [properties, setProperties] = useState<PropertyDocument[]>([]);

    //Part 11.03
    const [pageId, setPageId] = useState(1);
    const endPage = useRef(1);
    const [reload, setReload] = useState(false);
    // const [clearFilter, setClearFilter] = useState(false);
    const [reload2, setReload2] = useState(false);

    const [filterActive, setFilterActive] = useState(false);

    ///////////////////////////////////////////////////////////////////////////////////////

    const hideFilter = () => {
        const filterContainer = document.getElementById("filterContainer");
        if (filterContainer) filterContainer.style.display = "none";

    }

    const showFilter = () => {
        const filterContainer = document.getElementById("filterContainer");
        if (filterContainer) filterContainer.style.display = "flex";

    }

    const emptyProperty = {
        searchText: "",
        bedroomsFrom: "",
        bedroomsTo: "",
        priceFrom: "",
        priceTo: "",
        areaFrom: "",
        areaTo: "",
        country: "",
        type: "",
        listing_type: "",    
    };

    const clearFilter = () => { setSearchInput(emptyProperty);}

    //Part 11.04 - search
    const [searchInput, setSearchInput] = useState(emptyProperty);

    let {searchText, bedroomsTo, bedroomsFrom, priceFrom, priceTo, areaFrom, areaTo,
    country, type, listing_type} = searchInput;

    const handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = ({ target }) => {
        const { name, value } = target;
        console.log(value);
        setSearchInput({ ...searchInput, [name]:value});
    }

    const handleSearchSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setProperties([]);
        setReload2(true);


        const apiResponse = await fetch(`/api/properties/all/${pageId}`, {
            method: "POST",
            body: JSON.stringify(searchInput),
        });

        const jsonResponse = await apiResponse.json();
        console.log(jsonResponse);
        endPage.current = jsonResponse.pagesEnd;
        if (jsonResponse.filteredProperties.length > 0) {
            
            setProperties(jsonResponse.filteredProperties);
        } else {
            setDataCondition("no properties found in this search");

        }
        setReload2(false);
    
    
    } 


    const cleanArray = (inputArray: string[]) => {

      let filterArray:string[] = [];
            
      filterArray.push(inputArray[0]);
      for (let i=1; i<inputArray.length; i++) {
          temp2: for (let j=0; j<filterArray.length; j++) {
              if (inputArray[i] === filterArray[j]) {
                  break temp2;
              }
              if (j === filterArray.length-1) {
                filterArray.push(inputArray[i]);
              }
          }

      }

      return filterArray;



    }


    ///////////////////////////////////////////////////////////////////////////////////////

    const [dataCondition,setDataCondition] = useState("Loading...");
    const [clearSearch, setClearSearch] = useState(false);

    const propertiesCountries = useRef([""]);
    const propertiesTypes = useRef([""]);
    const listingTypes = useRef([""]);
    const rendered = useRef("false");


    
  //04.01
  useEffect(()=> {

    setDataCondition("Loading...");
    setClearSearch(false);

    console.log("syncing");
    const fetchProperties = async () => {

        
        // let current_page = window.location.href.toString().split("/all/")[1];
        // setPageId(Number(current_page));

        //state needs to have a different value to take the same value again which is jsonResponse.properties
        // if (properties.length > 0) {
        //     let loadingProperties:PropertyDocument[] = [];
            
        //     // console.log("loadingProperties");
        //     // console.log(loadingProperties);
        //     // setProperties(loadingProperties);
        // }
        const response = await fetch(`/api/properties/all/${pageId}`);
        const responseFilter = await fetch(`/api/properties/all/filter/${rendered.current}`);

        const jsonResponse = await response.json();
        const jsonResponseFilter = await responseFilter.json();

        console.log(jsonResponse);
        console.log(jsonResponseFilter);

        endPage.current = jsonResponse.pagesEnd;
        // console.log("end page: "+endPage.current);
        // console.log("current page: "+ pageId);

        // console.log("properties were");
        // console.log(properties);
    
        console.log(jsonResponse.properties);

        //get all the countries, types, listing types from the properties in the database
        //clean duplicate strings, to use in the filter selects
        if (jsonResponse.properties.length > 0) {
            
            setProperties(jsonResponse.properties);

            if (jsonResponseFilter.allProperties.length > 0) {
                //you have jsonResponse.allProperties
                //get all the countries in an array
                const tempCountries = jsonResponseFilter.allProperties.map((property:PropertyDocument) => property.property_country);
                
                //now for each country check if it existed before in an array, if not add it
                propertiesCountries.current = cleanArray(tempCountries);
                // console.log(propertiesCountries.current);


                const tempPropTypes = jsonResponseFilter.allProperties.map((property:PropertyDocument) => property.property_type);
                propertiesTypes.current = cleanArray(tempPropTypes);
                // console.log(propertiesTypes.current);


                const tempPropListingTypes = jsonResponseFilter.allProperties.map((property:PropertyDocument) => property.property_listing_type);
                listingTypes.current = cleanArray(tempPropListingTypes);
                // console.log(listingTypes.current);

                //if we got all the properties and done setting the filter values
                //set the rendered to true so the properties/all/filter/ api not fetch all properties again
                //all properties are only fetched on initial render and we took all values needed on first render
                rendered.current = "true";
            }



        } else {
            setDataCondition("no properties found...");

        }
        
        // console.log("properties now are");
        // console.log(properties);
        // setClearFilter(false);
    
    }

    fetchProperties();
    // rendered.current === "false" ? rendered.current = "true" : "";

    // setReload(false);


  },[pageId, clearSearch]);



  return (


    <div className="flex flex-col pb-6 pt-28 px-4 md2:px-8 items-center">


    <div className="max-w-[1230px] w-full">

    <div className="dark:text-white text-black text-shadow-3 w-full text-xs flex flex-row gap-1 opacity-70">
        
        <Link className=""href="/">Home</Link>
        >
        <span className="text-theme-text-brighter">Properties</span>
    </div>

    <form className="bg-white rounded-[17px]
    glass-container-background-2 min-w-[100%]
    border backdrop-blur-10 pt-4 pb-4 px-4 mt-8
    dark:bg-[#68585806] dark:border-[#ffffff05]
    text-[#000000b3] dark:text-[#ffffffb0] text-center text-l flex flex-row gap-2
    items-center text-sm flex-wrap
    " onSubmit={handleSearchSubmit}>

        <div className="w-full flex flex-row">
            <label className="flex-1 flex flex-row justify-center text-center
            label_field
            bg-[#ffffff07] rounded-[7px] border-2 border-[#ffffff02]
            
            ">
                <span className="min-w-[9rem] px-2 py-1 text_shadow-2 opacity-80 dark:opacity-90">
                    search description
                </span>
                
                <input className="w-full border-0 rounded-r-[6px] outline outline-none
                    dark:bg-[#ffffff09] dark:focus:bg-[#ffffff02]  px-2 
                    border-[rgba(255,255,255,0.02)]  
                    " type="text"
                    name="searchText" value={searchText} onChange={handleChange}
                />
                
            </label>
            
            <button type="submit"
            className="ml-2 px-2 py-1 dark:bg-text-accent-dark bg-theme-text-brighter opacity-75 text-white rounded-[7px] flex items-center justify-center">
                {filterActive ? ("apply"):("search")}
            </button>
            
            <span className="ml-2 px-2 py-1 dark:bg-text-accent-dark bg-theme-text-brighter opacity-75 text-white rounded-[7px] flex items-center justify-center cursor-pointer
            "
            onClick={()=> {
                if(filterActive) { 
                    hideFilter(); 
                    setFilterActive(false); 
                }else {  
                    showFilter(); 
                    setFilterActive(true);
                }
            }}
            >
                {filterActive? ("close"):("filter")}
            </span>
        </div>

        <span className="hidden flex-row items-center px-2 gap-2 justify-center
        min-w-full flex-wrap text-xs"
        id="filterContainer">
            {/* bedrooms, bathrooms, country, city, district, price, type, area, listing-type */}
            <span className="flex flex-row gap-2 px-3 py-1
            rounded-[12px] dark:bg-[#ffffff11] bg-[#ffffff9b]">
                <span className="font-semibold">Rooms</span>
                <span>from
                    <input className="ml-1 w-[1.5rem] rounded-[3px] text-center
                     text-black dark:bg-[#ffffff32] bg-[#00000017]
                     focus:outline focus:outline-1 outline-[#0000002b] dark:outline-[#ffffff61]" type="text"
                    defaultValue={bedroomsFrom} name="bedroomsFrom" onChange={handleChange}/>
                </span>
                <span>to
                    <input className="ml-1 w-[1.5rem] rounded-[3px] text-center
                        text-black dark:bg-[#ffffff32] bg-[#00000017]
                        focus:outline focus:outline-1 outline-[#0000002b] dark:outline-[#ffffff61]" type="text"
                        defaultValue={bedroomsTo} name="bedroomsTo" onChange={handleChange}/>
                </span>
            </span>

            <span className="flex flex-row gap-2 px-3 py-1
            rounded-[12px] dark:bg-[#ffffff11] bg-[#ffffff9b]">
                <span className="font-semibold">Price</span>
                <span>from
                    <input className="ml-1 w-[1.5rem] rounded-[3px] text-center
                        text-black dark:bg-[#ffffff32] bg-[#00000017]
                        focus:outline focus:outline-1 outline-[#0000002b] dark:outline-[#ffffff61]" type="text"
                        defaultValue={priceFrom} name="priceFrom" onChange={handleChange}/>
                </span>
                <span>to
                    <input className="ml-1 w-[1.5rem] rounded-[3px] text-center
                        text-black dark:bg-[#ffffff32] bg-[#00000017]
                        focus:outline focus:outline-1 outline-[#0000002b] dark:outline-[#ffffff61]" type="text"
                        defaultValue={priceTo} name="priceTo" onChange={handleChange}/>
                </span>
            </span>

            <span className="flex flex-row gap-2 px-3 py-1
            rounded-[12px] dark:bg-[#ffffff11] bg-[#ffffff9b]">
                <span className="font-semibold">Area</span>
                <span>from
                    <input className="ml-1 w-[1.5rem] rounded-[3px] text-center
                     text-black dark:bg-[#ffffff32] bg-[#00000017]
                     focus:outline focus:outline-1 outline-[#0000002b] dark:outline-[#ffffff61]" type="text"
                    defaultValue={areaFrom} name="areaFrom" onChange={handleChange}/>
                </span>
                <span>to
                    <input className="ml-1 w-[1.5rem] rounded-[3px] text-center
                     text-black dark:bg-[#ffffff32] bg-[#00000017]
                     focus:outline focus:outline-1 outline-[#0000002b] dark:outline-[#ffffff61]" type="text"
                    defaultValue={areaTo} name="areaTo" onChange={handleChange}/>
                </span>
            </span>


                {/* you have an array object 
                for each item in the array, if the keyword did not exist before, return it
                 */}
                 {/* {properties.map((property) => (
                    <option>country: {property.property_country}</option>
                ))} */}
            {properties.length > 0 ? (
            <select className="pl-3 pr-5 py-1 appearance-none down_caret
            rounded-[12px] dark:bg-[#ffffff11] bg-[#ffffff9b]
            focus:outline focus:outline-1 outline-[#0000002b] dark:outline-[#ffffff61]"
            name="country" value={country} onChange={handleChange}>
                <option value="" disabled selected>select country</option>
                
                 {propertiesCountries.current.map((country) => (
                    <option>{country}</option>
                ))}


            </select>
            ):("")}


            {/* {properties.map((property) => (
              <option>type: {property.property_type}</option>
            ))} */}
            {properties.length > 0 ? (
            <select className="pl-3 pr-5 py-1 appearance-none down_caret
            rounded-[12px] dark:bg-[#ffffff11] bg-[#ffffff9b]
            focus:outline focus:outline-1 outline-[#0000002b] dark:outline-[#ffffff61]"
            name="type" value={type} onChange={handleChange}>
                <option value="" disabled selected>select type</option>

                 {propertiesTypes.current.map((type) => (
                    <option>{type}</option>
                ))}
            </select>
            ):("")}

            {/* {properties.map((property) => (
              <option>listing type: {property.property_listing_type}</option>
            ))} */}
            {properties.length > 0 ? (
            <select className="pl-3 pr-5 py-1 appearance-none down_caret
            rounded-[12px] dark:bg-[#ffffff11] bg-[#ffffff9b]
            focus:outline focus:outline-1 outline-[#0000002b] dark:outline-[#ffffff61]"
            name="listing_type" value={listing_type} onChange={handleChange}>
                <option value="" disabled selected>select listing type</option>

                 {listingTypes.current.map((listing) => (
                    <option>{listing}</option>
                ))}
            </select>
            ):("")}


            <button 
            className="
            dark:bg-text-accent-dark bg-theme-text-brighter opacity-75 text-white
            px-3 py-1 rounded-[12px]
            focus:outline focus:outline-1 outline-[#0000002b] dark:outline-[#ffffff61]"
            onClick={()=>{clearFilter();}}>
                    Clear
            </button>

        </span>

        {/* <div className="flex flex-row gap-1 uppercase text-sm">
            <span className="px-2 bg-text-accent-dark rounded-[3px] flex items-center justify-center">Type</span>
            <span className="px-2 bg-text-accent-dark rounded-[3px] flex items-center justify-center">Bedrooms</span>
            <span className="px-2 bg-text-accent-dark rounded-[3px] flex items-center justify-center">Area</span>
            <span className="px-2 bg-text-accent-dark rounded-[3px] flex items-center justify-center">Country</span>
            <span className="px-2 bg-text-accent-dark rounded-[3px] flex items-center justify-center">City</span>
            <span className="px-2 bg-text-accent-dark rounded-[3px] flex items-center justify-center">District</span>
            <span className="px-2 bg-text-accent-dark rounded-[3px] flex items-center justify-center">Price</span>

        </div> */}
    </form>

    <div className="bg-white rounded-[17px]
    glass-container-background-2 min-w-[100%]
    border backdrop-blur-10 pt-7 pb-8 px-4 mt-8
    dark:bg-[#68585806] dark:border-[#ffffff05]
    text-[#000000b3] dark:text-[#ffffffb0] text-center text-l flex flex-col gap-1
    sm:px-12
    
    ">

        {/* here are the posts */}
        <h4 className="text_shadow-3">All properties</h4>

        {/* posts container */}
        <div className="flex flex-row gap-6 my-6 flex-wrap justify-center md:justify-start mx-auto last-of-type:mr-auto w-full">

            {/* post */}
            {properties.length > 0 ? (
            <>
                {properties.map((property: PropertyDocument) => (
                <div className="h-auto w-full max-w-[390px] md:w-[calc(50%-16px)] lg:w-[calc(33.3%-16px)]">
                    <PropertyCard property1={property} currentPage="AllProperties" />
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
                            onClick={()=> {setPageId(1);}}
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
                            onClick={()=> {setPageId(pageId-1);}}
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
                            onClick={()=> {setPageId(pageId+1);}}
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
                            onClick={()=> {setPageId(Math.ceil(endPage.current));}}
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
            <div className="min-h-[254px] flex flex-col mx-auto justify-center">
                <h1 className="text_shadow-3">{dataCondition}</h1>

                {dataCondition === "no properties found in this search" ? (
                    <button 
                    className="
                    dark:bg-text-accent-dark bg-theme-text-brighter opacity-75 text-white
                    px-2 py-0 rounded-[12px] mt-2 w-[4rem] mx-auto text-sm
                    focus:outline focus:outline-1 outline-[#0000002b] dark:outline-[#ffffff61]"
                    onClick={()=>{setClearSearch(true);}}>
                            Back
                    </button>
                ): ("")}
            </div></>
            )
            }

        </div>


        
    </div>

    </div>

    </div>

)
}

export default page