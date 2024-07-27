const capitalize = require('../src/capitalize');

describe('capitalize', () => {
    test('capitalizes the first letter of a word', () => {
        expect(capitalize('silvia')).toBe('Silvia');
    });

    test('returns a single capitalized letter if the word is one character long', () => {
        expect(capitalize('z')).toBe('Z');
    });

    test('throws an error for non-string inputs', () => {
        expect(() => capitalize(123)).toThrow('Incorrect input, try again')
    });

    test('throws an error for empty strings', () => {
        expect(() => capitalize('')).toThrow('Incorrect input, try again')
    });
});


