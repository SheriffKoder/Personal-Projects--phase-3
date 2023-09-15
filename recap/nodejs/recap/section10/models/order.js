const Sequelize = require("sequelize");

const sequelize = require("../util/database");


//(19)
const Order = sequelize.define("Order", {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = Order;