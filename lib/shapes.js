// Function to generate SVG content based on user inputs
function generateSVG({ text, textColor, shape, shapeColor }) {
    let shapeElement;
    // Create the appropriate SVG element based on the selected shape
    switch (shape) {
        case 'circle':
            shapeElement = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            shapeElement = `<polygon points="150,25 250,175 50,175" fill="${shapeColor}" />`;
            break;
        case 'square':
            shapeElement = `<rect x="50" y="50" width="200" height="200" fill="${shapeColor}" />`;
            break;
    }

    // Return the complete SVG content
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeElement}
        <text x="150" y="115" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
}

module.exports = generateSVG;