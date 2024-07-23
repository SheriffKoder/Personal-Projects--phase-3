"use client"
import React from 'react'
import DownloadIcon from './DownloadIcon'
import NewWindowIcon from './NewWindowIcon'

const ResumeOverlay = () => {

    const hideResumeOverlay = () => {
        // document.getElementById("resumeOverlay")?.classList.remove("scaleVertical");
        // document.getElementById("resumeOverlay")?.classList.add("scaleVerticalOut");
        document.getElementById("resumeOverlayContainer")?.classList.add("fadeOut_animation2");      

        setTimeout(()=> {
            document.getElementById("resumeOverlay")?.classList.remove("flex");
            document.getElementById("resumeOverlayContainer")?.classList.remove("flex");
            document.getElementById("resumeOverlayContainer")?.classList.add("hidden");
            document.getElementById("resumeOverlay")?.classList.add("hidden");
            // document.getElementById("resumeOverlay")?.classList.remove("scaleVerticalOut");
            document.getElementById("resumeOverlayContainer")?.classList.remove("fadeOut_animation2");            
        }, 3000);
    }

  return (

    <div 
    id="resumeOverlayContainer"
    className="fixed h-[100vh] w-[100vw] z-[99] hidden items-center justify-center 
    overflow-hidden bg-[rgba(2,8,18,0.79)]">
        <div className="w-[100vw] h-[200px]
        hidden flex-col items-center justify-center  overflow-hidden"
        id="resumeOverlay">
        
            <div className="w-auto flex flex-col items-center justify-center gap-8 relative">
                <div className="flex flex-col gap-4 items-center">
                    
                    <div className="px-4 py-1 font-base w-full
                    bg-[#18191c] rounded-full focus:opacity-95 hover:opacity-95
                    text-[min(0.9em,1rem)] flex flex-row gap-2 items-center justify-between">
                        <span>Simple version</span>
                        <a href="./documents/Resume-sherif-khodeir-prof-2024.pdf" target="_blank"
                        className="text-white flex flex-row items-center gap-2">
                            <span className="font-extralight">Open</span>
                            <span className="bg-black rounded-full p-[6px]">
                                <NewWindowIcon color="#ffff"/>
                            </span>
                        </a>
                        <a href="./documents/Resume-sherif-khodeir-prof-2024.pdf" download="Resume-sherif-khodeir-prof-2024.pdf"
                        className="text-white flex flex-row items-center gap-2">   
                            <span className="font-extralight mt-[1px] ">Download</span>                     
                            <span className="bg-black rounded-full p-[6px]">
                                <DownloadIcon color="#ffff"/>
                            </span>
                        </a>
                    </div>

                    <div className="px-4 py-1 font-base w-full
                    bg-[#18191c] rounded-full focus:opacity-95 hover:opacity-95
                    text-[min(0.9em,1rem)] flex flex-row gap-2 items-center justify-between">
                        <span className="gradient_text_1 font-normal">Colored version</span>
                        <a href="./documents/Resume-sherif-khodeir-grph-2024.pdf" target="_blank"
                        className="text-white flex flex-row items-center gap-2 gradient_text_1">
                            <span className="font-normal">Open</span>
                            <span className="bg-black rounded-full p-[6px]">
                                <NewWindowIcon color="#39D0B7"/>
                            </span>
                        </a>
                        <a href="./documents/Resume-sherif-khodeir-grph-2024.pdf" download="Resume-sherif-khodeir-grph-2024.pdf"
                        className="text-white flex flex-row items-center gap-2 ml-2 gradient_text_1">   
                            <span className="font-normal mt-[1px] ">Download</span>                     
                            <span className="bg-black rounded-full p-[6px]">
                                <DownloadIcon color="#39D0B7"/>
                            </span>
                        </a>
                    </div>

              
                </div>
                <div className="absolute bottom-[-2rem] cursor-pointer underline" onClick={hideResumeOverlay}>
                    close
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ResumeOverlay