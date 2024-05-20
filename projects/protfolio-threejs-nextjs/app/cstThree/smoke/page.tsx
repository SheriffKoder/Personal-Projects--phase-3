"use client"
import {particles} from "@/app/cstThree/smoke/smoke"
import {GUIFunction} from "@/app/cstThree/smoke/dat.gui.min.js"
import { useEffect } from "react";


function Smoke() {

  useEffect(()=> {
    particles();

  },[]);

  return (
    // <>
    <div className="w-full h-full relative">
      <canvas className="h-full w-full absolute top-0 left-0 z-0"></canvas>
        <section className="h-full w-full absolute top-0 left-0 z-1" id="mainContent">
            {/* Hello World */}
            <div className="flex h-full w-full items-center justify-center 
            font-semibold text-5xl color-white uppercase gap-2">
              <span className="">Welcome to your</span>
              <span className="gradient_text_1">Website</span>
              
            </div>
        </section>
      </div>

    // </>

  );
}

export default Smoke;