
const ProductClassModel = require("../models/product.js");
const Cart = require("../models/cart.js");
const { products } = require("../routes/admin");


/* ////////////////////////// all products ////////////////////////// */

exports.getProducts = (req, res, next) => {

    //Sequelize (2)
    ProductClassModel.findAll()
    .then((products)=>{
        res.render("shop/index.ejs", {prods: products, myTitle: "Shop page", path:"/"});
    })
    .catch((err) => {
        console.log(err);
    });

};


/* ////////////////////////// product details ////////////////////////// */

exports.getProduct = (req, res, next) => {
    
    const prodId = req.params.productId;

    //mySQL
    //use [0] because the returned value is an "array" with the product inside it
    ProductClassModel.findByPk(prodId)
    .then((product) => {
        res.render("shop/product-details", { product: product, myTitle: product.title, path: "/products"});
    })
    .catch((err) => {
        console.log(err);
    });

};



/* ////////////////////////// main page ////////////////////////// */

exports.getIndex = (req, res, next) => {

    //Sequelize (2)
    ProductClassModel.findAll()
    .then((products)=>{
        res.render("shop/index.ejs", {prods: products, myTitle: "Shop page", path:"/"});
    })
    .catch((err) => {
        console.log(err);
    });



}



/* ////////////////////////// /////////// ////////////////////////// */
/* //////////////////////////    Cart    ////////////////////////// */


exports.getCart = (req, res, next) => {

    //(15)
    req.user.getCart()
    .then((cart) => {
        return cart.getProducts()
    })
    .then(products => {
        res.render("shop/cart", {
            path: "/cart",
            myTitle: "Your Cart",
            products: products
        });
    })
    .catch(err => {
        console.log(err);
    })


};


exports.postCart = (req, res, next) => {

    //(16)
    const prodId = req.body.productId;
    let fetchedCart;
    let newQuantity =1;

    req.user.getCart()
    .then((cart) => {
        fetchedCart = cart;
        //find if the product trying to add is already part of the cart
        //if it is, increase quantity, if its not add it with quantity 1
        return cart.getProducts({ where: {id: prodId}});
    })
    .then(products => {
        let product;
        if (products.length > 0) {
            product = products[0]
        }
        if (product) {
            const oldQuantity = product.cartItem.quantity;
            newQuantity = oldQuantity + 1;
            return product;
        }

        //if arrived here then did not return
        //no existing product was found
        return ProductClassModel.findByPk(prodId);
    })
    .then(product => {
        return fetchedCart.addProduct(product, {
            through: {quantity: newQuantity}
        });
    })
    .then(() => {
        res.redirect("/cart");
    })
    .catch((err) => {
        console.log(err);
    })




}


exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;

    //(18)
    req.user.getCart()
    .then(cart => {
        return cart.getProducts({where: {id: prodId}});
    })
    .then(products => {
        const product = products[0];
        return product.cartItem.destroy();
    })
    .then (() => {
        res.redirect("/cart");
    }) 
    .catch(err => {
        console.log(err);
    })


}



/* //////////////////////////    Orders    ////////////////////////// */




exports.getOrder = (req, res, next) => {
    //(22)
    //eger loading concept: if you are fetching all the orders 
    //also fetch all related products already
    //and give back one array of orders
    //also includes products per order
    //and this include works bec. we have a relation between orders and product in app.js
    req.user.getOrders({include: ["products"]})
    .then(orders => {
        res.render("shop/orders", {
            path: "/orders",
            myTitle: "Your Orders",
            orders: orders
        });
    })
    .catch(err => {
        console.log(err);
    })

};

exports.postOrder = (req, res, next) => {

    //(23)
    let fetchedCart;

    req.user.getCart()
    .then((cart) => {
        fetchedCart = cart;
        return cart.getProducts();
    })
    .then((products) => {
        //want to associate products to the order so will return
        return req.user.createOrder()   //sqlz rel method
        .then(order => {
            order.addProducts(products.map(product => {
                product.orderItem = {quantity: product.cartItem.quantity};
                return product;
            }))
        })
    })
    .then(() => {
        //this will remove products from cart
        fetchedCart.setProducts(null); //(26)
    })

}



exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", {
        path: "/checkout",
        myTitle: "Checkout"
    });
};
