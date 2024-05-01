import React, { useContext } from "react"
import BackToHome from "../misc/BackToHome";
import { useNavigate } from "react-router-dom";
import { getDayDifference, getDayDiffTwoDates } from "../../util/daysDiff";



//edit/delete the history check card
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import { userContext } from "../../context";



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
    // _id: string,
    
};




const HistoryCards = ({check}:{
    check: checkModel
}) => {
  
    const navigate = useNavigate();
    const setUser = useContext(userContext)?.updateUser;
    const userInfo = useContext(userContext)?.userState

    const {carId} = useParams();    //will send the carId to find the car, with the checkupInfo
    const {checkIndex} = useParams();

    const token = useContext(userContext)?.userState.token;

    const handleDeleteCheck = async (carId:string, checkIndex:string, historyIndex: number) => {

        // console.log(checkTreeId);
        // console.log(checkIndex);
        const url = process.env.REACT_APP_CURRENT_URL!;

        const graphqlQuery = {
            query: `
                mutation updateCheck (
                    $checkupInfo: checksTypeInput,
                    $carId: String!,
                    $action: String!,
                    $checkIndex: Int,
                    $historyIndex: Int,
                ) {
                    deleteCheckHistoryItem(checkInput: {
                        checkupInfo: $checkupInfo,
                        carId: $carId,
                        action: $action,
                        checkIndex: $checkIndex,
                        historyIndex: $historyIndex,

                        })
                        {
                            _id
                            email
                            name
                            token
                            cars {
                                _id
                                brand
                                carModel
                                image
                                lastCheck
                                nextCheck
                                userId
                                checks {
                                    name
                                    color
                                    history {
                                        addDate
                                        initialCheck
                                        nextCheck
                                        checkedOn
                                        notes
                                    }
                                }
                                createdAt
                                updatedAt
                            }
                            
                        }
                }

            `,      
            variables: {
                carId: carId,
                action: "treeDelete",
                checkIndex: (checkIndex)? parseInt(checkIndex): "",
                historyIndex: historyIndex,                
            }
        }
            

        const apiResponse = await fetch(url+"/graphql/check", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": token
                },
                body: JSON.stringify(graphqlQuery),

        });


        const res = await apiResponse.json();
        console.log(res);
        console.log(apiResponse.status);

        setUser(res.data.deleteCheckHistoryItem);
        // navigate("/");    

    };

    // const check: checkModel = 
    // // {
    // //     name: "Maintenance",
    // //     color: "#058885",
    // //     _id: "1234",
    // //     history: [
    // //         {
    // //             addDate: "addDate 0",
    // //             initialCheck: "initialCheck 0",
    // //             // lastCheck: "03/03/23",
    // //             nextCheck: "nextCheck 0",
    // //             checkedOn: "checkedOn 0",
    // //             notes: "Make sure to check on the replacement part next time!",
    // //             _id: 1,
    // //         },
    // //         {
    // //             addDate: "addDate 1",
    // //             initialCheck: "initialCheck 1",
    // //             // lastCheck: "03/02/23",
    // //             nextCheck: "nextCheck 1",
    // //             checkedOn: "checkedOn 1",
    // //             notes: "get something for the filter!",
    // //             _id: 2,
    // //         },
    // //         {
    // //             addDate: "addDate 2",
    // //             initialCheck: "initialCheck 2",
    // //             // lastCheck: "none",
    // //             nextCheck: "nextCheck 2",
    // //             checkedOn: "checkedOn 2",
    // //             notes: "Make sure to bring a filter next time",
    // //             _id: 3,
    // //         },
    // //         {
    // //             addDate: "addDate 3",
    // //             initialCheck: "initialCheck 3",
    // //             // lastCheck: "none",
    // //             nextCheck: "nextCheck 3",
    // //             checkedOn: "checkedOn 3",
    // //             notes: "Make sure to bring a filter next time",
    // //             _id: 3,

    // //         },
    // //     ]
    // // };

    // {
    //     name: "Oil Change",
    //     color: "#b7ab09",
    //     _id: "4567",

    //     history: [
    //         {
    //             addDate: "addDate Oil 0",
    //             initialCheck: "initialCheck 0",
    //             nextCheck: "nextCheck Oil 0",
    //             checkedOn: "checkedOn Oil 0",
    //             notes: "Make sure to bring a filter next time",
    //         },
    //         {
    //             addDate: "addDate Oil 1",
    //             initialCheck: "initialCheck 1",
    //             nextCheck: "nextCheck Oil 1",
    //             checkedOn: "checkedOn Oil 1",
    //             notes: "all done",
    //         },
    //         {
    //             addDate: "addDate Oil 2",
    //             initialCheck: "initialCheck 2",
    //             nextCheck: "nextCheck Oil 2",
    //             checkedOn: "checkedOn Oil 2",
    //             notes: "all done",
    //         },
    //         {
    //             addDate: "addDate Oil 3",
    //             initialCheck: "initialCheck 3",
    //             nextCheck: "nextCheck Oil 3",
    //             checkedOn: "checkedOn Oil 3",
    //             notes: "all done",
    //         },

    //     ]


    // };

    const slimChecks = [...check.history];
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

    // console.log(currentCheck);
    // console.log(firstCheck);
    // console.log(slimChecks);
  
    // let i = 1;

    return (
    <div className="flex flex-col px-4 items-center w-full text_shadow">

        <div className="flex flex-row w-full max-w-[900px] mb-8 text-xs text_shadow">
            <span onClick={()=>{navigate("/")}} className="cursor-pointer">Home</span>
            <span className="right_caret h-full w-[1rem] text-transparent">.</span>
            <span style={{color:"#b650ff"}}>History ( {check.name} )</span>
        </div>
        
        <div className="flex flex-col w-full max-w-[600px]">

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
            " key={0}>
            
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

                        {/* <button 
                        onClick={()=>carId && checkIndex && handleDeleteCheck(carId, checkIndex, 0)}
                        className="ml-auto rounded-full bg-[#ffffff2a] px-1 py-0
                        w-[4.5rem] text-xs hover:scale-105 focus:scale-105">
                        remove
                        </button> */}
                        {/* there is no point in removing the current check, and it can cause errors/issues-to-fix if all removed then this is removed */}
                        <Link 
                        to={carId ? `/${carId}/checkup/${checkIndex}/0/edit/` : ""}
                        // onClick={()=>navigate(`/checkup/edit/${check._id}=0`)}
                        className="ml-auto rounded-full bg-[#ffffff2a] px-1 py-0
                        w-[4.5rem] text-xs hover:scale-105 focus:scale-105 text-center">
                            edit
                        </Link>
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
                            Last Check: {allChecks.length > 1 ? 
                            allChecks[1].checkedOn !== "" ? allChecks[1].checkedOn : "was not defined" 
                            : 
                            currentCheck.initialCheck !== "" ? currentCheck.initialCheck : "not defined yet"
                            }
                            </div>
                        </li>

                        <li className="w-full flex flex-row ml-2">
                            <div className="min-w-[7rem]">
                            <span className="mr-1">Next Check:</span>
                            {currentCheck.nextCheck !== "" ? currentCheck.nextCheck : "not set" }
                            </div>
                        </li>


                        <li className="w-full flex flex-row ml-2">
                            <div className="min-w-[7rem]">
                            <span className="mr-1">Remaining:</span> 
                            {check.history[0].nextCheck == "" && "not set"}
                            {getDayDifference(check.history[0].nextCheck) != 0 && check.history[0].nextCheck != "" && getDayDifference(check.history[0].nextCheck)}
                            {getDayDifference(check.history[0].nextCheck) == 0 && null}

                            {getDayDifference(check.history[0].nextCheck) > 1 && " Days before time"}
                            {getDayDifference(check.history[0].nextCheck) === 1 && " Day before time"}
                            {getDayDifference(check.history[0].nextCheck) === 0 && " Should be done Today"}
                            {getDayDifference(check.history[0].nextCheck) === -1 && " Day behind"}
                            {getDayDifference(check.history[0].nextCheck) < -1 && " Days behind"}

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
                // i = i + 1;
                const historyIndex = check.history.indexOf(info);
                // console.log(checkIndex);
                return (
                    <div className="
                    w-full border border-[#ffffff00]
                    glass-container-background-2 rounded-[7px] py-2 mt-6
                    opacity-90 hover:opacity-100 focus:opacity-100
                    " 
                    key={historyIndex}
                    >
                    
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
                                <button 
                                onClick={()=>carId && checkIndex && handleDeleteCheck(carId, checkIndex, +historyIndex)}
                                className="ml-auto rounded-full bg-[#ffffff2a] px-1 py-0
                                w-[4.5rem] text-xs hover:scale-105 focus:scale-105">
                                remove
                                </button>
                                <Link 
                                to={carId ? `/${carId}/checkup/${checkIndex}/${historyIndex}/edit/` : ""}
                                // onClick={()=>navigate(`/checkup/edit/${check._id}=${checkIndex}`)}
                                className="ml-auto rounded-full bg-[#ffffff2a] px-1 py-0
                                w-[4.5rem] text-xs hover:scale-105 focus:scale-105 text-center">
                                    edit
                                </Link>
                            </div>
                
                        </div>
                
                        {/* check-up details */}
                        <div className="px-2 text-sm mt-2">
                            <ul className="flex flex-col gap-1">
                
                                <li className="w-full flex flex-row ml-2">
                                    <div className="min-w-[7rem] mr-1">Previous check was:</div>
                                    <div>{check.history[historyIndex-1].checkedOn}</div>
                                </li>
                            
                                <li className="w-full flex flex-row ml-2">
                                    <div className="min-w-[7rem] mr-1">should be checked on: </div>
                                    <div>{info.nextCheck}</div>
                                </li>
                

                                <li className="w-full flex flex-row ml-2">
                                    <div className="min-w-[7rem] mr-1">was checked on: </div>
                                    <div>{info.checkedOn}</div>
                                </li>


                                <li className="w-full flex flex-row ml-2">
                                    <div className="min-w-[7rem] mr-1">duration:</div>
                                    <div>
                                        {getDayDifference(info.nextCheck)}
                                        {getDayDifference(info.nextCheck) > 1 && " Days"}
                                        {getDayDifference(info.nextCheck) === 1 && " Day"}
                                    </div>
                                </li>
                
                                <li className="w-full flex flex-row ml-2">
                                    <div className="min-w-[7rem] mr-1">due by:</div>
                                    <div>
                                        {/* {firstCheck.checkedOn - firstCheck.nextCheck} */}
                                        {Math.abs(getDayDiffTwoDates(info.checkedOn, info.nextCheck))}
                                        
                                        {Math.abs(getDayDiffTwoDates(info.checkedOn, info.nextCheck)) > 1 && " Days"}
                                        {Math.abs(getDayDiffTwoDates(info.checkedOn, info.nextCheck)) === 1 && " Day"}

                                        {getDayDiffTwoDates(info.checkedOn, info.nextCheck) > 0 && <span> overdue &#x26a0;</span>}
                                        {getDayDiffTwoDates(info.checkedOn, info.nextCheck) < 0 && <span> ahead &#10004;</span>} 
                                    </div>                                
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
            {firstCheck !== currentCheck ? (
            <div className="
            w-full border border-[#ffffff00]
            glass-container-background-2 rounded-[7px] py-2 mt-6
            opacity-90 hover:opacity-100 focus:opacity-100
            " key={check.history.length-1}>
            
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
                        <button 
                        onClick={()=>carId && checkIndex && handleDeleteCheck(carId, checkIndex, check.history.length-1)}
                        className="ml-auto rounded-full bg-[#ffffff2a] px-1 py-0
                        w-[4.5rem] text-xs hover:scale-105 focus:scale-105">
                        remove
                        </button>
                        <Link
                        to={carId ? `/${carId}/checkup/${checkIndex}/${check.history.length-1}/edit/` : ""}
                        // onClick={()=>navigate(`/checkup/edit/${check._id}=${check.history.length-1}`)}
                        className="ml-auto rounded-full bg-[#ffffff2a] px-1 py-0
                        w-[4.5rem] text-xs hover:scale-105 focus:scale-105 text-center">
                            edit
                        </Link>
                    </div>

                </div>

                {/* check-up details */}
                <div className="px-2 text-sm mt-2">
                    <ul className="flex flex-col gap-1">

                    <li className="w-full flex flex-row ml-2">
                        <div className="min-w-[7rem] mr-1">Previous check was:</div>
                        <div>
                            {firstCheck.initialCheck === "" ? "not set" : firstCheck.initialCheck}
                        </div>
                    </li>
                
                    <li className="w-full flex flex-row ml-2">
                        <div className="min-w-[7rem] mr-1">should be checked on: </div>
                        <div>{firstCheck.nextCheck}</div>
                    </li>
    

                    <li className="w-full flex flex-row ml-2">
                        <div className="min-w-[7rem] mr-1">was checked on: </div>
                        <div>{firstCheck.checkedOn}</div>
                    </li>


                    <li className="w-full flex flex-row ml-2">
                        <div className="min-w-[7rem] mr-1">duration:</div>
                        {/* <div>calc (nextDate-today)</div> */}
                        <div>
                            {getDayDifference(firstCheck.nextCheck)}
                            {getDayDifference(firstCheck.nextCheck) > 1 && " Days"}
                            {getDayDifference(firstCheck.nextCheck) === 1 && " Day"}

                        </div>
                    </li>
    
                    <li className="w-full flex flex-row ml-2">
                        <div className="min-w-[7rem] mr-1">due by:</div>
                        <div>
                            {/* {firstCheck.checkedOn - firstCheck.nextCheck} */}
                            {Math.abs(getDayDiffTwoDates(firstCheck.checkedOn, firstCheck.nextCheck))}
                                        
                            {Math.abs(getDayDiffTwoDates(firstCheck.checkedOn, firstCheck.nextCheck)) > 1 && " Days"}
                            {Math.abs(getDayDiffTwoDates(firstCheck.checkedOn, firstCheck.nextCheck)) === 1 && " Day"}
    
                            {getDayDiffTwoDates(firstCheck.checkedOn, firstCheck.nextCheck) > 0 && <span> overdue &#x26a0;</span>}
                            {getDayDiffTwoDates(firstCheck.checkedOn, firstCheck.nextCheck) < 0 && <span> ahead &#10004;</span>} 
                        </div>
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


            <div className="w-auto mt-4 mb-2 ml-[-0.5rem]  md:mt-8 md:mb-4">
            <BackToHome/>
            </div>
    </div>
  )
}

export default HistoryCards