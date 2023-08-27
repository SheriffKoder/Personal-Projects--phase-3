
//Javascript version

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
        signup_content.style.display = "block";
        signup_container.style.backgroundColor = "#fff";
        login_content.style.display = "none";
        login_container.style.backgroundColor = "var(--sort-button-grey)";   
    } else {
        signup_content.style.display = "none";
        signup_container.style.backgroundColor = "var(--sort-button-grey)";
        login_content.style.display = "block";
        login_container.style.backgroundColor = "white";   
    }
    


}


signup_radio.addEventListener("click", sign_click);
login_radio.addEventListener("click", sign_click);




// $ (function() {





// })
