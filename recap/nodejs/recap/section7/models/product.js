

const fs = require("fs");
const path = require("path");
const rootPath = require("../util/path.js");

const myDataFilePath = path.join(rootPath, "data", "products.json");

const cartModel = require("./cart.js");



const getProductsFromFile = (in_cb) => {
    fs.readFile(myDataFilePath, (error, fileContent) => {
        if(!error) {
            in_cb(JSON.parse(fileContent));
        }
    });
};




module.exports = class Product {
    constructor (id, title1, imageUrl1, price1, description1) {
        this.id = id;
        this.title = title1;
        this.imageUrl = imageUrl1;
        this.description = description1;
        this.price = price1;
    }

    save () {
        getProductsFromFile((products) => {

            if (this.id) {
                const existingProductIndex = product.findIndex(prod => prod.id === this.id);
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;

                fs.writeFile(myDataFilePath, JSON.stringify(updatedProducts), (err) => {
                    console.log(err);
                });
            } else {
                //if no id yet
                this.id = Math.floor(Math.random()*11).toString();
                products.push(this);

                fs.writeFile(myDataFilePath, JSON.stringify(products), (err) => {
                    console.log(err);
                });
            }
        });
    }


    static deleteById(id) {
        getProductsFromFile((products) => {
            const product = products.find(prod => prod.id === id);

            const updatedProducts = products.filter(prod => prod.id !== id);

            fs.writeFile(myDataFilePath, JSON.stringify(updatedProducts), (err) => {
                console.log(err);
                if (!err) {
                    cartModel.deleteProduct(id, product.price);
                }
            });
        });
    };



    static fetchAll(cb1) {
        getProductsFromFile(cb1);
    }




    static findMyId(id, cb) {
        getProductsFromFile((products) => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    };




}