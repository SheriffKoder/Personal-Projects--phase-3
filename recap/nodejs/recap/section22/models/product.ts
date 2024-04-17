// const mongoose = require("mongoose");

import { Date, Schema, Types, model } from 'mongoose'; //TS
//allows to create new schemas
// const Schema = mongoose.Schema;


//we have the flexibility to deviate from that and not use all keys
//or can use the required key and give up this flexibility
//no need to put _id as it will be added automatically as an object it
//user id will be added later


interface ISize {
    height: number;
    width: number;
    length: number;
}

interface IProduct {

    _id: Schema.Types.ObjectId;
    //from the html file, sorted by display order
    title: string;
    price: number;
    imageUrl: string;
    availability: number;
    deliveryFees: boolean;


    notesIntro: string;
    notesDescription: string;
    notesFeature1: string;
    notesFeature2: string;
    notesFeature3: string;


    age: string;
    department: string;
    department_section: string;


    brand: string;
    model: string;
    type: string;
    color: string;
    tech: string;
    specialFeature: string;
    components: string;
    material: string;


    country: string;
    modelNumber: string;
    weight: number;
    serial: string;
    size: ISize;

    //may be needed later
    ratingScore: number;
    ratingCount: number;
    prevPrice: number;
    sold: number;
        

    userId: Types.ObjectId;
    date: Date;
};



//Schema/blueprint define
const productSchema = new Schema<IProduct>({

    //from the html file, sorted by display order
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    // imageAlt: {
    //     type: String,
    //     required: true
    // },
    availability: {
        type: Number,
        required: true
    },
    deliveryFees: {
        type: Boolean,
        required: true
    },



    notesIntro: {
        type: String,
        required: true
    },
    notesDescription: {
        type: String,
        required: true
    },
    notesFeature1: {
        type: String,
        required: true
    },
    notesFeature2: {
        type: String,
        required: false
    },
    notesFeature3: {
        type: String,
        required: false
    },



    age: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    department_section: {
        type: String,
        required: true
    },




    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: false
    },
    tech: {
        type: String,
        required: false
    },
    specialFeature: {
        type: String,
        required: false
    },
    components: {
        type: String,
        required: false
    },
    material: {
        type: String,
        required: true
    },



    country: {
        type: String,
        required: true
    },
    modelNumber: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    serial: {
        type: String,
        required: true
    },
    size: {
        type: Object,
        required: true
    },


    //may be needed later
    ratingScore: {
        type: Number,
        required: false
    },
    ratingCount: {
        type: Number,
        required: false
    },
    prevPrice: {
        type: Number,
        required: false
    },
    sold: {
        type: Number,
        required: false
    },

    userId: {
        //as it is a reference to the user (_id) //(9)
        type: Schema.Types.ObjectId,
        //ref takes a string, which other mongoose model is related to the data in this field
        //the "User model" as written in mongoose.model("User"..
        ref: "User",
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },





});



//mongoose will take the "Product" turns into lower-case and make plural
//this is how the "products" collection name came from
const ProductClassModel = model<IProduct>("Product", productSchema); 

export {
    ISize,
    IProduct,
    ProductClassModel,
};