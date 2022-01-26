const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const {managerQuestions, engineerQuestions, internQuestions} = require('./utils/questions');
const inquirer = require('inquirer');
const fs = require('fs');



menu = () => {
    createManager = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'Please enter the team managers name:',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Please enter the team managers employee ID number:'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please add the team managers email address:'
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Please add the team managers office number:'
                },
            ])
            .then(({firstName,id,email,officenumber}) => {
                const manager = new Manager(firstName, id, email, officenumber);
                console.log(manager)
            });
    };
    
    createManager();
}

menu();
