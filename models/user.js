
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Project, {
        through: models.Task,
        foreignKey: 'assigned_to',
        otherKey: 'project_id',
        as: 'projects',
      });
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