const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
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
                    name: 'office',
                    message: 'Please add the team managers office number:'
                },
            ])
            .then(({ firstName, id, email, office }) => {
                const manager = new Manager(firstName, id, email, office);
                console.log(manager)
            });
    };
    createNext = () => {
        inquirer
            .prompt ([
                {
                    type: 'list',
                    name: 'selector',
                    message: 'Would you like to add an additional employee?'
                    choices: ['Engineer' , 'Intern', 'Exit']
                }
            ])
            .then(answers => {
                if (Engineer === true){
                    return createEngineer
                }
                else if (Intern === true){
                    return createIntern
                }
                else {
                    createHTML
                }
            })
    }

    createEngineer = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: 'Please enter the engineers name:',
                },
                {
                    type: 'input',
                    name: 'engineerID',
                    message: 'Please enter the engineers employee ID number:'
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: 'Please add the team managers email address:'
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Please add the engineers gitHub:'
                },
            ])
            .then(({ engineerName, engineerID, engineerEmail, github}) => {
                const engineer = new Engineer(engineerName, engineerID, engineerEmail, github);
                console.log(engineer);
            })
    };
    createIntern = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'internFirstName',
                    message: 'Please enter the interns name:',
                },
                {
                    type: 'input',
                    name: 'internID',
                    message: 'Please enter the interns employee ID number:'
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: 'Please add the interns email address:'
                },
                {
                    type: 'input',
                    name: 'university',
                    message: 'Please add the interns current school:'
                },
            ])
            .then(({internFirstName, internID, internEmail, university}) => {
                const intern = new Intern(internFirstName, internID, internEmail, university);
                console.log(intern);
            })
    }

    // createManager();
    // createEngineer();
    createIntern();
}

menu();
