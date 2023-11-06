
// const mongoose = require("mongoose");

import { Schema, Types, model } from "mongoose"; //TS
// const mongooseSchema = mongoose.Schema;

import { IProduct } from "./product";   //TS interface

type ID_or_Data = Types.ObjectId | IProduct;

interface IItems {
    productId: any;
    quantity: number;
}

interface ICart {
    items: IItems;
}

interface IUser {
    _id: Types.ObjectId;
    name: string;
    email: string;
    phone: number;
    pass: string;
    seller: boolean;
    UserRating: number;
    cart: ICart;
    addToCart: (product: IProduct, requestedCount: number, increaseQtyAction: boolean, changeQtyAction: boolean) => Promise<IUser>;
    removeFromCart: (productId: string) => Promise<IUser>;
    clearCart: () => Promise<IUser>;
    resetToken: string;
    resetTokenExpiration: number;
    country: string;

}

//https://millo-l.github.io/Typescript-mongoose-methods-statics/
//will use IUserWithMethods to be able to attach these methods to the user model exported
interface IUserWithMethods extends IUser {
    addToCart: (product: IProduct, requestedCount: number, increaseQtyAction: boolean, changeQtyAction: boolean) => Promise<IUser>;
    removeFromCart: (productId: string) => Promise<IUser>;
    clearCart: () => Promise<IUser>;
    
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
    phone: {
        type: Number,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    seller: {                   //true or false
        type: Boolean,
        required: true
    },
    UserRating: {
        type: Number,
        required: false
    },
    //cart contains items, each item has a productId and quantity definitions
    cart: {
        items: [
            {
                productId: {type: Object, ref: "Product", required: true},
                quantity: {type: Number, required: true}
            }
        ]
    },

    //10.2
    resetToken: {
        type: String,
        required: false,
    },
    resetTokenExpiration: {
        type: Number,
        required: false,
    },
    country: {
        type: String,
        required: true,
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
    IUserWithMethods,
    UserClassModel,
}