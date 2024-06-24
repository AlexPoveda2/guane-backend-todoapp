// models/project.js

'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      Project.belongsToMany(models.User, {
        through: models.Task,
        foreignKey: 'project_id',
        otherKey: 'username',
        as: 'users',
      });
    }
  }

  Project.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });

  return Project;
};
