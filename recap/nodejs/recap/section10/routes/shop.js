

//shop.js responsible to display html on user's get requests


const express = require("express");
const router = express.Router();
const path = require("path");


const shopController = require("../controllers/shop.js")


router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router.get("/checkout", shopController.getCheckout);

router.get("/cart", shopController.getCart);

router.post("/cart-delete-item", shopController.postCartDeleteProduct);

router.post("/cart", shopController.postCart);

router.get("/orders", shopController.getOrders);



module.exports = router;
