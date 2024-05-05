
# Shop (mySQL version) Logic

A simple shop website with the ability to add/edit products and make orders to/from a mySQL database.

What can be done on this website
-An admin user is created by default.
-Add a product by filling in the details.
-The ability to edit with the old information present.
-Delete a product.
-Add a product to the user's cart and view the cart.
-Make an order from the cart and clear the cart items.
-View your orders.

Technologies used:
Back-end: Javascript, NodeJS, ExpressJS, Sequelize
Front-end: HTML/CSS, ejs templating engine

>**Sequelize**: a third-party library facilitiates working with mySQL by allowing to not use the normal mySQL syntax and work with javascript object of users etc. with name,age,email,password.

> **By changing the format** 
> from > "INSERT INTO table (field1, field2,..) VALUES (?, ?, ..)", [value1, value2, ..]
to > const user = User.create({value1: "..", value2: ".."});

> Instances: const user = User.build()
> Queries: User.findAll()
>  Associations: User.hasMany(Product)

  
  ### The main functionality of each file

`util > database.js`
- define the database that will be synced from in app.js and the models files

`models files`
- import sequelize and define for each file a schema

  

`App.js`
- set templating-engine, body-parser, import routes
- find the SQL user by ID/Pk
- import models files (product, user, cart, cartItem, Order, OrderItem)
- set relations
- a product belongs to a user
- a user has many products
- a user has 1 cart
- a cart belongs to a user
- a cart belongs to many products through cartItems and the opposite.
- an order belongs to a user
- a user has many orders
- an order belongs to many products through OrderItem
- create a user if there is no user defined in the database

`routes files`
- define the needed controller function for each url extension

`controller files`
- display the ejs webpages
- get data from the request, find product by id then save/delete
- find a product by the user in the request (if fetching in editing/adding for the user) or find in all products if it is a general-fetch/delete/edit
- find a cart by the user if item-adding/fetching the user's cart then get this cart's products to return to the user
- find an order by the user if fetching the order
- if making an order, get cart items, create an order with these cart items, then clear the cart