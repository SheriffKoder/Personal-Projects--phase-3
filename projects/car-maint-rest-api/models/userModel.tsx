

//a user model without any cars.

import {Model, models, model} from "mongoose";
import {Schema, Document} from "mongoose";
import bcrypt from "bcrypt";
import { CarDocument } from "./carModel";


export interface UserDocument extends Document {
    email: string;
    name: string;
    password: string;
    cars: CarDocument[];
}

interface Methods {

};


const userSchema = new Schema<UserDocument, {}> ({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }, 
    //store an array or car id's related to the user in an array of objects
     cars: [{
        type: Schema.Types.ObjectId,
        ref: "Car"
    }]
},{
    //mongoose will auto add timestamps 
    //when a new version is added to the db
    //createdAt, updatedAt timestamps
    //timestamps: true,
});


const UserModel = models.User || model("User", userSchema);

export default UserModel as Model<UserDocument, {}, Methods>;



