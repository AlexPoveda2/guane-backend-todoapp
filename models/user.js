'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      User.hasMany(models.Task, {
        foreignKey: 'username',
        as: 'tasks',
      })
    }
  }

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    password: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["admin", "manager", "developer"]]
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};

