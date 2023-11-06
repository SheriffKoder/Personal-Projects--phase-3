
// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;


import { Schema, Types, model } from 'mongoose'; //TS
import { IProduct } from './product';

interface IOrderProduct {
    product: IProduct;
    quantity: number;
}

interface IOrderUser {
    name: string;
    userId: Schema.Types.ObjectId;
}


interface IOrder {
    //an array of OrderProduct's
    products: IOrderProduct[];

    //an array of OrderUser's
    user: IOrderUser[];

    date: object;
    totalCost: number;
    status: string;
    deliveredDate: object;
    deliveredMethod: string;
};

const orderSchema = new Schema<IOrder>({
    products : [{
        product: {type: Object, required: true},
        quantity: {type: Number, required: true}
    }],
    user: [{
        name: {type: String, required: true},
        userId: {type: Schema.Types.ObjectId, required: true, ref: "User"}
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
})


// module.exports = mongoose.model("Order", orderSchema);

const OrderClassModel = model<IOrder>("Order", orderSchema);

export {
    OrderClassModel,
    IOrderProduct,
    IOrderUser,
    IOrder,
}