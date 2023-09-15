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
//work on the ejs, app.js (without the sequelize blocks), router, controller skeleton then implement the sql like below

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


until now we started with the ejs, app.js, router, controller skeleton 
then implement the sequelize methods to fetch/add/delete from a products model
now we want to assign the added products to some user






//Create a User model/data and set relation to product

(7) create a user model, import the user/product model in app.js
        and set relation between the user/product

(8) change the sequelize.sync in app.js to find a user with id = 1
        if no user with id=1, create a new user (which will be given id=1 from the model config)
    so i can create users from a form with this method **

(9) add a app.use middleware in app.js before calling the shop/admin routes
    to find a user with id=1 and call the next(); in order to pass the user
    to next middlewares (will use in postAddProduct)
    set sequelize.sync({force: true} ) if encounter an error then remove it

(10) in getEditProduct controller, use .getProducts (sqlz rel method) instead of findByPk
    in postEditProduct controller use req.uer.createProduct





////The Cart
//set relations, use the relation methods

(11) create a Cart model, that has an id field

(12) create a cart-item model, because a user can have many carts
    which also has id field and (new) quantity

the cart should be related to the user, with a product or many and quantity
a product can belong to many carts
each user has only one cart
(13) import in app.js and 
        set the relation between the Cart/User and Cart/Product through the CartItem

(14) in the sequelize.sync add user.createCart after the user is created

(15) in the getCart controller
        req.user.getCart() > cart.getProducts() as defined in the app.js relations

(16) in the postCart controller
        req.user.getCart(), cart.getProducts()({where: {id: prodId}})
        to check if product exist, increase quantity
        if not exist quantity = 1
        fetchedCart.addProduct (sqlz rel method)

(17) in cart.ejs adjust p.productData.title to p.title
    p.qty to p.cartItem.quantity, as products have in between relation by cartItem and quantity named quantity

(18) delete item from cart
        req.user.getCart, cart.getProducts where id:prodId, product.cartItem.destroy();



////Checkout

(19) create a order.js model and order-item.js model
    import into app.js

(20) set relations between orders and users/products through the order-item
an order is an "in between table" between User (order owner) and Products (part of order)
these products have quantity attached to them

(21) add the Order now button in cart.ejs

(22) work on getOrder controller 
    req.user.getOrders

(23) work on the postOrder controller
        req.user.getCart() > cart.getProducts() > {products}
        req.user.createOrder() > order.addProducts({products.map} )
    then clear cart

(24) work on the orders.ejs and add routes to getOrder, postOrder






needs proper user identification




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



////(4) import route files to use
const adminJsRoutes = require("./routes/admin.js");
const shopJsRoutes = require("./routes/shop.js");


////(6) access static files like css
//so will change in the html the css links to /css/file (omit public)
app.use(express.static(path.join(__dirname, "public")));


////Sequelize(9)
app.use((req, res, next) => {
    User.findByPk(1).then(user => {
        //gives an object, can use methods on
        //this returned user will be stored in req.user
        //which will be used in "next" middleware
        //which is postAddProduct

        req.user = user;
        next();
    })
    .catch(err => {
        console.log(err);
    })

});



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


/////////////////////////////////////////
/////////////////////////////////////////
////Section11: Sequelize

//relating models (7)
const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");

const Order = require("./models/order.js"); //(20)
const OrderItem = require("./models/order-item.js"); //(20)

//can learn about more association usage in the documentation/association
//configure some options, onDelete: on delete, the relation should be also deleted for "Product"
//so if we delete a user, all products related to the user would also be gone
Product.belongsTo(User, {constraints: true, onDelete: "CASCADE"});
User.hasMany(Product);

//(13)
User.hasOne(Cart);
Cart.belongsTo(User); //inverse to the above, thus two directions, one direction is enough
//many-to-many relation
Cart.belongsToMany(Product, {through: CartItem });    //the through key, telling where these connections should be stored
Product.belongsToMany(Cart, {through: CartItem});

//(20)
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, {through: OrderItem});
//can include the reverse that a product belongs to many orders



const sequelize = require("./util/database");   //(0)
//sequelize.sync(); //(0)

//(8)
sequelize.sync()
        .then(() => {
            return User.findByPk(1);
        })
        .then((user) =>{
            if (!user) {
                return User.create({name: "John", "email": "test@email.com"})
            }
            return user;
        })
        .then(user => {
            user.createCart(); //(14)
        })
        .catch((err) => {
            console.log(err);
        });
    


/////////////////////////////////////////
/////////////////////////////////////////


////(2)listen to server
app.listen(8000);










