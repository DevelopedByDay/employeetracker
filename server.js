const express = require('express');
const db = require('./db/database');
const inquirer = require('inquirer');
[employeeAdd, employeeRoleUpdate, viewEmployees] = require('./routes/apiRoutes/employeeRoutes');
[roleAdd, viewRoles] = require('./routes/apiRoutes/roleRoutes');
[departmentAdd, viewDepartments] = require('./routes/apiRoutes/departmentRoutes')


const PORT = process.env.PORT || 3001;
const app = express();
const question = [
    {
        type: 'list',
        choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role','Add an Employee', 'Update Employee Role']
    }
]

const apiRoutes = require('./routes/apiRoutes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);


app.use((req, res) => {
  res.status(404).end();
});

const promptUser = data => {
    inquirer
    .prompt(questions)


}

function run() {
    console.log('Welcome to the Employee tracker!')
    promptUser()
};


db.on('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    run();
  });
});