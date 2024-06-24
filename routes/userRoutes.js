const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = require("../controllers/userController")

router.post('/auth/login', async (req, res) => {
    const { username, password } = req.body;
    let user_in_db = await userController.get_user_info(username);

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    if (!user_in_db) {
      return res.status(400).json({ message: 'Invalid username or password.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user_in_db.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid username or password.' });
    }

    const token = jwt.sign({ username: user_in_db.username, role: user_in_db.role }, 'secret', {
      expiresIn: '1h'
    });
  
    res.json({ token });
  });


router.post('/auth/register', (req, res) => {
    userController.create_user(req, res);
});


module.exports = router;