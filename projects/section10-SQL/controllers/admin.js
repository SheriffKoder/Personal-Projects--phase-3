
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
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;



    //(1)
    // ProductClassModel.create({
    req.user.createProduct({
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
    //ProductClassModel.findByPk(prodId)
    //raw: true allows to return only the product's info without metadata, and [0] as we will get an array of one matching product
    req.user.getProducts({ where: {id:prodId}, raw: true }) //(10) //getProducts is given by sequelize automatically to find in the product model, as we did set a hasMany(product) relation in app.js!
    .then((product) => {
        if (!product) {
            console.log("product does not exist to be edited");
            res.redirect("/");
        }
        console.log("product");
        console.log(product[0]);
        res.render("admin/edit-product", 
        {
            product: product[0],
            myTitle: "edit-Product page", 
            path: "/admin/edit-product", 
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
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDescription = req.body.description;


    //Sequelize (5)
    ProductClassModel.findByPk(prodId)
    .then((product) => {
        //this will not change the data in our db, but will change them locally
        product.title = updatedTitle;  
        product.price = updatedPrice;             
        product.imageUrl = updatedImageUrl;
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