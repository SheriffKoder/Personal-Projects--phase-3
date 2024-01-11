import React from "react"

type infoType = {
    name: string,
    lastCheck: string,
    nextCheck: string,
    remaining: string,
    notes: string,
};


const CheckCard = ({info}: {
    info:infoType
}) => {
  return (

    <>
    <div className="
    w-full border border-[#ffffff00]
    glass-container-background-2 rounded-[7px] py-2 mt-6
    ">
        {/* check-up title, buttons */}
        <div className="w-full flex flex-row px-2">

            {/* title */}
            <div className="rounded-[7px] bg-[#058885] 
            px-2 py-0 w-[8rem] text-center
            ">
                {info.name}
            </div>

            {/* buttons */}
            <div className="ml-auto flex flex-row gap-2 h-[1rem]">
                <button className='ml-auto rounded-full bg-[#ffffff2a] px-1 py-0
                w-[4.5rem] text-xs'>
                    edit
                </button>
                <button className='ml-auto rounded-full bg-[#ffffff2a] px-1 py-0
                w-[4.5rem] text-xs'>
                remove
                </button>
            </div>

        </div>

        {/* check-up details */}
        <div className="px-2 text-sm mt-2">
            <ul className="flex flex-col gap-1">

                <li className="w-full flex flex-row ml-2">
                    <div className="min-w-[7rem]">Last check:</div>
                    <div>{info.lastCheck}</div>
                </li>
               
                <li className="w-full flex flex-row ml-2">
                    <div className="min-w-[7rem]">Next check:</div>
                    <div>{info.nextCheck}</div>
                </li>

                <li className="w-full flex flex-row ml-2">
                    <div className="min-w-[7rem]">Remaining:</div>
                    <div>{info.remaining}</div>
                </li>

                <li className="w-full bg-[#ffffff15] rounded-[7px] 
                p-2 mt-2">
                    <div className="min-w-[7rem]">Notes:</div>
                    <div>{info.notes}</div>
                </li>

            </ul>
        </div>

        <div className="w-full flex mt-3 mb-1">
            <button className='rounded-full border border-[#ffffff2a] px-3 py-1
            text-xs mx-auto'>
                check history
            </button>
        </div>


    
    </div>
    </>
  )
}

export default CheckCard;