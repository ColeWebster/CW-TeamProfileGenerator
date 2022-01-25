const questions = [
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
        type: 'checkbox',
        name: 'nextEmployee',
        message: 'Would you like to add an engineer or intern to your team?'
    },
    {
        type: 'input',
        name: 'engineerName',
        message: 'Please enter the engineers name:',
    },
    {
        type: 'input',
        name: 'engineerID',
        message: 'Please enter the engineers employee ID number:'
    },
    {
        type: 'input',
        name: 'engingeerEmail',
        message: 'Please add the team managers email address:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please add the engineers gitHub:'
    },
    {
        type: 'input',
        name: 'internFirstName',
        message: 'Please enter the interns name:',
    },
    {
        type: 'input',
        name: 'internID',
        message: 'Please enter the interns employee ID number:'
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'Please add the interns email address:'
    },
    {
        type: 'input',
        name: 'university',
        message: 'Please add the interns current school:'
    },
]

module.exports = questions;