/*

able to point any design out and built it
use node.js express
use templating engines like handlebars, pug, ejs
introduction to mySQL native
(use SQL with Sequelize to make a Shop website)


want to get to the starting-ending modules to build from
Typescript
Sessions and cookies

*/

{
/////////////////////////////////////////////////////////////////////////////////////////////
////Section1

/*

Recap on nodejs course: practice/practice1 
which recaps on section 1,2,3

http module to spin up a server
fs module to writeFile 

////////////////////////////////////////////
spin up a server
that will listen to http requests

const http = require("http");
const server = http.createServer((req, res) => {
            //logic or imported function
});

server.listen(3000);



default response 
send a write response with html code


//on a req.url "/"
send a write response with html code

//on a req.url "/message" with method=POST (from the sent html form)
req.on("data", ())
    store data in an array
req.on("end", ())
    Buffer.concat(array).toString

take this value and write to a file using fs 
if there is an error writing, redirect
fs.writeFileSync("filesystem_output1.txt", `Amazon Website ${current_time}`);


put the logic inside createServer in a separate file
and import into app.js

mainly
res.setHeader("Content-Type", "text/html");
res.write(htmlCode_download);

receive chunks and put in Buffer
write to file, redirect

//all of this is node.js not yet express

*/

////////////////////////////////////////////
////Main-keys
/*
use constants

//the request object
#if
req.url
req.method
req.headers
req.headers["user-agent"]


//just import and output a single line
fs.writeFile("filesystem_output.txt", messageString);


//the response object
#then
res.setHeader("Content-type", "text/html");
res.write(htmlCode);

res.statusCode = 302;
res.setHeader("Location", "/");
or
res.writeHead(302, {"Location", "/"});
return res.end();





req.on("data", (fn) => {

});

req.on("end", (fn) => {
    const parsedBody = Buffer.concat(requestDataBody).toString();

    fs.writeFile("filesystem_output.txt", message, (err) => {


    }


});


*/




//exporting
/*

ES6
export default fnName;**

export const route_function = () => {}

or
module.exports = requestHandler;
module.exports = router;**

exports.routes = router;**
exports.products = products;

or
module.exports = {
    handler: requestHandler
}
or
module.exports.handler = requestHandler;

or 
exports.handler = requestHandler;



//importing
require
call require

or 
require.fnName


*/






/////////////////////////////////////////////////////////////////////////////////////////////
//Section4 (using express)
//recaps on section 4,5

/*
use express, 
nodemon
body-parser, 
path module to use on res.sendFile local
create a utl.js export that returns the project's root directory
//app.use(express.static(path.join(__dirname, "public")));



////////////////////////////////////////////
(1)
//will start using express
//basic app that routes on visiting pages/posting from a form

const express = require("express");
const app = express();

//imports here

//middlewares here
//allows to use app.use/get/post middlewares in app.js 
app.use((req,res,next), () => {
    res.send(htmlCode)
    res.redirect


app.listen(3000);

////////////////////////////////////////////
(2)
setup file structure for html,css,routes
in app.js use the routes files which separate middlewares for user-views/admin-views and post


//install as a production dependency 
# npm install package-name --save 

//install as a development dependency
# npm install package-name --save-dev

//install globally so can be used anywhere not just in the project
# npm install package-name -g

CMD + hover over express module will show the source code

*/

////////////////////////////////////////////
//main-keys
/*

const express = require("express");
const app = express();


app.use     //will use this in the app.js without "/" for any un-defined urls
app.get     //can use there in the app.js but will import from router
app.post

        res.send("<h1> Hello from rec4</h1>");
        res.redirect("/");
        res.sendFile(path.join(RootPath, "views", "add-product.html"));


//__dirname a nodejs global variable hold the path for this file/project

//exporting middlewares from route files
const router = express.router();
router.get(...)
module.exports = router;

//import by require and app.use(required) in app.js


*/






/////////////////////////////////////////////////////////////////////////////////////////////
//Section 6
//using temp engines
/*

how to use pug, handlebars, ejs templating engines with express

use "ejs" templating engine which allows to use javascript inside the html, 
which allowed to display multiple added products to the index page 

work on the frontend to create the shop site structure and logic with ejs 
to prepare for using the MVC (routes, controllers, models)




free temp engines
. ejs; normal html       <p> <#= name %> </p>
. pug (jade);  p #{name}
    does not use real html, replaces with a minimized version
    custom temp language
.handlebars; <p> {{name}} </p>
    normal html, custom temp language, limited set of features
*/

//////////////////////////////////////////

//Temp engines main-keys
/*
////Setup: app.js
//use pug temp engine
app.set("view engine", "pug");
//locate the views app.set("views", "views-folder");
app.set("views", "views");


////Use: any middleware
//starting section 6: use templating engines to render html pages and give them variables
//rendering from middlewares:
res.status(404).render("404", {myTitle: "404 Page"});
res.render("add-product", {myTitle: "Add-product page", path: "/add-product", path: "/add-product", productCSS: true, formsCSS: true, activeProductAdd: true});

//in the admin.js router
export router > to app.js
export products > to shop.js (sharing the products array variable between router files)


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
//so your server code will be the same

*/


//////////////////////////////////////////
////ejs syntax
/*

//adding a js value
<%=variable %> //html will be displayed as text

//<% vanilla js code %>
//like this:
<% if (prods.length > 0) { %>
    //html
<% } else { %>
    <h1> no products found </h1>
<% } %>


<%  for (let products of prods) {%>
    //html
<% } %>

//includes - to use a html/ejs code in multiple files
<%- include("../includes/head.ejs") %> //from the pov of the file using this code


//to add class to links, where path is a passed variable
<a class="<%= path === '/add-product' ? 'active' :'' %>" > </a>


*/





/////////////////////////////////////////////////////////////////////////////////////////////
//Section 7--
//MVC (define manual models and output to a json file)
//however the logic of the models is complex but serves as an intro
/*

webpage that can add products, edit and delete
with products saved to a json file and read from json file

use express
use models with controllers (models create instances or have functions to return data )
controllers display ejs and uses model methods to find to edit/delete/pass


fully working just run node rec7_app.js

*/

//description and plan
/*


app.js < routes < controllers (render views) < models

output to a json file


//1.EJS
- insert variables into item's ejs, to know what the model will need

- if want to add/delete etc
<form action="/cart" method="POST">
<input type="hidden" name="productId" value="<%= product.id %>">
the product.id is used in the controller via req.body to use model functions on the id
to find and edit, delete


//2.Models (before controllers?)
- the models are responsible for creating instances with variables mentioned in ejs
- have functions to find, add, delete with the id passed

const updatedCart = {...cart};  //mirror cart then put back



//3. Controllers
- define the get middlewares
- define the post middleware, which takes req.body.ejs-name, create new class instance
    - or takes the ejs hidden input product.id to use on it model functions find to return and edit or delete


//4.routers


> req.params
> fill the form with pre-existing values when "editing" a product
by checking on the "editing" passed value
and filling with the already product data ex. product.value



*/

}

