import React from "react"
import BackToHome from "../BackToHome";



type checksType = {
    addDate: string,    //c     //1     //2
    initialCheck: string,               //2
    // lastCheck: string,
    nextCheck: string,  //c     //1     //2
    checkedOn: string,  //c     //1     //2
    notes: string,      //c     //1     //2
    _id: number,
}

type checkModel = {
    name: string,
    color: string,
    history: checksType[],
    _id: string
    
};



const HistoryCards = () => {
  
    const check: checkModel = 
    // {
    //     name: "Maintenance",
    //     color: "#058885",
    //     _id: "1234",
    //     history: [
    //         {
    //             addDate: "addDate 0",
    //             initialCheck: "initialCheck 0",
    //             // lastCheck: "03/03/23",
    //             nextCheck: "nextCheck 0",
    //             checkedOn: "checkedOn 0",
    //             notes: "Make sure to check on the replacement part next time!",
    //             _id: 1,
    //         },
    //         {
    //             addDate: "addDate 1",
    //             initialCheck: "initialCheck 1",
    //             // lastCheck: "03/02/23",
    //             nextCheck: "nextCheck 1",
    //             checkedOn: "checkedOn 1",
    //             notes: "get something for the filter!",
    //             _id: 2,
    //         },
    //         {
    //             addDate: "addDate 2",
    //             initialCheck: "initialCheck 2",
    //             // lastCheck: "none",
    //             nextCheck: "nextCheck 2",
    //             checkedOn: "checkedOn 2",
    //             notes: "Make sure to bring a filter next time",
    //             _id: 3,
    //         },
    //         {
    //             addDate: "addDate 3",
    //             initialCheck: "initialCheck 3",
    //             // lastCheck: "none",
    //             nextCheck: "nextCheck 3",
    //             checkedOn: "checkedOn 3",
    //             notes: "Make sure to bring a filter next time",
    //             _id: 3,

    //         },
    //     ]
    // };

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
                _id: 1,
            },
            {
                addDate: "addDate Oil 1",
                initialCheck: "initialCheck 1",
                nextCheck: "nextCheck Oil 1",
                checkedOn: "checkedOn Oil 1",
                notes: "all done",
                _id: 2,
            },

        ]


    };

    const slimChecks = check.history;
    const allChecks: checksType[] = [...slimChecks];
  
    //take first check and delete  
    const currentCheck = slimChecks[0];
    slimChecks.shift();

    let firstCheck = currentCheck;

    if (slimChecks.length > 0) {
        //take last check and delete
        firstCheck = slimChecks[slimChecks.length-1];
        slimChecks.pop();
    }

    console.log(currentCheck);
    console.log(firstCheck);
    console.log(slimChecks);
  
    let i = 1;

    return (
    <div className="flex flex-col items-center">
        <div className="flex flex-col px-4">

            {/* the check title */}
            <h1
            style={{background: check.color}}
            className="rounded-[7px] bg-[${info.color}]
            px-2 py-0 w-[8rem]
            font-semibold text-center mx-auto
            "
            >
                {check.name}
            </h1>

            {/* current check */}
            <div className="
            w-full border border-[#ffffff00]
            glass-container-background-2 rounded-[7px] py-2 mt-6
            opacity-90 hover:opacity-100 focus:opacity-100
            " key={currentCheck._id}>
            
                {/* check-up title, buttons */}
                <div className="w-full flex flex-row px-2">

                    {/* title */}
                    <div
                    style={{background: check.color}}
                    className="rounded-[7px] bg-[${info.color}]
                    px-2 py-0 w-[8rem] text-center
                    ">
                        current
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
                            <div className="min-w-[7rem]">
                            Added On: {currentCheck.addDate}
                            </div>
                        </li>

                        <li className="w-full flex flex-row ml-2">
                            <div className="min-w-[7rem]">
                            Last Check: {slimChecks.length > 0 ? allChecks[1].checkedOn : currentCheck.initialCheck}
                            </div>
                        </li>

                        <li className="w-full flex flex-row ml-2">
                            <div className="min-w-[7rem]">
                            Next Check: {currentCheck.nextCheck}
                            </div>
                        </li>


                        <li className="w-full flex flex-row ml-2">
                            <div className="min-w-[7rem]">
                            Remaining: "calc nextCheck-checkDate" Days
                            </div>
                        </li>
                    

                        <li className="w-full bg-[#ffffff15] rounded-[7px] 
                        p-2 mt-2 min-h-[3.5rem]">
                            <div className="min-w-[7rem]">Notes:</div>
                            <div>{currentCheck.notes}</div>
                        </li>

                    </ul>
                </div>



            
            </div>
            
            {/* the middle checks, with all to use their values as well */}
            {slimChecks.length > 0 && slimChecks.map((info) => {
                i = i + 1;
                return (
                    <div className="
                    w-full border border-[#ffffff00]
                    glass-container-background-2 rounded-[7px] py-2 mt-6
                    opacity-90 hover:opacity-100 focus:opacity-100
                    " key={info._id}>
                    
                        {/* check-up title, buttons */}
                        <div className="w-full flex flex-row px-2">
                
                            {/* title */}
                            <div style={{background: check.color}}
                            className="rounded-[7px]
                            px-2 py-0 w-[8rem] text-center
                            ">
                                Added {info.addDate}
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
                                    <div className="min-w-[7rem]">Previous check was:</div>
                                    <div>{allChecks[i].checkedOn}</div>
                                </li>
                            
                                <li className="w-full flex flex-row ml-2">
                                    <div className="min-w-[7rem]">should be checked on: </div>
                                    <div>{info.nextCheck}</div>
                                </li>
                

                                <li className="w-full flex flex-row ml-2">
                                    <div className="min-w-[7rem]">was checked on: </div>
                                    <div>{info.checkedOn}</div>
                                </li>


                                <li className="w-full flex flex-row ml-2">
                                    <div className="min-w-[7rem]">duration:</div>
                                    <div>calc nextDate-today</div>
                                </li>
                
                                <li className="w-full flex flex-row ml-2">
                                    <div className="min-w-[7rem]">due by:</div>
                                    <div>calc (nextDate-addDate) - checked on</div>
                                </li>
                                
                                <li className="w-full bg-[#ffffff15] rounded-[7px] 
                                p-2 mt-2 min-h-[3.5rem]">
                                    <div className="min-w-[7rem]">Notes:</div>
                                    <div>{info.notes}</div>
                                </li>
                
                            </ul>
                        </div>
         
                    </div>
    
                )

          
            })}
          
            {/* first check */}
            {firstCheck._id !== currentCheck._id ? (
            <div className="
            w-full border border-[#ffffff00]
            glass-container-background-2 rounded-[7px] py-2 mt-6
            opacity-90 hover:opacity-100 focus:opacity-100
            " key={firstCheck._id}>
            
                {/* check-up title, buttons */}
                <div className="w-full flex flex-row px-2">

                    {/* title */}
                    <div
                    style={{background: check.color}}
                    className="rounded-[7px] bg-[${info.color}]
                    px-2 py-0 w-[8rem] text-center
                    ">
                        first check

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
                        <div className="min-w-[7rem]">Previous check was:</div>
                        <div>{firstCheck.initialCheck}</div>
                    </li>
                
                    <li className="w-full flex flex-row ml-2">
                        <div className="min-w-[7rem]">should be checked on: </div>
                        <div>{firstCheck.nextCheck}</div>
                    </li>
    

                    <li className="w-full flex flex-row ml-2">
                        <div className="min-w-[7rem]">was checked on: </div>
                        <div>{firstCheck.checkedOn}</div>
                    </li>


                    <li className="w-full flex flex-row ml-2">
                        <div className="min-w-[7rem]">duration:</div>
                        <div>calc (nextDate-today)</div>
                    </li>
    
                    <li className="w-full flex flex-row ml-2">
                        <div className="min-w-[7rem]">due by:</div>
                        <div>calc (nextDate-addDate) - checked on</div>
                    </li>
                    
                    <li className="w-full bg-[#ffffff15] rounded-[7px] 
                    p-2 mt-2 min-h-[3.5rem]">
                        <div className="min-w-[7rem]">Notes:</div>
                        <div>{firstCheck.notes}</div>
                    </li>

                    </ul>
                </div>



            
            </div>
            ):("") }


        </div>


            <div className="w-auto mt-4 mb-2 ml-[-0.5rem]">
            <BackToHome/>
            </div>
    </div>
  )
}

export default HistoryCards