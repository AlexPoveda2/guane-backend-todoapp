const Task = require("../models/task")

class taskController {
    constructor() {
        // Initialize any dependencies or settings here
    }

    async create_task(req, res) {
        try {
            const { title, description, project_id, assigned_to} = req.body;

            const newTask = await Task.create({
                title: title,
                description: description,
                project_id: project_id,
                assigned_to: assigned_to
            });
            
            res.status(201).json({ message: 'Task created successfully', task: newTask});
        } catch (error) {
            res.status(500).json({ message: 'Error creating task', error: error.message });
        }
    }

    async list_task(req, res) {
        try {
            const tasks = await Task.findAll();
            
            res.status(200).json({
                message: "Tareas encontradas",
                list: tasks
            })
        } catch (error) {
            res.status(500).json({ message: 'Error finding tasks', error: error.message });
        }
        
    }
}

module.exports = new taskController();