// const newPage = async () => {
//     const answers = await inquirer.prompt(questions);
//     const htmlContent = generateHTML(answers);
//     writeToFile(htmlContent);
// };

// const writeToFile = (htmlDirectContent) => {
//     fs.writeFile("test/index.html", htmlDirectContent, (err) => 
//         err ? console.log(err) : console.log('Created successfully!')
//     )
// }

// newPage();

// menu = () => {
//     createManager = async () => {
//         const responses = await inquirer.prompt(managerQuestions);
//         console.log(answers);
//         const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
//     },
    // createEngineer = async () => {
    //     const responses = await inquirer.prompt(engineerQuestions);
    //     console.log(answers);
    //     const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    // },
    // createManager = async () => {
    //     const responses = await inquirer.prompt(internQuestions);
    //     console.log(answers);
    //     const intern = new Intern(answers.name, answers.id, answers.email, answers.university);
    // }    

    // createManager();
    // createEngineer();
    // createIntern();
// }

// Call manager prompt

// Import Employee Manager Engineer Intern
// const Employee = require('./lib/Employee').default;
// const { create } = require('domain');