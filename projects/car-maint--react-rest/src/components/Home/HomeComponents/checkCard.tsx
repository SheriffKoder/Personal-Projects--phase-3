import React from "react"

type checksType = {
    name: string,
    lastCheck: string,
    nextCheck: string,
    remaining: string,
    notes: string,
    _id: number,
    color: string,
};



const CheckCard = () => {
  
  
    const checks: checksType[] = [
        {
            name: "Maintenance",
            lastCheck: "01/01/01",
            nextCheck: "01/01/01",
            remaining: "30",
            notes: "Make sure to check on the replacement part next time!",
            _id: 1,
            color: "#058885",
        },
        {
            name: "Oil",
            lastCheck: "01/01/01",
            nextCheck: "01/01/01",
            remaining: "30",
            notes: "Make sure to bring a filter next time",
            _id: 2,
            color: "#c5b807",

        },
    
    ];
    

  
    return (

    <>

        {checks.length > 0 && checks.map((info) => (
        <div className="
        w-full border border-[#ffffff00]
        glass-container-background-2 rounded-[7px] py-2 mt-6
        opacity-90 hover:opacity-100 focus:opacity-100
        " key={info._id}>
        
            {/* check-up title, buttons */}
            <div className="w-full flex flex-row px-2">
    
                {/* title */}
                <div style={{background: info.color}}
                className="rounded-[7px]
                px-2 py-0 w-[8rem] text-center
                ">
                    {info.name}
                </div>
    
                {/* buttons */}
                <div className="ml-auto flex flex-row gap-2 h-[1rem]">
                    <button className="ml-auto rounded-full bg-[#ffffff2a] px-1 py-0
                    w-[4.5rem] text-xs hover:scale-105 focus:scale-105">
                        edit
                    </button>
                    <button className="ml-auto rounded-full bg-[#ffffff2a] px-1 py-0
                    w-[4.5rem] text-xs hover:scale-105 focus:scale-105">
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
                    p-2 mt-2 min-h-[3.5rem]">
                        <div className="min-w-[7rem]">Notes:</div>
                        <div>{info.notes}</div>
                    </li>
    
                </ul>
            </div>
    
            {/* button - view history */}
            <div className="w-full flex mt-3 mb-1">
                <button className="rounded-full border border-[#ffffff2a] px-3 py-1
                text-xs mx-auto
                hover:bg-[#ffffff2a] focus:bg-[#ffffff2a]">
                    check history
                </button>
            </div>
    
    
        
        </div>
        ))}
        
        {checks.length < 1 && (
        <div className="
        w-full border border-[#ffffff00]
        glass-container-background-2 rounded-[7px] p-2 mt-6
        opacity-90 hover:opacity-100 focus:opacity-100
        flex items-center justify-center text-sm
        min-h-[228px]
        ">
            You do not have any checks yet, add one ?
        </div>
        )}
        

    </>
  )
}

export default CheckCard;