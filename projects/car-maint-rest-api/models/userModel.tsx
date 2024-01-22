
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


type carInfoType = {
    brand: string,
    model: string,
    lastCheck: string,
    nextCheck: string,
    image: string,
    _id: string,
    checks: checkModel[],

  }

type userType = {
    name: string,
    email: string,

}

type fullUserType = {
    userInfo: userType,
    userCars: carInfoType,
}


const userInfo : userType = {
    name: "",
    email: "",
}

const userCars:carInfoType = {
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


const fullUser = {
    userInfo, userCars
}


//we need a user model without any cars now.

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



