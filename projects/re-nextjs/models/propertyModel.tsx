
import mongoose, {Model, models, model} from "mongoose";
import { Schema, Document, Types } from "mongoose";
import { UserDocument } from "./userModel";

import { PopulatedDoc } from "mongoose";


export interface PropertyDocument extends Document {

    property_images : string[],        
    // property_id : number,

    property_country: string,
    property_city: string,
    property_district: string,

    property_type: string,
    property_area: number,
    property_beds: number,
    property_baths: number,
    
    property_listing_type: string,
    property_availability: string,
    property_recommended: string,
    property_price: number,

    property_date: string,
    property_update: string,
    // property_userId: PopulatedDoc<Document<Types.ObjectId> & UserDocument>,
    property_userId:  UserDocument,
    property_description: string,
    SortDate: Date;
    _id: any;

  
  }

  interface Methods {

  }


const propertySchema = new Schema<PropertyDocument, {}, Methods>({
  property_images : {
    type: [],
    required: false,
    default: ["/images/defaultProperty.jpg"]
  },        
  // property_id : number,

  property_country: {
    type: String,
    // required: true,
    default: "country",
  },
  property_city: {
    type: String,
    // required: true,
    default: "city",
  },
  property_district: {
    type: String,
    // required: true,
    default: "district",
  },

  property_type: {
    type: String,
    // required: true,
    default: "apartment",
  },
  property_area: {
    type: Number,
    // required: true,
    default: 200,
  },
  property_beds: {
    type: Number,
    // required: true,
    default: 3,
  },
  property_baths: {
    type: Number,
    // required: true,
    default: 2,
  },
  
  property_listing_type: {
    type: String,
    // required: true,
    default: "sale",
  },
  property_availability: {
    type: String,
    // required: true,
  },
  property_recommended: {
    type: String,
    // required: true,
  },
  property_price: {
    type: Number,
    // required: true,
    default: 1000000,
  },

  property_date: {
    type: String,
    // required: true,
    default: "25 dec",
  },
  property_update: {
    type: String,
    // required: false,
    default: "26 dec",
  },

  property_description: {
    type: String,
    // required: true,
    default: "asdasdkasd asda skdjasd asd ajsdas kdj askdjaskd jasd asdkjas kdj",
  },

  property_userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  SortDate: {
    type: Date,
    default: Date.now
},

});


//if this property model does not exist already then create a model with this schema
const PropertyModel = models.Property || model("Property", propertySchema);
export default PropertyModel as Model<PropertyDocument, {}, Methods>;
