
const mongoose = require('mongoose'); 

import { ProductClassModel } from '../models/product';
import { IUserWithMethods, IUser, IItems } from '../models/user';
import {Request, Response, NextFunction} from 'express';
import { HydratedDocument } from 'mongoose';


//HydratedDocument<IUser> represents a hydrated Mongoose document, with methods, virtuals, and other Mongoose-specific features.
//to allow use populate with IUser
interface Request_With_reqUser extends Request {
    user: HydratedDocument<IUser>;
    isLoggedIn: boolean;
}


exports.getProducts = (req: Request_With_reqUser, res: Response, next: NextFunction) => {

    ProductClassModel.find()
    .then((products)=> {
        res.render("shop/all-products.ejs",
        {
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



exports.getProduct = (req: Request_With_reqUser, res: Response, next: NextFunction) => {
    const prodId = req.params.productId;

    let starFunction = (rating: number) => {

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
        const a = arr[+x];
        const b = (+y >= 5) ? "half" : "";
    
        return a+""+b;
        }
    
    }
    


    ProductClassModel.findById(prodId)
    .populate("userId", "name") //6
    .then((product)=> {
        if (product) {
            res.render("shop/product-details", 
            {
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

}


//7.b
exports.postCart = (req: Request_With_reqUser, res: Response, next: NextFunction) => {
    const prodId = req.body.productId;
    const requestedCount = req.body.requestedCount;
    const increaseQtyAction = true;
    const changeQtyAction = false;
    ProductClassModel.findById(prodId)
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
    })
}


//7
exports.getCart = (req: Request_With_reqUser, res: Response, next: NextFunction) => {
    req.user
    .populate("cart.items.productId") //populate the id with all the item's data from the product model
    .then((user : IUser) => { //still working with the req.user, user has full cart details stored in products
        const products = user.cart.items;
        console.log(products);

        res.render("shop/cart", {
            products: products,
            myTitle: "Your Cart",
            // isAuthenticated: req.isLoggedIn  //cookies //9.1
            // isAuthenticated: req.session.isLoggedIn //sessions //9.2

        })
    })
    .catch((err: any) => {
        console.log(err);
    })
};


exports.changeQuantity = (req: Request_With_reqUser, res: Response, next: NextFunction) => {
    const prodId = req.body.productId;
    const requestedCount = req.body.requestedCount;
    const increaseQtyAction = false;
    const changeQtyAction = true;
    ProductClassModel.findById(prodId)
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
    })
}


//7.d
exports.postCartDeleteProduct = (req: Request_With_reqUser, res: Response, next: NextFunction) => {
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
import {OrderClassModel} from "../models/order.js";
import { truncate } from 'fs/promises';

exports.postOrder = (req: Request_With_reqUser, res: Response, next: NextFunction) => {
    
    if (req.user) {
    req.user
    .populate("cart.items.productId")
    .then(user => {
        //to make the map method work
        if(Array.isArray(user.cart.items)) {
            const products = user.cart.items.map((item: IItems) => {
                //using the spread operator and a special function 
                //._doc to access just the data without meta data and pull out all the product data into a new object
                return {quantity: item.quantity, product: {...item.productId._doc}};
            })

            //Generate required data info
            const today = new Date();
            const Year = today.getFullYear();
            let Month = today.getMonth();
            let Day = today.getDate();
            if (Day < 10) Day = +('0' + Day);
            const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];


            //Generate required total cost info
            let totalCost1 = 0;
            if (Array.isArray(user.cart.items)) {
                user.cart.items.forEach((item: IItems) => {
                    totalCost1 = totalCost1 + (item.productId.price * item.quantity);
                })
            }


            const order = new OrderClassModel({
                user: {
                    email: req.user.email,
                    name: req.user.name,
                    userId: req.user
                },
                products: products,
                date: {Day:Day, Month: monthName[Month], Year:Year},
                totalCost: totalCost1,
                deliveredDate: {Day:Day, Month: monthName[Month], Year:Year},
                deliveredMethod: "Handed off directly to a resident"


            });
            return order.save();
        }


    })
    .then(() => {
        req.user.clearCart();
    })
    .then(() => {   //clearCart is returned in the model so can add .then
        res.redirect("/orders");
    })
    .catch((err: any) => {
        console.log(err);
    })
    }





}

exports.getOrders = (req: Request_With_reqUser, res: Response, next: NextFunction) => {

    //get all orders that belong to that user
    OrderClassModel.find({"user.userId": req.user._id})
    .then(orders => {
        
        res.render("shop/orders", {
            orders: orders,
            myTitle: "Your Orders",
            // isAuthenticated: req.isLoggedIn  //cookies //9.1
            // isAuthenticated: req.session.isLoggedIn //sessions //9.2
        })
    })
    .catch(err => {
        console.log(err);
    })
}