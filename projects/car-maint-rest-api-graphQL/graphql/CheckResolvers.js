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
const userModel_1 = __importDefault(require("../models/userModel"));
// (req: Request, res:Response, next: NextFunction)
const today = new Date();
const todayString = today.getFullYear() + "-" + today.getMonth() + 1 + "-" + today.getDate();
//API 0.2 - authentication
//API 0.2 - images
module.exports = {
    //arguments objects, request
    //to be used as args.userInput or {userInput} right away
    addEditDeleteCheck: function (args, req) {
        return __awaiter(this, void 0, void 0, function* () {
            //API 0.3 - GraphQL - Authentication
            if (!req.isAuth) {
                const error = new Error("Not Authenticated to update the check");
                throw error;
            }
            const { checkupInfo, carId, action, checkIndex, historyIndex } = args.checkInput;
            console.log(args);
            console.log(checkupInfo);
            const currentCar = yield carModel_1.default.findById(carId);
            if (currentCar) {
                if (action === "add") {
                    //add the check base
                    //add first history item
                    currentCar.checks.push({
                        name: checkupInfo.title,
                        color: checkupInfo.color,
                        history: [{
                                addDate: todayString,
                                initialCheck: checkupInfo.initialCheck,
                                nextCheck: checkupInfo.nextCheck,
                                checkedOn: "",
                                notes: checkupInfo.notes,
                            }],
                    });
                    yield currentCar.save();
                }
                else if (action === "edit") {
                    // let currentCar = originalCar;
                    //add the check base
                    //modify the currentCar base info and keep the history
                    currentCar.checks[+checkIndex] = {
                        name: checkupInfo.title,
                        color: checkupInfo.color,
                        history: currentCar.checks[+checkIndex].history,
                    };
                    //modify the currentCar's history
                    currentCar.checks[+checkIndex].history[+historyIndex] = {
                        addDate: currentCar.checks[+checkIndex].history[+historyIndex].addDate,
                        checkedOn: checkupInfo.checkedOn,
                        initialCheck: checkupInfo.initialCheck,
                        nextCheck: checkupInfo.nextCheck,
                        notes: checkupInfo.notes,
                    };
                    yield currentCar.save();
                }
                else if (action === "delete") {
                    //filter out the check matching this index
                    currentCar.checks = currentCar.checks.filter((check) => check !== currentCar.checks[+checkIndex]);
                    yield currentCar.save();
                }
                else if (action === "complete") {
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
                    yield currentCar.save();
                }
            }
            const checkCreator = yield userModel_1.default.findById(req.userId).populate("cars");
            if (checkCreator) {
                return Object.assign(Object.assign({}, checkCreator._doc), { _id: checkCreator._id.toString(), cars: checkCreator.cars, token: req.token });
            }
            // return {text:"hello"};
        });
    },
    //a separate resolver for the sake of using multiple resolvers in one RootMutation
    deleteCheckHistoryItem: function (args, req) {
        return __awaiter(this, void 0, void 0, function* () {
            //API 0.3 - GraphQL - Authentication
            if (!req.isAuth) {
                const error = new Error("Not Authenticated to update the check");
                throw error;
            }
            const { checkupInfo, carId, action, checkIndex, historyIndex } = args.checkInput;
            console.log(args);
            const currentCar = yield carModel_1.default.findById(carId);
            if (currentCar) {
                //filter out the check history item matching this index from the history
                currentCar.checks[+checkIndex].history = currentCar.checks[+checkIndex].history.filter((checkItem) => checkItem !== currentCar.checks[+checkIndex].history[historyIndex]);
                currentCar.markModified("checks");
                yield currentCar.save();
            }
            const checkCreator = yield userModel_1.default.findById(req.userId).populate("cars");
            if (checkCreator) {
                return Object.assign(Object.assign({}, checkCreator._doc), { _id: checkCreator._id.toString(), cars: checkCreator.cars, token: req.token });
            }
            // return {text:"hello"};
        });
    },
    dummyQuery: function (args, req) {
        return __awaiter(this, void 0, void 0, function* () {
            return { text: "hello" };
        });
    }
};
