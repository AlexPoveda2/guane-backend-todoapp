const express = require('express');
const router = express.Router();

const projectController = require("../controllers/projectController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post('/create', (req, res) => {
    projectController.create_project(req, res);
});

router.get('/list', authMiddleware(["admin", "manager"]),(req, res) => {
    projectController.list_project(req, res);
})


module.exports = router;