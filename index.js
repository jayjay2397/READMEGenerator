const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generatorMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [{
    type: 'input',
    message: "What is your GitHub username?",
    name: 'username',
},{   
    type: 'input',
    message: "What is the name of your GitHub repo?",
    name: 'repo',
}, {    
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message:  "Give a detailed description of your project.",
    name: "Description"
}, {
    type: "input",
    message: "Table of Contents.",
    name: "Table of Contents"
}, {
    type: "input",
    message: "How does the user install the app?",
    name: "Installation"
}, {
    type: "input",
    message: " Give instructions on how to use the app.",
    name: "Usage"
}, {
    type: "list",
    message: "What liscence is being used? ",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    name: "License"
}, {
    type: "input",
    message: "Who else contributed to this project?:",
    name: "Contributing"
}, {
    type: "input",
    message: "What is needed test this app?",
    name: "Tests"
}, {
    type: "input",
    message: "Contact information for any inquiries.",
    name: "Questions"

}, {
    type: 'input',
    message: 'What is your email address?',
    name: 'Email'
},



];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, function(err){
        console.log(fileName)
        console.log(data)
        if (err){
            return console.log(err)
        } else{
            console.log("README.md was created")
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function(data){
            writeToFile("README.md",generatorMarkdown(data))
            console.log(data)
        })
}

// function call to initialize program
init();
