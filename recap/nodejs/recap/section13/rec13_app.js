
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

//import user model
//app.use user
//user in mongoose connect

/*
we want to work on the edit product,
for that we have to reach the admin page
and the edit link

//4 Admin Page (+2h)
(a) the admin page, getAdminProducts controller/router
now work on the ejs of the admin page

(b)now the edit link will take us to the Edit page
!! req.query.edit is the value of the inserted ?edit=true in the link url

//5 Edit-product page (+3h)
(a)work on the getEditProduct controller/router
(b)add the if editing in the edit-product ejs to inject values depending
(c)add these pages links to the header

(d)the post edit-product controller, postDeleteProduct

///////////////////


//6 Adding a user - seller name in product details (+0.5h)

create a user model
create and save, and find in app.js
now put the user in PostAddProduct controller, product model

now we can populate the product's userId with the user's name
in the getProducts controller
in controller     ProductClassModel.findById(prodId).populate("userId", "name").then(..)
in ejs <%=product.userId.name%>
also .select("title")    //this will output the "product" with title only no price etc


//7 shopping cart (+0.75h)

(a) add in the user model, addToCart method
(b) add the postCart controller
but we want the select input to assist in giving x quantity
(c) take the select element from ejs to the controller, pass to the method to update with


*/
