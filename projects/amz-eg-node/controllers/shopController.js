

const products = [];



exports.getAllProducts = (req, res, next) => {


    res.render("shop/index-all-products", {
        prods: products,
        title: "Amazon: All Products",
        path: "/",
        hasProducts: products.length > 0,

    })

};


exports.getLogin = (req, res, next) => {


    res.render("shop/login", {
        title: "Amazon: Login",
        path: "/login",
    })

};