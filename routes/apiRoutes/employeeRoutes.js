const express = require('express');
const router = express.Router();
const db = require('../../db/database');

function employeeAdd() {
    router.post('/employee', ({body}) => {
        const sql = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
        const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

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

function employeeRoleUpdate() {
    router.put('/employee/:id', (req, res) => {
        const sql = 'UPDATE employee SET role_id = ? WHERE id = ?';
        const params = [req.body.role_id, req.params.id];

        db.run(sql, params, function(err, result) {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
          
            res.json({
                message: 'success',
                data: req.body,
                changes: this.changes
            });
        });
    });
};

function viewEmployees() {
    router.get('/employees', (req, res) => {
        const sql = 'SELECT * FROM employee';
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

module.exports = [router, employeeAdd, employeeRoleUpdate, viewEmployees];