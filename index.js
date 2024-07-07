const inquirer = require('inquirer');
const fs = require('fs');
// https://www.npmjs.com/package/validate-color
var validateColor = require("validate-color").default;


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: input => input.length <= 3 ? true : 'You can enter up to three characters only.'
    },
    {
        type: 'input',
        name: 'textColor',
        validate: input => validateColor(input) ? true : "Invalid text colour chosen"
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape\'s color (color keyword or hexadecimal number):',
        validate: input => validateColor(input) ? true : "Invalid colour chosen"
    }
];

inquirer.prompt(questions).then(answers => {
    console.log('Generated logo.svg');
});
