const express = require('express');
const routes = require('./routes');
const Sequelize = require('sequelize');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
