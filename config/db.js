const {Sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false,
    }
);

async function connectDB() {
    try {
        await sequelize.authenticate();
    } catch (err) {
        console.error('Unable to connect to the database: ', err.message);
    }    
}

module.exports = { sequelize, connectDB };