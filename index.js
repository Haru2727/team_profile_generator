const inqurier = require("inquirer");
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);

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
            message: 'Select ',
            choices: ['Employee',
                'Manager',
                'Engineer',
                'Intern',
                
            ],
            name: 'title',
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
        {
            // put in Engineer function call IF engineer selected in list
            // Employee GitHub
            type: 'input',
            message: "What is the Employee's Github?",
            name: 'github',
        },
        {
            // put int intern function call IF intern selected in list
            // Intern School
            type: 'input',
            message: "What School is intern from?",
            name: 'school',
        },
        {
            // Employee office number function call IF manager is selcted
            type: 'input',
            message: "What is the Employee office number?",
            name: 'office_number',
        },
    ])
}

employeeInfo();