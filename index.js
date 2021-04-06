// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
},

{
    type: 'input', 
    message: 'Please give a short summary of your project',
    name: 'description'
},

{
    type: 'input',
    message: 'What technologies were used?',
    name: 'tech'
},

{
    type: 'input',
    message: 'Please provide installation instructions',
    name: 'install' 
},

{
    type: 'input',
    message: 'Please describe the usage of your project.',
    name: 'usage'
},


{
    type: 'list',
    message: 'Please select the type of License you would like to use...',
    name: 'license',
    choices: ['MIT', 'ISC', 'Artistic', 'No License'],
},


{
    type: 'input',
    message: 'Please add Contributors / Contribution Guidelines',
    name: 'contributions'
},

{
    type: 'input',
    message: 'Please add test guidelines',
    name: 'test'
},


{
    type: 'input',
    message: 'Please enter your e-mail address',
    name: 'email'
},


{
    type: 'input',
    message: 'Please enter your your GitHub username...',
    name: 'username'
},


    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

fs.writeFile(fileName, data, (err) =>

    err ? console.error(err) : console.log('No Errors! Write To File Complete...')

    );
}

// TODO: Create a function to initialize app
function init() {



// Function call to initialize app
init();
