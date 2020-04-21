const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const writeFile = util.promisify(fs.writeFile);

inquirer.prompt([
    {
        type: "input",
        name: "gitUsername",
        message: "Please enter your GitHub username: "
    },

    {
        type: "input",
        name: "projURL",
        message: "Please enter the project URL (including https:// ): "
    },
    
    {
        type: "input",
        name: "projTitle",
        message: "Please enter the title of your project: "
    },

    {
        type: "input",
        name: "projDescription",
        message: "Please describe your project: "
    },

    {
        type: "input",
        name: "usage",
        message: "Please enter additional information your users may need: "
    },
    

    {
        type: "input",
        name: "contributing",
        message: "Please enter guidlines for developers contributing to this project: "
    },

    {
        type: "list",
        name: "licensing",
        message: "Please select which liscense your project should have: ",
        choices: ["APACHE 2.0", "GNU AGPLv3", "MIT","Mozilla Public 2.0","NONE"]
    },

    {
        type: "input",
        name: "testing",
        message: "Please enter the command for running tests to your repo: "
    },

    {
        type: "input",
        name: "installing",
        message: "Please enter required steps to install your project: "
    },

    {
        type: "input",
        name: "questions",
        message: "Pleaes enter an email for user questions: "
    }
]).then(function(answers){
    const readMe = generateMarkdown(answers)
    
    return writeFile("ReadMe.MD", readMe);
}).then(function(){
    console.log("Congrats! Your ReadMe.MD is ready!")
}).catch(function(err){
    console.log(err);
})
