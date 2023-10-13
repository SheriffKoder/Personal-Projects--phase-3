
const mongoose = require('mongoose'); 

const ProductClassModel = require("../models/product.js");



exports.getProducts = (req, res, next) => {

    ProductClassModel.find()
    .then((products)=> {
        res.render("shop/all-products.ejs",{prods: products, myTitle: "All Products Page" });
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

        else if (rating >=0 && rating <= 5) {
    
        const arr = ["none", "two", "three", "four", "five"];
    
        const x = rating.toString().split(".")[0];
        const y = rating.toString().split(".")[1];
        
        //rating 4.7
        //4 will be "four"
        //7 will be "half" , 2 will be ""
        const a = arr[x];
        const b = (y >= 5) ? "half" : "";
    
        return a+""+b;
        }
    
    }
    


    ProductClassModel.findById(prodId)
    .populate("userId", "name") //6
    .then((product)=> {
        res.render("shop/product-details", {product: product, myTitle: product.title, starFunction: starFunction});

    })
    .catch((err) => {
        console.log(err);
    });

}


//7.b
exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    const requestedCount = req.body.requestedCount;
    const increaseQtyAction = true;
    const changeQtyAction = false;
    ProductClassModel.findById(prodId)
    .then(product => {
        return req.user.addToCart(product, requestedCount, increaseQtyAction, changeQtyAction);
    })
    .then(result => {
        console.log("product added to cart");
        console.log(requestedCount);
        // res.redirect("/");

    })
}


//7
exports.getCart = (req, res, next) => {
    req.user
    .populate("cart.items.productId") //populate the id with all the item's data from the product model
    .then(user => { //still working with the req.user, user has full cart details stored in products
        const products = user.cart.items;
        console.log(products);

        res.render("shop/cart", {
            products: products,
            myTitle: "Cart"
        })
    })
    .catch(err => {
        console.log(err);
    })
};


exports.changeQuantity = (req, res, next) => {
    const prodId = req.body.productId;
    const requestedCount = req.body.requestedCount;
    const increaseQtyAction = false;
    const changeQtyAction = true;
    ProductClassModel.findById(prodId)
    .then(product => {
        return req.user.addToCart(product, requestedCount, increaseQtyAction, changeQtyAction);
    })
    .then(result => {
        console.log("product quantity updated to cart");
        // console.log(requestedCount);
        res.redirect("back");

    })
}


//7.d
exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;

    req.user.removeFromCart(prodId)
    .then(result => {
        res.redirect("back");
    })
    .catch(err => {
        console.log(err);
    })
}


//8
const OrderClassModel = require("../models/order.js");

exports.postOrder = (req, res, next) => {
    req.user
    .populate("cart.items.productId")
    .then(user => {
        const products = user.cart.items.map(item => {
            //using the spread operator and a special function 
            //._doc to access just the data without meta data and pull out all the product data into a new object
            return {quantity: item.quantity, product: {...item.productId._doc}};
        })

        //Generate required data info
        const today = new Date();
        const Year = today.getFullYear();
        let Month = today.getMonth() + 1;
        let Day = today.getDate();
        if (Day < 10) dd = '0' + dd;
        if (Month < 10) mm = '0' + mm;

        //Generate required total cost info
        console.log(user.cart.items);


        const order = new OrderClassModel({
            user: {
                name: req.user.name,
                userId: req.user
            },
            products: products,
            date: Day+" "+Month+""+Year,
            totalCost: "100",


        });
        return order.save();


    })
    .then(result => {
        req.user.clearCart();
    })
    .then(() => {   //clearCart is returned in the model so can add .then
        res.redirect("/orders");
    })
    .catch(err => {
        console.log(err);
    })





}

exports.getOrders = (req, res, next) => {

    //get all orders that belong to that user
    Order.find({"user.userId": req.user._id})
    .then(orders => {
        console.log(orders);

        res.render("shop/orders", {
            orders: orders,
            myTitle: "Your Orders",
        })
    })
    .catch(err => {
        console.log(err);
    })
}