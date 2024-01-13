import React, {Suspense} from "react"
import Loading from "../Home/HomeComponents/loading";


import HistoryCards from "./HistoryCards";





const History = () => {





return (
    <div>
        <div className="w-full flex flex-row mb-[-1rem] justify-center items-center gap-2">

            <Suspense fallback={<Loading/>}>
                <HistoryCards/>
            </Suspense>

        </div>



    </div>
  )
}

export default History