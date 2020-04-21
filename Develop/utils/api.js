const inquirer = require("inquirer");
const axios = require("axios");

const api = {
  getUser(username) {
    inquirer.prompt({
      message: "Please enter your Github username: ",
      name: "user"
    }).then(function({username}){
      const query = `https://api.github.com/users/${username}`;

    })
  }
};

module.exports = api;
