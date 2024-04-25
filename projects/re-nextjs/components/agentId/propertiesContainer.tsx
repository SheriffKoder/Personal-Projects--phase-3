import React from 'react'

// the properties container in the profile page (title, add button, propertyCardAdmin component)


import { PropertyDocument } from '@models/propertyModel';
import PropertyCardAdmin from '@components/Home/HomeMain/PropertyCardAdmin';
import { useState, useEffect, useRef } from 'react';


const PropertiesContainer = ({setPropertyEditId, userAuthority, setReload, reload, userName}:{
    setPropertyEditId: React.Dispatch<React.SetStateAction<string>>
    setReload: React.Dispatch<React.SetStateAction<boolean>>,
    reload: any,
    userAuthority: string,
    userName: string,
  
}) => {

    const [userProperties, setUserProperties] = useState<PropertyDocument[]|[]>([]);

    //Part 11.03
    const [pageId, setPageId] = useState(1);
    const endPage = useRef(1);

    const [dataCondition,setDataCondition] = useState("Loading properties...");


    useEffect(()=> {

        setDataCondition("Loading properties...");

        //connect to data base, fetch user's properties with the pagination reference pageId
        const fetchProperties = async () => { 
            
            let userId = window.location.href.toString().split("/agents/")[1];
            
            const response = await fetch(`/api/properties/${userId}/${pageId}`);
            const jsonResponse = await response.json();
    
            //last page button value, to jump to the last page of results
            endPage.current = jsonResponse.pagesEnd;

            if (jsonResponse.properties.length > 0) {
                setUserProperties(jsonResponse.properties);
            } else {
                if (userAuthority === "viewer") {
                setDataCondition(`${userName} does not have any posts yet`)
                } else {
                setDataCondition("You do not have any posts yet");
                }
            }
            setReload(false);
    
        }
    
        // call the fetching function above
        fetchProperties();

        //we fetch posts when reload (set to true when editing deleting) are changed 
      },[reload]);
    

  return (
    <>
    <div className="flex flex-row gap-6 my-6 flex-wrap justify-center md:justify-start mx-auto last-of-type:mr-auto w-full">

    {/* property map iteration to PropertyCardAdmin components*/}
    {userProperties.length > 0 ? (
        <>
            {userProperties.map((property: PropertyDocument) => (
                
                <div key={property._id}
                className="h-auto w-full max-w-[390px] md:w-[calc(50%-16px)] md2:w-[calc(33.3%-16px)] xl:w-[calc(33.3%-16px)] ">
                    <PropertyCardAdmin setPropertyEditId={setPropertyEditId} property1={property} currentPage="agent" setReload={setReload}/>
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

export default PropertiesContainer;