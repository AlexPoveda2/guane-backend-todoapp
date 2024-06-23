const express = require('express');
const router = express.Router();


const userController = require("../controllers/userController")

router.get('/', (req, res) => {
    const saludo = userController.saludar(req, res);

    res.send(saludo);
});


module.exports = router;