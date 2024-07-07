const inquirer = require('inquirer');
const fs = require('fs');

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
        message: 'Enter the shape\'s color (color keyword or hexadecimal number):'
    }
];

inquirer.prompt(questions).then(answers => {
    console.log('Generated logo.svg');
});
