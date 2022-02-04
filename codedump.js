     //   teamMembers.push(manager);
      //   inquirer.prompt([createNextQ ]).then(responses) => {
      //       Run one at a time to check    
      //       if 'Intern' is selected then run internQ
      //       if else 'Engineer' is selected then run engineerQ
      //       else create team -> writefile
      // }
      // })
      // }


    
// createManager = async () => {
//         const answers = await inquirer.prompt(managerQ);
//         console.log(answers);
        
        
//         console.log(manager);
//         createNext();
//     };

//     createEngineer = async () => {
//         const answers = await inquirer.prompt(engineerQ);
//         const engineer = new Engineer(answers.firstName, answers.id, answers.email, answers.github);
//         teamMembers.push(engineer);
//         console.log(engineer);
//         createNext();
//     };

//     createIntern = async () => {
//         const answers = await inquirer.prompt(internQ);
//         const intern = new Intern(answers.firstName, answers.id, answers.email, answers.university);
//         teamMembers.push(intern);
//         console.log(intern);
//          createNext();
//     };
    
//     createManager();
// }




// menu();

// createNext = async () => {
//     const answers = await inquirer.prompt(createNextQ);
//     switch (answers.selector) {
//         case 'Engineer':
//             createEngineer();
//             break;
//         case 'Intern':
//             createIntern();
//             break;
//         case 'Build my new Team':
//             generateHTML();
//             break;
//         default:
//             break;

// fsPromises.writeFile('./dist/index.html', createTeam(teamMembers));