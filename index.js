const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
// const {createTeam} = require('./lib/buildPage')
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamMembers = [];
// const { managerQ, engineerQ, internQ, createNextQ } = require('./lib/questions')
// const { inherits } = require('util');

menu = () => {
   createManager = () => {
      inquirer.prompt([
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
      ]).then((answers) => {
         console.log(answers);
         const manager = new Manager(answers.firstName, answers.id, answers.email, answers.officeNumber);
         teamMembers.push(manager);
         console.log(teamMembers);
         createNewTeamMember();
      })
   }

   createManager();

   createNewTeamMember = () => {
      inquirer.prompt([
         {
            type: 'list',
            name: 'selector',
            message: 'Would you like to add an additional employee?',
            choices: ['Engineer', 'Intern', 'Build my new team']
         },
      ]).then((answers => {
         if (answers === 'Engineer') {
            console.log('Create Engineer')
            createEngineer();
         }   
         else if (answers === 'Intern') {
            console.log('Create Intern')
         }
         else {
            console.log('Created team')
         }
      }))
   }

   createEngineer = () => {
      inquirer.prompt([
         {
            type: 'input',
            name: 'firstName',
            message: 'Please enter the engineers name:',
         },
         {
            type: 'input',
            name: 'id',
            message: 'Please enter the engineers employee ID number:'
         },
         {
            type: 'input',
            name: 'email',
            message: 'Please add the team managers email address:'
         },
         {
            type: 'input',
            name: 'github',
            message: 'Please add the engineers gitHub:'
         },
      ]).then((answers) => {
         console.log(answers);
         const engineer = new Engineer(answers.firstName, answers.id, answers.email, answers.github);
         teamMembers.push(engineer);
         console.log(teamMembers);
         createNewTeamMember();
      })
   }
};

menu();
