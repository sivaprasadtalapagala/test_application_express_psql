// index.js
const express = require('express');
const { sequelize } = require('./models');
const todoRoutes = require('./routes/todos');
const userRoutes = require('./routes/users');

const app = express();

// Sync the models with the database
sequelize.sync();

app.use(express.json());

// Routes
app.use('/todos', todoRoutes);
app.use('/uploads', express.static('uploads')); // Serve uploaded files statically

// Routes
app.use('/users', userRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
