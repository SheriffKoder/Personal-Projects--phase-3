
import {Schema, model, models} from "mongoose";

export interface propertyInterface {

    property_images : string[],        
    property_id : number,

    property_country: string,
    property_city: string,
    property_district: string,

    property_type: string,
    property_area: number,
    property_beds: number,
    property_baths: number,
    
    property_listing_type: string,
    property_availability: boolean,
    property_recommended: boolean,
    property_price: number,

    property_date: string,
    property_update: string,
    property_author: string,
    property_description: string,
  
  }

export interface agentInterface {
    id: number
    fullName: string,
    phone: number,
    email: string,
    avatar: string,
    password: string,
    position: string,
    role: string,
    properties: propertyInterface[],
    update: string,
}


const AgentSchema = new Schema ({
    fullName: {
        type: String,
        required: [true, "fullName is required"],
        // match: [regex]
    },
    phone: {
        type: Number,
        required: [true, "a contact number is required"],

    },
    email: {
        type: String,
        required: [true, "an e-mail is required"],

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
        default: "agent"

    },
    properties: {
        type: Object, 
        ref: "Properties", 
        required: false,
        default: []
    },
    update: {
        type: String,
        required: false,
    }

});


const Agent = models.Agent || model("Agent", AgentSchema);
export {Agent};