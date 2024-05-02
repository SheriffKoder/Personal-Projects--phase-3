

//admin.js is responsible for 
//displaying the add-product page on get
//displaying something when the form posts to product-list


const express = require("express");
const router = express.Router();
const path = require("path");   //needed for __dirname

const RootPath = require("../util/path.js")


const adminController = require("../controllers/admin.js");

router.get("/add-product", adminController.getAddProduct);

router.get("/products", adminController.getProducts);

router.post("/product", adminController.postAddProduct);

router.get("/edit-product/:productId", adminController.getEditProduct);

router.post("/edit-product", adminController.postEditProduct);

router.post("/delete-product", adminController.postDeleteProduct);


module.exports = router;

