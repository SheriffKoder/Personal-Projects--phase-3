

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


export {bodyNoScroll, bodyScroll, showEdit, hideEdit};