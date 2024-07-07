// https://www.npmjs.com/package/validate-color
var validateColor = require("validate-color").default;

const promptThreeChars = {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: input => input.length <= 3 ? true : 'You can enter up to three characters only.'
}

const promptTextColour = {
    type: 'input',
    name: 'textColor',
    validate: input => validateColor(input) ? true : "Invalid text colour chosen"
}

const promptShape = {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
}

const promptShapeColour = {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape\'s color (color keyword or hexadecimal number):',
    validate: input => validateColor(input) ? true : "Invalid colour chosen"
}

const commandLineQuestions = [
    promptThreeChars,
    promptTextColour,
    promptShape,
    promptShapeColour
];

module.exports = commandLineQuestions;