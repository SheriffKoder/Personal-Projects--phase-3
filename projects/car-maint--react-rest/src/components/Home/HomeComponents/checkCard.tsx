import React from "react"
import { useNavigate } from "react-router-dom";


type checksType = {
    addDate: string,    //c     //1     //2
    initialCheck: string,               //2
    nextCheck: string,  //c     //1     //2
    checkedOn: string,  //c     //1     //2
    notes: string,      //c     //1     //2
}

type checkModel = {
    name: string,
    color: string,
    history: checksType[],
    _id: string,
    
};



const CheckCard = () => {
  
    const navigate = useNavigate();

  
    const checks: checkModel[] = [ 
        
        {
            name: "Maintenance",
            color: "#058885",
            _id: "1234",
            history: [
                {
                    addDate: "addDate 0",
                    initialCheck: "initialCheck 0",
                    // lastCheck: "03/03/23",
                    nextCheck: "nextCheck 0",
                    checkedOn: "checkedOn 0",
                    notes: "Make sure to check on the replacement part next time!",
                },
                {
                    addDate: "addDate 1",
                    initialCheck: "initialCheck 1",
                    // lastCheck: "03/02/23",
                    nextCheck: "nextCheck 1",
                    checkedOn: "checkedOn 1",
                    notes: "get something for the filter!",
                },
                {
                    addDate: "addDate 2",
                    initialCheck: "initialCheck 2",
                    // lastCheck: "none",
                    nextCheck: "nextCheck 2",
                    checkedOn: "checkedOn 2",
                    notes: "Make sure to bring a filter next time",
                },
                {
                    addDate: "addDate 3",
                    initialCheck: "initialCheck 3",
                    // lastCheck: "none",
                    nextCheck: "nextCheck 3",
                    checkedOn: "checkedOn 3",
                    notes: "Make sure to bring a filter next time",
                },
            ]


        },
        
        {
            name: "Oil Change",
            color: "#b7ab09",
            _id: "4567",

            history: [
                {
                    addDate: "addDate Oil 0",
                    initialCheck: "initialCheck 0",
                    nextCheck: "nextCheck Oil 0",
                    checkedOn: "",
                    notes: "Make sure to bring a filter next time",
                },

            ]


        },
        
    ];

    
    const handleDeleteCheckTree = (checkTreeId: string) => {
        console.log(checkTreeId);
    };

  
    return (

    <div className="flex flex-col flex-wrap lg:flex-row lg:gap-4 lg:justify-center">

        {checks.length > 0 && checks.map((check:checkModel) => { 
         
            const info = {
                _id: check._id,
                color: check.color,
                name: check.name,
                lastCheck: (check.history.length > 1 ? check.history[1].checkedOn : "not yet" ),
                nextCheck: check.history[0].nextCheck,
                remaining: "calc today- check.history[0].nextCheck",
                notes: check.history[0].notes,                
            }

            return (
                <div className="
                w-full border border-[#ffffff00]
                glass-container-background-2 rounded-[7px] py-2 mt-6
                opacity-90 hover:opacity-100 focus:opacity-100
                max-w-[800px] mx-auto lg:w-[400px] lg:mx-0
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
                            <button 
                            onClick={()=>navigate(`/checkup/edit/${check._id}=0`)}
                            className="ml-auto rounded-full bg-[#ffffff2a] px-1 py-0
                            w-[4.5rem] text-xs hover:scale-105 focus:scale-105">
                                edit
                            </button>
                            <button 
                            onClick={()=>handleDeleteCheckTree(check._id)}
                            className="ml-auto rounded-full bg-[#ffffff2a] px-1 py-0
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
                        <button 
                        onClick={()=>navigate(`/checkup/${info._id}`)}
                        className="rounded-full border border-[#ffffff2a] px-3 py-1
                        text-xs mx-auto
                        hover:bg-[#ffffff2a] focus:bg-[#ffffff2a]">
                            check history
                        </button>
                    </div>
            
            
                
                </div>
            )
        
        })}
        
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
        

    </div>
  )
}

export default CheckCard;