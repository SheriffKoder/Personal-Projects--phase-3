

const fs = require("fs");
const path = require("path");

const rootPath = require("../util/path.js");
const myCartFilePath = path.join(rootPath, "data", "cart.json");



module.exports = class Cart {

    static addProduct(id, productPrice) {
        fs.readFile(myCartFilePath, (error, fileContent) => {

            let cart = {products: [], totalPrice: 0};

            //we do not have a created cart
            if (error) {
            }

            //we have a cart file, store into variable
            else if (!error) {
                cart = JSON.parse(fileContent);
            }


            //now to use the parameters, to find if product already exists
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProduct];

            let updatedProduct;
            if (existingProduct) {
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = {id: id, qty: 1};
                cart.products = [...cart.products, updatedProduct];
            }


            cart.totalPrice = cart.totalPrice + +productPrice;

            //array of all the old cart products
            cart.products = [...cart.products];

            fs.writeFile(myCartFilePath, JSON.stringify(cart), err => {

            });
        });
    };


    static deleteProduct (id, productPrice) {
        fs.readFile(myCartFilePath, (error, fileContent) => {
            let cart = {products: [], totalPrice: 0};


        if (error) {
            return;
        }

        else if (!error) {
            cart = JSON.parse(fileContent);
            const updatedCart = {...cart};
            const product = updatedCart.products.find(p => p.id === id);

            //not proceed if item is not in cart
            if (!product) {
                return;
            }

            const productQty = product.qty;
            updatedCart.products = updatedCart.products.filter(prod => prod.id !== id );
            updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;

            fs.writeFile(myCartFilePath, JSON.stringify(updatedCart), err => {
                //console.log(err);
            });
        }
    });
    }


    static getCart(cb) {
        fs.readFile(myCartFilePath, (error, fileContent) => {
            const cart = JSON.parse(fileContent);
            if (error) {
                cb(null);
            }
            else {
                cb(cart);
            }
        });
    }






};