
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

    //(1)
    ProductClassModel.create({
        title: title,
        price: price,
        imageUrl: imageUrl,
        description: description,
    }).then((result) => {
        console.log("created product");
        res.redirect("/admin/products");
   }).catch((err) => {
        console.log("error" + err);
   });

};


/* ////////////////////////// edit product ////////////////////////// */
exports.getEditProduct = (req, res, next) => {

    const editMode = req.query.edit;

    if (!editMode || editMode === "false") {
        return res.redirect("/");
    }

    //get the productId from the url, amd find in the class
    const prodId = req.params.productId;


    //Sequelize (4)
    ProductClassModel.findByPk(prodId)
    .then((product) => {
        if (!product) {
            console.log("product does not exist to be edited");
            res.redirect("/");
        }
        res.render("admin/edit-product", 
        {
            product: product,
            myTitle: "edit-Product page", 
            path: "/admin/add-product", 
            editing: editMode
            
        });        
    })
    .catch((err) => {
        console.log(err);
    });







};


//take input (req.body) when submit add product
exports.postEditProduct = (req, res, next) => {

    const prodId = req.body.productId;
    const updatedTitle = req.body.productAdded;
    const updatedImageUrl = req.body.imageUrl;
    const updatedPrice = req.body.price;
    const updatedDescription = req.body.description;


    //Sequelize (5)
    ProductClassModel.findByPk(prodId)
    .then((product) => {
        //this will not change the data in our db, but will change them locally
        product.title = updatedTitle;   
        product.imageUrl = updatedImageUrl;
        product.price = updatedPrice;            
        product.description = updatedDescription;

        return product.save();
    })
    .then(() => {
        console.log("updated product");
        res.redirect("/admin/products");
    })
    .catch((err) => {
        //for both then's
        console.log(err);
    })






};



/* ////////////////////////// admin products ////////////////////////// */

exports.getProducts = (req, res, next) => {

    //Sequelize (2)
    ProductClassModel.findAll()
    .then((products) => {
        res.render("admin/products.ejs", {
            prods: products,
            myTitle: "Admin Products",
            path: "/admin/products",
        });
    })
    .catch((err) => {
        console.log(err);
    });
    
};


/* ////////////////////////// delete a product ////////////////////////// */

exports.postDeleteProduct = (req, res, next) => {
    
    const prodId = req.body.productId;

    //sequelize (6)
    //using destroy directly and adding a condition about which product to destroy
    //ProductClassModel.destroy({WHERE})

    ProductClassModel.findByPk(prodId)
    .then((product) => {
        return product.destroy();
    })
    .then((result) => {
        //.then on the destroy promise
        console.log("removed product");
        res.redirect("/admin/products");
    })
    .catch((err) => {
        console.log(err);
    });



}