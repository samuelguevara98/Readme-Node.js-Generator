function generateMarkdown(answers) {
  return 
`# ${data.ProjTitle} By: ${answers.gitUsername}

## Description
${answers.projDescription}

## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)

### Installation
Install the following package(s) in order to use: ${answers.installing}

## Testing
How to run tests: ${answers.testing}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## License
${answers.licensing}
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) ![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg) ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)

## Deployed URL
${answers.projURL}

## Author(s)
${answers.gitUsername}
${answers.credits}
## Questions?
Contact ${answers.gitUsername} at ${answers.questions}
  `;
  }

module.exports = generateMarkdown;