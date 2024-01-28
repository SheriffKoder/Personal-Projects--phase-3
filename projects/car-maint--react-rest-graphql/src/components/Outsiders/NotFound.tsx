import React from "react"
import BackToHome from "../misc/BackToHome";

const NotFound = () => {

  return (
    <div className="flex-1 w-full flex flex-col justify-center items-center gap-2">
      <span className="w-[80%] text-center text-sm">
        Sorry the page you requested does not exist
        <div>404</div>
      </span>

      <BackToHome/>

    </div>
  )
}

export default NotFound;