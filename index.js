const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
// const {createTeam} = require('./lib/buildPage')
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const teamMembers = [];
// const { managerQ, engineerQ, internQ, createNextQ } = require('./lib/questions')
// const { inherits } = require('util');

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
   {
      type: 'loop',
      name: 'selector',
      message: 'Would you like to add another employee?',
      questions: [
         {
            type: 'input',
            name: 'firstName',
            message: 'Please enter their name:',
         },
         {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee ID number:'
         },
         {
            type: 'input',
            name: 'email',
            message: 'Please add their email address:'
         },
         {
            type: 'input',
            name: 'github',
            message: 'Please add the engineers gitHub:'
            when: (employee) => employee.type === 'Engineer'
         },
         {
            type: 'input',
            name: 'university'
            message: 'Please add the interns current university:'
            when: (employee) => employee.type === 'Intern'
         }
      ],
   },
])




//       ]).then((answers) => {
//          console.log(answers);
//          const manager = new Manager(answers.firstName, answers.id, answers.email, answers.officeNumber);
//          teamMembers.push(manager);
//          console.log(teamMembers);
//          createNewTeamMember();
//       })
//    }

//    createManager();

//    createNewTeamMember = () => {
//       inquirer.prompt([
//         
//       ]).then((answers => {
//          if (answers.Engineer) {
//             console.log('Create Engineer')
//          }
//          else if (answers.Intern) {
//             console.log('Create Intern')
//          }
//          else {
//             console.log('Created team')
//          }
//       }))
//    }

//    createEngineer = () => {
//       inquirer.prompt([
//          {
//             type: 'input',
//             name: 'firstName',
//             message: 'Please enter the engineers name:',
//          },
//          {
//             type: 'input',
//             name: 'id',
//             message: 'Please enter the engineers employee ID number:'
//          },
//          {
//             type: 'input',
//             name: 'email',
//             message: 'Please add the team managers email address:'
//          },
//          {
//             type: 'input',
//             name: 'github',
//             message: 'Please add the engineers gitHub:'
//          },
//       ]).then((answers) => {
//          console.log(answers);
//          const engineer = new Engineer(answers.firstName, answers.id, answers.email, answers.github);
//          teamMembers.push(engineer);
//          console.log(teamMembers);
//          createNewTeamMember();
//       })
//    }

//    createIntern = () => {
//       inquirer.prompt([
//          {
//             type: 'input',
//             name: 'firstName',
//             message: 'Please enter the interns name:',
//          },
//          {
//             type: 'input',
//             name: 'id',
//             message: 'Please enter the interns employee ID number:'
//          },
//          {
//             type: 'input',
//             name: 'email',
//             message: 'Please add the interns email address:'
//          },
//          {
//             type: 'input',
//             name: 'university',
//             message: 'Please add the interns current school:'
//          }, ,
//       ]).then((answers) => {
//          console.log(answers);
//          const intern = new Intern(answers.firstName, answers.id, answers.email, answers.university);
//          teamMembers.push(intern);
//          console.log(teamMembers);
//          createNewTeamMember();
//       })
//    }


// };

menu();
