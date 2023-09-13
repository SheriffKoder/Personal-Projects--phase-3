


//////////////////////////////////////////////////////////////////////////////////
//Section 6: Templating engines


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
//do not add the /admin in the "route" files's paths
//but add /admin to html links/forms
// "./admin" will be placed before any path
//so place /product in the .js file use's
//and enter /admin/product url for this to work
//but the .js file's form should have a path with "/admin/add-product"



// (3) undefined paths
// no url parameter, will catch all un-used urls
// app.use((req, res, next) => {
//     //res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
//     res.status(404).render("404", {myTitle: "404 Page"});

// });

const errorController = require("./controllers/errorController.js");
app.use(errorController.get404);




////(2)listen to server
app.listen(3000);




//////////////////////////////////////////////////////////////////////////////////
//Section 7 MVC