{
/////////////////////////////////////////////////////////////////////////////////////////////
//Section 10 (private section 1)
//SQL and Sequelize

/*

- Databases/Server introduction and type comparison

//mySQL(builds on Section 7)
allows to use methods for add, fetch products with SQL commands

as you can do the pervious section, 
will just import a defined database file and replace the product model logic with SQL commands
will find that the controller of getIndex/getProducts/getProduct appends a then to get products instead of directly getting products
and add product
Thus switching from section7 MVC to mySQL is easy
did not work yet on edit, add, cart controllers with mySQL


//Sequelize (does not build on previous sections, just knowledge to implement it)
allows to use methods for add, fetch products without writing logic or commands
as usual work on the ejs, app.js, router, controller skeleton then implement the sql like below
what is learnt is to define the database and controller logic
to add/edit/delete to the database of product

then move to relations so adding an item in a database gets the id of the user/cart etc.
add a user database, will use one
add a cart database which is related to a user/products and work on relational logic
add order database which is related to user/products







*/

}



/////////////////////////////////////////////////////////////////////////////////////////////
//Section 12.0
//Mongo

//DotEnv
/*

//Create Files
.env .env.test

//add to gitignore
# dotenv environment variables file
git add .gitignore
git commit -m "adding .env.to .gitignore"

//Install
# npm install --save dotenv

//Use
in app.js
require("dotenv").config();
> replace values with process.env.variableName

*/


