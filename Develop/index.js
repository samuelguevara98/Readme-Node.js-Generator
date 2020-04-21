const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);

inquirer.prompt([
    {
        type: "input",
        name: "email",
        message: "Pleaes enter your email: "
    },
    {
        type: "input",
        name: "gitUsername",
        message: "Please enter your GitHub username: "
    },
    
    {
        type: "input",
        name: "projTitle",
        message: "Please enter the title of your project: "
    },
    {
        type: "input",
        name: "projDescription",
        message: ""
    },
])
