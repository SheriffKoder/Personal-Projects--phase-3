
const mongoose = require('mongoose'); 

import { IProduct, ProductClassModel } from '../models/product';
import { IUserWithMethods, IUser, IItems } from '../models/user';
import {Request, Response, NextFunction} from 'express';
import { HydratedDocument } from 'mongoose';


//HydratedDocument<IUser> represents a hydrated Mongoose document, with methods, virtuals, and other Mongoose-specific features.
//to allow use populate with IUser
interface Request_With_reqUser extends Request {
    user: HydratedDocument<IUser>;
    isLoggedIn: boolean;
}


const ITEMS_PER_PAGE = 2;
const ORDERS_PER_PAGE = 2;

exports.getProducts = (req: Request_With_reqUser, res: Response, next: NextFunction) => {

    //12.2
    let page: number;
    if (req.query.page) {
        page = +req.query.page;
    } else {
        page = 1;
    }
    let totalItems: number;


    //12.2
    ProductClassModel.find().countDocuments()
    .then((numProducts: number) => {
        totalItems = numProducts;

        //page 1 1-1 * 2 = skip 0, limit 2 -- get 0-2
        //page 2 2-1 * 2 = skip 2, limit 2 -- get 2-4
        //page 3 3-1 * 2 = skip 4, limit 2 -- get 4-6
        return ProductClassModel.find()
        .skip((page-1)*ITEMS_PER_PAGE)
        .limit(ITEMS_PER_PAGE)

    })
    .then((products)=> {
        res.render("shop/all-products.ejs",
        {
            prods: products, 
            myTitle: "All Products Page",
            // isAuthenticated: req.isLoggedIn  //cookies //9.1
            // isAuthenticated: req.session.isLoggedIn //sessions //9.2

            //give the view-page these properties to display to user
            currentPage: page,
            totalProducts: totalItems,

            //2 * page (1) < have 4 products .. true
            hasNextPage: (ITEMS_PER_PAGE * page) < totalItems,
            hasPreviousPage: page > 1,

            nextPage: page + 1,
            previousPage: page - 1,

            //ceil makes 5.5 = 6, 11/2 = 6 not 5.5
            lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)



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
import {IOrder, IOrderProduct, OrderClassModel} from "../models/order.js";
import { truncate } from 'fs/promises';

// exports.postOrder = (req: Request_With_reqUser, res: Response, next: NextFunction) => {
//-13.1
exports.getCheckoutSuccess = (req: Request_With_reqUser, res: Response, next: NextFunction) => {
    
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

    let page: number;
    if (req.query.page) {
        page = +req.query.page;
    } else {
        page = 1;
    }
    let totalOrders: number;


    //get all orders that belong to that user
    OrderClassModel.find({"user.userId": req.user._id})
    .countDocuments()
    .then((numOrders: number) => {
        totalOrders = numOrders;

        //page 1 1-1 * 2 = skip 0, limit 2 -- get 0-2
        //page 2 2-1 * 2 = skip 2, limit 2 -- get 2-4
        //page 3 3-1 * 2 = skip 4, limit 2 -- get 4-6
        return OrderClassModel.find({"user.userId": req.user._id})
        .skip((page-1)*ORDERS_PER_PAGE)
        .limit(ORDERS_PER_PAGE)

    })

    .then(orders => {
        
        res.render("shop/orders", {
            orders: orders,
            myTitle: "Your Orders",
            // isAuthenticated: req.isLoggedIn  //cookies //9.1
            // isAuthenticated: req.session.isLoggedIn //sessions //9.2
                    //give the view-page these properties to display to user
            currentPage: page,
            totalOrders: totalOrders,

            //2 * page (1) < have 4 products .. true
            hasNextPage: (ORDERS_PER_PAGE * page) < totalOrders,
            hasPreviousPage: page > 1,

            nextPage: page + 1,
            previousPage: page - 1,

            //ceil makes 5.5 = 6, 11/2 = 6 not 5.5
            lastPage: Math.ceil(totalOrders / ORDERS_PER_PAGE)
        
        
        })
    })
    .catch(err => {
        console.log(err);
    })
}



//12.1
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

interface Error_With_Status extends Error {
    code: number;
}


exports.getInvoice = (req: Request_With_reqUser, res: Response, next: NextFunction) => {

    const orderId = req.params.orderId;

    OrderClassModel.findById(orderId)
    .then((order) => {

        if (order) {

            if (order.user[0].userId.toString() !== req.user._id.toString()) {
                const error = new Error("Not Authorized") as Error_With_Status;
                error.code = 403;
                //throw error - for sync, return next for async then/catch
                return next (error);    
            }

            //create pdf and write to pc
            const invoiceName = "invoice-"+orderId+".pdf";
            const invoicePath = path.join("data", "invoices", invoiceName)
            
            const pdfDoc = new PDFDocument();

            ////declare file name
            res.setHeader("Content-Type", "application/pdf");
            res.setHeader("Content-Disposition", `inline; filename="+${invoiceName}+"`);

            ////declare file paths
            //path to writeStream where want to write
            //also get stored on the server files + served to client
            pdfDoc.pipe(fs.createWriteStream(invoicePath));
            //return/serve to client
            pdfDoc.pipe(res);

            //now when adding anything to the document
            //will be forwarded to this file path/name and res

            ////////////////////////////////////////////////////
            ////write the pdf
            pdfDoc.fontSize(26).text("Invoice", {underline: true});
            pdfDoc.fontSize(14).text("---------------------------");

            //write each product to file with incrementing the total price
            let totalPrice = 0;
            order.products.forEach((prod: IOrderProduct) => {
                totalPrice = totalPrice + (prod.quantity * prod.product.price)

                pdfDoc.fontSize(14).text(
                    prod.product.title +
                    " - " +
                    prod.quantity +
                    " x " +
                    "$" +
                    prod.product.price
                )

            });
            //end of loop

            pdfDoc.fontSize(14).text("---------------------------");
            pdfDoc.fontSize(18).text("Total Price : $"+totalPrice);
            pdfDoc.end();
            ////////////////////////////////////////////////////








        }
        else if (!order) {
            //11
            const error = new Error("No order found") as Error_With_Status;
            error.code = 404;
            //throw error - for sync, return next for async then/catch
            return next (error);

        }


    })
    .catch((err) => {
        //next an error to use the default error handling function
        next(err);
    })






}

//13.1
const stripe = require("stripe")(process.env.stripe_sec_test_k);

exports.getCheckout = (req: Request_With_reqUser, res: Response, next: NextFunction) => {

    let products : IItems[];
    let total = 0;

    req.user.populate("cart.items.productId")
    .then((user) => {

        products = user.cart.items;

        products.forEach(p => {
            total = total + (p.quantity * p.productId.price);
        });

        return stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",    //payment or subscription

            line_items: products.map(p => {
                return {
                    quantity: p.quantity,
                    price_data: {
                        currency: "egp",
                        unit_amount: p.productId.price * 100,
                        product_data: {
                            name: p.productId.title,
                            description: p.productId.description
                        }
                    }
                }
            }),

            //req.get("host") will give us our host address (localhost:3000) on development
            // > http://localhost:3000/checkout/success
            //create routes
            success_url: req.protocol + "://" + req.get("host") + "/checkout/success",
            cancel_url: req.protocol + "://" + req.get("host") + "/checkout/cancel",



        })



    })
    .then((session) => {
        res.render("shop/checkout", {
            myTitle: "Checkout",
            products: products, //p.prodId will contain product info
            totalSum: total,
            sessionId: session.id,
            Pub_Test_K: process.env.stripe_pub_test_k
        })
    })
    .catch((err) => {
        const error = new Error(err) as Error_With_Status;
        error.code = 500;
        //throw error - for sync, return next for async then/catch
        return next (error);
    })

};


