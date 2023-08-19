

//shop.js responsible to display html on user's get requests


const express = require("express");
const router = express.Router();
const path = require("path");

const RootPath = require("../utl/path.js")



router.get("/", (req, res, next) => {

    //different ways of accessing the html
    //__dirname start looking from "this" file's directory so use ".." to go up
    //res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
    //or use the utl file that returns the project directory directly
    res.sendFile(path.join(RootPath, "views", "shop.html"));



});

router.get("/product-list", (req, res, next) => {

    res.sendFile(path.join(RootPath, "views", "product_not_added.html"));

});



module.exports = router;
