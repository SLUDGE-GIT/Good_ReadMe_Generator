// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [















];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

fs.writeFile(fileName, data, (err) =>

    err ? console.error(err) : console.log('No Errors! Write To File Complete...')

    );
}

// TODO: Create a function to initialize app
function init() {


}

// Function call to initialize app
init();
