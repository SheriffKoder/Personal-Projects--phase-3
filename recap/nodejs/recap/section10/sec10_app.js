/*

Types of Storage: 
Memory (variables)
File
Database

Types of Databases:
SQL (e.g MySQL)
NoSQL (e.g MongoDB)


*/
//////////////////////////////////////
//SQL (structured query language) table/field/field-records
/*
commands to interact with the database

//Structure:
table: Users 
field: user_id/email/name fields
records: 1/max@test.com/Maximilian Schwarzmuller

table: Products table: 
field: product_id/title/price/description
record:  1/chair/ 120.99/A comfy chair
         2/book/ 10.99/exciting book

(relation between users and products)
table: Orders 
field: id/user_id/product_id
record 2/1      /1


//Core Feature: 
allows to relate different tables

//Data relations:
one-to-one; each record fits another record
one-to-many; a record might fit multiple other records
many-to-many; multiple records in table A can fit multiple records in table B


//Characteristics:
strong data schema; 
    for each table we clearly define how the data in there should look like
    which fields we do have, 
    structure is required, all data (in a table) has to fit
,


//Syntax/Keywords:
SELECT, FROM, WHERE
SELECT * FROM (table) where (field) > (record)
ex: SELECT * FROM users WHERE age > 28


//Database:
Vertical scaling (add more hardware) - thus has limits when thousands of read/write queries per second
Horizontal Scaling is hard due to the way SQL work

//Use:
non frequent data change applications


*/




//////////////////////////////////////
//NoSQL (structured query language)
/*


//Structure:
Collections: (like tables)
Users, Orders

Documents: (like fields and field-records)
{name: "max", age: 29} , {name: "peter"}

    Orders:
    {id: "sdasd", user: {id: 1, email: "max@test.com"}, products: {id:2, price: 10.99} }

    Users:
    {id: 1, email: "max@test.com"}

    Products:
    {id:2, title:"Chair", price: 10.99}
,


//Core Feature:
No data relations, we duplicate data - even though you can relate
this way we do not have to write all code to relate Documents
each Document has data of its own
but when data is updated it has to be updated in many places


//Characteristics:
Documents can be schema-less, some data entries can not be used
Documents can have different structures
we work with merged or nested documents in an existing document



//Database
Horizontal scaling is possible here due to the few relations existing
thus we have great performance for mass read/write requests for applications with high traffic

//Use:
frequent data change applications





*/



//////////////////////////////////////
//Databases Introduction
/*
using databases is quicker than accessing files

scaling the database servers as the application grows to store more data

//Horizontal Scaling:
Adding more servers from cloud providers - infinite
data split across servers, 
    but will need some process that runs queries on all of them
    and merge data together


//Vertical Scaling:
Add more hardware (cpu, memory etc.) - not infinite
but machines can have expansion limits

*/




//////////////////////////////////////////////////////////////////////
//Setup SQL (mySQL)
/*


////setup
go to mySQL.com and download the community edition
mySQL community server, mySQL workbench (virtual client to interact with the DB)
or a combined installer for windows MySQL (installer & tools)

> connect to a database in the workbench
> create a new schema (now will have tables)

> install mysql2 npm library
> create a database.js file in util folder and import as a promise in app.js


////setup the database
in the workbench, right click tables, create table > products
add fields then click apply
id > with datatype INT and checkmarks for PK, NN, UQ, UN, AI
title > with type VARCHAR(45) which is basically a string
and edit the 45 to 255 characters long (longer titles will be cut off)
check NN
price > type double (so we can enter decimal) check NN
description > type TEXT, check NN
imageUrl > type VARCHAR(255) (means longer urls will not work), check NN



////use the database
import the db
db.execute (execute queries).then.catch
db.query same but .execute is a bit safer
db.end //if we want to end it whenever our application is shut down
db.getConnection

//manually insert data, now we are able to fetch data from the database


////server logic
//in the model methods
return db.execute("command")
INSERT INTO products (title, price, description, imageUrl) VALUES (?,?,?,?)", [this.title, this.price, this.description, this.imageUrl ]
SELECT * FROM products
SELECT * FROM products WHERE products.id = ?", [id]

//work on the controllers logic



*/

