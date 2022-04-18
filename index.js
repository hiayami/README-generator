var inquirer = require("inquirer");
const fs = require('fs')
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
      { name: "githubUsername", message: "Enter github username" },
      { name: "email", message: "Enter email" },

  ])

  .then((answers) => {
      let license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      let licenseURL = 'https://opensource.org/licenses/Apache-2.0'
      if (answers.license=="GNU General Public License v3.0"){
          license='[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            licenseURL='https://www.gnu.org/licenses/gpl-3.0'
    } else if (answers.license=="MIT License"){
          license='[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
          licenseURL='https://opensource.org/licenses/MIT'
      } else if (answers.license=="none"){
          license='[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
          licenseURL='http://unlicense.org/'
      }
      const md= `
# ${answers.title}
## Description
${answers.description}
## Badges
${license}
## Table of Contents
${answers.tableOfContents}
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
Read more about ${answers.license} here: [${answers.license}](${licenseURL})
## How to Contribute
${answers.contributing}
## Tests
${answers.tests}
## Questions
[${answers.githubUsername}](https://github.com/${answers.githubUsername})

[${answers.email}](mailto:${answers.email})
`
      fs.writeFileSync('README.md', md)
    console.log(answers);
  })
  .catch((error) => {
    console.error(error);
  });
