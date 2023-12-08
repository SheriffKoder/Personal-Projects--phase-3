
//02.03
import mongoose from "mongoose";

let isConnected = false; //allow us to track the connection status

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }


    try {
        if (process.env.MONGODB_URI) {
            await mongoose.connect(process.env.MONGODB_URI, {
                dbName: "re-next",
                // useNewUrlParser: true,
                // useUnifiedTopology: true,
            })
            isConnected = true;
            console.log("MongoDB is now connected");        
        }

    } catch (error) {
        console.log(error);
    }


}