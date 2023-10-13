
//npm init
//npm install --save express body-parser mongodb ejs
//npm install --save mongoose

// # npm install --save dotenv
// # npm install typescript --save-dev
// # tsc --init //create ts config
// //@types package for the validation library
// # npm install --save-dev @types/node @types/express @types/body-parser


// in the TS config file
// add "moduleResolution": "node" below "module": "commonjs"

// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });

// const express = __importDefault(require("express"));


// require("dotenv").config();
// > replace values with process.env.variableName




//module imports
require("dotenv").config();

const http = require("http");
const express = require("express");
const app = express();
const path = require("path");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

const User = require("./models/user");  //6

//public directory
app.use(express.static(path.join(__dirname, "public")));


//set the templating engine
app.set("view engine", "ejs");
app.set("views", "views");


//Routes
const adminJSRoutes = require("./routes/admin.js");
const shopJSRoutes = require("./routes/shop");


app.use((req, res, next) => {                   //6
    User.findById("652725974ad26fc2ae8f8433")
    .then(user => {
        req.user = user;
        next();
    })
    .catch(err => {
        console.log(err);
    })
})

app.use(shopJSRoutes);
app.use("/admin", adminJSRoutes);



//404 page
const errorController = require("./controllers/errorController.js");
app.use(errorController.get404);

mongoose.connect(process.env.MongoDbUri)
    .then(result => {

        //6
        //gives back the first user it finds
        User.findOne().then(user => {
            if (!user) {
                const user = new User({
                    name: "Sheriff",
                    email: "Sheriff@email.com",
                    seller: true,
                    UserRating: 0,
                    cart: {
                        items: []
                    }
                })
                user.save();

            }
        });

        app.listen(3000);
    })
    .catch(err => {
        console.log("mongoose connect error :: " + err);
    });




/*

//7 shopping cart (+0.75h)

/1- post item to user's cart
(a) add in the user model, addToCart method
(b) add the postCart controller
but we want the select input to assist in giving x quantity
(c) take the select element from ejs to the controller, pass to the method to update with

/2- cart page (+2.0h)
adjust the ejs, controllers, routers and interactions
- add functionality to display shipping text depending on the amount reach from the free delivery minimum total cost
- add functionality to change the user's cart item's quantity from the cart page

/addons- (+2h)
- better quantity select options based on what is already selected
- add global currency values

(d) delete from cart on the cart page
- go to the user model and add a method


//8 Order 0.75+1.5
- define an order model
- postOrder controller which saves a blueprint of the order model
- define the clearCart in the user model

- define the getOrders shop controller, add the ejs, route
- found out that the order needs more data inputs that will be displayed on the ejs





*/
