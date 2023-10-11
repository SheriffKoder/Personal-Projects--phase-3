
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

/*
we want to work on the edit product,
for that we have to reach the admin page
and the edit link

//Admin Page (+2h)
(a) the admin page, getAdminProducts controller/router
now work on the ejs of the admin page

(b)now the edit link will take us to the Edit page
!! req.query.edit is the value of the inserted ?edit=true in the link url

//Edit-product page (+2.5h)
(a)work on the getEditProduct controller/router
(b)add the if editing in the edit-product ejs to inject values depending
(c)add these pages links to the header

(d)the post edit-product controller, postDeleteProduct


>> add the link to this page

*/
