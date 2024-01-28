"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userCars = {
    brand: "",
    model: "",
    lastCheck: "",
    nextCheck: "",
    image: "",
    _id: "",
    checks: [
        {
            name: "",
            color: "",
            _id: "",
            history: [
                {
                    addDate: "",
                    initialCheck: "",
                    nextCheck: "",
                    checkedOn: "",
                    notes: "",
                },
            ]
        },
    ]
};
//car model which will relate to the userId
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
;
const carSchema = new mongoose_2.Schema({
    brand: {
        type: String,
        required: true,
    },
    carModel: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        // required: true,
        default: "/images/car1.png"
    },
    lastCheck: {
        type: Date,
        required: false,
    },
    nextCheck: {
        type: Date,
        required: false,
    },
    userId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    checks: {
        type: [],
        default: []
    }
}, {
    //mongoose will auto add timestamps 
    //when a new version is added to the db
    //createdAt, updatedAt timestamps
    timestamps: true,
});
const CarModel = mongoose_1.models.Car || (0, mongoose_1.model)("Car", carSchema);
exports.default = CarModel;
