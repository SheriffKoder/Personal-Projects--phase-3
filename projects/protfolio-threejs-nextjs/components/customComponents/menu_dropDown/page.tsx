
"use client"
import React, { useEffect, useState } from "react"
import classes from "./page.module.css";


const DropDownMenu = () => {

    const colors = {
        menuBg: "#F0F2F2",
        menuText: "#0F1111",
        menuBorder: "#D5D9D9",
        listBg: "#f0f2f2e7"

    }

    
    function openMenu () {

        // want to animate the 2nd menu which will appear in the page overlay componentView
        const select = document.querySelector(".cst_dropDownMenu_sort_bar");
        const list = document.querySelector(".cst_dropDownMenu_list");
        const arrow = document.querySelector(".cst_dropDownMenu_arrow");
    

        list?.classList.remove("hidden");
        list?.classList.add("flex");
        arrow?.classList.add("cst_dropDownMenu_rotate180");
        list?.classList.add("cst_dropDownMenu_fadeIn");
        list?.classList.remove("cst_dropDownMenu_fadeOut");
        // select?.classList.toggle("cst_dropDownMenu_focused");
        
    }
    
    function closeMenu () {
        // want to animate the 2nd menu which will appear in the page overlay componentView
        const select = document.querySelector(".cst_dropDownMenu_sort_bar");
        const list = document.querySelector(".cst_dropDownMenu_list");
        const arrow = document.querySelector(".cst_dropDownMenu_arrow");
    
        list?.classList.remove("flex");
        list?.classList.add("hidden");
        arrow?.classList.remove("cst_dropDownMenu_rotate180");
        list?.classList.add("cst_dropDownMenu_fadeIn");
        list?.classList.remove("cst_dropDownMenu_fadeOut");
        // select?.classList.toggle("cst_dropDownMenu_focused");
    
    
    }
    
    // function closeMenu () {
    //     const select = document.querySelector(".cst_dropDownMenu_sort_bar");
    //     const list = document.getElementById("cst_dropDownMenu_list");
    //     const arrow = document.querySelector(".cst_dropDownMenu_arrow");

    //     if (!list?.classList.contains("cst_dropDownMenu_hide")) {
    
    //         arrow?.classList.toggle("cst_dropDownMenu_rotate180");
    //         list?.classList.remove("cst_dropDownMenu_fadeIn");
    //         list?.classList.add("cst_dropDownMenu_fadeOut");
    //         select?.classList.toggle("cst_dropDownMenu_focused");
    //             setTimeout(()=> {
    //                 list?.classList.add("cst_dropDownMenu_hide");
    
    //         }, 250);
    //     }
    // }

    let items = ["item1", "item2", "item3", "item4"];


  return (
        <span className="_allContainer text-[#0F1111]">

            <span className="_container">
                <div id="" 
                onMouseEnter={openMenu} onClick={openMenu}
                className={`relative cursor-pointer py-[0.3rem] px-[0.7rem] cst_dropDownMenu_sort_bar
                bg-[#F0F2F2] w-[170px]
                rounded-[8px] border border-[${colors.menuBorder}] 
                text-[0.8rem] py-[0.3rem] menu_boxShadow
                hover:bg-[#D5D9D9] hover:text-[#000000]
                `}
                >
                    Select
                    <div className="top-[38%] absolute right-[0.5rem] mt-[-2px] cst_dropDownMenu_arrow"
                    id="">
                        <svg width="10px" height="10px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-down-fill">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                          </svg>
                    </div>
                </div>
            </span>
            
            <ul id=""
            className={`cst_dropDownMenu_list rounded-[8px] border border-[${colors.menuBorder}] 
            text-[0.8rem] py-[0.3rem] menu_boxShadow
            cst_dropDownMenu_fadeOut hidden
            list-none absolute flex-col bg-[#f0f2f2e7] w-[170px] mt-[0.5rem]`}>
                
                {items.map((item, index) => (
                    <li id={index === 0 ? "first" : ""} 
                    onClick={closeMenu}
                    className={`py-[0.3rem] ${index !== 0 ? "border-t border-[#e2e2e2]" : "" }`}>
                        <div className="w-full cursor-pointer rounded-[5px] px-[0.6rem] py-[0.3rem]
                        hover:bg-[#D5D9D9] hover:text-[#326fff]">
                            {item}
                        </div>
                    </li>
                ))}
                    
                
            </ul>
        </span>

  )
}

export default DropDownMenu