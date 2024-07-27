// Importing the validate-color package for validating color inputs
// https://www.npmjs.com/package/validate-color
var validateColor = require("validate-color").default;

// Define a prompt for entering up to three characters
const promptThreeChars = {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: input => input.length <= 3 ? true : 'You can enter up to three characters only.'
}

// Define a prompt for entering the text color
const promptTextColour = {
    type: 'input',
    name: 'textColor',
    validate: input => validateColor(input) ? true : "Invalid text colour chosen"
}

// Define a prompt for selecting a shape
const promptShape = {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
}

// Define a prompt for entering the shape's color
const promptShapeColour = {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape\'s color (color keyword or hexadecimal number):',
    validate: input => validateColor(input) ? true : "Invalid colour chosen"
}

// Combine all prompts into a single array of questions
const commandLineQuestions = [
    promptThreeChars,
    promptTextColour,
    promptShape,
    promptShapeColour
];

module.exports = commandLineQuestions;