//Typescript
/*

used during development, better code, avoid unwanted behaviors or errors
TS file get compiled to JS file
strict typechecks

////Features
- adds Types
- adds next-gen javaScript Features (compiled down for older Browsers)
  without using extra tools (like babel)
- adds some non next-gen features that do not exist in js at all
  but that help us write cleaner code (like interfaces or Generics)
  these features are stripped away once compiled, but used in development
- adds meta-programming features like decorators
- has rich configuration options to allow us to fine tune how the code should be compiled
- gives us modern tooling and integrates greatly into modern tooling
  to give us a great development experience
  that helps in even non-typescript projects
- for more details about Typescript check the "Understanding Typescript" course

////Setup
> download the typescript compiler
> npm install typescript --save-dev // sudo npm install -g typescript (to install globally)
> create .ts and .html, convert to .js, import .js into html

> convert the .ts file to .js file
# tsc app.ts
// tsc app.js


////some of the Types used in TS:
number; 1 , 5.3 , -10 (integers, decimals, negative)
string; single, double quotes, `` template literals
boolean; true, false (just these two, no "truthy" or "falsy")
object; a js object, more specific types {type of object} are possible
Array; can have flexible types in there or can also define the array element types
Any; any kind of value is allowed, a fallback


////Use

give id attr to the inputs in html
get these elements by id in the .ts code

querySelector; TS will know the element type
getElementById: will have to do type-casting
    is to add the as keyword "as HTMLInputElement;""

this could be null if we have no button element
> solution to that,
1) check if buttonElement is truthy, and move the code into this if check
or
2) add ! after the querySelector line
the ! means, that the expression before it could theoretically be null
but we know that it isn't
trying to work around the red-lines gives a more error prone code


running # "tsc app.js" will not take the config file into account or ignored
running # "tsc" will compile all TS files in the folder
  while taking the config file into account


////With Node

allow the require syntax and other node and express syntax
# npm install --save-dev @types/node
# npm install --save-dev @types/express




////Add a config file

# tsc --init
this will create a tsconfig.json
there are many options you can enable/uncomment and read their description



//working with union types
//to add multiple types to accepted types for the function parameter
>> separate them with a "|"

but still also there is a red-line
>> so we will run code depending on the type of data we get using a
js code "type guard"


//type aliases
repetitive definitions


//interfaces
help define the structure of an object

//Generics
instead of
const numResults: number[] = [];
will use
>> const numResults: Array<number> = [];
>> generic types can also be used for promises




*/



/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//Section 12



//12.0 initial installs and setup (TS and .env)++
/*
create .env & put in .gitignore, 

src > folders and app.ts

//npm init
//npm install --save express body-parser mongodb ejs


# npm install --save dotenv
# npm install typescript --save-dev
# tsc --init //create ts config
//@types package for the validation library
# npm install --save-dev @types/node @types/express @types/body-parser


in the TS config file
add "moduleResolution": "node" below "module": "commonjs"

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const express = __importDefault(require("express"));


require("dotenv").config();
> replace values with process.env.variableName



work with .ts files
# tsc or tsc App.ts

*/

/////////////////////////////////////////////////////////////////////////////////////////////
//
/*

a mongo db server can have multiple databases like shop etc.
and a database can have multiple collections, like users/orders
which has documents (data)

data is transformed behind the scenes to BSON
CRUD - create read update delete



> mongoDB atlas website, register, create a new database

> code the util/database.js file
> import the mongoConnect in the and work on the .js models

const db = getDb();
dbOp = db.collection("products").updateOne({_id: this._id}, { $set: this });
return db.collection("users").updateOne({_id: newUserId}, { $set: {cart: updatedCart}});
dbOp = db.collection("products").insertOne(this);
return db.collection("products").find().toArray()
return db.collection("products").find({_id: newProdId }).next()
return db.collection("products").deleteOne({ _id: newProdId })
updatedCartItems.push({productId: newProductId, quantity: newQuantity});

//give me all elements where the id is one of the id's mentioned in this array
return db.collection("products").find(_id {$in: productIds}).toArray();

anytime use a db method with id, 
let newUserId = new mongodb.ObjectId(this._id);


> work on the controllers
//just call the model methods

ProductClassModel.findById(prodId)

const product = new ProductClassModel(
product.save()





*/






