
import PostModel from "@models/postModel";
import PropertyModel from "@models/propertyModel";
import UserModel from "@models/userModel";


const increaseUserScore = async (target:string, userId:string) => {

    let User = await UserModel.findById(userId);
    // console.log(User);

    if (User) {

        if (target === "property") {
            console.log(User.properties_count);
            User.properties_count = User.properties_count + 1;
            console.log(User.properties_count);
            await User.save();    

        }

        else if (target === "post") {
            console.log(User.posts_count);
            User.posts_count = User.posts_count + 1;
            console.log(User.posts_count);
            await User.save();    

        }
    
    }

}


const decreaseUserScore = async (target:string, itemId:string) => {

    // let User = await UserModel.findById(userId);
    // console.log(User);

        if (target === "property") {
            let property = await PropertyModel.findById(itemId);
            let User = await UserModel.findById(property?.property_userId);
            if (User) {
                console.log(User.properties_count);
                User.properties_count >= 0 ? (User.properties_count = User.properties_count - 1) : (User.properties_count = 0);
                console.log(User.properties_count);
                await User.save();    
                console.log("score decreased successfully");
            }
        }

        if (target === "post") {
            let post = await PostModel.findById(itemId);
            let User = await UserModel.findById(post?.userId);
            if (User) {
                console.log(User.posts_count);
                User.posts_count > 0 ? (User.posts_count = User.posts_count - 1) : (User.posts_count = 0);
                console.log(User.posts_count);
                await User.save();    
                console.log("score decreased successfully");
            }
        }




}

export {increaseUserScore, decreaseUserScore};