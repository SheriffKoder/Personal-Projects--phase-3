"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const product_1 = require("../models/product");
exports.getProducts = (req, res, next) => {
    product_1.ProductClassModel.find()
        .then((products) => {
        res.render("shop/all-products.ejs", {
            prods: products,
            myTitle: "All Products Page",
            // isAuthenticated: req.isLoggedIn  //cookies //9.1
            // isAuthenticated: req.session.isLoggedIn //sessions //9.2
        });
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    let starFunction = (rating) => {
        if (rating > 5 && rating < 0) {
            return "none";
        }
        else if (rating >= 0 && rating <= 5) {
            const arr = ["none", "two", "three", "four", "five"];
            const x = rating.toString().split(".")[0];
            const y = rating.toString().split(".")[1];
            //rating 4.7
            //4 will be "four"
            //7 will be "half" , 2 will be ""
            const a = arr[+x];
            const b = (+y >= 5) ? "half" : "";
            return a + "" + b;
        }
    };
    product_1.ProductClassModel.findById(prodId)
        .populate("userId", "name") //6
        .then((product) => {
        if (product) {
            res.render("shop/product-details", {
                product: product,
                myTitle: product.title,
                starFunction: starFunction,
                // isAuthenticated: req.isLoggedIn  //cookies //9.1
                isAuthenticated: req.session.isLoggedIn //sessions //9.2
            });
        }
    })
        .catch((err) => {
        console.log(err);
    });
};
//7.b
exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    const requestedCount = req.body.requestedCount;
    const increaseQtyAction = true;
    const changeQtyAction = false;
    product_1.ProductClassModel.findById(prodId)
        .then(product => {
        if (product) {
            return req.user.addToCart(product, requestedCount, increaseQtyAction, changeQtyAction);
        }
    })
        .then(result => {
        console.log("product added to cart");
        console.log(requestedCount);
        // res.redirect("/");
    })
        .catch(err => {
        console.log(err);
    });
};
//7
exports.getCart = (req, res, next) => {
    req.user
        .populate("cart.items.productId") //populate the id with all the item's data from the product model
        .then((user) => {
        const products = user.cart.items;
        console.log(products);
        res.render("shop/cart", {
            products: products,
            myTitle: "Your Cart",
            // isAuthenticated: req.isLoggedIn  //cookies //9.1
            // isAuthenticated: req.session.isLoggedIn //sessions //9.2
        });
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.changeQuantity = (req, res, next) => {
    const prodId = req.body.productId;
    const requestedCount = req.body.requestedCount;
    const increaseQtyAction = false;
    const changeQtyAction = true;
    product_1.ProductClassModel.findById(prodId)
        .then(product => {
        if (product) {
            return req.user.addToCart(product, requestedCount, increaseQtyAction, changeQtyAction);
        }
    })
        .then(result => {
        console.log("product quantity updated to cart");
        // console.log(requestedCount);
        res.redirect("back");
    })
        .catch(err => {
        console.log(err);
    });
};
//7.d
exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    req.user.removeFromCart(prodId)
        .then(result => {
        res.redirect("back");
    })
        .catch(err => {
        console.log(err);
    });
};
//8
const order_js_1 = require("../models/order.js");
exports.postOrder = (req, res, next) => {
    if (req.user) {
        req.user
            .populate("cart.items.productId")
            .then(user => {
            //to make the map method work
            if (Array.isArray(user.cart.items)) {
                const products = user.cart.items.map((item) => {
                    //using the spread operator and a special function 
                    //._doc to access just the data without meta data and pull out all the product data into a new object
                    return { quantity: item.quantity, product: Object.assign({}, item.productId._doc) };
                });
                //Generate required data info
                const today = new Date();
                const Year = today.getFullYear();
                let Month = today.getMonth();
                let Day = today.getDate();
                if (Day < 10)
                    Day = +('0' + Day);
                const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                //Generate required total cost info
                let totalCost1 = 0;
                if (Array.isArray(user.cart.items)) {
                    user.cart.items.forEach((item) => {
                        totalCost1 = totalCost1 + (item.productId.price * item.quantity);
                    });
                }
                const order = new order_js_1.OrderClassModel({
                    user: {
                        email: req.user.email,
                        name: req.user.name,
                        userId: req.user
                    },
                    products: products,
                    date: { Day: Day, Month: monthName[Month], Year: Year },
                    totalCost: totalCost1,
                    deliveredDate: { Day: Day, Month: monthName[Month], Year: Year },
                    deliveredMethod: "Handed off directly to a resident"
                });
                return order.save();
            }
        })
            .then(() => {
            req.user.clearCart();
        })
            .then(() => {
            res.redirect("/orders");
        })
            .catch((err) => {
            console.log(err);
        });
    }
};
exports.getOrders = (req, res, next) => {
    //get all orders that belong to that user
    order_js_1.OrderClassModel.find({ "user.userId": req.user._id })
        .then(orders => {
        res.render("shop/orders", {
            orders: orders,
            myTitle: "Your Orders",
            // isAuthenticated: req.isLoggedIn  //cookies //9.1
            // isAuthenticated: req.session.isLoggedIn //sessions //9.2
        });
    })
        .catch(err => {
        console.log(err);
    });
};
