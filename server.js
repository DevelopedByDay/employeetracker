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
        name: "choice",
        messag: "What would you like to do?",
        choices: [
          {
            name: "View All Employees",
            value: "VIEW_EMPLOYEES"
          },
          {
            name: "Add Employee",
            value: "ADD_EMPLOYEE"
          },
          {
            name: "Update Employee Role",
            value: "UPDATE_EMPLOYEE_ROLE"
          },
          {
            name: "View All Roles",
            value: "VIEW_ROLES"
          },
          {
            name: "Add Role",
            value: "ADD_ROLE"
          },
          {
            name: "View All Departments",
            value: "VIEW_DEPARTMENTS"
          },
          {
            name: "Add Department",
            value: "ADD_DEPARTMENT"
          },
          {
            name: "Quit",
            value: "QUIT"
          }
        ]
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
    .prompt(question)
    .then(res => {
      let choice = res.choice;
      switch (choice) {
        case "VIEW_EMPLOYEES": viewEmployees()
        .then(() => prompUser());
        case "ADD_EMPLOYEE": employeeAdd()
        .then(() => prompUser());
        case "UPDATE_EMPLOYEE_ROLE": employeeRoleUpdate()
        .then(() => prompUser());
        case "VIEW_ROLES": viewRoles()
        .then(() => prompUser());
        case "ADD_ROLE": roleAdd()
        .then(() => prompUser());
        case "VIEW_DEPARTMENTS": viewDepartments()
        .then(() => prompUser());
        case "ADD_DEPARTMENT": departmentAdd()
        .then(() => prompUser());
        case "QUIT": end();
      }
    })
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

function end() {
  console.log("Thank you for tracking your employees!");
  process.exit();
}

run();