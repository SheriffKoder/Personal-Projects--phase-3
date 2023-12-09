
import {Schema, model, models} from "mongoose";
import { Model, Document } from "mongoose";
import bcrypt from "bcrypt";


import { propertyInterface } from "./property";

interface AgentDocument extends Document {
    id: number;
    fullName: string;
    phone: number;
    email: string;
    avatar: string;
    password: string;
    position: string;
    role: string;
    properties: propertyInterface[];
    update: string;
}

interface Methods {
    comparePassword(password: string): Promise<boolean>;

}


const agentSchema = new Schema<AgentDocument, {}, Methods> ({
    fullName: {
        type: String,
        required: [true, "fullName is required"],
        trim: true,
        // match: [regex]
    },
    phone: {
        type: Number,
        required: [true, "a contact number is required"],
        unique: true,

    },
    email: {
        type: String,
        required: [true, "an e-mail is required"],
        unique: true,

    },
    avatar: {
        type: String,
        required: false,
        default: "/images/logo.svg"
    },
    password: {
        type: String,
        required: [true, "a password is required"],

    },
    position: {
        type: String,
        required: false,     //put in by an agent with admin role
        default: "Real Estate Advisor"
    },
    role: {
        type: String,
        required: false,     //put in by an agent with admin role
        enum: ["admin", "agent"],
        default: "agent"

    },
    properties: {
        type: [], 
        // ref: "Properties", 
        required: false,
        default: []
    },
    update: {
        type: String,
        required: false,
    }

});

// hash the password before saving
// only if modifying the password
// as we are using async and await, will wrap in try/catch
agentSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        throw error;
    }
})


// compare password method
agentSchema.methods.comparePassword = async function (password:string) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw error;
    }
 
}


//if this user model does not exist already then create a model with this schema
const AgentModel = models.Agent || model("Agent", agentSchema);
export default AgentModel as Model<AgentDocument, {}, Methods>;