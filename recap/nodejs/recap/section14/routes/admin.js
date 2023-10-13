
// const path = require("path");
const express = require("express");
const router = express.Router();
// const pathJSrootDir = require("../util/path.js");

const adminController = require("../controllers/admin.js");



// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/add-product => POST
router.post("/product", adminController.postAddProduct);

//
router.get("/products", adminController.getAdminProducts);

//
router.get("/edit-product/:productId", adminController.getEditProduct);

//
router.post("/edit-product", adminController.postEditProduct);

//
router.post("/delete-product", adminController.postDeleteProduct);

module.exports = router;
