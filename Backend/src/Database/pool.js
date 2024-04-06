const mysql = require("mysql2");

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306, // Optional, defaults to 3306
    user: 'root',
    password: '',
    database: 'shaadi'
});

module.exports = pool;
