
//02.03
//02X
import mongoose from "mongoose";

let isConnected: typeof mongoose; //allow us to track the connection status

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }


    try {
        isConnected = await mongoose.connect(process.env.MONGODB_URI as string)
        console.log("MongoDB is now connected");        
        

    } catch (error) {
        console.log(error);
    }


}