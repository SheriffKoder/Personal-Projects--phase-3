const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const orderSchema = new Schema({
    products : [{
        product: {type: Object, required: true},
        quantity: {type: Number, required: true}
    }],
    user: [{
        name: {type: String, required: true},
        userId: {type: Schema.Types.ObjectId, required: true, ref: "User"}
    }],
    date: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: false
    },
})


module.exports = mongoose.model("Order", orderSchema);