// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') return '';
  return `![License: ${license}](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') return '';
  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3': 'https://opensource.org/licenses/BSD-3-Clause',
  };
  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') return '';
  return `
## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
${data.license !== 'None' ? '- [License](#license)' : ''}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}
`;
}

export default generateMarkdown;
