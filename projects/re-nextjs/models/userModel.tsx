


//02X.01
import {Model, models, model} from "mongoose";
import { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

import { PropertyDocument } from "./propertyModel";
import { PostDocument } from "./postModel";

// interface propertiesInterface {
//     propertyId: any;
// }

export interface UserDocument extends Document {
    email: string;
    name: string;
    password: string;
    role: "admin" | "user" | "dummyVisitor";
    phone: number;
    avatar: string;
    position: string;
    properties_count: number;
    posts_count: number;
    update: string;
    SortDate: Date;
    _id: string;

}

interface Methods {
    comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<UserDocument, {}, Methods>({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true, trim: true},
    password: {type: String, required: true},
    role: {type: String, enum: ["admin", "user"], default: "user"},
    phone: {
        type: Number,
        required: [true, "a contact number is required"],
        unique: true,

    },
    avatar: {
        type: String,
        required: false,
        default: "/images/defaultUser.jpg"
    },
    position: {
        type: String,
        required: false,     //put in by an agent with admin role
        default: "Real Estate Advisor"
    },

    update: {
        type: String,
        required: false,
    },

    properties_count: {
        type: Number, 
        required: false,
        default: 0
    },
    posts_count: {
        type: Number, 
        required: false,
        default: 0
    },
    SortDate: {
        type: Date,
        default: Date.now
    },
    // properties: [
    //     {
    //         propertyId: {type: Object, ref: "Property"}
    //     }
    // ],

});


// hash the password before saving
// only if modifying the password
// as we are using async and await, will wrap in try/catch
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        throw error;
    }
});


// compare password method
userSchema.methods.comparePassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw error;
    }
}

//if this user model does not exist already then create a model with this schema
const UserModel = models.User || model("User", userSchema);
export default UserModel as Model<UserDocument, {}, Methods>;
 





