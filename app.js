const express = require('express');
const { sequelize } = require('./models');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/swagger.yaml');

require('dotenv').config();

const router = require("./routes/router")

const app = express();
const port = process.env.PORT || 8080;
swaggerDocument.servers[0].url = swaggerDocument.servers[0].url.replace('{port}', port);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Sync the database and start the server
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });