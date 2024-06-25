const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: true, // Set to true if you want to see SQL queries logged
  define: {
    timestamps: true // Disable automatic timestamps
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
