'use strict';

const { DataTypes } = require('sequelize');
const {sequelize} = require('./index');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    validate: {
      isIn: [['admin', 'manager', 'developer']],
    },
  },
});

module.exports = User;