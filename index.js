const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];
const { managerQ, engineerQ, internQ, nextQ } = require('./lib/questions');
const buildTeam = require('./lib/buildPage');

mainMenu = () => {
   buildManager = async() => {
      const answers = await inquirer.prompt(managerQ);
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      teamMembers.push(manager);
      questionLoop();
   }

   buildEngineer = async() => {
      const answers = await inquirer.prompt(engineerQ);
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      teamMembers.push(engineer);
      questionLoop();
   }

   buildIntern = async() => {
      const answers = await inquirer.prompt(internQ);
      const intern = new Intern(answers.name, answers.id, answers.email, answers.uni);
      teamMembers.push(intern);
      questionLoop();
   }

   questionLoop = async() => {
      const answers = await inquirer.prompt(nextQ)
      switch(answers.selector) {
         case 'Engineer':
            buildEngineer();
            break;

         case 'Intern':
            buildIntern();
            break;

         case 'Build my new team':
            buildTeam();
            break;

         default:
            console.log('Testing, try again');
            break;
      }
   }

   createTeam = () => {
      fs.writeFile('./dist/index.html', buildTeam(teamMembers), (err => {
         if (err) throw err;
      }));
   }
   
   buildManager();
}

mainMenu();