////Code
/*

//npm init
//npm install --save express body-parser
//npm install --save ejs


//allows to write and execute SQL code and interact with a database
//# npm install --save mysql2





//////////////////////////////////////////////////////////////////////////////////
//Section 6: Templating engines
//Section 7: MVC
//Section 10: mySQL


////(1) starting modules
const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));



//(7) setup the templating engine
app.set("view engine", "ejs");
app.set("views", "views");



//Section10: mySQL

const db = require("./util/database");
db.execute("SELECT * FROM products")
    .then((result) => {
        console.log("result", result[0])
    })
    .catch((err) => {
        console.log(err);
    })




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
app.listen(8000);

*/


//////////////////////////////////////////////////////////////////////
//mySQL (Sequelize library)


//can you start directly with Sequelize ?
//work on the ejs, app.js, controller, router skeleton then implement the sql like below

////Introduction
/*
Sequelize: a third-party library to not use sql syntax
does sql code behind the scenes for the convenience methods it provide
which automatically creates tables, set relations for tables,
allows to create new elements to the database, edit, delete, find, connect them
and allows to work with js objects 

the js object of user with name,age,email,password
can be mapped to a database table by Sequelize using a method

from  >  "INSERT INTO table (field1, field2,..) VALUES (?, ?, ..)", [value1, value2, ..]
to    >  const user = User.create({value1: "..", value2: ".."});

- Instances: const user = User.build()
- Queries: User.findAll()
- Associations: User.hasMany(Product)

*/



////setup
/*
go to mySQL.com and download the community edition
mySQL community server, mySQL workbench (virtual client to interact with the DB)
or a combined installer for windows MySQL (installer & tools)

> connect to a database in the workbench
> create a new schema (now will have tables)


////setup the database (do not add, explore how fields are defined will add with code)
in the workbench, right click tables, create table > products
add fields then click apply
id > with datatype INT and checkmarks for PK, NN, UQ, UN, AI
title > with type VARCHAR(45) which is basically a string
and edit the 45 to 255 characters long (longer titles will be cut off)
check NN
price > type double (so we can enter decimal) check NN
description > type TEXT, check NN
imageUrl > type VARCHAR(255) (means longer urls will not work), check NN
*/



/*


////Code setup

- install mysql2 and Sequelize via npm
- define a Sequelize connection pool in the database file
    and import in app.js as sequelize

- work on the product model file (a new syntax not class like mySQL or MVC)
    where we define a table, fields (inspired from the workbench)

- use //sequelize.sync({force: true} ) in app.js and refresh the workbench
if the table exists it will not overwrite it by default except if we told it to do so
to proof its from sqlz, will find fields of createdAt, updatedAt


////Using sequelize in the controllers

(1) Add a product to database
    controllers > admin.js > postAddProduct
    to create a product use ProductClassModel.create({

(2) Fetch products from database for index, All products, Admin Products
    ProductClassModel.findAll().then((products)) render

(3) Fetch a Single Product
    >>ProductClassModel.findByPk(prodId)
    //findAll always gives multiple items in an array even if it is only one element
    >>ProductClassModel.findAll({where: {id: prodId}})
    both are the same but will use findByPk

(4) getEditProduct
    ProductClassModel.findByPk(prodId) to pass the product to page for re-fill

(5) postEditProduct
    ProductClassModel.findByPk(prodId) to update then save the product

(6) postDeleteProduct
    ProductClassModel.findByPk(prodId) return product.destroy();












*/

//npm init
//npm install --save express body-parser
//npm install --save ejs


//allows to write and execute SQL code and interact with a database
//# npm install --save mysql2
//# npm install --save sequelize





//////////////////////////////////////////////////////////////////////////////////
//Section 6: Templating engines
//Section 7: MVC
//Section 10: mySQL


////(1) starting modules
const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));



//(7) setup the templating engine
app.set("view engine", "ejs");
app.set("views", "views");



//Section11: Sequelize

const sequelize = require("./util/database");
sequelize.sync();




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
app.listen(8000);










