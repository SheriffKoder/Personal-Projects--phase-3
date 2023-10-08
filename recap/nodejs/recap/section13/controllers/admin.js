const mongodb = require("mongodb");

const ProductClassModel = require("../models/product.js");


exports.postAddProduct = (req, res, next) => {
    
    
    const title = req.body.productTitle;
    const price = req.body.productPrice;
    const imageUrl =  req.body.productImage;
    const imageAlt = req.body.productImageAlt;
    const availability = req.body.productAvailability;

    let deliveryFees = null;
    (req.body.productFreeDelivery === "included") ? deliveryFees = false : deliveryFees = true;

    const notesIntro = req.body.productIntro;
    const notesDescription = req.body.productDescriptionText;
    const notesFeature1 = req.body.productFeature1;
    const notesFeature2 = req.body.productFeature2;
    const notesFeature3 = req.body.productFeature3;

    const age =  req.body.productAge;
    const department = req.body.productDepartment;
    //can i have two inputs with the same name of section in ejs ?
    let department_section = null;
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

    // const ratingScore =
    // const ratingCount =
    // const prevPrice =
    

    const product = new ProductClassModel(
        {
            title: title,
            price: price,
            imageUrl: imageUrl,
            imageAlt: imageAlt,
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

            // userId: req.user //however can just use req.user and mongoose will pick the id from that object


        }
    );


    product.save()
    .then((result) => {
        console.log("product created");
        // console.log("result");
    })
    .catch((err) => {
        console.log(err);
    });

    
    
};

exports.getAddProduct = (req, res, next) => {

    res.render("admin/edit-product",
    {
        myTitle: "Add a Product",
        path: "/admin/add-product",
        editing: false, //editing passed variable for form action=""
    });

};
