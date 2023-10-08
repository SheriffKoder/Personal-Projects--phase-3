
const HoverLink = document.querySelector(".login-link");
const HoverMenu = document.querySelector("#login-link--hover-menu");
const CloseMenu = document.querySelector(".mobile-menu-close");
const OpenMenu = document.querySelector(".main-navigation__List-1-link-small");


//value to activate if user hovered over the menu
let menuHovered = false;
let mobileHovered = false;



//FIXED: when resizing to desktop while menu opened, close the menu and false the mobileHovered as if we closed it
window.addEventListener("resize",() => {
    console.log(window.outerWidth);
    if (window.outerWidth > 900 && mobileHovered == true) {
        HoverMenu.style.display = "none";
        document.querySelector("main").classList.remove("dark");
        mobileHovered = false;
    } else if (window.outerWidth < 900) {
            HoverMenu.style.display = "none";
            document.querySelector("main").classList.remove("dark");
        
    }

});




//FIXED: resizing to desktop while animation slideOut not finished, will keep the slideOut till come back again to mobile
window.addEventListener("resize",() => {
    if (window.outerWidth > 900 ) {
        if (HoverMenu.classList.contains("slideOutRight")) {
            HoverMenu.classList.remove("slideOutRight");
        }        
    }
});



// mouse enter the link, menu shows
HoverLink.addEventListener("mouseenter", () => {
    if (window.outerWidth > 900 ) {
        HoverMenu.style.display = "flex";
        document.querySelector("main").classList.add("dark");
    }
});


//mouse leave the link, menu hide
HoverLink.addEventListener("mouseleave", () => {

    //but wait for user to hover the menu, if left link and menu not hovered, hide menu
    timer = setTimeout(() => {
        if (!menuHovered) {
            HoverMenu.style.display = "none";
            document.querySelector("main").classList.remove("dark");   
        }
    }, 1000);
})

HoverMenu.addEventListener("mouseenter", () => {
    menuHovered = true;
})

//hide menu when it is left, and set the variable to false again
HoverMenu.addEventListener("mouseleave", () => {
    if (!mobileHovered && window.outerWidth > 900) {
    HoverMenu.style.display = "none";
    document.querySelector("main").classList.remove("dark");
    menuHovered = false;
    }

})




//mobile menu
OpenMenu.addEventListener("click", () => {
    HoverMenu.style.display = "flex";

    mobileHovered = true;
    if (HoverMenu.classList.contains("slideOutRight")) {
        HoverMenu.classList.remove("slideOutRight");
    }
    HoverMenu.classList.add("slideInRight");
    document.querySelector("main").classList.add("dark");

});

CloseMenu.addEventListener("click", () => {

    HoverMenu.classList.remove("slideInRight");
    HoverMenu.classList.add("slideOutRight");
    document.querySelector("main").classList.remove("dark");
    setTimeout(() => {
        // HoverMenu.style.display = "none";
    }, 1000);

});


//click on the page itself to close the menu
document.querySelector("main").addEventListener("click", () => {
    HoverMenu.classList.remove("slideInRight");
    HoverMenu.classList.add("slideOutRight");

    if (mobileHovered) {
        document.querySelector("main").classList.remove("dark");
        setTimeout(() => {
            HoverMenu.style.display = "none";

        }, 1000);    
    }
    else {
        HoverMenu.style.display = "none";   
        document.querySelector("main").classList.remove("dark");
    }
});