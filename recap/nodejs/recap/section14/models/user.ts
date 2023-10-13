
// const mongoose = require("mongoose");

import { Schema, Types, model } from "mongoose"; //TS
// const mongooseSchema = mongoose.Schema;

import { IProduct } from "./product";   //TS interface

interface IItems {
    productId: Types.ObjectId;
    quantity: number;
}

interface ICart {
    items: IItems;
}

interface IUser {
    name: string;
    email: string;
    seller: boolean;
    UserRating: number;
    cart: ICart;
}



const userSchema = new Schema<IUser>({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    seller: {                   //true or false
        type: Boolean,
        required: true
    },
    UserRating: {
        type: Number,
        required: true
    },
    //cart contains items, each item has a productId and quantity definitions
    cart: {
        items: [
            {
                productId: {type: Schema.Types.ObjectId, ref: "Product", required: true},
                quantity: {type: Number, required: true}
            }
        ]
    }
    
});



//7.a
userSchema.methods.addToCart = function (product: IProduct, requestedCount: number, increaseQtyAction: boolean, changeQtyAction: boolean) {

    //string method
    const cartProductIndex = this.cart.items.findIndex((cp: IItems) => {
        return cp.productId.toString() === product._id.toString();
    })

    let newQuantity = requestedCount;
    const updatedCartItems = [...this.cart.items];

    if (cartProductIndex >= 0) {
        if (increaseQtyAction) {
            newQuantity = this.cart.items[cartProductIndex].quantity + +requestedCount;
        } else if (changeQtyAction) {
            newQuantity = +requestedCount;
        }
        updatedCartItems[cartProductIndex].quantity = newQuantity;
    } else {
        updatedCartItems.push({productId: product._id, quantity: newQuantity});
    }


    const updatedCart = {
        items: updatedCartItems
    }

    this.cart = updatedCart;
    return this.save();


}


//7.d
userSchema.methods.removeFromCart = function (productId: string) {
    const updatedCartItems = this.cart.items.filter((item: IItems) => {
        return item.productId.toString() !== productId.toString();
    })
    this.cart.items = updatedCartItems;
    return this.save();
}


//8
userSchema.methods.clearCart = function () {
    this.cart = {items: []};
    return this.save();
}





const UserClassModel = model<IUser>("User", userSchema);


export {
    IItems,
    ICart,
    IUser,
    UserClassModel,
}