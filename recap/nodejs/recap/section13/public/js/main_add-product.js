

//Set all required text in <small> tags to to red
let smallElementsArray = document.querySelectorAll("small");

//console.log(smallElementsArray);
//(required), required*

smallElementsArray.forEach(tag => {
    
    if (tag.innerText.toString().includes("req") > 0) {
        // tag.style.color = "red;"
        // console.log(tag.innerText);
        tag.style.color = "var(--not-available-text)";
    }
});

//View related select section depending on the selected department
const DepartmentSelect = document.querySelector("#productDepartment");
const SelectSection_Electronics = document.querySelector(".productSection_Electronics__container");
const SelectSection_Clothing = document.querySelector(".productSection_Clothing__container");


DepartmentSelect.addEventListener("change", (e)=> {
    let section =  e.target.value;

    if (section === "Electronics") {
        SelectSection_Electronics.style.display = "inline";
        SelectSection_Clothing.style.display = "none";

    } else if (section === "Clothing") {
        SelectSection_Electronics.style.display = "none";
        SelectSection_Clothing.style.display = "inline";
    } else {
        SelectSection_Electronics.style.display = "none";
        SelectSection_Clothing.style.display = "none";
    }

});