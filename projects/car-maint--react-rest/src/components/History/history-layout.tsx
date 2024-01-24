import React, {Suspense} from "react"
import Loading from "../Home/HomeComponents/loading";


import HistoryCards from "./HistoryCards";



import { useContext } from "react";
import { userContext } from "../../context";
import {useParams} from "react-router-dom";


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



const History = () => {


// const setUser = useContext(userContext)?.updateUser;
// const userInfo = useContext(userContext)?.userState.userInfo;
const {carId} = useParams();    //will send the carId to find the car, with the checkupInfo

const {checkIndex} = useParams();
// const {historyIndex} = useParams();
const userCars = useContext(userContext).userState.userCars;


let check: checkModel | undefined = undefined;
if (userCars && carId && checkIndex) {
    check = userCars.filter((car) => car._id === carId)[0].checks[+checkIndex];
    // console.log(userCars);
    // console.log (carId);
}



return (
    <div>
        <div className="w-full flex flex-col mb-[-1rem] justify-center items-center gap-2">

            {check && (
            <Suspense fallback={<Loading/>}>
                <HistoryCards check={check}/>
            </Suspense>
            )}
        </div>



    </div>
  )
}

export default History