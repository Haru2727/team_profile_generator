const inqurier = require("inquirer");
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);

// inherent classes
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


// let team = [];

const init = async () => {
    await employeeInfo()
        .then(response => {
            if (response.role === "Engineer") {
                return engineerEmp();
            } else if (response.role === "Manager") {
                return managerEmp();
            } else if (response.role === "Intern") {
                return internEmp();
            };
        });
    newMember()

};


// this will allow us to ask for user input on the emplyee
const employeeInfo = () => {
    return inquirer
        .prompt([
            {
                // Employee Name
                type: 'input',
                message: "What is the Employee's name?",
                name: 'name',
            },
            {
                // Employee Title
                type: 'list',
                message: 'Select: ',
                choices: ['Employee',
                    'Manager',
                    'Engineer',
                    'Intern',

                ],
                name: 'role',
            },
            {
                // Employee id
                type: 'input',
                message: "What is the Employee id?",
                name: 'id',
            },
            {
                // Employee email
                type: 'input',
                message: "What is the Employee email?",
                name: 'email',
            },
        ]);

};


const managerEmp = () => {
    return inquirer
        .prompt([
            {
                // Employee office number function call IF MANAGER is selcted
                type: 'input',
                message: "What is the Employee office number?",
                name: 'office_number',
            },
        ]);
};

const engineerEmp = () => {
    return inquirer
        .prompt([
            {
                // put in Engineer function call IF engineer selected in list
                // Employee GitHub
                type: 'input',
                message: "What is the Employee's Github?",
                name: 'github',
            },
        ]);
};

const internEmp = () => {
    return inquirer
        .prompt([
            {
                // put int intern function call IF intern selected in list
                // Intern School
                type: 'input',
                message: "What School is intern from?",
                name: 'school',
            },
        ]);
};

const newMember = () => {
    return inquirer
        .prompt([
            {
                // Employee Title
                type: 'list',
                message: 'Would you like to add another employee?',
                choices: ['Yes',
                    'No',
                ],
                name: 'add_new',
            },
        ]).then(response => {
            if (response.add_new === "Yes") {

               init();
            } else if (response.add_new === "No") {
                // generateHTML();
                console.log("No new employees.")
            };

        });
};

init()








