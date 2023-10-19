"use strict";
// const express = require("express");
// const router = express.Router();
const shopRouter = require("express").Router();
const shopController = require("../controllers/shop.js");
// router.get("/", shopController.getIndex);
shopRouter.get("/products", shopController.getProducts);
shopRouter.get("/products/:productId", shopController.getProduct);
//7
shopRouter.post("/cart", shopController.postCart);
shopRouter.post("/changeQuantity", shopController.changeQuantity);
shopRouter.post("/cart-delete-item", shopController.postCartDeleteProduct);
shopRouter.post("/create-order", shopController.postOrder);
//7
shopRouter.get("/cart", shopController.getCart);
//8
shopRouter.get("/orders", shopController.getOrders);
module.exports = shopRouter;
