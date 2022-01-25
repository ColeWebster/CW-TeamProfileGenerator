const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./utils/questions');
const generateHTML = require('./utils/generateHTML');
// Import Employee Manager Engineer Intern



const newPage = async () => {
    const answers = await inquirer.prompt(questions);
    const htmlContent = generateHTML(answers);
    writeToFile(htmlContent);
};

const writeToFile = (htmlDirectContent) => {
    fs.writeFile("test/index.html", htmlDirectContent, (err) => 
        err ? console.log(err) : console.log('Created successfully!')
    )
}

newPage();



// Call manager prompt

//