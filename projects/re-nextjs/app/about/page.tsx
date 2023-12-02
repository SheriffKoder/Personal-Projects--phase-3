// import React from 'react'

import Link from "next/link"
import Image from "next/image"

const page = () => {
  return (


    <div className="flex flex-col pb-6 pt-28 px-4 md2:px-8 items-center">


      <div className="max-w-[1230px] w-full">

        <div className="dark:text-white text-black text-shadow-3 w-full text-xs flex flex-row gap-1 opacity-70">
            
            <Link className=""href="/">Home</Link>
            >
            <span className="text-theme-text-brighter">About & Contact</span>
        </div>

        {/* About */}
        <div id="about-us" className="bg-white rounded-[7px]
        glass-container-background-2 min-w-[100%]
        border backdrop-blur-10 py-8 px-10 mt-8
        dark:bg-[#68585806] dark:border-[#ffffff05]
        text-[#000000b3] dark:text-[#ffffffb0] text-center text-l flex flex-col gap-8
        items-center text-sm md2:flex-row
        ">

          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-base">About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quisquam velit itaque, incidunt voluptatibus doloremque ex eligendi tempora non repellendus recusandae pariatur consectetur harum cum cumque illo enim. Minima, ea!
              Est rerum iure dolor ex nihil. Ad, at consequuntur perferendis error enim illum praesentium placeat. Modi assumenda iste tempora, quaerat provident, recusandae suscipit voluptatem cupiditate molestiae in tempore aspernatur. Consectetur?
              Amet quo eligendi nihil voluptatum mollitia ex cumque commodi eius atque et! Cum sint voluptatibus sequi, voluptates quod eius rerum quo, eum ut aut dolorem, harum minima quos repellat delectus.
            </p>
          </div>

          <Image src="/images/furniture.avif" alt="text" width={300} height={300}
          className="border-0 rounded-sm w-full md2:max-w-[300px]">

          </Image>

            
        </div>


        {/* contact */}
        <div id="contact" className="bg-white rounded-[7px]
        glass-container-background-2 min-w-[100%]
        border backdrop-blur-10 py-8 px-10 mt-8
        dark:bg-[#68585806] dark:border-[#ffffff05]
        text-[#000000b3] dark:text-[#ffffffb0] text-l flex flex-col gap-8
         text-sm md2:flex-row
        ">

        <div className="flex flex-col gap-6 flex-1 my-auto">
            <h1 className="font-semibold text-base">Contact us about your inquiry</h1>
            <form className="flex flex-col md2:gap-4 gap-6">

              <div className="flex flex-col gap-2 md2:gap-0 md2:flex-row h-14 md2:h-7 items-center">
                <label className="w-[10rem] block text-center md2:text-start" htmlFor="name">
                  Your Name
                </label>
                <input 
                  className="border-0 rounded-[3px] 
                  outline-none focus:outline-2 focus:outline-offset-3 
                  focus:outline-[#ff17646f] focus:dark:outline-text-accent-bright
                  caret-[#ff176455] dark:caret-text-accent-bright
                  dark:marker-text-accent-bright placeholder-[#ff176455]
                  text-[#000000d1] px-2 h-full flex-1 bg-[#fffffff2] w-full max-w-[500px]"
                  id="name"
                  maxLength={35}

                  type="text" />                
              </div>
              
              <div className="flex flex-col gap-2 md2:gap-0 md2:flex-row h-14 md2:h-7 items-center">
                <label className="w-[10rem] block text-center md2:text-start" htmlFor="contact-number">
                  Your Contact-number
                </label>
                <input 
                  className="border-0 rounded-[3px] 
                  outline-none focus:outline-2 focus:outline-offset-3 
                  focus:outline-[#ff17646f] focus:dark:outline-text-accent-bright
                  caret-[#ff176455] dark:caret-text-accent-bright
                  dark:marker-text-accent-bright placeholder-[#ff176455]
                  text-[#000000d1] px-2 h-full flex-1 bg-[#fffffff2] w-full max-w-[500px]"
                  id="contact-number"
                  maxLength={35}

                  type="tel" />                
              </div>

              <div className="flex flex-col gap-2 md2:gap-0 md2:flex-row h-14 md2:h-7 items-center">
                <label className="md2:w-[10rem] block text-center md2:text-start" htmlFor="email">
                  Your Email
                </label>
                <input 
                  className="border-0 rounded-[3px] 
                  outline-none focus:outline-2 focus:outline-offset-3 
                  focus:outline-[#ff17646f] focus:dark:outline-text-accent-bright
                  caret-[#ff176455] dark:caret-text-accent-bright
                  dark:marker-text-accent-bright placeholder-[#ff176455]
                  text-[#000000d1] px-2 h-full flex-1 bg-[#fffffff2]
                  w-full max-w-[500px]"
                  id="email"
                  maxLength={35}
                  type="email" />                
              </div>


              <div className="flex flex-col gap-2 md2:gap-0 md2:flex-row h-48 items-center md2:items-baseline">
                <label className="md2:w-[10rem] block " htmlFor="inquiry">
                  How can we help you ? (please specify your inquiry)
                </label>
                <textarea
                className="
                border-0 rounded-[3px] 
                outline-none focus:outline-2 focus:outline-offset-3 
                focus:outline-[#ff17646f] focus:dark:outline-text-accent-bright
                caret-[#ff176455] dark:caret-text-accent-bright
                dark:marker-text-accent-bright placeholder-[#ff176455]
                text-[#000000d1] px-2 h-full flex-1 bg-[#fffffff2]
                py-2 resize-none w-full max-w-[500px]
                
                "
                id="inquiry"
                >

                </textarea>
                
              </div>

              <div className="flex flex-col gap-0 md2:gap-0 md2:flex-row md2:h-7 h-14 items-center">
                <span className="w-[10rem] inline-block">
                
                </span>

                <div className="md2:flex-1 flex w-full justify-center">
                  <button type="submit" 
                className="bg-theme-text-brighter dark:bg-theme-text-dark text-white 
                  rounded-full py-1.5 px-3 w-[80%] max-w-[200px]
                  opacity-80 hover:opacity-90 text-center md2:ml-auto">
                          Send Inquiry 
                  </button>
                </div>                
              
              </div>




            </form>
          </div>

          <div className=" min-h-[100%] md2:ml-auto flex flex-col">

          <h1 className="font-semibold text-base text-center mb-4">Our location</h1>
            <Image src="/images/furniture.avif" alt="text" width={300} height={300}
            className="border-0 rounded-sm mx-auto md2:ml-auto flex-1 w-full md2:max-w-[300px] max-w-[500px]"
            style={{objectFit:'cover'}}
            >

            </Image>

          </div>
          



        </div>




      </div>

    </div>

)}

export default page