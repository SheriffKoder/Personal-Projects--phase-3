"use strict";
// const mongoose = require("mongoose");
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserClassModel = void 0;
const mongoose_1 = require("mongoose"); //TS
const userSchema = new mongoose_1.Schema({
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
    seller: {
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
                productId: { type: Object, ref: "Product", required: true },
                quantity: { type: Number, required: true }
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
userSchema.methods.addToCart = function (product, requestedCount, increaseQtyAction, changeQtyAction) {
    //string method
    const cartProductIndex = this.cart.items.findIndex((cp) => {
        return cp.productId.toString() === product._id.toString();
    });
    let newQuantity = requestedCount;
    const updatedCartItems = [...this.cart.items];
    if (cartProductIndex >= 0) {
        if (increaseQtyAction) {
            newQuantity = this.cart.items[cartProductIndex].quantity + +requestedCount;
            //if we are trying to add more quantity than the available limit, only set to the available limit
            newQuantity > product.availability ? newQuantity = product.availability : null;
        }
        else if (changeQtyAction) {
            newQuantity = +requestedCount;
        }
        updatedCartItems[cartProductIndex].quantity = newQuantity;
    }
    else {
        updatedCartItems.push({ productId: product._id, quantity: newQuantity });
    }
    const updatedCart = {
        items: updatedCartItems
    };
    this.cart = updatedCart;
    this.save();
};
//7.d
userSchema.methods.removeFromCart = function (productId) {
    const updatedCartItems = this.cart.items.filter((item) => {
        return item.productId.toString() !== productId.toString();
    });
    this.cart.items = updatedCartItems;
    return this.save();
};
//8
userSchema.methods.clearCart = function () {
    // this.cart = {items: []};
    //take out all items that have quantity more than 0, and just keep the 0 for future interest
    this.cart.items = this.cart.items.filter((p) => p.productId.availability == 0);
    return this.save();
};
const UserClassModel = (0, mongoose_1.model)("User", userSchema);
exports.UserClassModel = UserClassModel;
