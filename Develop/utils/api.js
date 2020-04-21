const inquirer = require("inquirer");
const axios = require("axios");

const api = {
  getUser(username) {
    inquirer.prompt({
      message: "Please enter your Github username: ",
      name: "user"
    }).then(function({username}){
      const query = `https://api.github.com/users/${username}`;

      axios.get(query).then(function(res) {

        const email = res.data.email
        console.log(email)
        const profile = res.data.avatar_url
        console.log(profile)
      });
    });
  }
};

module.exports = api;
