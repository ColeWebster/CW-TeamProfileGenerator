const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const { inherits } = require('util');

const {managerQ, engineerQ, internQ, createNextQ} = require('./utils/questions')
const teamMembers = [];

menu = () => {
    createManager = async () => {
        const answers = await inquirer.prompt(managerQ);
        const manager = new Manager(answers.firstName, answers.id, answers.email, answers.officeNumber);
        console.log(manager);
        teamMembers.push(manager);
        createNext();
    };

    createEngineer = async () => {
        const answers = await inquirer.prompt(engineerQ);
        const engineer = new Engineer(answers.firstName, answers.id, answers.email, answers.github);
        console.log(engineer);
        teamMembers.push(engineer);
        createNext();
    };

    createIntern = async () => {
        const answers = await inquirer.prompt(internQ);
        const engineer = new Intern(answers.firstName, answers.id, answers.email, answers.university);
        console.log(intern);
        teamMembers.push(intern);
        createNext();
    };

    createNext = async () => {
        const answers = await inquirer.prompt(createNextQ);
        switch (answers.choice) {
            case 'Create Engineer':
                createEngineer();
                break;
            case 'Create Intern':
                createIntern();
                break;
            case 'Build the team':
                
        }   
    };
    
        
    createManager();
}


menu();
