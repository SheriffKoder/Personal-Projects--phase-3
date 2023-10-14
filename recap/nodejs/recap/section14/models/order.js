"use strict";
// const mongoose = require("mongoose");
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderClassModel = void 0;
// const Schema = mongoose.Schema;
const mongoose_1 = require("mongoose"); //TS
;
const orderSchema = new mongoose_1.Schema({
    products: [{
            product: { type: Object, required: true },
            quantity: { type: Number, required: true }
        }],
    user: [{
            name: { type: String, required: true },
            userId: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "User" }
        }],
    date: {
        type: Object,
        required: true
    },
    totalCost: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: false
    },
    deliveredDate: {
        type: Object,
        required: false
    },
    deliveredMethod: {
        type: String,
        required: false
    },
});
// module.exports = mongoose.model("Order", orderSchema);
const OrderClassModel = (0, mongoose_1.model)("Order", orderSchema);
exports.OrderClassModel = OrderClassModel;
