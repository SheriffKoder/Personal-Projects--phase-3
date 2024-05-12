// import React from 'react'

import Link from "next/link"

const Footer = () => {
  return (
    
    <footer className="dark:text-[#ffffffab] text_shadow-3 w-full dark:bg-[rgba(255,255,255,0.015)] bg-[rgba(255,255,255,0.15)] font-light text-[#000000c1]
    flex flex-col items-center justify-center
    h-auto py-12 text-[0.9rem] relative mt-24">

      <div className="absolute w-full h-full rounded-b-[10px] top-0 left-0 z-[0] dark:opacity-[0.03] opacity-[0.15]"
      style={{backgroundImage: "url('/images/deco.png')", backgroundSize: "20%", backgroundPosition: "10px -40px" }}>
      </div>

      <div className="flex flex-row justify-between w-[90%] max-w-[500px] text-center">
        <ul className="flex flex-col items-center flex-1">
          <li className="font-semibold">
              Assistance
          </li>

          <li className="">
            <Link href="/about">
              How it Works
            </Link>
          </li>
          
          <li className="">
            <Link href="/posts/all">
              Our Blog & News
            </Link>
          </li>

          <li className="">
            <Link href="/about">
              Help Center
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col items-center flex-1">
          <li className="font-semibold">
              Know the Team
          </li>

          <li className="">
            <Link href="/about">
              Our Story
            </Link>
          </li>
          
          <li className="">
            <Link href="/about">
              Contact Us
            </Link>
          </li>

          <li className="">
            <Link href="/about">
              Partners & API
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col items-center flex-1">
          <li className="font-semibold">
              More
          </li>

          <li className="">
            <Link href="/about">
              Careers
            </Link>
          </li>
          
          <li className="">
            <Link href="/about">
              Diversity
            </Link>
          </li>

          <li className="">
            <Link href="/about">
              Accessibility Statement
            </Link>
          </li>
        </ul>
      </div>

      <Link href="/" className="nav-icon mt-4 dark:opacity-80" aria-label="back to the home page">
          <svg className="hover:opacity-80 bi bi-house" xmlns="http://www.w3.org/2000/svg" 
          width="27" height="27" fill="currentColor" viewBox="0 0 16 16">
            
            <path className="dark:fill-[#cc2750d3] fill-[#d6003580]" fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z">
            </path> 
            
            <path className="dark:fill-[#cc2750d3] fill-[#d6003580]" fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z">
            </path> 
          </svg>
          {/* <p>RE Company</p> */}
        </Link>

      <span className="text-sm mt-4 max-w-[80%] text-center">Copyright © 2022-2023 RE Comp, Inc.,  Richard P. company. All rights reserved.</span>
      <span className="text-sm flex flex-row gap-2 text-center">
        <Link href="/about">
          Privacy
        </Link>

        <span>|</span>

        <Link href="/about">
          Terms of Service
        </Link>

      </span>


    </footer>

  )
}

export default Footer