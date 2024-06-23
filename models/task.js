'use strict';
const Project = require('./project');
const User = require('./user');

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Task.belongsTo(models.Project, {
        foreignKey: 'project_id',
        as: 'projects',
      })

      Task.belongsTo(models.User, {
        foreignKey: 'assigned_to',
        as: 'users',
      })

    }
  }
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Project,
        key: 'id',
      }
    },
    assigned_to: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
  });

  return Task;
};

