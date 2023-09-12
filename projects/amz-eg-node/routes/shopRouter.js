
const express = require("express");
const router = express.Router();
const path = require("path");

const RootPath = require("../utl/path.js")
const shopController = require("../controllers/shopController.js")



router.get("/", shopController.getAllProducts);

// router.get("/cart", shopController.getCart);

// router.get("/:itemId", shopController.getItem);

router.get("/login", shopController.getLogin);

// router.get("/orders", shopController.getOrders);



module.exports = router;