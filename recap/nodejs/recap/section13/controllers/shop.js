
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
