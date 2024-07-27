const generateSVG = require('./shapes.js');

describe('generateSVG function', () => {
    it('should generate SVG for a circle', () => {
        const result = generateSVG({
            text: 'Circle',
            textColor: '#000000',
            shape: 'circle',
            shapeColor: '#ff0000'
        });

        expect(result).toContain('<circle cx="150" cy="100" r="80" fill="#ff0000" />');
        expect(result).toContain('<text x="150" y="115" font-size="40" text-anchor="middle" fill="#000000">Circle</text>');
    });

    it('should generate SVG for a triangle', () => {
        const result = generateSVG({
            text: 'Triangle',
            textColor: '#ffffff',
            shape: 'triangle',
            shapeColor: '#00ff00'
        });

        expect(result).toContain('<polygon points="150,25 250,175 50,175" fill="#00ff00" />');
        expect(result).toContain('<text x="150" y="115" font-size="40" text-anchor="middle" fill="#ffffff">Triangle</text>');
    });

    it('should generate SVG for a square', () => {
        const result = generateSVG({
            text: 'Square',
            textColor: '#0000ff',
            shape: 'square',
            shapeColor: 'red'
        });

        expect(result).toContain('<rect x="50" y="50" width="200" height="200" fill="red" />');
        expect(result).toContain('<text x="150" y="115" font-size="40" text-anchor="middle" fill="#0000ff">Square</text>');
    });
});
