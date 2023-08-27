
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



    const login_password_container = $(".login__password--container--wrapper");
    const login_email_continue_button = $("#login__email--continue");
    const login_email_container = $(".login__email--container--wrapper");
    const login_password_change_number_button = $(".login__password--current-phone--change");
    const email_input = $("#login__email--field");
    const login_password_number_view = $(".login__password--current-phone--number");





    ////////////////////////////////////////////////////////////////////////
    //validate the email/phone field

    const patterns = {
        telephone: /^\d{11}$/ ,         // only, 11 digits
        password: /^[\w@-]{8,20}$/,     //the pattern is repeated, looking for (a-z A-Z also 0-9 and _)or @ or -
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})\.?([a-z]{2,8})?$/               //also dots \.
               // domain with . - .. @ .. domain .. dot .. com ..  .uk(optional)
    };

    function validEmail(input) {
        var regex = patterns["email"];
        return regex.test(input);
    }

    function validPhone(input) {
        var regex = patterns["telephone"];
        return regex.test(input);
    }

    email_input.on("blur", function () {

        const input = $(this).val();

        if(!validEmail(input) && !validPhone(input)) {
            $(this).css("border", "1px solid red");
            login_email_continue_button;
        } else {
            $(this).css("border", "1px solid green");
            ////////////////////////////////////////////////////////////////////////
            //flip through the email and password fields
            login_email_continue_button.on("click", function () {
                login_password_container.stop().fadeIn(700);
                login_email_container.stop().css("display", "none");
            });

            login_password_change_number_button.on("click", function () {
                login_email_container.stop().fadeIn(700);
                login_password_container.stop().css("display", "none");
            });
            ////////////////////////////////////////////////////////////////////////
            


            login_password_number_view.empty().text(`${input}`);

        }
    })





})
