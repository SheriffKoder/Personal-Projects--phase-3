"use client"
import React from 'react'
import DownloadIcon from './DownloadIcon'

const ResumeOverlay = () => {

    const hideResumeOverlay = () => {
        document.getElementById("resumeOverlay")?.classList.remove("scaleVertical");
        document.getElementById("resumeOverlay")?.classList.add("scaleVerticalOut");
        document.getElementById("resumeOverlayContainer")?.classList.add("fadeOut_animation2");      

        setTimeout(()=> {
            document.getElementById("resumeOverlay")?.classList.remove("flex");
            document.getElementById("resumeOverlayContainer")?.classList.remove("flex");
            document.getElementById("resumeOverlayContainer")?.classList.add("hidden");
            document.getElementById("resumeOverlay")?.classList.add("hidden");
            document.getElementById("resumeOverlay")?.classList.remove("scaleVerticalOut");
            document.getElementById("resumeOverlayContainer")?.classList.remove("fadeOut_animation2");            
        }, 3500);
    }

  return (

    <div 
    id="resumeOverlayContainer"
    className="fixed h-[100vh] w-[100vw] z-[99] hidden items-center justify-center 
    overflow-hidden bg-[rgba(2,8,18,0.79)]">
        <div className="w-[100vw] h-[1px]  border
        hidden flex-col items-center justify-center gap-8 overflow-hidden"
        id="resumeOverlay">
        
            <div className="flex flex-row gap-4">
                <div className="px-4 py-1 font-base
                gradientGreyButton focus:opacity-95 hover:opacity-95
                text-[min(0.9em,1rem)]">
                    <a href="./documents/Resume-sherif-khodeir-prof-2024.pdf" download="Resume-sherif-khodeir-prof-2024.pdf"
                    className="text-white flex flex-row gap-2">
                    Simple version
                    <span className="mt-[2px]">
                        <DownloadIcon color="#ffff"/>
                    </span>
                    </a>
                </div>
                <div className="px-4 py-1 font-base
                gradientGreyButton focus:opacity-95 hover:opacity-95
                text-[min(0.9em,1rem)]">
                    <a href="./documents/Resume-sherif-khodeir-grph-2024.pdf" download="Resume-sherif-khodeir-grph-2024.pdf"
                    className="gradient_text_1 flex flex-row gap-2">
                    Colored version
                    <span className="mt-[2px]">
                        <DownloadIcon color="#39D0B7"/>
                    </span>
                    </a>
                </div>
            </div>

            <div className="" onClick={hideResumeOverlay}>
                close
            </div>
        </div>
        
    </div>
  )
}

export default ResumeOverlay