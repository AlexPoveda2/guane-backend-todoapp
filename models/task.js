'use strict';

const { DataTypes } = require('sequelize');
const {sequelize} = require('./index');
const Project = require('./project');
const User = require('./user');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

Project.belongsToMany(User, {
    through: Task,
    foreignKey: 'project_id',
    otherKey: 'assigned_to',
    as: 'users',
  });

Task.belongsTo(Project, {
  foreignKey: 'project_id',
  as: 'project',
});

Task.belongsTo(User, {
  foreignKey: 'assigned_to',
  as: 'assignedUser',
});

User.belongsToMany(Project, {
    through: Task,
    foreignKey: 'assigned_to',
    otherKey: 'project_id',
    as: 'projects',
  });


module.exports = Task;
