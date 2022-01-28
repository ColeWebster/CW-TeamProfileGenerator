const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const { inherits } = require('util');

const {managerQ, engineerQ, internQ, createNextQ} = require('./lib/questions')
const createTeam = require('./src/buildPage')
const teamMembers = [];

menu = () => {
    createManager = async () => {
        const answers = await inquirer.prompt(managerQ);
        const manager = new Manager(answers.firstName, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        console.log(manager);
        createNext();
    };

    createEngineer = async () => {
        const answers = await inquirer.prompt(engineerQ);
        const engineer = new Engineer(answers.firstName, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        console.log(engineer);
        createNext();
    };

    createIntern = async () => {
        const answers = await inquirer.prompt(internQ);
        const engineer = new Intern(answers.firstName, answers.id, answers.email, answers.university);
        teamMembers.push(intern);
        console.log(intern);
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
            case "End the program":
                generateHTML();

        }   
    };

    generateHTML = () => {
        fs.writeFile('./dist/index.html', createTeam(teamMembers), (err) => {
            if (err) throw err;
        });
        console.log("Success!")
    }

    createManager();
}
menu();