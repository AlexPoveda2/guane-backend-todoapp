const express = require('express');
const { sequelize } = require('./models');
require('dotenv').config();

const router = require("./routes/router")


const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router)

// Sync the database and start the server
sequelize.sync({ force: process.env.NODE_ENV === 'development' }) // Use { force: true } only in development to reset the database
  .then(() => {
    console.log('Database & tables created!');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
