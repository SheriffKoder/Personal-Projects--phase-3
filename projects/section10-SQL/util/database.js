

//Vanilla mySQL to connect to the workbench Database
//////////////////////////////////////////////////////////////////////////////////////////

/*
const mysql = require("mysql2");


//we want a pool of connections not a single connection
//for every new query, and run them simultaneously
//once the query is done with the connection, the connection will be available again into the pool for a new query

const pool = mysql.createPool({
      //define a host (server ip address or a name)
    //username, by default is root (given to us during the configuration process)
    //define the exact database name, because it gives us access to a db server
        //but this server typically has multiple databases
        //here our databases are our schemas in the program
    //our password
    host: "localhost", 
    user: "root",
    database: "SQL-Recap1",
    password: "Blackvulture_92"
  
});


//create a promise from the returned pool
//to handle on the app.js
module.exports = pool.promise();
*/


//Sequelize
//////////////////////////////////////////////////////////////////////////////////////////

const Sequelize = require("sequelize");
//schema name, root name, password
//dialect makes sure we connect to mysql database, for using the correct syntax
//host, by default it is set to localhost but we will set it here

const sequelize = new Sequelize(process.env.DB_DBNAME, process.env.DB_USERNAME, process.env.DB_PASSWORD || "", {
    dialect: "mysql",
    host: process.env.DB_HOST,
});

module.exports = sequelize;


