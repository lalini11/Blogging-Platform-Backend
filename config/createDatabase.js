const mysql = require('mysql2/promise');
require('dotenv').config();

async function createDatabaseIfNotExists() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    });

    await connection.query(`create database if not exists \`${process.env.DB_NAME}\`;`);
    console.log('Database created successfully.');
    await connection.end();
}


module.exports = createDatabaseIfNotExists;