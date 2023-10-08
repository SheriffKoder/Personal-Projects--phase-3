
const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shop.js");

// router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);



module.exports = router;