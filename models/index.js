// models/index.js
const { Sequelize } = require('sequelize');
const TodoModel = require('./todo');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'test',
  password: 'test',
  database: 'testdb',
});

const models = {
  Todo: TodoModel(sequelize),
};

// Define associations if needed
// models.Todo.belongsTo(...);

module.exports = { sequelize, models };
