"use client"
import React, { useEffect, useState } from 'react'

import classes from "./progressCircle.module.css"
import { usePathname } from 'next/navigation';


    









const ProgressCircle = () => {

    const isCustomComponent = usePathname().split("/customComponents")[1];
    let progress = 0;
    const [done, setDone] = useState(true);
    let intervalTimer = null;


    useEffect(()=> {
        const testingGroundButtons = document.querySelectorAll(".progressbarCircle_testing-ground button");

        function enableProgressBar () {
        
            const progressBar = document.querySelector(".progressbarCircle");

            // accessibility, css selectors/values
            progressBar?.setAttribute("role", "progressbar"); /* css selector */
            progressBar?.setAttribute("aria-valuenow", progress); /* css value */
            progressBar?.setAttribute("aria-live", "polite");
        }

        // simulation
        
        // console.log(testingGroundButtons);
        testingGroundButtons?.forEach((button) => {
            button.addEventListener("click", (e) => {
                // if element is not a button return
                // if (!e.target.closest("button")) return;
                    // console.log(e.target);
                    progress = e.target.dataset.progress;
                    // progressBar.setAttribute("aria-valuenow", progress);
                    // progressBar.style.setProperty("--progress", progress+ "%")
                    // console.log(progress);
                    simulateProgress(progress);
                })
        });

        function updateProgress(progress) {
            const progressBar = document.querySelector(".progressbarCircle");
            progressBar.setAttribute("aria-valuenow", progress);
            progressBar.style.setProperty("--progress", progress + "%");
        }


        // for simulating stuff when we click the buttons
        // const testingGround = document.querySelector(".progressbarCircle_testing-ground");
        let interval = null;
        function simulateProgress(newProgressValue) {
            clearInterval(interval);
            if (newProgressValue === "fake-upload") {
              simulateUpload();
            } else {
              updateProgress(newProgressValue);
            }
        }


        function simulateUpload() {
            // aria-busy prevents it from announcing every change as it keeps updating the progress
            // make sure to set it false once the progress is finished
            const progressBar = document.querySelector(".progressbarCircle");
            progressBar.setAttribute("aria-busy", "true");
            let progress = 0;
            updateProgress(progress);
        
            intervalTimer = setInterval(() => {
            progress += 1;
            updateProgress(progress);
            if (progress === 100) {
                // probably want something to catch errors and also have this set to false then too
                progressBar.setAttribute("aria-busy", "false");
                clearInterval(intervalTimer);
            }
            }, 100);
        }
          

        if (!isCustomComponent) {
            simulateUpload();
            // setInterval(()=> {
            //     updateProgress(0);
            //     setTimeout(()=> {
            //         simulateUpload();
            //     }, 2000);
            // }, 15000);
        }

        enableProgressBar();


       

    },[]);

    
    

  return (
    <section>
        <div className="progressbarCircle">
            
        </div>

        {isCustomComponent && (
        <div className="progressbarCircle_testing-ground">
            <h2>Testing ground</h2>
            <button data-progress="0">0%</button>
            <button data-progress="25">25%</button>
            <button data-progress="57">57%</button>
            <button data-progress="82">82%</button>
            <button data-progress="100">100%</button>
            <button data-progress="fake-upload">Simulate Upload</button>
        </div>
        )}

    </section>
  )
}

export default ProgressCircle