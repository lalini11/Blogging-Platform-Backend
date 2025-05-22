const express = require('express');
const cors = require('cors');
// const { sequelize } = require('./models');
require('dotenv').config();

const { sequelize, connectDB } = require('./config/db');
const createDatabaseIfNotExists = require('./config/createDatabase');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

const PORT = process.env.PORT || 5000;

createDatabaseIfNotExists()
.then(() => connectDB())
.then(() =>sequelize.sync({ alter: true }))
.then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
  console.error('Error starting server ', err.message);
});
