

//a user model without any cars.

import {Model, models, model} from "mongoose";
import {Schema, Document} from "mongoose";
import bcrypt from "bcrypt";


export interface UserDocument extends Document {
    email: string;
    name: string;
    password: string;
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
    }
    
});


const UserModel = models.User || model("User", userSchema);

export default UserModel as Model<UserDocument, {}, Methods>;



