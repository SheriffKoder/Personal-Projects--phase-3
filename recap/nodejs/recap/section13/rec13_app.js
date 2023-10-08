
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


//public directory
app.use(express.static(path.join(__dirname, "public")));


//set the templating engine
app.set("view engine", "ejs");
app.set("views", "views");


//Routes
const adminJSRoutes = require("./routes/admin.js");
const shopJSRoutes = require("./routes/shop");

app.use(shopJSRoutes);
app.use("/admin", adminJSRoutes);



//404 page
const errorController = require("./controllers/errorController.js");
app.use(errorController.get404);

mongoose.connect(process.env.MongoDbUri)
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log("mongoose connect error :: " + err);
    });

//import user model
//app.use user
//user in mongoose connect


//2) all products page, getAllProducts controller, router, activate in app.js
//3) the product details page, getProduct controller, router