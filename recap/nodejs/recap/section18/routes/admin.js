"use strict";
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
//11
const { body } = require("express-validator");
// /admin/add-product => GET
adminRouter.get("/add-product", isAuthAdmin, adminController.getAddProduct);
// /admin/add-product => POST
adminRouter.post("/add-product", [
    body("productTitle", "Please enter a product title, minimum 3 characters")
        .isString()
        .isLength({ min: 3 })
        .trim(),
    body("productPrice", "Please enter a product price, in numbers")
        .isFloat(),
    body("productImage", "Please enter a valid url for the product's image")
        .isURL(),
    body("productAvailability", "Please enter the product's availability count in numbers")
        .isNumeric()
        .isLength({ min: 1 }),
    body("productIntro", "Please enter a more descriptive introduction about the product")
        .isString()
        .isLength({ min: 10, max: 30 }),
    body("productDescriptionText", "Please enter a more descriptive description about the product")
        .isString()
        .isLength({ min: 20 }),
    body("productFeature1", "please use a shorter text")
        .isString()
        .isLength({ max: 30 }),
    body("productFeature2", "please use a shorter text")
        .isString()
        .isLength({ max: 30 }),
    body("productFeature3", "please use a shorter text")
        .isString()
        .isLength({ max: 30 }),
    body("productWeight", "please enter weight in numbers")
        .isFloat(),
    body("productSizeLength", "please enter length in numbers")
        .isFloat(),
    body("productSizeHeight", "please enter height in numbers")
        .isFloat(),
    body("productSizeWidth", "please enter width in numbers")
        .isFloat(),
], isAuthAdmin, adminController.postAddProduct);
//
adminRouter.get("/products", isAuthAdmin, adminController.getAdminProducts);
//
adminRouter.get("/edit-product/:productId", isAuthAdmin, adminController.getEditProduct);
//
adminRouter.post("/edit-product", [
    body("productTitle", "Please enter a product title, minimum 3 characters")
        .isString()
        .isLength({ min: 3 })
        .trim(),
    body("productPrice", "Please enter a product price, in numbers")
        .isFloat(),
    body("productImage", "Please enter a valid url for the product's image")
        .isURL(),
    body("productAvailability", "Please enter the product's availability count in numbers")
        .isNumeric()
        .isLength({ min: 1 }),
    body("productIntro", "Please enter a more descriptive introduction about the product")
        .isString()
        .isLength({ min: 10, max: 30 }),
    body("productDescriptionText", "Please enter a more descriptive description about the product")
        .isString()
        .isLength({ min: 20 }),
    body("productFeature1", "please use a shorter text")
        .isString()
        .isLength({ max: 30 }),
    body("productFeature2", "please use a shorter text")
        .isString()
        .isLength({ max: 30 }),
    body("productFeature3", "please use a shorter text")
        .isString()
        .isLength({ max: 30 }),
    body("productWeight", "please enter weight in numbers")
        .isFloat(),
    body("productSizeLength", "please enter length in numbers")
        .isFloat(),
    body("productSizeHeight", "please enter height in numbers")
        .isFloat(),
    body("productSizeWidth", "please enter width in numbers")
        .isFloat(),
], isAuthAdmin, adminController.postEditProduct);
//
adminRouter.post("/delete-product", isAuthAdmin, adminController.postDeleteProduct);
module.exports = adminRouter;