/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//Section 13 (Mongoose)

// - add product page ejs and routing (2h)
// - add product page and initial fixes (2h)
// - all products and product details (2h)
// - product details fixes (1h)



/*

we do not need a database.js as mongoose does all the configurations behind the scenes

//1
> define a "product" schema for mongoose in the product model
> place values in the schema as from the ejs file without the userId for now
> check for not required values from the ejs file to make not required in the schema definitions

//2
> work on the postAddProduct and getAddProduct controllers
> check your ejs, you might need to adjust the .css links
    > move-in the project directory the ejs/include views, css/js public files,
    > check the includes links and page title 
> add routes
>add the app.js (the mvc line is complete)

**navigation buttons urls may need some checking

//3
//a) all products page, getAllProducts controller, router, 
//activate the shop mvc in app.js
//b) the product details page, getProduct controller, router


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


/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//Section 14 (Mongoose)

work on the typescript edition around (+5.5h)
- work on the models, 
all models ready, but will have to import in controllers in a different way
all controllers ready
app.js ready
routes ready
>> remaining public js files, each day one.

.then((product) => {
    if product !== null do this

also the map method needed a guard that confirms that the subject is an array etc.

HydratedDocument to allow to use populate in shop.js

yet:
const num1Element = document.getElementById("num1") as HTMLInputElement;
numResults.push(result as number);
const buttonElement = document.querySelector("button")!;


/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//Section 14 (Mongoose+Typescript)

its simple do not mind the amount of notes

//9.1 (+3h)
//Cookies and Sessions
work on the login button
get the cookies from the general midddleware with TS check
set the cookie from the postLogin auth controller

store data in memory or even on the client side
Cookies are stored on the client side

//cookies
- add a login link to header
- add a getLogin controller, router, import router into app.js
- add the ejs auth/login.ejs
- add a postLogin controller to redirect to "/products" when login clicked

- add         isAuthenticated: req.isLoggedIn
to all get controllers
- add a postLogin controller sets req.isLoggedIn = true;
- send the req.isLogged in by checking on the cookie from the app.js general middleware



//9.2
//Sessions (+1.5)
share information across all requests of the same user
value of a hashed id the will be in return confirmed by the server

express-session library part of the express js but not included by default
stores a cookie in the browser for the user instance

connect-mongodb-session, to allow express to store data in the mongoDB

>connect in the app.js to mongoDB-session
to create a new instance
store the user in session and only after the user is logged in
map a session to a specific user
> import the user model in auth controller
and copy the app.js user middleware code to the postLogin there
> change isAuthenticated syntax
> change in all controllers to req.session.user

>logging out
> a link submit and redirect to /logout
req.session.destroy will remove from the database
and the cookie will be deleted after browser is closed

let us start by 
- app.js
- controllers
- routes

>> find a session user or set a session for a DB user by login

- import the express-session in app.js
- setup a session in app.js

- setup the session TS
- in the general middleware pass the req.user as a req.session.user._id

- change in the controllers req.isLoggedIn to req.session.isLoggedIn

- in the postLogin auth controller
we before in app.js stored a found user in req.user, then saved isLoggedIn cookie, then used next
here will find a user, store it in req.session.user, store isLoggedIn of req.session.isLoggedIn

- add a postLogout controller and link to a route

- add username to the header ejs



/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//Section 15 (Mongoose+Typescript)




what is done with csrf input backside ?
include CSRF protection in ANY application you build
authentication has to happen on the server-side and builds up
on sessions
you can protect routes by checking the session-controlled
login status right before you access a controller action




////in the controllers
//admin
remove req.session
instead of findById(prodId)
use deleteOne({_id: prodId, userId: req.user._id})

instead of ProductClassModel.find()
use ProductClassModel.find({userId: req.user._id})

if (product.userId.toString() !== req.user._id.toString()) {

//shop
just remove req.session


//////app.js
import and app.use the csrf and flash
set the req.locals
remove the create user from the mongoose connect

the req.locals for csrf and isAuthenticated
values used in ejs directly



//add the is-auth middleware folder




//10 (+4h)
//use csrf tokens

import, call, use, set local value
use in ejs
but where checked as a req.body ?

protect against stealing user sessions
include a token in our views, generated for every visited page
before each sensitive submit button
    <input type="hidden" name="_csrf" value="<%=csrfToken%>">


however csrf is no longer maintained
so can use other packages 
https://www.npmjs.com/search?q=express%20csrf
https://www.npmjs.com/package/csrf-csrf




////use flash messages
//get flash getLogin controller
let message = req.flash("error");

////set flash postLogin controller
req.flash("error", "this email is invalid");

//login
<% if (errorMessage) { %>   
<div class="user-message user-message--error"><%=errorMessage%></div>
<% } %>

errorMessage given by the auth controller, by get flash and pass to the render



////use bcrypt to hash passwords
find user by user.findOne({email:email})
check for email/password combination
if do match set/save session
    req.session.isLoggedIn = true;
    req.session.user = user;

//generate manual passwords : https://bcrypt.online/



////still using req.session
to set true on correct login
on each app redirect, check for req.session with the is-auth middleware

in the admin routes put the isAuth middleware
also in the shop routes for cart and order

-- add a logic to check wether email or phone entered to search user/display error accordingly 








> import nodemailer and the mailchimp transporter in the auth controller
> create transporter
> transporter.sendMail before postSignIn redirection

AWS

//reset from our reset button (check the reset.ejs)
add a link with href="/reset" in the login ejs
reset controller, 

create a unique token with an expiry date stored in the database
the link will include that token so we can verify that
the user received the link from us
password is changed only through links containing that token

//postReset
import the nodejs crypto lib
convert to string
>> in the user model add resetToken, resetTokenExpiration of type Date
store that token on the user we wish to reset
then send email with that token embedded in a link

>> now when we press the reset, we will receive a token
in the reset link in the email and in the database's user

//password form
new-password.ejs
auth controller, getNewPassword

url param token is taken
find user with that token and date

will be redirected to /reset through the email
getNewPassword router will be /reset/token

postNewPassword controller in auth.js


~ app.js is clear, start from auth.js down
~ will need to make a reset password page






//////nodemailer in auth.js
////auth.js controller and router
////signup
//get and post reset password
//get and post new password





//10.2 (+4h)

in auth.js controller
import crypto, install and import nodemailer
define transporter
work on the getSignUp and postSignUp controllers
add to routes


reset password controllers
getReset => view the page
postReset => generate crypto token and save to user with expiry, send token with email url that leads /reset

new-password controllers
getNewPassword => find a user with this token and still valid expiry and pass to the ejs
postNewPassword => find the user again with token, valid expiry, id - save user with new input password



Website updates and fixes (+4h)
- show login form when visiting /login, signup form when visiting /signup
- add /signup url to ejs html links
- work on the full name field in the signup (html,css,js-validation)
- add regex to full name and correct for email
- add user.seller false when creating a user, and true when adding a product
- add country name and telephone code when signing up a user
- use flash-messages to display wrong login email/phone, email exists when signing up, wrong password when logging in
- fix the expiry date comparison with current date when changing the password
- along with other minor fixes and css/ejs fixes
- add page redirection with messages for various invalid reset email scenarios


/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//Section 18 (Mongoose+Typescript)

//Validation
instead of flashing error messages, will send a server-side errors array
server side validation of inputs
when accessing a post request, 
the validator array checks for defined inputs
and can check on the error output in the controller
if there are errors/no-errors, display page with errors.errors variable
oldInput
change ejs elements styling depending on if there are errors

will use the user.findOne(email:email) 
in the validation

this applies to the add-product/, login/signup
post controllers, routes

fill the get controllers also with empty variables
not to cause ejs not defined errors

//11 +7h (mainly bec. of the ejs works and finding the way to write efficiently the code)

//will use the error object instead of console error in catch's

throw error in ALL controllers catch blocks with status codes
add a 500.ejs like 404
add an a get500 in the errorControllers controller
in app.js define a error 500 route


install express-validator
1) go to routes,
import express-validator
postAddProduct, postEditProduct, postLogin, postSignUp
add the ejs form-input names want to check
and add to the element chain an error message (will be taken in ejs)
body("ejsName").validationCheckMethods

route error > controller > controller output > ejs


2) work on the controllers
postAddProduct, postEditProduct, postLogin, postSignUp
and their get instances

errors = validationResult
if errors 
redirect to the same page again
with some properties passed
like oldInput object
hasError (used to allow ejs elements to leave values like isEditing)
validationErrors: errors.errors (will be used for two things 1) if to search in this array for exact errors for ejs styling 2) output the message for each error)

3) work on the ejs
place msg : <% validationErrors.forEach(error => { if (error.path === 'productFeature3') { feature3Error = error.msg; } }) %>
            <% if (feature3Error !=="") {%>
            <%=feature3Error%> 

give style : class="<%= validationErrors.find(e => e.path === 'notesFeature3') ? 'invalid' : '' %>"
old values : <% if (editing || hasError) { %> value="<%=oldInput.notesFeature3%>" <%}%>


-----------------------------------------------------


//there are also other 3rd party validation packages to use
mongoDB has built in validation (optional) MDB course
MDN has a nice list: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
also https://httpstatuses.com/


also did 27/10
- use express-validator to pass after submitting
- old inputs and error messages(login), error messages manual for signup

- sort ejs and pass the right properties from the controllers
- add styling based on passed properties
- display the messages for each signup field from the server validator
- fix some issues with the javascript validation, not allowing autofilled inputs to enable the buttons
- add a special regex for the signup phone number as the country code will be put from the form

-- a lot of modifications over the course here

also did 29/10
- check on the routes, controllers
- work on the ejs to display the correct error messages beside their relative inputs in a tool tip container
- the tooltip disappears on hover

*/

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//Section 20 (Mongoose+Typescript) multer+pdf+pagination

