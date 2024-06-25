'use strict';

const { DataTypes } = require('sequelize');
const {sequelize} = require('./index');

const Project = sequelize.define('Project', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Project;