

//admin.js is responsible for 
//displaying the add-product page on get
//displaying something when the form posts to product-list


const express = require("express");
const router = express.Router();
const path = require("path");   //needed for __dirname

const RootPath = require("../utl/path.js")


const products = [];


router.get("/add-product", (req, res, next) => {

    //res.sendFile(path.join(RootPath, "views", "add-product.html"));

    //starting section 6: use templating engines to render html pages and give them variables
    res.render("add-product", {myTitle: "Add-product page", path: "/add-product", productCSS: true, formsCSS: true, activeProductAdd: true});

});



router.post("/product", (req, res, next) => {

    products.push({"recent_product": req.body.productAdded});
    console.log(req.body.productAdded);
    res.redirect("/");


});


exports.router = router;
exports.products = products;
