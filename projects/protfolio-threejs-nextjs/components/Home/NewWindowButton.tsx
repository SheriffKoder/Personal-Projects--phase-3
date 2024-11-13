"use client"
import React, { useEffect } from 'react'
import NewWindowIcon from './NewWindowIcon'

const NewWindowButton = () => {

    const showResumeOverlay = () => {
        document.getElementById("resumeOverlay")?.classList.add("scaleVertical");
        document.getElementById("resumeOverlayContainer")?.classList.add("fadeIn_animation2");      
        document.getElementById("resumeOverlay")?.classList.remove("hidden");
        document.getElementById("resumeOverlayContainer")?.classList.remove("hidden");
        document.getElementById("resumeOverlayContainer")?.classList.add("flex");
        document.getElementById("resumeOverlay")?.classList.add("flex");


        setTimeout(()=> {
            // document.getElementById("resumeOverlay")?.classList.remove("scaleVertical");
            document.getElementById("resumeOverlayContainer")?.classList.remove("fadeIn_animation2");            
        }, 2000);
    }

  return (
    <div className="px-4 py-1 font-base cursor-pointer font-semibold
    gradientGreyButton hover:scale-[0.98] focus:scale-[0.98] transition-all
    text-[min(0.9em,1rem)]" onClick={showResumeOverlay}>

        <span className="gradient_text_1 w-full h-full flex flex-row gap-2">
          My Resume 
          <span className="mt-[2px]">
            <NewWindowIcon color="#39D0B7"/>
          </span>
          {/* <span className="hidden 2xl:contents">(background, education, career...)</span> */}
        </span>
    </div>
  )
}

export default NewWindowButton