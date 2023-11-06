"use strict";
//13
const deleteProduct = (btn) => {
    console.log(btn);
    //want to give a request to /admin/product/productId 
    //as in the router params
    if (btn.parentNode) {
        //get buttons, prodId, csrfToken, parent element
        //be aware we have many buttons on the page
        //so will look for this buttons parent element
        const prodIdElement = btn.parentNode.querySelector("[name=productId]");
        let prodId;
        (prodIdElement) ? prodId = prodIdElement.value : "";
        console.log(prodId);
        const csrfElement = btn.parentNode.querySelector("[name=_csrf]");
        let csrf;
        (csrfElement) ? csrf = csrfElement.value : "";
        console.log(csrf);
        const productElement = btn.parentNode.parentNode;
        console.log("productElement");
        console.log(productElement);
        //in the headers we can encode our csrf token
        //the csrf token looks in the req body as well as 
        //the query parameters and the headers, so we could add it there
        //you can find all the keys will be looked in the csurf Github docs
        if (csrf) {
            //fetch
            fetch("/admin/products/" + prodId, {
                method: "DELETE",
                headers: {
                    "csrf-token": csrf
                }
            })
                .then((result) => {
                //response body
                return result.json(); //to display message on user's browser console
            })
                .then((data) => {
                console.log(data);
                if (productElement === null || productElement === void 0 ? void 0 : productElement.parentNode) {
                    // productElement.remove(); //will work on all modern browsers but not IE
                    productElement.parentNode.removeChild(productElement); //will work on all modern browsers
                }
            });
        }
    }
};
