"use client"
import React, { useEffect } from 'react'

import classes from "./progressCircle.module.css"


function enableProgressBar () {
    const progressBar = document.querySelectorAll(".progressbarCircle")[1];

    let progress = 0;

    // accessibility
    progressBar?.setAttribute("role", "progressbar"); /* css selector */
    progressBar?.setAttribute("aria-valuenow", "0"); /* css value */
    progressBar?.setAttribute("aria-live", "polite");

    // simulation
    const testingGround = document.querySelectorAll(".progressbarCircle_testing-ground")[1];
    
    console.log(testingGround);
    // testingGround?.forEach((button) => {
    //     button.addEventListener("click", (e) => {
    //         // if element is not a button return
    //         // if (!e.target.closest("button")) return;
           
    //             progress = e.target.dataset.progress;
    //             console.log(progress);
    //     })
    // });

}



const progressCircle = () => {

    useEffect(()=> {

        enableProgressBar();

       

    },[]);

    
    

  return (
    <section>
        <div className="progressbarCircle">
            
        </div>

        <div className="progressbarCircle_testing-ground">
            <h2>Testing ground</h2>
            <button data-progress="0">0%</button>
            <button data-progress="25">25%</button>
            <button data-progress="57">57%</button>
            <button data-progress="82">82%</button>
            <button data-progress="100">100%</button>
            <button data-progress="fake-upload">Simulate Upload</button>

        </div>

    </section>
  )
}

export default progressCircle