

let smallElementsArray = document.querySelectorAll("small");

console.log(smallElementsArray);
//(required), required*

smallElementsArray.forEach(tag => {
    
    if (tag.innerText.toString().includes("req") > 0) {
        // tag.style.color = "red;"
        // console.log(tag.innerText);
        tag.style.color = "var(--not-available-text)";
    }
});


const selector = document.querySelector("#productDepartment");
const section_electronics = document.querySelector("#productSection_Electronics");
const section_clothing = document.querySelector("#productSection_Clothing");


selector.addEventListener("change", (e)=> {
    let section =  e.target.value;

    if (section === "Electronics") {
        section_electronics.style.display = "inline";
        section_clothing.style.display = "none";

    } else if (section === "Clothing") {
            section_electronics.style.display = "none";
            section_clothing.style.display = "inline";
    } else {
        section_electronics.style.display = "none";
        section_clothing.style.display = "none";
    }

})