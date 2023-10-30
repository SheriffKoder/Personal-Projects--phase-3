"use strict";
// const mongodb = require("mongodb");
Object.defineProperty(exports, "__esModule", { value: true });
// const ProductClassModel = require("../models/product.js");
const product_1 = require("../models/product");
const user_1 = require("../models/user");
//11
const { validationResult } = require("express-validator");
//12
const fileHelper = require("../util/file");
exports.getAddProduct = (req, res, next) => {
    res.render("admin/edit-product", {
        myTitle: "Add a Product",
        path: "/admin/add-product",
        editing: false,
        // isAuthenticated: req.isLoggedIn  //cookies //9.1
        // isAuthenticated: req.session.isLoggedIn //sessions //9.2
        //11
        hasError: false,
        product: [],
        errorMessage: "",
        validationErrors: []
    });
};
exports.postAddProduct = (req, res, next) => {
    const title = req.body.productTitle;
    const price = req.body.productPrice;
    const image = req.file;
    // const imageUrl =  req.body.productImage;
    // const imageAlt = req.body.productImageAlt;
    const availability = req.body.productAvailability;
    let deliveryFees = false;
    (req.body.productFreeDelivery === "included") ? deliveryFees = false : deliveryFees = true;
    const notesIntro = req.body.productIntro;
    const notesDescription = (req.body.productDescriptionText).trim();
    const notesFeature1 = req.body.productFeature1;
    const notesFeature2 = req.body.productFeature2;
    const notesFeature3 = req.body.productFeature3;
    const age = req.body.productAge;
    const department = req.body.productDepartment;
    //can i have two inputs with the same name of section in ejs ?
    let department_section = req.body.productSection_Electronics;
    (req.body.productSection_Electronics) ? department_section = req.body.productSection_Electronics : department_section = req.body.productSection_Clothing;
    const brand = req.body.productBrand;
    const model = req.body.productModel;
    const type = req.body.productType;
    const color = req.body.productColor;
    const tech = req.body.productTechnology;
    const specialFeature = req.body.productSpecialFeature;
    const components = req.body.productComponents;
    const material = req.body.productMaterial;
    const country = req.body.productCountry;
    const modelNumber = req.body.productModelNumber;
    const weight = req.body.productWeight;
    const serial = req.body.productSerial;
    const size = {
        length: req.body.productSizeLength,
        height: req.body.productSizeHeight,
        width: req.body.productSizeWidth
    };
    // const ratingScore = 0;
    // const ratingCount = 0;
    // const prevPrice = 0;
    // const Sold = 0;
    //11
    let allErrors = validationResult(req).errors;
    //12 - add/amend a custom error to the validation errors array
    //incase there image did not pass multer's filter
    //so can be used in the ejs like other errors
    let imageUrl = "";
    console.log("image is :" + image);
    if (!image) {
        allErrors = [...allErrors, { path: "productImage", msg: "please select a valid image type jpeg/jpg/png" }];
    }
    else if (image) {
        imageUrl = image.path; //12
    }
    console.log(allErrors);
    if (allErrors.length > 0) {
        console.log(allErrors);
        return res.status(422).render("admin/edit-product", {
            myTitle: "Add a product",
            editing: false,
            hasError: true,
            product: {
                title: title,
                price: price,
                imageUrl: imageUrl,
                // imageAlt = imageAlt;
                availability: availability,
                deliveryFees: deliveryFees,
                notesIntro: notesIntro,
                notesDescription: notesDescription,
                notesFeature1: notesFeature1,
                notesFeature2: notesFeature2,
                notesFeature3: notesFeature3,
                age: age,
                department: department,
                department_section: department_section,
                brand: brand,
                model: model,
                type: type,
                color: color,
                tech: tech,
                specialFeature: specialFeature,
                components: components,
                material: material,
                country: country,
                modelNumber: modelNumber,
                weight: weight,
                serial: serial,
                size: size,
            },
            errorMessage: "Please check your inputs again, some may have been placed incorrectly",
            validationErrors: allErrors,
        });
    }
    const product = new product_1.ProductClassModel({
        title: title,
        price: price,
        imageUrl: "/" + imageUrl,
        // imageAlt: imageAlt,
        availability: availability,
        deliveryFees: deliveryFees,
        notesIntro: notesIntro,
        notesDescription: notesDescription,
        notesFeature1: notesFeature1,
        notesFeature2: notesFeature2,
        notesFeature3: notesFeature3,
        age: age,
        department: department,
        department_section: department_section,
        brand: brand,
        model: model,
        type: type,
        color: color,
        tech: tech,
        specialFeature: specialFeature,
        components: components,
        material: material,
        country: country,
        modelNumber: modelNumber,
        weight: weight,
        serial: serial,
        size: size,
        ratingScore: 0,
        ratingCount: 0,
        prevPrice: 0,
        sold: 0,
        userId: req.user._id, //6
    });
    product.save()
        .then((result) => {
        console.log("product created");
        // console.log("result");
        user_1.UserClassModel.findById(req.user._id)
            .then(user => {
            if (user) {
                if (user.seller === false) {
                    user.seller = true;
                    return user.save();
                }
            }
        });
    })
        .then(() => {
        console.log("user is now a seller");
        res.redirect("/admin/products");
    })
        .catch((err) => {
        // console.log(err);
        //11
        const error = new Error(err);
        error.code = 500;
        //throw error - for sync, return next for async then/catch
        return next(error);
    });
};
exports.getAdminProducts = (req, res, next) => {
    // ProductClassModel.find()
    product_1.ProductClassModel.find({ userId: req.user._id })
        .then((products) => {
        res.render("admin/admin-products.ejs", {
            prods: products,
            myTitle: "Your Items",
            // isAuthenticated: req.isLoggedIn  //cookies //9.1
            // isAuthenticated: req.session.isLoggedIn //sessions //9.2
        });
    })
        .catch((err) => {
        // console.log(err);
        //11
        const error = new Error(err);
        error.code = 500;
        //throw error - for sync, return next for async then/catch
        return next(error);
    });
};
exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode || editMode === "false") {
        return res.redirect("/admin/admin-products");
    }
    const prodId = req.params.productId;
    product_1.ProductClassModel.findById(prodId)
        .then((product) => {
        if (!product) {
            console.log("product does not exist to be edited");
            // return res.redirect("/admin/admin-products");
            //11
            return res.status(404).render("404", {
                myTitle: "404 Page",
                text: "Product does not exist to be edited"
            });
        }
        res.render("admin/edit-product", {
            product: product,
            myTitle: "Edit " + product.title,
            editing: editMode,
            // isAuthenticated: req.isLoggedIn  //cookies //9.1
            // isAuthenticated: req.session.isLoggedIn //sessions //9.2
            hasError: false,
            errorMessage: "",
            validationErrors: []
        });
    })
        .catch((err) => {
        // console.log(err);
        //11
        const error = new Error(err);
        error.code = 500;
        //throw error - for sync, return next for async then/catch
        return next(error);
    });
};
exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const title = req.body.productTitle;
    const price = req.body.productPrice;
    const image = req.file; //12
    // const imageUrl =  req.body.productImage;
    const availability = req.body.productAvailability;
    let deliveryFees = false;
    (req.body.productFreeDelivery === "included") ? deliveryFees = false : deliveryFees = true;
    const notesIntro = req.body.productIntro;
    const notesDescription = (req.body.productDescriptionText).trim();
    const notesFeature1 = req.body.productFeature1;
    const notesFeature2 = req.body.productFeature2;
    const notesFeature3 = req.body.productFeature3;
    const age = req.body.productAge;
    const department = req.body.productDepartment;
    let department_section = req.body.productSection_Electronics;
    (req.body.productSection_Electronics) ? department_section = req.body.productSection_Electronics : department_section = req.body.productSection_Clothing;
    const brand = req.body.productBrand;
    const model = req.body.productModel;
    const type = req.body.productType;
    const color = req.body.productColor;
    const tech = req.body.productTechnology;
    const specialFeature = req.body.productSpecialFeature;
    const components = req.body.productComponents;
    const material = req.body.productMaterial;
    const country = req.body.productCountry;
    const modelNumber = req.body.productModelNumber;
    const weight = req.body.productWeight;
    const serial = req.body.productSerial;
    const size = {
        length: req.body.productSizeLength,
        height: req.body.productSizeHeight,
        width: req.body.productSizeWidth
    };
    // const ratingScore = 0;
    // const ratingCount = 0;
    // const prevPrice = 0;
    // const Sold = 0;
    //11
    let allErrors = validationResult(req).errors;
    let imageUrl = "";
    //12
    if (!image) {
        allErrors = [...allErrors, { path: "productImage", msg: "please select a valid image type jpeg/jpg/png" }];
    }
    else if (image) {
        imageUrl = "/" + image.path; //12
    }
    if (allErrors.length > 0) {
        return res.status(422).render("admin/edit-product", {
            myTitle: "Add a product",
            editing: true,
            hasError: true,
            product: {
                title: title,
                price: price,
                imageUrl: imageUrl,
                // imageAlt = imageAlt;
                availability: availability,
                deliveryFees: deliveryFees,
                notesIntro: notesIntro,
                notesDescription: notesDescription,
                notesFeature1: notesFeature1,
                notesFeature2: notesFeature2,
                notesFeature3: notesFeature3,
                age: age,
                department: department,
                department_section: department_section,
                brand: brand,
                model: model,
                type: type,
                color: color,
                tech: tech,
                specialFeature: specialFeature,
                components: components,
                material: material,
                country: country,
                modelNumber: modelNumber,
                weight: weight,
                serial: serial,
                size: size,
            },
            errorMessage: "Please check your inputs again, some may have been placed incorrectly",
            validationErrors: allErrors
        });
    }
    product_1.ProductClassModel.findById(prodId)
        .then((product) => {
        if (product !== null) {
            //10
            if (product.userId.toString() !== req.user._id.toString()) {
                console.log("current user is not authorized to edit this product");
                res.redirect("/products");
            }
            else {
                product.title = title;
                product.prevPrice = product.price; ////
                product.price = price;
                product.imageUrl = imageUrl;
                // imageAlt = imageAlt;
                product.availability = availability;
                product.deliveryFees = deliveryFees;
                product.notesIntro = notesIntro;
                product.notesDescription = notesDescription;
                product.notesFeature1 = notesFeature1;
                product.notesFeature2 = notesFeature2;
                product.notesFeature3 = notesFeature3;
                product.age = age;
                product.department = department;
                product.department_section = department_section;
                product.brand = brand;
                product.model = model;
                product.type = type;
                product.color = color;
                product.tech = tech;
                product.specialFeature = specialFeature;
                product.components = components;
                product.material = material;
                product.country = country;
                product.modelNumber = modelNumber;
                product.weight = weight;
                product.serial = serial;
                product.size = size;
                // ratingScore = 0;
                //ß ratingCount = 0;
                // sold = 0;
                // product.userId = req.user;   //6
                return product.save(); //return to chain another then
            }
        }
    })
        .then(() => {
        console.log("updated product");
        res.redirect("/admin/products");
    })
        .catch(err => {
        // console.log(err);
        //11
        const error = new Error(err);
        error.code = 500;
        //throw error - for sync, return next for async then/catch
        return next(error);
    });
};
exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    // ProductClassModel.findByIdAndRemove(prodId)
    //12
    product_1.ProductClassModel.findById(prodId)
        .then((product) => {
        if (!product) {
            const error = new Error("Product not found to be deleted");
            return next(error);
        }
        return fileHelper.deleteFile(product.imageUrl.slice(1));
    }).then(() => {
        return product_1.ProductClassModel.deleteOne({ _id: prodId, userId: req.user._id });
    })
        // ProductClassModel.deleteOne({_id: prodId, userId: req.user._id})
        .then(() => {
        console.log("removed product");
        res.redirect("/admin/products");
    })
        .catch((err) => {
        // console.log(err);
        //11
        const error = new Error(err);
        error.code = 500;
        //throw error - for sync, return next for async then/catch
        return next(error);
    });
};
