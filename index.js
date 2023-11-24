// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter a installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter a usage information:',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select the license for this project',
        options: ['MIT', '0BSD', 'none']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List any contributors GitHub usernames:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any required tests',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any required tests',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub user name:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!'));
} 

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions)
    .then((response) => {
        console.log('Creating README.md');
        writeToFile('.README.md', generateMarkdown({response}));
    });
}

// Function call to initialize app
init();
