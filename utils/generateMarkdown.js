// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
      return `license badge`;
  } else {
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
      return `${license}`;
  } else {
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)
## Installation 
${data.installation}
## Usage
${data.usage}
## License 
${data.license}
## Contributors
${data.contributors}
## Tests
${data.tests}
## Questions 
If you have any questions get in touch:
GitHub: [${data.github}](github.com/${data.github})
Email: ${data.email}
`;
};

module.exports = generateMarkdown;
