// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributions}

  ## Badges

  ${data.badges}

  ## Tests

  ${data.tests}

  ## Questions

  Contact me at ${data.email}

  Work with me at ${data.github}




  This ReadMe.md file was generated with the help of ![DevelopedByDay](https://github.com/DevelopedByDay)
`;
}

module.exports = generateMarkdown;
