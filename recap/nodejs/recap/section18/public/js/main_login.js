
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

    /*// swap between the create-account and sign-in closed labels //*/
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
        // console.log($(`#${current}_content`));
        $(`#${other}_content`).stop().slideUp(400);
        $(`#${current}_container`).css("background-color", "white");
        $(`#${other}_container`).css("background-color", "var(--sort-button-grey)");

    }) 



    /*// sign-in area inputs validation //*/
    ////////////////////////////////////////////////////////////////////////

    const login_password_container = $(".login__password--container--wrapper");
    const login_email_continue_button = $("#login__email--continue");
    const login_email_container = $(".login__email--container--wrapper");
    const login_password_change_number_button = $(".login__password--current-phone--change");
    const email_input = $("#login__email--field");
    const login_password_number_view = $(".login__password--current-phone--number");
    const password_input = $("#login__password--field");


    const invalid_email_message = $(".login__email--field--message");
    const invalid_password_message = $(".login__password--field--message");
    const signIn_button = $("#login__password--login-link");

    const patterns = {
        telephone: /^\d{12}$/ ,         // only, 10 digits
        password: /^[\w@-]{8,20}$/,     //the pattern is repeated, looking for (a-z A-Z also 0-9 and _)or @ or -
        email: /^([a-zA-Z\d\.-\_]+)@([a-zA-Z\d-]+)\.([a-z]{2,8})\.?([a-z]{2,8})?$/,               //also dots \.
               // domain with . - .. @ .. domain .. dot .. com ..  .uk(optional)
        name: /^([a-zA-Z]{3,15})\s([a-zA-Z]{3,15})\s?([a-zA-Z]{3,15})?$/
    };

    //// validation functions to be used in the mouseleave events
    function validName(input) {
        var regex = patterns["name"];
        return regex.test(input);
    }

    function validEmail(input) {
        var regex = patterns["email"];
        return regex.test(input);
    }

    function validPhone(input) {
        var regex = patterns["telephone"];
        return regex.test(input);
    }

    function validPassword(input) {
        var regex = patterns["password"];
        return regex.test(input);
    }

    //// grey out the buttons of the sign-in area, email and the sign-in(which posts to form)
    login_email_continue_button.prop("disabled", true);
    signIn_button.prop("disabled", true);


    //// the event on the sign-in first input field
    // keyup to check "after" the character is inserted, gives time between entering and getting a response
    // keydown makes validation on the 12'th character instead of the 11'th
    email_input.on("blur keyup", function () {

        const input = $(this).val();

        if (validEmail(input) || validPhone(input)) {
            $(this).css("border", "1px solid green");
            invalid_email_message.text("");
            login_email_continue_button.prop("disabled", false);

            
        } else if(!validEmail(input) && !validPhone(input)) {
            invalid_email_message.text("the email should be in a valid format or a phone number of country code+10 digits");
            login_email_continue_button.prop("disabled", true);
            $(this).css("border", "1px solid red");



            ////////////////////////////////////////////////////////////////////////
            //flip through the email and password fields
            login_email_continue_button.on("click", function () {
                login_password_container.stop().fadeIn(700);
                login_email_container.stop().css("display", "none");
                login_email_continue_button.off();
            });

            login_password_change_number_button.on("click", function () {
                login_email_container.stop().fadeIn(700);
                login_password_container.stop().css("display", "none");
                login_password_change_number_button.off();
            });
            ////////////////////////////////////////////////////////////////////////
            
            login_password_number_view.empty().text(`${input}`);


        }
    })

    //// the event on the sign-in second input field
    password_input.on("blur keyup", function (e) {

        if(!validPassword($(this).val())) {
            invalid_password_message.text("password should be from 8-20 characters");
            $(this).css({"border": "1px solid red;"});
            signIn_button.prop("disabled", true);
            signIn_button.on("click", function (e) {
                e.preventDefault();
            })

        } else if(validPassword($(this).val())) {
            invalid_password_message.text("");
            $(this).css("border", "1px solid green");
            signIn_button.prop("disabled", false);
            signIn_button.on("click", function (e) {
                $(this).off();
            })

        }

    });
        

    /*// create-account area inputs validation //*/
    ////////////////////////////////////////////////////////////////////////

    const signup_name = $(".signup__name--field");
    const signup_email = $(".signup__email--field");
    const signup_tel = $("#signup__telephone--input");
    const signup_password = $(".signup__password--field");
    const signup_button = $("#signup__verify-button")
    const form = $(".main__signup__container__fields-container--signup--form");
    const invalid_name_message_signup = $(".signup__name--field--message");
    const invalid_email_message_signup = $(".signup__email--field--message");
    const invalid_password_message_signup = $(".signup__password--field--message");
    const invalid_tel_message_signup = $(".signup__telephone--field--message");

    //// Disable the verify-mobile-number button
    signup_button.prop("disabled", true);

    //// variables will be used, if all of them are true, then all inputs are valid
    //// so can enable the button and activate the form
    let passName;
    let passEmail;
    let passTel;
    let passPassword;

    //// the form should be disabled by default or if input is "re-put" incorrectly
    //// these functions will be called in the suitable response
    //// add the button disable/enable line as it is used multiple times
    function enable_button_form() {
        if (passName && passEmail && passTel && passPassword) {
            signup_button.prop("disabled", false);
            form.off(); //activate form, remove all events on the form, i.e the form.on(submit) that preventDefault
        }
    }

    function disable_button_form(element) {
        element.css("border", "1px solid red");
        signup_button.prop("disabled", true);
        form.on("submit", function (e) {
            e.preventDefault();
        })
    }

    //// check on the name field's value on blur/keyup
    //// the valid icon requires a normal text and positioning to be displayed as needed
    //// so will manually adjust to italic again and remove positioning
    //// if valid will store a value to be used when checking on all three values together to activate the button and form
    signup_email.on("blur keyup", function () {
        if (!validEmail($(this).val())) {
            invalid_email_message_signup.css({"font-style": "italic", "position": "static"}).text("the email should be in a valid format*");
            disable_button_form($(this));
        } else {
            $(this).css("border", "1px solid green");
            invalid_email_message_signup.css({"font-style": "normal", position: "relative"}).html("&#x2705;");
            passEmail = true;
            enable_button_form();
        }
    });

    signup_name.on("blur keyup", function () {
        if (!validName($(this).val())) {
            invalid_name_message_signup.css({"font-style": "italic", "position": "static"}).text("full name should consist of two or three separated names each more than 3 alphabetic characters*");
            disable_button_form($(this));
        } else {
            $(this).css("border", "1px solid green");
            invalid_name_message_signup.css({"font-style": "normal", position: "relative"}).html("&#x2705;");
            passName = true;
            enable_button_form();
        }
    });


    signup_tel.on("blur keyup", function () {
        if (!validPhone($(this).val())) {
            invalid_tel_message_signup.css({"font-style": "italic", "position": "static"}).text("the phone number should be the country code+10 digits*")
            disable_button_form($(this));
        } else {
            invalid_tel_message_signup.css({"font-style": "normal", position: "relative"}).html("&#x2705;");
            $(this).css("border", "1px solid green");
            passTel = true;
            enable_button_form();

        }

    });

    signup_password.on("blur keyup", function () {
        if (!validPassword($(this).val())) {
            invalid_password_message_signup.css({"font-style": "italic", "position": "static"}).text("password is less than 8 characters*");
            disable_button_form($(this));
        } else {
            invalid_password_message_signup.css({"font-style": "normal", position: "relative"}).html("&#x2705;");
            $(this).css("border", "1px solid green");
            passPassword = true;
            enable_button_form();
        }

    });


    /*// add and remove hover backgrounds and borders for buttons //*/
    //added to the css file
    ////////////////////////////////////////////////////////////////////////

    // const myButtons = [login_email_continue_button,signIn_button, signup_button];

    // myButtons.forEach(function(button) {
    //     button.on("mouseenter focus", function () {
    //         if (!$(this).prop("disabled")) {
    //             $(this).css({"background-color": "var(--button-yellow)", "border": "1px solid var(--button-yellow2)", "cursor": "pointer"});
    //         }
    //     });
    //     button.on("mouseleave blur", function () {
    //         if (!$(this).prop("disabled")) {
    //         $(this).css({"background-color": "var(--button-yellow2)", "border": "var(--button-yellow2)", "cursor": "pointer"});
    //         }
    //     });
    // });


})

