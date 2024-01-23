"use strict";
const express_car = require("express");
const router_car = express_car.Router();
const { body: body_car } = require("express-validator");
const carController = require("../controllers/car");
/////////////////////////////////////////////
//Routes
router_car.post("/new", [
    body_car("brand")
        .trim()
        .isLength({ min: 2 })
        .withMessage("Name should be more than 2 characters"),
    body_car("carModel")
        .trim()
        .isLength({ min: 1 })
        .withMessage("Car's Model should be at least than 1 characters"),
], carController.addCar);
router_car.patch("/edit", [
    body_car("brand")
        .trim()
        .isLength({ min: 2 })
        .withMessage("Name should be more than 2 characters"),
    body_car("carModel")
        .trim()
        .isLength({ min: 1 })
        .withMessage("Car's Model should be at least than 1 characters"),
], carController.editCar);
router_car.delete("/delete", carController.deleteCar);
/////////////////////////////////////////////
module.exports = router_car;