/*
//////Multer - to store images (+3h) //12
- use multer to filter image file types, and set file destination
- allow to show a message error when posting the form with a wrong type of file (not an image)


in the ejs
//storing
change input type from type=text to type=file
//using
<img src="<%= product.imageUrl %>"

//add to storing form
enctype="multipart/form-data" ("www-formUrlEncoded" text only)
tells the server that this submission/request
will not contain just plain text, but mixed data, text and binary data


////controller
postAddProduct, req.body.image > req.file
store image path with / at the beginning

import the fileHelper (that will allow to delete images)

if there is no image (did not pass filter), pass an error message ?
add "/"+image.path to the imageUrl stored in DB
- delete image from fs before product save ? #459
- in postDelete, find the product with id, delete the image for that product 
using the fileHelper.deleteFile, then delete product from DB



////router
remove imageUrl text validation if any


////app.js
body-parser cannot other than text data
so will use multer for (text and files)

serve the images folder in a "static way"
duplicate the express.static in app.js to share the images folder
"/images", express.static - for /images folder not the root

//add another express.static for the /images folder
//import multer and ts types 
//set fileStorage destination/filename
//set fileFilter
//use multer

//util/file.ts
add a function that deletes the file needed
by fs.unlink file-path





////// invoice pdf //12.1

- add lnk for order# to be "/orders/<%=order._id>"
to open a route with this link to getInvoice controller

- import pdfKit
- getInvoice controller, router
- create pdf with pdfKit with looping over each product in the order
- create this folder root/data/invoices

using the req.params can attach the order id to the pdf
only users with that order (authenticated) can request this invoice

fs.readFile : read the entire content into memory
so will use streaming



////page numbering (+2.5h)  //12.2

- make a separate include and css for the pagination
- pass from controllers the properties 
- and pass these properties from ejs to ejs


//controllers
all-products, admin-products, orders
will add a piece of code and add properties to the res.render
that will be used by the pagination-include
to display the correct page, next page, if there is a next page etc.

as we used .countDocuments() that does not retrieve all
which only counts them (faster than retrieving them)

and .skip() .limit() provided by mongoDB
which does not do server side filtering on the data
it re-filters the data on the database server









*/


