

//shop.js responsible to display html on user's get requests


const express = require("express");
const router = express.Router();
const path = require("path");

const RootPath = require("../utl/path.js")

//use exported variables from the admin.js route
const adminData = require("./admin.js");


router.get("/", (req, res, next) => {

    //different ways of accessing the html
    //__dirname start looking from "this" file's directory so use ".." to go up
    //res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
    //or use the utl file that returns the project directory directly
    //res.sendFile(path.join(RootPath, "views", "shop.html"));

    const products = adminData.products;
    res.render("shop", {prods: products, myTitle: "Shop page", path: "/", hasProducts: products.length > 0, productCSS: true, activeShop: true});




});




module.exports = router;
