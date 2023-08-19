

//admin.js is responsible for 
//displaying the add-product page on get
//displaying something when the form posts to product-list


const express = require("express");
const router = express.Router();
const path = require("path");   //needed for __dirname

const RootPath = require("../utl/path.js")



router.get("/admin/add-product", (req, res, next) => {

    res.sendFile(path.join(RootPath, "views", "add-product.html"));

});



router.post("/admin/product-list", (req, res, next) => {

    res.send(`<h1>The Added Product is : ${req.body["productAdded"]}<h1>`);

});


module.exports = router;
