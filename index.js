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


const init = () => {
    employeeInfo(response)
    if (response.role === "Engineer") {
        engineerEmp();
    } else if (response.role === "Manager") {
        managerEmp();
    } else if (response.role === "Intern") {
        internEmp();
    }
};


// this will allow us to ask for user input on the emplyee
const employeeInfo = () => {
     inquirer
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
                message: 'Select ',
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

const response = employeeInfo();

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



init();