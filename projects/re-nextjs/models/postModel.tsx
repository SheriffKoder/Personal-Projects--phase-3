
import mongoose, {Model, models, model} from "mongoose";
import { Schema, Document, Types } from "mongoose";
import { UserDocument } from "./userModel";

import { PopulatedDoc } from "mongoose";


export interface PostDocument extends Document {

    title: string,
    content: string,
    image: string,
    date_add: string,
    date_update: string,
    userId: PopulatedDoc<Document<Types.ObjectId> & UserDocument>,

  
  }

  interface Methods {

  }


const postSchema = new Schema<PostDocument, {}, Methods>({
  
  title: {
    type: String,
  },
  content: {
    type: String,
  },
 image: {
    type: String,
    default: "/images/furniture.avif",
  },
  date_add: {
    type: String,
  },
  date_update: {
    type: String
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },

});


//if this property model does not exist already then create a model with this schema
const PostModel = models.Post || model("Post", postSchema);
export default PostModel as Model<PostDocument, {}, Methods>;
