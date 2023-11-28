

const bodyNoScroll = function () {
    let body = document.querySelector("body");

    body!.style.overflow = "hidden";

}


const bodyScroll = function () {
    let body = document.querySelector("body");
    body!.style.overflow = "auto";

}


export {bodyNoScroll, bodyScroll};