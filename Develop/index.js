// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "Provide installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide usage information:",
    },
    {
      type: "input",
      name: "contributing",
      message: "Provide contribution guidelines:",
    },
    {
      type: "input",
      name: "tests",
      message: "Provide test instructions:",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for your project:",
      choices: ["MIT", "GPLv3", "Apache 2.0", "None"],
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub username:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address:",
    },
];

function renderLicenseBadge(license) {
    if (license === "None") return "";
    return `![License](https://img.shields.io/badge/license-${license.replace(
      " ",
      "%20"
    )}-blue)`;
}
  
function generateReadme(answers) {
    return `
        # ${answers.title}
        
        ${renderLicenseBadge(answers.license)}
        
        ## Description
        ${answers.description}
        
        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [Questions](#questions)
        
        ## Installation
        ${answers.installation}
        
        ## Usage
        ${answers.usage}
        
        ## License
        This project is licensed under the ${answers.license} license.
        
        ## Contributing
        ${answers.contributing}
        
        ## Tests
        ${answers.tests}
        
        ## Questions
        If you have any questions, you can reach me via:
        - GitHub: [${answers.github}](https://github.com/${answers.github})
        - Email: ${answers.email}
    `;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("README.md has been successfully generated!");
      }
    });
  }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
