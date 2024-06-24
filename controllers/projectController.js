const Sequelize = require('sequelize');
const { sequelize } = require('../models');
const Project = require("../models/project")(sequelize, Sequelize.DataTypes);

class projectController {
    constructor() {
        // Initialize any dependencies or settings here
    }

    async create_project(name, description, res) {
        try {

            const newProject = await Project.create({
                name: name, description: description
            });
            
            res.status(201).json({ message: 'Project created successfully', project: newProject});
        } catch (error) {
            res.status(500).json({ message: 'Error creating project', error: error.message });
        }
    }

    async list_project(req, res) {
        try {
            const projects = await Project.findAll();
            
            res.status(200).json({
                message: "Proyectos encontrados",
                list: projects
            })
        } catch (error) {
            res.status(500).json({ message: 'Error finding projects', error: error.message });
        }
        
    }
}

module.exports = new projectController();