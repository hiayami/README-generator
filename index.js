var inquirer = require("inquirer");
const fs = require('fs')

//prompts user on terminal these questions for the README
inquirer
  .prompt([
      { name: "title", message: "What is your project title?" },
      { name: "description", message: "Enter description of application" },
      { name: "installation", message: "Enter how to install application" },
      { name: "usage", message: "Enter how application is used" },
      { 
          name: "license", 
          message: "Enter license and any description",
          type: "list",
          choices: [
              "none", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD-2 Clause", "BSD-3 Clause",
              "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 1.0", "GNU Affero General Public License v3.0",
              "GNU General Public License v2.0", "GNU Lesser General Public License v3.0", "Mozilla Public License 2.0", "The Unlicense"
          ]
      },
      { name: "contributing", message: "List contributors" },
      { name: "tests", message: "How to test application?" },
      { name: "githubUsername", message: "Enter github username" },
      { name: "email", message: "Enter email" },

  ])

//license badge and URL will appear on README depending on which license is chosen.
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
          license=''
          licenseURL='http://unlicense.org/'
      } else if (answers.license=="BSD-2 Clause"){
          license='[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
          licenseURL='https://opensource.org/licenses/BSD-2-Clause'
      } else if (answers.license=="BSD-3 Clause"){
          license='[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
          licenseURL='https://opensource.org/licenses/BSD-3-Clause'
      } else if (answers.license=="Boost Software License 1.0"){
          license = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
          licenseURL='https://www.boost.org/LICENSE_1_0.txt'
      } else if (answers.license=="Creative Commons Zero v1.0 Universal"){
          license='[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
          licenseURL='http://creativecommons.org/publicdomain/zero/1.0/'
      } else if (answers.license=="Eclipse Public License 1.0"){
          license='[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
          licenseURL='https://opensource.org/licenses/EPL-1.0'
      } else if (answers.license=="GNU Affero General Public License v3.0"){
          license='[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
          licenseURL='https://www.gnu.org/licenses/agpl-3.0'
      } else if (answers.license=="GNU General Public License v2.0"){
          license='[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
          licenseURL='https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
      } else if (answers.license=="GNU Lesser General Public License v3.0"){
          license='[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
          licenseURL='https://www.gnu.org/licenses/lgpl-3.0)'
      } else if (answers.license=="Mozilla Public License 2.0"){
          license='[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
          licenseURL='https://opensource.org/licenses/MPL-2.0'
      } else if (answers.license=="The Unlicense"){
          license='[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
          licenseURL='http://unlicense.org/'
      }

      let licenseText = `Read more about ${answers.license} here: [${answers.license}](${licenseURL})`
      if (answers.license == 'none') {
          licenseText = 'No license'
      }

      //use template literal to define the markdown and inject the user input into its respective sections
      const md= `
# ${answers.title}
## Description
${answers.description}
## Badges
${license}
## Table of Contents
* [Description](#description)
* [Badges](#badges)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [How to Contribute](#how-to-contribute)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
${licenseText}
## How to Contribute
${answers.contributing}
## Tests
${answers.tests}
## Questions
[${answers.githubUsername}](https://github.com/${answers.githubUsername})

[${answers.email}](mailto:${answers.email})
`
//write markdown to file
      fs.writeFileSync('README.md', md)
  })
  .catch((error) => {
    console.error(error);
  });
