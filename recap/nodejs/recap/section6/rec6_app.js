
/*

//////////////////////////////////////////////////////////////////////////////////
//Templating engines

free temp engines
. ejs; normal html       <p> <#= name %> </p>
. pug (jade);  p #{name}
    does not use real html, replaces with a minimized version
    custom temp language
.handlebars; <p> {{name}} </p>
    normal html, custom temp language, limited set of features

//////////////////////////////////////////
////Setup: app.js
//use pug temp engine
app.set("view engine", "pug");
//locate the views app.set("views", "views-folder");
app.set("views", "views");


////Use: any middleware
//starting section 6: use templating engines to render html pages and give them variables
res.status(404).render("404", {myTitle: "404 Page"});
res.render("add-product", {myTitle: "Add-product page", path: "/add-product", path: "/add-product", productCSS: true, formsCSS: true, activeProductAdd: true});

//in the admin.js router
export router > to app.js
export products > to shop.js


//////////////////////////////////////////
////Steps: using a templating engine
work on the html
copy the html to the ejs includes which is shared between html
in the html files, replace some things with these includes
render in the router
insert router values in the .ejs files


//the way you pass template values in res.render
//are the same across all templating engine
//the difference is in the html'sh file and app.js use




//////////////////////////////////////////
////ejs syntax

//adding a value
<%=value %> //html will be displayed as text

//<% vanilla js code %>

<% if (prods.length > 0) { %>
    //html
<% } else { %>
    <h1> no products found </h1>
<% } %>


<%  for (let products of prods) {%>
    //html
<% } %>

//includes - to use a html/ejs code in multiple files
<%- htmlcode %>
<%- include("includes/head.ejs") %> //from the pov of the file using this code


//to add class to links
<a class="<%= path === '/add-product' ? 'active' :'' %>" > </a>





//////////////////////////////////////////////////////////////////////////////////
//Section 7 MVC

> move the middlewares in the route files to controller files

> create a product.js models file (new instances of product, cart)
with save/fetch methods

json.parse > js
json.stringify > text

> start using req.params
> fill the form with pre-existing values when "editing" a product
by checking on the "editing" passed value
and filling with product.value


> edit product
> delete product

<form action="/admin/delete-product" method="POST">
    <input type="hidden" value="<%=product.id%>" name="productId">
    <button class="btn" type="submit"> Delete</button>
</form>








*/



/*
the App used in sections 4/5
//npm init
//npm install --save express body-parser



////(1) starting modules
const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));


////(4) import route files to use


////(6) access static files like css
//so will change in the html the css links to /css/file (omit public)
app.use(express.static(path.join(__dirname, "public")));


////(5) activate the route files

////(5.1)filtering mechanism
////app.use("/admin", adminJsRoutes);
//only routes starting with /admin (ex. /admin/add-page)
//will be executed from this code 
//do not add the /admin in the route files's paths
// "./admin" will be placed before any path
//so place /product in the .js file use's
//and enter /admin/product url for this to work
//but the .js file's form should have a path with "/admin/add-product"



////(3) undefined paths
//no url parameter, will catch all un-used urls
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});



////(2)listen to server
app.listen(3000);








*/



//npm init
//npm install --save express body-parser
//npm install --save ejs


////(1) starting modules
const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));


//(7) setup the templating engine
app.set("view engine", "ejs");
app.set("views", "views");



////(4) import route files to use
const adminJsRoutes = require("./routes/admin.js");
const shopJsRoutes = require("./routes/shop.js");


////(6) access static files like css
//so will change in the html the css links to /css/file (omit public)
app.use(express.static(path.join(__dirname, "public")));


////(5) activate the route files
//app.use(adminJsRoutes.router);
app.use(shopJsRoutes);


////(5.1)filtering mechanism
app.use("/admin", adminJsRoutes);
//only routes starting with /admin (ex. /admin/add-page)
//will be executed from this code 
//do not add the /admin in the route files's paths
// "./admin" will be placed before any path
//so place /product in the .js file use's
//and enter /admin/product url for this to work
//but the .js file's form should have a path with "/admin/add-product"



////(3) undefined paths
//no url parameter, will catch all un-used urls
// app.use((req, res, next) => {
//     //res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
//     res.status(404).render("404", {myTitle: "404 Page"});

// });

const errorController = require("./controllers/errorController.js");
app.use(errorController.get404);




////(2)listen to server
app.listen(3000);


