
import { NextFunction, Request, Response } from "express";
const {validationResult} = require("express-validator");
import CarModel from "../models/carModel";

// (req: Request, res:Response, next: NextFunction)


const routeValidationErrors = (req:Request, res:Response) => {
    ////////////////////////////////////////////////////////////////
    //get the validation errors array
    //an array of objects with path, msg
    const routeValidationErrors = validationResult(req).errors;
    // console.log(routeValidationErrors);
    //if there is an error, return back to the FE a response

    if (routeValidationErrors.length > 0) {
        //i want to go over each object in the array
        //for each object return its msg as message
        const errors = routeValidationErrors.map((errorObject:any) => {
            return {
                message: errorObject.msg
            }
        });
        console.log(errors);
        return errors;
    } else {
        return false;
    }
    ////////////////////////////////////////////////////////////////

};


exports.addCar = async (req: Request, res:Response, next: NextFunction) => {


    ////////////////////////////////////////////////////////////////
    const errors = routeValidationErrors(req,res);
    if (errors) return res.status(422).json(errors);
    ////////////////////////////////////////////////////////////////


    //create a car if no errors
    try {

        const {brand, carModel, userId} = req.body;
        console.log(req.body);
        // console.log(name);
        
        // console.log(encryptedPassword);
    
        const newCar = await new CarModel({
            brand: brand,
            carModel: carModel,
            userId: userId,
        });
    
        await newCar.save();
        return res.status(201).json(newCar);

    
    } catch (error) {
        return res.status(500).json("Failed to create a new Car");

    }


}

exports.editCar = async (req: Request, res:Response, next: NextFunction) => {


    ////////////////////////////////////////////////////////////////
    const errors = routeValidationErrors(req,res);
    if (errors) return res.status(422).json(errors);
    ////////////////////////////////////////////////////////////////


    //find and edit car if no errors
    try {

        const {brand, carModel, userId, _id} = req.body;
        console.log(req.body._id);
        // console.log(name);
        
        const currentCar = await CarModel.findById(_id);

        if (currentCar) {
            currentCar.brand = brand;
            currentCar.carModel = carModel;

            await currentCar.save();
            return res.status(201).json(currentCar);

        } else {
            return res.status(404).json("Car not found");

        }

        

    
    } catch (error) {
        return res.status(500).json("Failed to edit the Car");

    }


}

exports.deleteCar = async (req: Request, res:Response, next: NextFunction) => {


    //find and edit car if no errors
    try {

        const {_id} = req.body;
        console.log(req.body);
        // console.log(name);
        
        await CarModel.findByIdAndDelete(_id);

        return res.status(201).json("Car deleted successfully");

    
    } catch (error) {
        return res.status(500).json("Failed to create a new Car");

    }


}

