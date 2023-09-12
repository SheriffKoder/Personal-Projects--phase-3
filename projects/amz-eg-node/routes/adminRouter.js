
const express = require("express");
const router = express.Router();
const path = require("path");

const RootPath = require("../utl/path.js")
const adminController = require("../controllers/adminController.js")

router.get("/admin-products", adminController.getAdminProducts);


exports.router = router;