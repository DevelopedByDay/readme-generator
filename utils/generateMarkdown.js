//  this function generates badges based on licesne response 
const generateBadges = badgeArr => {
  badgeList = [];

  if (badgeArr.license.includes('MIT')) {
    badgeList.push(`![MIT](https://img.shields.io/badge/license-MIT-green)`)
  }
  if (badgeArr.license.includes('Apache')) {
    badgeList.push(`![Apache](https://img.shields.io/badge/license-Apache-blue)`)
  }
  if (badgeArr.license.includes('CPAN')) {
    badgeList.push(`![CPAN](https://img.shields.io/badge/license-lgpl_2_1-blue)`)
  }
  if (badgeArr.license.includes('GPL')) {
    badgeList.push('![GPL](https://img.shields.io/badge/license-GPL-blue)')
  }
  if (badgeArr.license.includes('BSD')) {
    badgeList.push('![BSD](https://img.shields.io/badge/license-BSD-green)')
  }
  return badgeList
};

// function to generate markdown for README
function generateMarkdown(data) {

  return `
${generateBadges(data)}

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

## Tests

${data.tests}

## Questions

Contact me at ${data.email}

Work with me at ![${data.github}](https://github.com/${data.github})

Project by ${data.name}




This ReadMe.md file was generated with the help of ![DevelopedByDay](https://github.com/DevelopedByDay)
`;
}

module.exports = generateMarkdown;
