// models/todo.js
const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  const Todo = sequelize.define('Todo', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  return Todo;
};
