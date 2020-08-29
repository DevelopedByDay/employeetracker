const mysql = require("mysql");
const DB_PW = require('../.env');
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