// index.js
const express = require('express');
const { sequelize } = require('./models');
const todoRoutes = require('./routes/todos');

const app = express();

// Sync the models with the database
sequelize.sync();

app.use(express.json());

// Routes
app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
