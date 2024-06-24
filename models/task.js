// models/task.js

'use strict';
const Project = require("./project");
const User = require("./project");

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      // Define associations here
      Task.belongsTo(models.Project, {
        foreignKey: 'project_id',
        as: 'project',
      });

      Task.belongsTo(models.User, {
        foreignKey: 'assigned_to',
        as: 'user',
      });
    }
  }

  Task.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Project,
        key: 'id',
      },
    },
    assigned_to: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: User,
        key: 'username',
      },
    },
  }, {
    sequelize,
    modelName: 'Task',
  });

  return Task;
};
