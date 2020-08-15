const express = require('express');
const router = express.Router();

[employeeAdd, employeeRoleUpdate, viewEmployees] = require('./employeeRoutes');
[roleAdd, viewRoles] = require('./roleRoutes');
[departmentAdd, viewDepartments] = require('./departmentRoutes')

router.use(require('./departmentRoutes'));
router.use(require('./employeeRoutes'));
router.use(require('./roleRoutes'));

module.exports = router;