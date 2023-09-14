

const cartModel = require("./cart.js");
const db = require("../util/database.js");




const getProductsFromFile = (in_cb) => {
    fs.readFile(myDataFilePath, (error, fileContent) => {
        if(!error) {
            in_cb(JSON.parse(fileContent));
        }
    });
};




module.exports = class Product {
    constructor (id, title1, imageUrl1, price1, description1) {
        this.id = id;
        this.title = title1;
        this.imageUrl = imageUrl1;
        this.description = description1;
        this.price = price1;
    }

    save () {

        //fields should be like the order in the database
        //no need to specify the id because it will be specified automatically by the db engine
        //values can be unsafe to specify directly
        //so will add "?" and then specify the values for db engine to handle that replacement 
        return db.execute("INSERT INTO products (title, price, description, imageURL) VALUES (?,?,?,?",
         [this.title, this.price, this.description, this.imageUrl]   
        );

    }

    static deleteById(id) {

    };



    static fetchAll() {
        return db.execute("SELECT * FROM products");
    }




    static findMyId(id) {
        //using "?" make it secure to get/send values
        //selects the whole row of this id
        return db.execute("SELECT * FROM products WHERE products.id = ?", [id])

    };




}