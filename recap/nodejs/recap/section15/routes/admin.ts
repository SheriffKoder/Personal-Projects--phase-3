
// const path = require("path");
// const express = require("express");
// const router = express.Router();
// const pathJSrootDir = require("../util/path.js");

//TS required to use different names in admin/shop route files
//for the router definitions
const adminRouter = require("express").Router();

const adminController = require("../controllers/admin.js");

//10
const isAuthAdmin = require("../middleware/is-auth.js");


// /admin/add-product => GET
adminRouter.get("/add-product", isAuthAdmin, adminController.getAddProduct);

// /admin/add-product => POST
adminRouter.post("/add-product", isAuthAdmin, adminController.postAddProduct);

//
adminRouter.get("/products", isAuthAdmin, adminController.getAdminProducts);

//
adminRouter.get("/edit-product/:productId", isAuthAdmin, adminController.getEditProduct);

//
adminRouter.post("/edit-product", isAuthAdmin, adminController.postEditProduct);

//
adminRouter.post("/delete-product", isAuthAdmin, adminController.postDeleteProduct);

module.exports = adminRouter;
