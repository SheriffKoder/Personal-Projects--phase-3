
// const path = require("path");
// const express = require("express");
// const router = express.Router();
// const pathJSrootDir = require("../util/path.js");

//TS required to use different names in admin/shop route files
//for the router definitions
const adminRouter = require("express").Router();

const adminController = require("../controllers/admin.js");



// /admin/add-product => GET
adminRouter.get("/add-product", adminController.getAddProduct);

// /admin/add-product => POST
adminRouter.post("/product", adminController.postAddProduct);

//
adminRouter.get("/products", adminController.getAdminProducts);

//
adminRouter.get("/edit-product/:productId", adminController.getEditProduct);

//
adminRouter.post("/edit-product", adminController.postEditProduct);

//
adminRouter.post("/delete-product", adminController.postDeleteProduct);

module.exports = adminRouter;
