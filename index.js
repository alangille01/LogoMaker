// Use inquirer to prompt the user with the defined questions
const inquirer = require('inquirer');
const fs = require('fs');
const commandLineQuestions = require('./lib/questions');
const generateSVG = require('./lib/shapes');

// Use inquirer to prompt the user with the defined questions
inquirer.prompt(commandLineQuestions).then(answers => {
    // Generate the SVG content based on the user's answers
    const svgContent = generateSVG(answers);
    // Write the SVG content to a file named 'logo.svg'
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
});
