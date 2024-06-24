const express = require('express');
const router = express.Router();

const taskController = require("../controllers/taskController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post('/tasks', (req, res) => {
    taskController.create_task(req, res);
});

router.get('/tasks', authMiddleware(),(req, res) => {
    taskController.list_task(req, res);
})


module.exports = router;