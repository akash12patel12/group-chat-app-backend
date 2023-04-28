const Sequelize = require("sequelize");
// const User = require('./user')
const sequelize = require("../util/database");

const userGroup = sequelize.define("User_group", {
   id : {
    type: Sequelize.INTEGER,
    default: 1,
    autoIncrement: true,
    // allowNull: false,
    primaryKey: true,
   },
//   },
 
});

module.exports = userGroup;
