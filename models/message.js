const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const Message = sequelize.define('message', {
    id : {
        type : Sequelize.INTEGER,
        default : 1 ,
        autoIncrement  : true ,
        allowNull: false,
        primaryKey: true

    },
    senderid :{
        type : Sequelize.INTEGER,
        allowNull: false
    },
    sender : {
        type :Sequelize.STRING,
        allowNull : false
    },
    message : {
        type :Sequelize.STRING,
        allowNull : false
    }
});

module.exports = Message;