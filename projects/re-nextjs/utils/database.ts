
//02.03
//02X
import mongoose from "mongoose";

const url = process.env.MONGODB_URI as string;
let connection: typeof mongoose; //allow us to track the connection status

export const connectToDB = async () => {

    if (!connection) connection = await mongoose.connect(url);
    return connection; 

}