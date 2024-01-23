
type checksType = {
    addDate: string,    //c     //1     //2
    initialCheck: string,               //2
    nextCheck: string,  //c     //1     //2
    checkedOn: string,  //c     //1     //2
    notes: string,      //c     //1     //2
}

type checkModel = {
    name: string,
    color: string,
    history: checksType[],
    _id: string,
    
};



const userCars = {
    brand: "",
    model: "",
    lastCheck: "",
    nextCheck: "",
    image: "",
    _id: "",
    checks: [
        {
            name: "",
            color: "",
            _id: "",
            history: [
                {
                    addDate: "",
                    initialCheck: "",
                    nextCheck: "",
                    checkedOn: "",
                    notes: "",
                },
  
            ]


        },
        
    ]
};



//car model which will relate to the userId

import {Model, models, model, Date} from "mongoose";
import {Schema, Document, Types} from "mongoose";
import { UserDocument } from "./userModel";
import { PopulatedDoc } from "mongoose";


export interface CarDocument extends Document {
    brand: string;
    carModel: string;
    image: string;
    lastCheck: Date;
    nextCheck: Date;
    userId: PopulatedDoc<Document<Types.ObjectId> & UserDocument>,
    checks: checkModel[]
}

interface Methods {

};


const carSchema = new Schema<CarDocument, {}> ({
    brand: {
        type: String,
        required: true,
    },
    carModel: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        // required: true,
        default: "/images/car1.png"
    },
    lastCheck: {
        type: Date,
        required: false,
    },
    nextCheck: {
        type: Date,
        required: false,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    checks: {
        type: [],
        default: []
    }
    
});


const CarModel = models.Car || model("Car", carSchema);

export default CarModel as Model<CarDocument, {}, Methods>;



