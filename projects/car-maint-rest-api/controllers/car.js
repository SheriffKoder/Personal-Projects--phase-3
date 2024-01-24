"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { validationResult } = require("express-validator");
const carModel_1 = __importDefault(require("../models/carModel"));
// (req: Request, res:Response, next: NextFunction)
const today = new Date();
const todayString = today.getFullYear() + "-" + today.getMonth() + 1 + "-" + today.getDate();
const routeValidationErrors = (req, res) => {
    ////////////////////////////////////////////////////////////////
    //get the validation errors array
    //an array of objects with path, msg
    const routeValidationErrors = validationResult(req).errors;
    // console.log(routeValidationErrors);
    //if there is an error, return back to the FE a response
    if (routeValidationErrors.length > 0) {
        //i want to go over each object in the array
        //for each object return its msg as message
        const errors = routeValidationErrors.map((errorObject) => {
            return {
                message: errorObject.msg
            };
        });
        console.log(errors);
        return errors;
    }
    else {
        return false;
    }
    ////////////////////////////////////////////////////////////////
};
exports.addCar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    ////////////////////////////////////////////////////////////////
    const errors = routeValidationErrors(req, res);
    if (errors)
        return res.status(422).json(errors);
    ////////////////////////////////////////////////////////////////
    //create a car if no errors
    try {
        const { brand, carModel, userId } = req.body;
        console.log(req.body);
        // console.log(name);
        // console.log(encryptedPassword);
        const newCar = yield new carModel_1.default({
            brand: brand,
            carModel: carModel,
            userId: userId,
        });
        yield newCar.save();
        return res.status(201).json(newCar);
    }
    catch (error) {
        return res.status(500).json("Failed to create a new Car");
    }
});
exports.editCar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    ////////////////////////////////////////////////////////////////
    const errors = routeValidationErrors(req, res);
    if (errors)
        return res.status(422).json(errors);
    ////////////////////////////////////////////////////////////////
    //find and edit car if no errors
    try {
        const { brand, carModel, userId, _id } = req.body;
        console.log(req.body._id);
        // console.log(name);
        const currentCar = yield carModel_1.default.findById(_id);
        if (currentCar) {
            currentCar.brand = brand;
            currentCar.carModel = carModel;
            yield currentCar.save();
            return res.status(201).json(currentCar);
        }
        else {
            return res.status(404).json("Car not found");
        }
    }
    catch (error) {
        return res.status(500).json("Failed to edit the Car");
    }
});
exports.deleteCar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //find and edit car if no errors
    try {
        const { _id } = req.body;
        console.log(req.body);
        // console.log(name);
        yield carModel_1.default.findByIdAndDelete(_id);
        return res.status(201).json("Car deleted successfully");
    }
    catch (error) {
        return res.status(500).json("Failed to create a new Car");
    }
});
//car checks
//this is a new check that will add to the car model a new "check object"
//with the first history-check in it
exports.newCheck = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    ////////////////////////////////////////////////////////////////
    const errors = routeValidationErrors(req, res);
    if (errors)
        return res.status(422).json(errors);
    ////////////////////////////////////////////////////////////////
    console.log(req.body);
    //find and edit car if no errors
    try {
        const { title, color, initialCheck, nextCheck, notes, carId } = req.body;
        // // console.log(req.body._id);
        // // console.log(name);
        const currentCar = yield carModel_1.default.findById(carId);
        if (currentCar) {
            //add the check base
            //add first history item
            currentCar.checks.push({
                name: title,
                color: color,
                history: [{
                        addDate: todayString,
                        initialCheck: initialCheck,
                        nextCheck: nextCheck,
                        checkedOn: "",
                        notes: notes,
                    }],
            });
            yield currentCar.save();
            return res.status(201).json(currentCar);
        }
        else {
            return res.status(404).json("Car not found");
        }
    }
    catch (error) {
        return res.status(500).json("Failed to edit the Car");
    }
});
exports.editCheck = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    ////////////////////////////////////////////////////////////////
    const errors = routeValidationErrors(req, res);
    if (errors)
        return res.status(422).json(errors);
    ////////////////////////////////////////////////////////////////
    console.log(req.body);
    //find and edit car if no errors
    try {
        const { title, color, initialCheck, nextCheck, notes, carId, checkIndex, historyIndex } = req.body;
        console.log(req.body);
        // // console.log(name);
        const currentCar = yield carModel_1.default.findById(carId);
        if (currentCar) {
            //add the check base
            //modify the currentCar base info and keep the history
            currentCar.checks[+checkIndex] = {
                name: title,
                color: color,
                history: currentCar.checks[+checkIndex].history,
            };
            //modify the currentCar's history
            currentCar.checks[+checkIndex].history[+historyIndex] = {
                addDate: currentCar.checks[+checkIndex].history[+historyIndex].addDate,
                checkedOn: currentCar.checks[+checkIndex].history[+historyIndex].checkedOn,
                initialCheck: initialCheck,
                nextCheck: nextCheck,
                notes: notes,
            };
            yield currentCar.save();
            return res.status(201).json(currentCar);
        }
        else {
            return res.status(404).json("the car to be edited was not found");
        }
    }
    catch (error) {
        return res.status(500).json("Failed to edit the check");
    }
});
exports.deleteCheck = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    ////////////////////////////////////////////////////////////////
    const errors = routeValidationErrors(req, res);
    if (errors)
        return res.status(422).json(errors);
    ////////////////////////////////////////////////////////////////
    console.log(req.body);
    //find and edit car if no errors
    try {
        const { carId, checkIndex } = req.body;
        console.log(req.body);
        // // console.log(name);
        const currentCar = yield carModel_1.default.findById(carId);
        if (currentCar) {
            //filter out the check matching this index
            currentCar.checks = currentCar.checks.filter((check) => check !== currentCar.checks[+checkIndex]);
            yield currentCar.save();
            return res.status(201).json(currentCar);
        }
        else {
            return res.status(404).json("the car to be edited was not found");
        }
    }
    catch (error) {
        return res.status(500).json("Failed to edit the check");
    }
});
exports.completeCheck = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    ////////////////////////////////////////////////////////////////
    const errors = routeValidationErrors(req, res);
    if (errors)
        return res.status(422).json(errors);
    ////////////////////////////////////////////////////////////////
    console.log(req.body);
    //find and edit car if no errors
    try {
        const { carId, checkIndex } = req.body;
        let currentCar = yield carModel_1.default.findById(carId);
        if (currentCar) {
            let tempCar = currentCar;
            // console.log(currentCar.checks[checkIndex].history);
            //add the check base
            //modify the currentCar base info and keep the history
            tempCar.checks[+checkIndex].history[0].checkedOn = todayString;
            // console.log(currentCar.checks[checkIndex].history);
            tempCar.checks[+checkIndex].history.unshift({
                addDate: todayString,
                checkedOn: "",
                initialCheck: "",
                nextCheck: "",
                notes: "",
            });
            console.log(tempCar.checks[+checkIndex].history);
            currentCar.checks = tempCar.checks;
            //modifying the car sub elements did allow saving the new info
            //to overcome this i used two ideas to help
            //markModified does tell mongoose what has been changed
            //also copying the whole object and not editing the sub elements directly
            currentCar.markModified("checks");
            const saved = yield currentCar.save();
            return res.status(201).json(saved);
        }
        else {
            return res.status(404).json("the car to be edited was not found");
        }
    }
    catch (error) {
        return res.status(500).json("Failed to complete the check");
    }
});
