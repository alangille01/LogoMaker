const inquirer = require('inquirer');
const fs = require('fs');
const commandLineQuestions = require('./lib/questions');
const generateSVG = require('./lib/shapes');

inquirer.prompt(commandLineQuestions).then(answers => {
    const svgContent = generateSVG(answers);
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
});
