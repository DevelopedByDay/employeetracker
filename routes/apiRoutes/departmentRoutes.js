const express = require('express');
const router = express.Router();
const db = require('../../db/database');

function departmentAdd() {
    router.post('/department', ({body}) => {
        const sql = 'INSERT INTO department (name) VALUES (?)';
        const params = [body.name];

        db.run(sql, params, function(err, result) {
            if(err) {
                result.status(400).json({ error: err.message });
                return;
            }

            result.json({
                message: 'success',
                data: body,
                id: this.lastID
            });
        });
    });
};

function viewDepartments() {
    router.get('/departments', (req, res) => {
        const sql = 'SELECT * FROM department';
        const params = [];
        db.all(sql, params, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.json({
                message: 'success',
                data: rows
            });
        });
    });
};

module.exports = [router, departmentAdd, viewDepartments];