/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//Section 22 (Mongoose+Typescript) Async requests + payments

/*


//Async js requests (+1.5h)
want to send a http request to the router from inside our public js/admin.js
we will use the fetch method supported by the browser

click delete item, delete item from DB then on success delete item also from the DOM live without redirecting


ejs button on click call a js function in js/admin-fetch
takes the button, finds its prodId,csrf
sends a fetch to /admin/products/prodId and wait
this route directs to deleteProduct
when the product is deleted, the controller returns a json
the fetch continues on a returned json, then removes element from dom


- work on the ejs admin-products
    add a script link in the ejs in admin-products.ejs
    button type=button, so will also remove the form wrap
    <button onclick="deleteProduct(this)" type="button" class="white-button-admin" aria-label="control, delete product"><a>Delete</a></button>                      <!-- <button type="submit" class="white-button-admin" aria-label="control, delete product"><a>Delete</a></button> -->
    <script src="/public/js/admin-async.js"></script>

- router admin
    adminRouter.delete("/product/:productId", isAuthAdmin, adminController.deleteProduct);

- controller deleteProduct
    change the postDeleteProduct controller to deleteProduct
    same logic, but
    change req.body.prodId to req.params.prodId
        res.status(200).json({
            "message": "Success!"
        });
    
    we will not return a response with a redirect
    will return a response with json data

- add the admin-async.js
    get the prodId, csrfToken of the elements near this button node
    open a fetch method that refers to the prodId and has csrfToken in the header
    then (promise resolved), .json the result(response body) and then delete the item from dom

- app.js
    nothing


>> using btn.parentNode.querySelector("[name=productId]").value
we can access the dom element's value


//////Payments with stripe //13.1 (+2h)

stripe sends back a confirmation token to the node app
we send a charge object to stripe

////stripe
site > developers tab > test key API
make a name, click new business at top left

>> grow your online business with payments > read the docs
this will take us to the stripe documentation
https://stripe.com/docs/payments
there you can learn about all the different ways of collecting payments

on the docs page > web tab > integrate stripe js tab
however new site is
stripe.com/docs/payment/quickstart


//// install stripe # npm install --save stripe
"import" in the controller with the secret test key

////get the stripe secret key from the site

//// controller
populate the user's cart.items.productId
iterate over the user.cart.items to get the total price
create a stripe.session
        define success/cancel redirection
then render the checkout page with sessionId of the returned session.id

rename the postOrder controller to getCheckoutSuccess
to use it in the router on stripe success


//// routers
remove post /create-order
add /checkout, /checkout/success, /checkout/cancel 

as we used /checkout will use this link in the cart checkout link
and the checkout will create the order instead


////ejs
cart /checkout link

checkout.ejs
work on a simple checkout page to display products, button with stripe configuration and redirection
and use the public test key



as users could directly access the success_url without paying
instead of "After the payment" page, you have to fulfill a payment

using "fulfilling purchases with webhooks"
where stripe sends a request to a url of your choice
which you have to manage in your application with routing/controlling
and that then tells you that the order succeeded
because stripe sends you that request behind the scenes
a request validated by stripe not easy to fake
but it requires a website hosted on the internet







*/





