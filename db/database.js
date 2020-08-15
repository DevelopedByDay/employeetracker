const mysql = require('mysql').verbose();

const db = new mysql.Database('./db/tracker.db', err => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Connected to the Employee Tracker database.');
});

module.exports = db;