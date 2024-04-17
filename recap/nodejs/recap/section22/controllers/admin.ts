// const mongodb = require("mongodb");

// const ProductClassModel = require("../models/product.js");

import { ProductClassModel } from '../models/product';
import { IUserWithMethods } from '../models/user';
import {Request, Response, NextFunction} from 'express';
import { IUser, UserClassModel } from '../models/user';


//11
const { validationResult } = require("express-validator");

//12
const fileHelper = require("../util/file");


//12.2
const ITEMS_PER_PAGE = 2;



//to use req.user and isLoggedIn
interface Request_With_reqUser extends Request {
    user: IUserWithMethods;
    isLoggedIn: boolean;
}

//to use isLoggedIn on req.session
declare module 'express-session' {
    interface SessionData {
        isLoggedIn: boolean;
    }
}

//11
interface Error_With_Status extends Error {
    code: number;
}



exports.getAddProduct = (req: Request_With_reqUser, res: Response, next: NextFunction) => {

    res.render("admin/edit-product",
    {
        myTitle: "Add a Product",
        path: "/admin/add-product",
        editing: false, //editing passed variable for form action=""
        // isAuthenticated: req.isLoggedIn  //cookies //9.1
        // isAuthenticated: req.session.isLoggedIn //sessions //9.2
        //11
        hasError: false,
        product: [],
        errorMessage: "",
        validationErrors: []
    });

};

exports.postAddProduct = (req: Request_With_reqUser, res: Response, next: NextFunction) => {
    
    
    const title = req.body.productTitle;
    const price = req.body.productPrice;
    const image =  req.file;
    // const imageUrl =  req.body.productImage;
    // const imageAlt = req.body.productImageAlt;
    const availability = req.body.productAvailability;

    let deliveryFees: boolean = false;
    (req.body.productFreeDelivery === "included") ? deliveryFees = false : deliveryFees = true;

    const notesIntro = req.body.productIntro;
    const notesDescription = (req.body.productDescriptionText).trim();
    const notesFeature1 = req.body.productFeature1;
    const notesFeature2 = req.body.productFeature2;
    const notesFeature3 = req.body.productFeature3;

    const age =  req.body.productAge;
    const department = req.body.productDepartment;
    //can i have two inputs with the same name of section in ejs ?
    let department_section: string = req.body.productSection_Electronics;
    (req.body.productSection_Electronics) ? department_section = req.body.productSection_Electronics : department_section = req.body.productSection_Clothing;

    const brand =  req.body.productBrand;
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
    let imageUrl: string = "";
    console.log("image is :"+ image);
        if (!image) {
        allErrors = [...allErrors, {path: "productImage", msg: "please select a valid image type jpeg/jpg/png"}]
    } else if (image) {
        imageUrl = image.path;   //12
    }
    console.log(allErrors);



    if (allErrors.length > 0) {
        console.log(allErrors);
        return res.status(422).render("admin/edit-product",
        {
            myTitle: "Add a product",
            editing: false,
            hasError: true,
            product: {
                title : title,
                price : price ,
                imageUrl : imageUrl,//may also want to keep it //12
                // imageAlt = imageAlt;
                availability : availability,
                deliveryFees : deliveryFees,
    
                notesIntro : notesIntro,
                notesDescription : notesDescription,
                notesFeature1 : notesFeature1,
                notesFeature2 : notesFeature2,
                notesFeature3 : notesFeature3,
    
                age : age,
                department : department,
                department_section : department_section,
    
                brand : brand,
                model : model,
                type : type,
                color : color,
                tech : tech,
                specialFeature : specialFeature,
                components : components,
                material : material,
    
                country : country,
                modelNumber : modelNumber,
                weight : weight,
                serial : serial,
                size : size,
    
            },
            errorMessage: "Please check your inputs again, some may have been placed incorrectly",
            validationErrors: allErrors,
        });
    }



    const product = new ProductClassModel(
        {
            title: title,
            price: price,
            imageUrl: "/" + imageUrl,   //12
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

            userId: req.user._id,   //6


        }
    );


    product.save()
    .then((result: Object) => {
        console.log("product created");
        // console.log("result");

        UserClassModel.findById(req.user._id)
        .then(user => {
            if (user) {
                if (user.seller === false) {
                    user.seller = true;
                    return user.save();
                }
            }
        })
    })
    .then(() => {
        console.log("user is now a seller");
        res.redirect("/admin/products");
    })
    .catch((err) => {
        // console.log(err);
        //11
        const error = new Error(err) as Error_With_Status;
        error.code = 500;
        //throw error - for sync, return next for async then/catch
        return next (error);
        
    });

    
    
};




