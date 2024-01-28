"use strict";
//a user model without any cars.
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
;
const userSchema = new mongoose_2.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    //store an array or car id's related to the user in an array of objects
    cars: [{
            type: mongoose_2.Schema.Types.ObjectId,
            ref: "Car"
        }]
}, {
//mongoose will auto add timestamps 
//when a new version is added to the db
//createdAt, updatedAt timestamps
//timestamps: true,
});
const UserModel = mongoose_1.models.User || (0, mongoose_1.model)("User", userSchema);
exports.default = UserModel;
