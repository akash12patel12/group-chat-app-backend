const Sequelize = require('sequelize');
// const User = require('./user')
const sequelize = require('../util/database');

const Group = sequelize.define('Group', {
    id : {
        type : Sequelize.INTEGER,
        default : 1,
        autoIncrement  : true ,
        allowNull: false,
        primaryKey: true

    },
    name : {
        type :Sequelize.STRING,
        allowNull : false
    },
    createdByUserId : {
        type : Sequelize.INTEGER,
        allowNull : false,
    }

});

module.exports = Group;
