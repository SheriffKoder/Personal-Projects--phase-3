import React from "react"
import Link from "next/link"

const Contact = () => {
  return (
    <div className="max-w-[1600px] flex flex-row items-center justify-center gap-4 py-[4rem]">
        <h1 className="BoldHeader">What about we have a talk ? </h1>
        <div>
            <Link className="py-[0.1rem] px-4
            text-1xl lg:text-2xl
            bg-gradient-to-r from-[#387ca4] to-[#39d0b7b4]
            rounded-full font-medium text-[#ffffff]
            focus:opacity-90 hover:opacity-90"                     
            href="/contact">
                contact me
            </Link>
        </div>
    </div>
  )
}

export default Contact