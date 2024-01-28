import React from "react"
import BackToHome from "../misc/BackToHome";

const AlreadyLoggedIn = () => {

  return (
    <div className="flex-1 w-full flex flex-col justify-center items-center gap-2">
      <span className="w-[80%] text-center text-sm">
        You are already logged-in !
      </span>

      <BackToHome/>

    </div>
  )
}

export default AlreadyLoggedIn;