const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Invitation = sequelize.define('Invitation', {
    status: {
      type: Sequelize.ENUM('pending', 'accepted', 'declined'),
      defaultValue: 'pending'
    }
  });

  module.exports = Invitation;
  