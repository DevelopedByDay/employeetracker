const mysql = require("mysql2");
require('dotenv').config();
const Sequelize = require('sequelize');

let sequelize;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  // Your password
  password: DB_PW,
  database: "track"
});

db.connect(function (err) {
  if (err) throw err;
});

module.exports = db;