
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({

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
userSchema.methods.addToCart = function (product, requestedCount, increaseQtyAction, changeQtyAction) {

    //string method
    const cartProductIndex = this.cart.items.findIndex(cp => {
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






module.exports = mongoose.model("User", userSchema);