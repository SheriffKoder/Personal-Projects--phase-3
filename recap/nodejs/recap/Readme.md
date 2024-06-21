## **Amazon (Partial-Clone) [[ Live Demo ]](https://amazon-nodejs.onrender.com/)**

>## **Description**

A trial to replicate amazon.eg shopping website, the main functionality and design is complete but some functionalities are yet to be added.

![desktop screenshot](screenshot.png)

>## **How to use**
- sign-up/sign-in from the account button on the navigation bar or the mobile's menu.
- move your mouse over the account button or use the mobile menu to add a product or manage your products on sale.
- account sign-up, sign-in, sign-out and reset-password via email.
- view all products posted by other accounts.
- add product to cart with the desired quantity.
- view your cart from "/cart" page to delete items, change quantity or proceed to buy.
- when on the /checkout page, just click order to create an order.
- make a virtual payment for your order with stripe.
- view your orders from the "/orders" page.
- view your order's invoice and download as a pdf file.
######
Also be a seller and:
- add a new product, edit product.
- view your products, see how many are sold/in-stock.
- decrease price to show a discount percentage to users checking your item's page.

>## **Functionalities**
- **Account management:**
- sign-up/sign-in, reset password via an email with an expiry time.
- front-end and backend input validation.
######
- **Product management:**
- Add, edit, delete products as a seller.
- get notifications for incorrect inputs.
######
- **Cart/Order management:**
- View products then add to & manage your cart.
- get notified with out of stock or low stock items.
- Confirm an order and make a payment.
- view your orders and their "invoice" and download it as a pdf.

>## **Technologies Used**
- Front-end: vanilla html/css/javascript - ejs templating engine
- Back-end: expressJS, NodeJS, MongoDB, Typescript
- Front-end animations and input validation made with jQuery
- Javascript libraries: bcrypt, csurf, connect-flash, nodemailer, express-validator, express-session, multer, pdfkit, stripe

>## **Yet to be implemented**
- checkout page (for now you can just click "order" there).
- product search*, sort.
- view products by their categories (from the navigation bar and the side menu).
- change language and location from the navigation bar.
- save for later and buy it again cart page functionalities.
- add customer reviews and rating stars.
- add multiple images*.
- 404 page.
- signup mobile verification with sms - pay from a checkout page styled like amazon's website.
(implemented in newer projects)*


>## **How to use on your computer**
- Clone or download the project folder "section22"
- open the folder in your IDE
- open the terminal and run "npm install"
- run "node rec22_app.js" in the terminal after the installation is complete
- create a ".env" file in the root directory and add these keys

>###### stripe_pub_test_k= "stripe public key"
>###### stripe_pub_test_k = "stripe secret key"
>###### MONGODB_URI = "mongodb+srv://username:pasword@cluster0.jgxkgch.mongodb.net/folder" // MongoDB Atlas database connection string
>###### NEXTAUTH_SECRET = "your next-auth secret"
>###### NEXTAUTH_URL= "your domain or local host"
>######  EmailHost = "amazon aws email API domain"
>###### EmailPort = "port number"
>###### EmailUser = "credentials key"
>###### EmailPass = "credentials password"
>###### myEmail = "a email to send to"