const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const { inherits } = require('util');

const { managerQ, engineerQ, internQ, createNextQ } = require('./lib/questions')
const createTeam = require('./src/buildPage')
const teamMembers = [];

menu = () => {
    createManager = async () => {
        const answers = await inquirer.prompt(managerQ);
        console.log(answers);
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
        const intern = new Intern(answers.firstName, answers.id, answers.email, answers.university);
        teamMembers.push(intern);
        console.log(intern);
        createNext();
    };
    
    generateHTML = () => {
        // const results = teamMembers;
        // console.log(results)
        const page = fs.writeFile(path.join(__dirname, './test.txt'), "Hello", (err) => {
            if (err) throw err;
        });
        return page;
    }

    createNext = async () => {
        const answers = await inquirer.prompt(createNextQ);
        switch (answers.selector) {
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;
            case 'Build my new Team':
                generateHTML();
                break;
            default:
                break;
        }
    };

    createManager();
}

menu();