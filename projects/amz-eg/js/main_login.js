
//Javascript version
/*
$(function(){
const signup_radio = document.querySelector("#radio_signup");
const signup_content = document.querySelector("#signup_content");
const signup_container = document.querySelector("#signup_container");

const login_radio = document.querySelector("#radio_login");
const login_content = document.querySelector("#login_content");
const login_container = document.querySelector("#login_container");

const sign_click = () => {

    let signupChecked = signup_radio.checked;
    let loginChecked = login_radio.checked;
    let currentSelection;

    if (signupChecked && !loginChecked) {
        //Signup
        $("#signup_content").stop().slideDown(300);
        // signup_content.style.display = "block";
        signup_container.style.backgroundColor = "#fff";
        $("#login_content").stop().slideUp(300);
        // login_content.style.display = "none";
        login_container.style.backgroundColor = "var(--sort-button-grey)";   
    } else {
        $("#signup_content").stop().slideUp(300);
        // signup_content.style.display = "none";
        signup_container.style.backgroundColor = "var(--sort-button-grey)";
        $("#login_content").stop().slideDown(300);
        // login_content.style.display = "block";
        login_container.style.backgroundColor = "white";   
    }
    


}


signup_radio.addEventListener("click", sign_click);
login_radio.addEventListener("click", sign_click);


})
*/

$ (function() {


    $("label").on("click", function () {

        let current;
        let other;
        if ($(this).attr("for") === "radio_signup") {
            current = "signup";
            other = "login";
        } else {
            other = "signup";
            current = "login";

        }

        $(`#${current}_content`).stop().slideDown(400);
        $(`#${other}_content`).stop().slideUp(400);
        $(`#${current}_container`).css("background-color", "white");
        $(`#${other}_container`).css("background-color", "var(--sort-button-grey)");

    }) 



})
