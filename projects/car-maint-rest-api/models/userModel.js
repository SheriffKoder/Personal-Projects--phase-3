"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userInfo = {
    name: "",
    email: "",
};
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
const fullUser = {
    userInfo, userCars
};
//we need a user model without any cars now.
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
    }
});
const UserModel = mongoose_1.models.User || (0, mongoose_1.model)("User", userSchema);
exports.default = UserModel;
