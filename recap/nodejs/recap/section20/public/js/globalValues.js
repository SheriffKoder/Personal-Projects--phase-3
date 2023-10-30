



let selectedCountry = "EG";

let countryFlagIcon = document.querySelector(".globalCountryFlag");

let regionElementsObject = {
    urlExtSpans: document.querySelectorAll(".globalUrlExt"),
    currencySpans: document.querySelectorAll(".globalCurrency"),
    countrySpans: document.querySelectorAll(".globalCountry"),
    languageSpans: document.querySelectorAll(".globalLanguage"),
}

let regions = {
    US: {
        countryName: "United States", 
        ariaName: "U S", 
        countryCurrency: "USD", 
        countryLanguage: "English", 
        urlExt: "",
        deliveryFees: "2"
    },
    EG: {
        countryName: "Egypt", 
        ariaName: "Egypt", 
        countryCurrency: "EGP", 
        countryLanguage: "Arabic", 
        urlExt: ".eg",
        deliveryFees: 26,
    }
}


//Name
regionElementsObject.countrySpans.forEach(span => {
    span.innerText = regions[selectedCountry].countryName;
})
//US-flag-icon.png etc.
countryFlagIcon.style.cssText = 'background-image: url("../../img/'+selectedCountry+'-flag-icon.png")';

//currency USD, EGP etc.
regionElementsObject.currencySpans.forEach(span => {
    span.innerText = regions[selectedCountry].countryCurrency;
})

//Language text displayed English, Arabic etc.
regionElementsObject.languageSpans.forEach(span => {
    span.innerText = regions[selectedCountry].countryLanguage;
})


//Header logo .eg etc.
regionElementsObject.urlExtSpans.forEach(span => {
    span.innerText = regions[selectedCountry].urlExt;
})


//
document.querySelector("#header-logo").setAttribute("aria-label", `Amazon ${regions[selectedCountry].ariaName} homepage`);
document.querySelector("#header-logo--text").setAttribute("aria-label", `country selection, currently browsing amazon ${regions[selectedCountry].ariaName} shop`);
document.querySelector("#header-destination p").innerText = regions[selectedCountry].countryName;

if (document.querySelector(".deliveryFees")) {
    document.querySelector(".deliveryFees").innerText = regions[selectedCountry].deliveryFees;
}
