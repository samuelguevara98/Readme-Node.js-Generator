function generateMarkdown(answers) {
  return 
`# ${data.title} By: ${answers.gitUsername}

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

## Credits
${answers.contributing}

## License
![License: ]
`;
}

module.exports = generateMarkdown;

${answers.}