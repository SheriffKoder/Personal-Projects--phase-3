

const bodyNoScroll = function () {
    let body = document.querySelector("body");

    body!.style.overflow = "hidden";

}


const bodyScroll = function () {
    let body = document.querySelector("body");
    body!.style.overflow = "auto";

}

const showEdit = function (currentPage:string) {

    let propertyEdit_component = document.getElementById(`property${currentPage}__container`);
    let signUpComponent = document.getElementById("signUp__container");
    let LoginComponent = document.getElementById("Login__container");

    if (signUpComponent?.style.display === "flex") {
      signUpComponent!.style.display = "none";
    }

    if (LoginComponent?.style.display === "flex") {
      LoginComponent!.style.display = "none";
    }

    propertyEdit_component!.style.display = "flex";

    document.querySelector(".nav-user-menu")?.classList.remove("flex");
    document.querySelector(".nav-user-menu")?.classList.add("hidden");

}
  

const hideEdit = function (currentPage: string) {
  let propertyEdit_component = document.getElementById(`property${currentPage}__container`);

  propertyEdit_component!.style.display = "none";
}


const hideDropDownMenu = function () {
  document.querySelector(".nav-user-menu")?.classList.remove("flex");
  document.querySelector(".nav-user-menu")?.classList.add("hidden");
}

const hideSignUp = function () {
  let signUpComponent = document.getElementById("signUp__container");

  signUpComponent!.style.display = "none";
  bodyScroll();
}


const hideLogin = function () {
  let LoginComponent = document.getElementById("login__container");

  LoginComponent!.style.display = "none";
  bodyScroll();

}

//custom scroll behavior used in the nav component
const scrollScroll = () => {

  const body = document.querySelector("html");

  if (sessionStorage.theme === "light") {
    body?.classList.remove("hide_scroll_light");
    body?.classList.remove("hide_scroll_dark");

    body?.classList.add("light_scroll");

  }
  
  if (sessionStorage.theme === "dark") {
    body?.classList.remove("hide_scroll_dark");
    body?.classList.remove("hide_scroll_light");

    body?.classList.add("dark_scroll");

  }


  setTimeout(()=> {
    // body?.classList.remove("dark_scroll");
    // body?.classList.remove("light_scroll");
    if (sessionStorage.theme === "light") {
      body?.classList.remove("light_scroll");
      body?.classList.add("hide_scroll_light");
  
    }
    
    if (sessionStorage.theme === "dark") {
      body?.classList.remove("dark_scroll");
      body?.classList.add("hide_scroll_dark");
  
    }
  },3000);

}



export {bodyNoScroll, bodyScroll, showEdit, hideEdit, hideDropDownMenu, hideSignUp, hideLogin, scrollScroll};