/*
////// new tasks here












*/







/*
//total hours: 
course finish 49.5 i.e on 5h/10 days, on 6h 8 days


// add previous to-do notes to the tab and start working on them
// every 2 react itr, the 3rd is amz cont.
//async sec 22 on changing cart quantity
//on deleting a product, can we use a js function to delete the dom then add it again ? like react style
//so what else we can use an Async request on ? cart update quantity ..
//pagination style css

//style and add a label to display previous image file name in multer section
on wrong file type redirection same page input

// do returned catch error messages get displayed to users ?

//signup right input arrow icons need position adjustment
maybe make them ::after input

//work on changing the global region/language as user requests
with cookies or sessions or flash //9
or res.locals.name= //10

//verify signup with sms

//reset password with email ejs, new password ejs pages

//checkout page with separate inputs submitted to stripe

// view orders in reverse, last order displays at the begining

// listing price (item-details) % fix

// item-aria, add-product aria

// 404 page

// all products stars

//product description slide images, add multiple images

//fix admin products buttons

// amz logo sizes

//

ending:
ratings
categorization
search



learnt:
//select the closest ancestor with that selector
btn.closest(".class")

<%- include('../includes/pagination.ejs', 
{
    currentPage: currentPage,
}

productElement.parentNode.removeChild(productElement); //will work on all modern browsers
const prodIdElement = btn.parentNode.querySelector("[name=productId]") as HTMLInputElement;







*/



















//typescript then wait till get to MongoDB to work on website


// ??
// req.query.edit ?


// i need:
// - add links
// - add mobile menu
// - add product form html page
// - 404 page

// = learn typescript
// = nodify ejs files


