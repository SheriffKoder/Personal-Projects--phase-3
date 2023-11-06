
// const express = require("express");
// const router = express.Router();

const shopRouter = require("express").Router();

const shopController = require("../controllers/shop.js");

//10
const isAuthShop = require("../middleware/is-auth.js");



// router.get("/", shopController.getIndex);

shopRouter.get("/products", shopController.getProducts);

shopRouter.get("/products/:productId", shopController.getProduct);


//7
shopRouter.post("/cart", isAuthShop, shopController.postCart);
shopRouter.post("/changeQuantity", isAuthShop, shopController.changeQuantity);
shopRouter.post("/cart-delete-item", isAuthShop, shopController.postCartDeleteProduct);
// shopRouter.post("/create-order", isAuthShop, shopController.postOrder);

//7
shopRouter.get("/cart", isAuthShop, shopController.getCart);

//8
shopRouter.get("/orders", isAuthShop, shopController.getOrders);

//12.1
shopRouter.get("/orders/:orderId", isAuthShop, shopController.getInvoice);


//13.1
shopRouter.post("/checkout", isAuthShop, shopController.getCheckout);
shopRouter.get("/checkout/success", isAuthShop, shopController.getCheckoutSuccess);
shopRouter.get("/checkout/cancel", isAuthShop, shopController.getCheckout);


module.exports = shopRouter;