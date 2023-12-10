
//02X.01
import mongoose from "mongoose";

const url = process.env.MONGODB_URI as string;
let connection: typeof mongoose; //allow us to track the connection status

export const connectToDB = async () => {

    if (connection) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        connection = await mongoose.connect(url);
        console.log("MongoDB is now connected");
    } catch (error) {
        console.log(error);
    }

    // if (!connection) connection = await mongoose.connect(url);
    // return connection; 



}