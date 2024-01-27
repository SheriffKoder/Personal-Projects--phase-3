
const express_car = require("express");
const router_car = express_car.Router();

const {body: body_car} = require("express-validator");

const carController = require("../controllers/car");


//API 0.2 - authentication jwt
//import the token validation middleware function, that checks on the incoming request
const isAuth = require("../middleware/isAuth");



/////////////////////////////////////////////
//Routes
router_car.post("/new", [
    
    // body_car("brand")
    // .trim()
    // .isLength({min:2})
    // .withMessage("Name should be more than 2 characters"),

    // body_car("carModel")
    // .trim()
    // .isLength({min:1})
    // .withMessage("Car's Model should be at least than 1 characters"),


], isAuth, carController.addCar);

router_car.patch("/edit", [
    
    body_car("brand")
    .trim()
    .isLength({min:2})
    .withMessage("Name should be more than 2 characters"),

    body_car("carModel")
    .trim()
    .isLength({min:1})
    .withMessage("Car's Model should be at least than 1 characters"),


], isAuth, carController.editCar);


router_car.delete("/delete", isAuth, carController.deleteCar);


//car checks routes
router_car.patch("/check/new", [
    
    body_car("title")
    .trim()
    .isLength({min:2})
    .withMessage("Title should be more than 2 characters"),

    // body_car("carModel")
    // .trim()
    // .isLength({min:1})
    // .withMessage("Car's Model should be at least than 1 characters"),


], isAuth, carController.newCheck);

router_car.patch("/check/edit", [
    
    body_car("title")
    .trim()
    .isLength({min:2})
    .withMessage("Title should be more than 2 characters"),

    // body_car("carModel")
    // .trim()
    // .isLength({min:1})
    // .withMessage("Car's Model should be at least than 1 characters"),


], isAuth, carController.editCheck);

router_car.delete("/check/delete", isAuth, carController.deleteCheck);

router_car.patch("/check/complete", isAuth, carController.completeCheck);

router_car.patch("/check/historyItem/delete", isAuth, carController.deleteCheckHistoryItem);




/////////////////////////////////////////////





module.exports = router_car;
