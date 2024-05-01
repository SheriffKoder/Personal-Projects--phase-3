import { NextFunction, Request, Response } from "express";
const {validationResult} = require("express-validator");
import CarModel, { CarDocument } from "../models/carModel";
import UserModel from "../models/userModel";

// (req: Request, res:Response, next: NextFunction)

const today = new Date();

const thisMonth = today.getMonth()+1;
const todayString = today.getFullYear() + "-" + thisMonth + "-" + today.getDate();

// make months and days less than 10 to be stored with a 0 before
// to be displayed in the date forms on the front end
// as this completedOn, addedOn dates are API generated not front-end form generated
let fixedDate = "";
todayString.split("-").forEach((number, index)=> {
    if (index === 1 || index === 2) {
        (Number(number) < 10) ?  fixedDate = fixedDate+"-0"+number : fixedDate = fixedDate+"-"+number;
    } else if (index === 0) {
        fixedDate = fixedDate+number;
    }
})


import { clearImage } from "../util/clearImage";

//API 0.2 - user model car object
interface Request_With_UserId_Token extends Request {
    userId: string,
    token: string,
    isAuth: boolean,
}


//API 0.2 - authentication
//API 0.2 - images



module.exports = {

    //arguments objects, request
    //to be used as args.userInput or {userInput} right away
    addEditDeleteCheck: async function (args:any, req:Request_With_UserId_Token) {


        //API 0.3 - GraphQL - Authentication
        if (!req.isAuth) {
            const error = new Error("Not Authenticated to update the check");
            throw error;
        }

        const {checkupInfo, carId, action, checkIndex, historyIndex} = args.checkInput;
        console.log(args);
        console.log(checkupInfo);


        const currentCar = await CarModel.findById(carId);

        if (currentCar) {



            if (action === "add") {
        
                //add the check base
                //add first history item
                currentCar.checks.push({
                    name: checkupInfo.title as string,
                    color: checkupInfo.color as string,
                    history: [{
                        addDate: fixedDate,
                        initialCheck: checkupInfo.initialCheck,
                        nextCheck: checkupInfo.nextCheck,
                        checkedOn: "",
                        notes: checkupInfo.notes,
                    }],
                })
    
                await currentCar.save();
                
            } 
            
            else if (action === "edit") {
                

                // let currentCar = originalCar;

                //add the check base
                //modify the currentCar base info and keep the history
                currentCar.checks[+checkIndex] = {
                    name: checkupInfo.title as string,
                    color: checkupInfo.color as string,
                    history: currentCar.checks[+checkIndex].history,
                }

                //modify the currentCar's history
                currentCar.checks[+checkIndex].history[+historyIndex] = {
                    addDate: currentCar.checks[+checkIndex].history[+historyIndex].addDate,
                    checkedOn: checkupInfo.checkedOn,
                    initialCheck: checkupInfo.initialCheck,
                    nextCheck: checkupInfo.nextCheck,
                    notes: checkupInfo.notes,
                }

                await currentCar.save();
        

            } 
            
            else if (action === "delete") {


                //filter out the check matching this index
                currentCar.checks = currentCar.checks.filter((check)=> check !== currentCar.checks[+checkIndex]);    
                await currentCar.save();
        
            } 
            
            else if (action === "complete") {

                let tempCar = currentCar;
                // console.log(currentCar.checks[checkIndex].history);
                //add the check base
                //modify the currentCar base info and keep the history
                tempCar.checks[+checkIndex].history[0].checkedOn = fixedDate;
    
                // console.log(currentCar.checks[checkIndex].history);
    
                tempCar.checks[+checkIndex].history.unshift({
                    addDate: fixedDate,
                    checkedOn: "",
                    initialCheck: "",
                    nextCheck: "",
                    notes: "",
                })
    
                console.log(tempCar.checks[+checkIndex].history);
    
                currentCar.checks = tempCar.checks;
    
                //modifying the car sub elements did allow saving the new info
                //to overcome this i used two ideas to help
                //markModified does tell mongoose what has been changed
                //also copying the whole object and not editing the sub elements directly
                currentCar.markModified("checks");
                await currentCar.save();
            }
       
        }



        const checkCreator = await UserModel.findById(req.userId).populate("cars");
        if (checkCreator) {
            return {...checkCreator._doc, _id: checkCreator._id.toString(), cars:checkCreator.cars, token: req.token};
        }
        // return {text:"hello"};


    },


    //a separate resolver for the sake of using multiple resolvers in one RootMutation
    deleteCheckHistoryItem: async function (args:any, req:Request_With_UserId_Token) {

        //API 0.3 - GraphQL - Authentication
        if (!req.isAuth) {
            const error = new Error("Not Authenticated to update the check");
            throw error;
        }

        const {checkupInfo, carId, action, checkIndex, historyIndex} = args.checkInput;
        console.log(args);


        const currentCar = await CarModel.findById(carId);

        if (currentCar) {

            //filter out the check history item matching this index from the history
            currentCar.checks[+checkIndex].history = currentCar.checks[+checkIndex].history.filter((checkItem)=> checkItem !== currentCar.checks[+checkIndex].history[historyIndex])

            currentCar.markModified("checks");

            await currentCar.save();

        }


        const checkCreator = await UserModel.findById(req.userId).populate("cars");
        if (checkCreator) {
            return {...checkCreator._doc, _id: checkCreator._id.toString(), cars:checkCreator.cars, token: req.token};
        }
        // return {text:"hello"};



    },



    dummyQuery: async function (args: any, req:Request) {

       return {text:"hello"};
                
    }





}