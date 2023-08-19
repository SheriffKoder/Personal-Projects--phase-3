/*
//recap on sections 4 & 5


will start using express from now
that will allow to use middleware app.use etc
instead of putting logic inside a function inside http.createServer

////this is the express server setup
const express = require("express");
const app = express();

//imports here

//middlewares here

app.listen(3000);



Node.js has only a few threads, you must structure your application to use them wisely.
Node.js is fast when the work associated with each client at any given time is "small".
shouldn't do too much work for any client in any single callback or task. 
ensure fair scheduling
Task into comparable-cost sub-Tasks. When each sub-Task completes 
it should submit the next sub-Task, and when the final sub-Task completes 

//Node.js uses the Google V8 engine for JavaScript, which is quite fast 
//for many common operations. Exceptions to this rule are 
//regexps (with exponential number of trips) and JSON operations

//Several Node.js core modules have synchronous expensive APIs, 
//including: encryption, compression, file system, child process

//to install a module temporarily and not add it to the dependencies list:
// # npm install express --no-save

*/


//using express
//basic app that routes on visiting pages/posting from a form
/*
//npm init
//npm install --save express body-parser


const productAddHtml = `
<form method="POST" action="/product-list">
    <label for="html"> Add Product </label>
    <input id="html" type="text" name="productAdded">
    <button type="submit"> Add Product </button>
</form>
`;

////////////////////////////////////////////////////////////////
//imports
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
//urlencoded option to be able to parse non default features
app.use(bodyParser.urlencoded({extended:false}));


////////////////////////////////////////////////////////////////
//middlewares



//when the link on "/" page is clicked
app.get("/add-product", (req, res, next) => {

    res.send(productAddHtml);

});


//when a form posts
app.post("/product-list", (req, res, next) => {
    res.send(`<h1> The Added Product is: ${req.body["productAdded"]}</h1>`);
});

app.get("/product-list", (req, res, next) => {
    res.send(`<h1>Product is not added yet </h1>`);
    res.redirect("/");
});




//default middleware should be placed at end
app.use("/", (req, res, next) => {
    
    console.log("Default middleware");

    res.send(`<h1> Hello from rec4</h1>
    <button>
        <a href="/add-product">Add a Product</a>
    </button>
    `);


});




////////////////////////////////////////////////////////////////
//server listen
app.listen(3000);

*/


//example 2
/*

will create a file structure

public > css > css file
views > html files (404, add-product, shop)
utl >  path.js  (code outputs project's root path)

done ?
let's create a front express app

then work on the routes you defined
1) shop route, display on get "/", get not ready "/product-list"
2) get add-product(form), form post url

*/

//npm init
//npm install --save express body-parser



////(1) starting modules
const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));


////(4) import route files to use
const adminJsRoutes = require("./routes/admin.js");
const shopJsRoutes = require("./routes/shop.js");


////(6) access static files like css
//so will change in the html the css links to /css/file (omit public)
app.use(express.static(path.join(__dirname, "public")));



////(5) activate the route files
//will not user app.post/get will be used in the routes
app.use(adminJsRoutes);
app.use(shopJsRoutes);



////(3) undefined paths
//no url parameter, will catch all un-used urls
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});






////(2)listen to server
app.listen(3000);