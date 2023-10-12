
const mongoose = require('mongoose'); 

const ProductClassModel = require("../models/product.js");



exports.getProducts = (req, res, next) => {

    ProductClassModel.find()
    .then((products)=> {
        res.render("shop/all-products.ejs",{prods: products, myTitle: "All Products Page" });
    })
    .catch((err) => {
        console.log(err);
    });

};



exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;

    let starFunction = (rating) => {

        if (rating > 5 && rating < 0) {
            return "none";
        }

        else if (rating >=0 && rating <= 5) {
    
        const arr = ["none", "two", "three", "four", "five"];
    
        const x = rating.toString().split(".")[0];
        const y = rating.toString().split(".")[1];
        
        //rating 4.7
        //4 will be "four"
        //7 will be "half" , 2 will be ""
        const a = arr[x];
        const b = (y >= 5) ? "half" : "";
    
        return a+""+b;
        }
    
    }
    


    ProductClassModel.findById(prodId)
    .populate("userId", "name") //6
    .then((product)=> {
        res.render("shop/product-details", {product: product, myTitle: product.title, starFunction: starFunction});

    })
    .catch((err) => {
        console.log(err);
    });

}


//7.b
exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    const requestedCount = req.body.requestedCount;
    ProductClassModel.findById(prodId)
    .then(product => {
        return req.user.addToCart(product, requestedCount);
    })
    .then(result => {
        console.log("product added to cart");
        console.log(requestedCount);
        // res.redirect("/");

    })
}