exports.getAdminProducts = (req: Request_With_reqUser, res: Response, next: NextFunction) => {
    // ProductClassModel.find()
        //12.2
        let page: number;
        if (req.query.page) {
            page = +req.query.page;
        } else {
            page = 1;
        }
        let totalItems: number;
    
    
        //12.2
    ProductClassModel.find({userId: req.user._id}).countDocuments()
    .then((numProducts: number) => {
        totalItems = numProducts;

        //page 1 1-1 * 2 = skip 0, limit 2 -- get 0-2
        //page 2 2-1 * 2 = skip 2, limit 2 -- get 2-4
        //page 3 3-1 * 2 = skip 4, limit 2 -- get 4-6
        return ProductClassModel.find({userId: req.user._id}).sort({date:-1}) //sort by reverse after adding a date in the products model's schema
        .skip((page-1)*ITEMS_PER_PAGE)
        .limit(ITEMS_PER_PAGE)

    })
    .then((products) => {
        res.render("admin/admin-products.ejs", 
        {
            prods: products, 
            myTitle: "Your Items",
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
    .catch((err)=> {
        // console.log(err);
        //11
        const error = new Error(err) as Error_With_Status;
        error.code = 500;
        //throw error - for sync, return next for async then/catch
        return next (error);
    })
};


exports.getEditProduct = (req: Request_With_reqUser, res: Response, next: NextFunction) => {

    const editMode = req.query.edit;

    if (!editMode || editMode === "false") {
        return res.redirect("/admin/admin-products");
    }

    const prodId = req.params.productId;



    ProductClassModel.findById(prodId)
    .then((product) => {
        if (!product) {
            console.log("product does not exist to be edited");
            // return res.redirect("/admin/admin-products");
            //11
            return res.status(404).render("404", 
            {
                myTitle: "404 Page", 
                text: "Product does not exist to be edited"
            });
        
        }
        res.render("admin/edit-product", { 
            product: product, 
            myTitle: "Edit "+product.title, 
            editing: editMode,         
            // isAuthenticated: req.isLoggedIn  //cookies //9.1
            // isAuthenticated: req.session.isLoggedIn //sessions //9.2
            hasError: false,
            errorMessage: "",
            validationErrors: []    
    })
    })
    .catch((err) => {
        // console.log(err);
        //11
        const error = new Error(err) as Error_With_Status;
        error.code = 500;
        //throw error - for sync, return next for async then/catch
        return next (error);
    });


};


exports.postEditProduct = (req: Request_With_reqUser, res: Response, next: NextFunction) => {
    
    const prodId = req.body.productId;
    const title = req.body.productTitle;
    const price = req.body.productPrice;
    const image = req.file; //12
    // const imageUrl =  req.body.productImage;
    const availability = req.body.productAvailability;

    let deliveryFees: boolean = false;
    (req.body.productFreeDelivery === "included") ? deliveryFees = false : deliveryFees = true;

    const notesIntro = req.body.productIntro;
    const notesDescription = (req.body.productDescriptionText).trim();
    const notesFeature1 = req.body.productFeature1;
    const notesFeature2 = req.body.productFeature2;
    const notesFeature3 = req.body.productFeature3;

    const age =  req.body.productAge;
    const department = req.body.productDepartment;

    let department_section: string = req.body.productSection_Electronics;
    (req.body.productSection_Electronics) ? department_section = req.body.productSection_Electronics : department_section = req.body.productSection_Clothing;


    const brand =  req.body.productBrand;
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
    let imageUrl: string = "";
    //12
    if (!image) {
        // allErrors = [...allErrors, {path: "productImage", msg: "please select a valid image type jpeg/jpg/png"}];
    } else if (image) {
        imageUrl = "/"+image.path;   //12
    }



    if (allErrors.length > 0) {
        return res.status(422).render("admin/edit-product",
        {
            myTitle: "Edit your product",
            editing: true,
            hasError: true,
            product: {
                title : title,
                price : price ,
                imageUrl : imageUrl,
                // imageAlt = imageAlt;
                availability : availability,
                deliveryFees : deliveryFees,
    
                notesIntro : notesIntro,
                notesDescription : notesDescription,
                notesFeature1 : notesFeature1,
                notesFeature2 : notesFeature2,
                notesFeature3 : notesFeature3,
    
                age : age,
                department : department,
                department_section : department_section,
    
                brand : brand,
                model : model,
                type : type,
                color : color,
                tech : tech,
                specialFeature : specialFeature,
                components : components,
                material : material,
    
                country : country,
                modelNumber : modelNumber,
                weight : weight,
                serial : serial,
                size : size,
    
            },
            errorMessage: "Please check your inputs again, some may have been placed incorrectly",
            validationErrors: allErrors
        });
    }


    ProductClassModel.findById(prodId)
    .then((product) => {

        if (product !== null) {


            //10
            if (product.userId.toString() !== req.user._id.toString()) {
                console.log("current user is not authorized to edit this product");
                res.redirect("/products");
            
            } else {

            product.title = title;
            product.prevPrice = product.price;  ////
            product.price = price ;
            
            //if there is a req.file then there should be a new url, if not keep the product.imageUrl unchanged
            image ? (product.imageUrl = imageUrl) : null;

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

            return product.save();      //return to chain another then
        
            }
        }
    })
    .then(()=> {
        console.log("updated product");
        res.redirect("/admin/products");
    })
    .catch(err => {
        // console.log(err);
        //11
        const error = new Error(err) as Error_With_Status;
        error.code = 500;
        //throw error - for sync, return next for async then/catch
        return next (error);
    });
    
    
    
};



//13 - edits
exports.deleteProduct = (req: Request_With_reqUser, res: Response, next: NextFunction) =>  {

    // const prodId = req.body.productId;
    const prodId = req.params.productId;


    // ProductClassModel.findByIdAndRemove(prodId)
    console.log(prodId);
    //12
    ProductClassModel.findById(prodId)
    .then((product) => {
        if (!product) {
            const error = new Error("Product not found to be deleted") as Error_With_Status;
            return next (error);
        }
        if (product) {
            console.log(product.imageUrl.slice(1));
            fileHelper.deleteFile(product.imageUrl.slice(1));
        }

    })
    .then(() => {
        return ProductClassModel.deleteOne({_id: prodId, userId: req.user._id});

    })
    
    // ProductClassModel.deleteOne({_id: prodId, userId: req.user._id})
    .then(() => {
        console.log("removed product");
        // res.redirect("/admin/products"); //-13

        //13
        //.json() is a helper method in express to return json data
        //pass a js object and it will be transformed into json
        //200 success
        res.status(200).json({
            "message": "Success!"
        });


    })
    .catch((err) => {
        // console.log(err);
        //11 //-13
        // const error = new Error(err) as Error_With_Status;
        // error.code = 500;
        // //throw error - for sync, return next for async then/catch
        // return next (error);

        //13
        res.status(500).json({
            "message": "Deleting product failed!"
        });

    });

}