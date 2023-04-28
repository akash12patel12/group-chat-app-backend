const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('User', {
    id : {
        type : Sequelize.INTEGER,
        default : 1 ,
        autoIncrement  : true ,
        allowNull: false,
        primaryKey: true

    },
    username : {
        type :Sequelize.STRING,
        allowNull : false,
        unique :true
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    }

});

module.exports = User;
