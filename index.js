const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];

const generateHTML = (answers) =>

`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel='stylesheet' href="./CSS/style.css">
    <title>Team Profile Generator</title>
</head>

<body>
    <div class="container-xxl" id="head">
        <h1>Team Profile</h1>
    </div>

    <div id="container1">
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>

    <div id="container2">
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossorigin="anonymous"></script>

</body>

</html>`


menu = () => {
    createManager = async () => {
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
                    name: 'office',
                    message: 'Please add the team managers office number:'
                },
            ])
            .then(({ firstName, id, email, office }) => {
                const answers = await inquirer.prompt
                const manager = new Manager(firstName, id, email, office);
                console.log(manager);
                teamMembers.push(Manager);
                createNext();
            });
    };
    createNext = () => {
        inquirer
            .prompt ([
                {
                    type: 'list',
                    name: 'selector',
                    message: 'Would you like to add an additional employee?',
                    choices: ['Engineer' , 'Intern', 'Build Team']
                }
            ])
            .then(answers => {
                // console.log(answers);
                if (answers.selector === 'Engineer'){
                    createEngineer();
                }
                else if (answers.selector === 'Intern'){
                    createIntern();
                }
                else {
                    .then createHTML = generateHTML
                }
            })
    }

    createEngineer =async () => {
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
            ])
            .then(({ firstName, id, email, github}) => {
                const answers = await inquirer.prompt
                const engineer = new Engineer(firstName, id, email, github);
                teamMembers.push(Engineer);
                console.log(engineer);
                createNext();
            })
    };
    createIntern = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'Please enter the interns name:',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Please enter the interns employee ID number:'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please add the interns email address:'
                },
                {
                    type: 'input',
                    name: 'university',
                    message: 'Please add the interns current school:'
                },
            ])
            .then(({firstName, id, email, university}) => {
                const answers = await inquirer.prompt
                const intern = new Intern(firstName, id, email, university);
                teamMembers.push(Intern);
                console.log(intern);
                createNext(); 
            })
    }
    generateHTML = () => {
        console.log('Successfully created!')
        fs.writeFile('./dis/index.html', buildHTML(teamMembers) , (err) => {
            if (err) throw err;
        })
    }

    createManager()
}

menu();
