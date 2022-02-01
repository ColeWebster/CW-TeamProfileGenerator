module.exports = {
    managerQ : [
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
    ],
    engineerQ : [
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
    ],
    internQ : [
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
    ],
    createNextQ : [
        {
            type: 'list',
            name: 'selector',
            message: 'Would you like to add an additional employee?',
            choices: ['Engineer', 'Intern', 'Build my new team']
        }
    ]
}