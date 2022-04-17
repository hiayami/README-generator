var inquirer = require("inquirer");
inquirer
  .prompt([
      { name: "title", message: "What is your project title?" },
      { name: "description", message: "Enter description of application" },
      { name: "tableOfContents", message: "Enter Table of Contents" },
      { name: "installation", message: "Enter how to install application" },
      { name: "usage", message: "Enter how application is used" },
      { 
          name: "license", 
          message: "Enter license and any description",
          type: "list",
          choices: [
              "none", "Apache License 2.0", "GNU General Public License v3.0", "MIT License"
          ]
      },
      { name: "contributing", message: "List contributors" },
      { name: "tests", message: "How to test application?" },
      { name: "questions", message: "Enter github username and email" },
  ])

  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    console.error(error);
  });
