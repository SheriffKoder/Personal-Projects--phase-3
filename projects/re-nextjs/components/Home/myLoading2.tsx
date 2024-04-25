import React from 'react'

const MyLoading2 = ({loadingText}: {loadingText:string}) => {
  return (
    <div className="w-full sticky top-0 z-[99] loading2" id="loading2">
            <div className="absolute top-0 left-0 w-[100%] min-h-[100vh]
                flex items-center justify-center flex-col gap-2"
                >
                    {/* <div id="loading_icon" className="">
                    <svg className="bi bi-house" xmlns="http://www.w3.org/2000/svg" 
                        width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                            
                            <path className="dark:fill-[#cc2750d3] fill-[#d6003580]" fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z">
                            </path> 
                            
                            <path className="dark:fill-[#cc2750d3] fill-[#d6003580]" fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z">
                            </path> 
                        </svg>
                    </div> */}
                    {/* text-[#d6003580] */}
                    <p className="text-[#000000b3] text-[13px] dark:text-[#cc2750d3] ">
                        {loadingText}
                    </p>
                </div>
        </div>  
  )
}

export default MyLoading2