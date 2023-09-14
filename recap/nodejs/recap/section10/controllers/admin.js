
const ProductClassModel = require("../models/product.js");


/* ////////////////////////// add product ////////////////////////// */

//display the add product page
exports.getAddProduct = (req, res, next) => {

    res.render("admin/edit-product", {
        myTitle: "Add-Product page",
        path: "/admin/add-product",
        "editing": false,
        productCSS: true, formsCSS: true, activeProductAdd: true
    });
    
};


//take input (req.body) when submit add product
exports.postAddProduct = (req, res, next) => {

    const title = req.body.productAdded;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;


    const product = new ProductClassModel(
        null,
        title,
        imageUrl,
        price,
        description
    );

    product.save()
    .then(() => {
        res.redirect("/")
    })
    .catch(err => console.log(err));


};


/* ////////////////////////// edit product ////////////////////////// */
exports.getEditProduct = (req, res, next) => {

    const editMode = req.query.edit;

    if (!editMode || editMode === "false") {
        return res.redirect("/");
    }

    //get the productId from the url, amd find in the class
    const prodId = req.params.productId;
    ProductClassModel.findMyId(prodId, product => {
        
        if (!product) {
            console.log("product does not exist to be edited");
            res.redirect("/");
        }

        //else, product is found
        res.render("admin/edit-product", {
            product: product,
            myTitle: "edit-product page",
            path: "/admin/add-product",
            editing: editMode
        });
    });
};


//take input (req.body) when submit add product
exports.postEditProduct = (req, res, next) => {

    const prodId = req.body.productId;
    const upatedTitle = req.body.productAdded;
    const upatedImageUrl = req.body.imageUrl;
    const upatedPrice = req.body.price;
    const upatedDescription = req.body.description;


    const updatedProduct = new ProductClassModel(
        prodId,
        upatedTitle,
        upatedImageUrl,
        upatedPrice,
        upatedDescription
    );

    updatedProduct.save();

    res.redirect("/admin/products");

};



/* ////////////////////////// admin products ////////////////////////// */

exports.getProducts = (req, res, next) => {
    ProductClassModel.fetchAll(products => {
        res.render("admin/products.ejs", {
            prods: products,
            myTitle: "Admin Products",
            path: "/admin/products",
        });
    });
};


/* ////////////////////////// delete a product ////////////////////////// */

exports.postDeleteProduct = (req, res, next) => {
    
    const prodId = req.body.productId;

    ProductClassModel.deleteById(prodId);
    
    res.redirect("/admin/products");

}