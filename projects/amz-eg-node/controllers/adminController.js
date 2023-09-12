

const products = [];

exports.getAdminProducts = (req, res, next) => {


    res.render("admin/index-admin-products", {
        prods: products,
        title: "Amazon: Admin Products",
        path: "/admin-products",
        hasProducts: products.length > 0,

    })

};
