import React from 'react'

import { PropertyDocument } from '@models/propertyModel';
import PropertyCardAdmin from '@components/Home/HomeMain/PropertyCardAdmin';
import { useState, useEffect, useRef } from 'react';

//i need properties fetched
//i need setPropertyId, setReload

interface propertiesState {
    properties: PropertyDocument[],
    pageId: number,
}

const PropertiesContainer = ({setPropertyEditId, userAuthority, userName}:{
    setPropertyEditId: React.Dispatch<React.SetStateAction<string>>
    // setReload: React.Dispatch<React.SetStateAction<boolean>>,
    userAuthority: string,
    userName: string,
  
}) => {

    const [userProperties, setUserProperties] = useState<PropertyDocument[]|[]>([]);
    const [reload, setReload] = useState(false);

    //Part 11.03
    const [pageId, setPageId] = useState(1);
    const endPage = useRef(1);


    useEffect(()=> {

        //connect to data base
        const fetchProperties = async () => { 
            
            let userId = window.location.href.toString().split("/agents/")[1];
    
            console.log(userProperties);
            //state needs to have a different value to take the same value again which is jsonResponse.properties
            if (userProperties.length > 0) {
                let loadingProperties:PropertyDocument[] = [];
                
                // console.log("loadingProperties");
                // console.log(loadingProperties);
                // setUserProperties(loadingProperties);

                setUserProperties([]);
    
            }
            
            const response = await fetch(`/api/properties/${userId}/${pageId}`);
            const jsonResponse = await response.json();
            console.log(jsonResponse);
    
            endPage.current = jsonResponse.pagesEnd;
            console.log("end page: "+endPage.current);
            console.log("current page: "+ pageId);
    
            // console.log("properties were");
            // console.log(userProperties);
        
            // console.log(jsonResponse.properties);
    
            // setUserProperties([]);
            setUserProperties(jsonResponse.properties);

            
            // console.log("properties now are");
            // console.log(userProperties);
    
        }
    
        fetchProperties();
    
      },[pageId, reload]);
    

  return (
    <>
    <div className="flex flex-row gap-6 my-6 flex-wrap justify-center md:justify-start mx-auto last-of-type:mr-auto w-full">

    {/* property */}
    {userProperties ? (
        <>
            {userProperties.map((property: PropertyDocument) => (
                
                <div className="h-auto w-full max-w-[390px] md:w-[calc(50%-16px)] md2:w-[calc(33.3%-16px)] xl:w-[calc(33.3%-16px)] ">
                    <PropertyCardAdmin setPropertyEditId={setPropertyEditId} property1={property} currentPage="agent" setReload={setReload}/>
                </div>
                )
            )}
        </>
        ) : (
        <>
            <h1 className="text_shadow-3">
                
                { userAuthority === "viewer" ? (`${userName} does not have any properties yet`) : ("You do not have any properties yet")}

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

export default PropertiesContainer;