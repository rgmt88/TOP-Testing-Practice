const reverseString = require('');

describe('reverseString', () => {
    test('takes a string and returns it reversed', () => {
        expect(reverseString('Silvia')).toBe('aivliS');
    });

    test('returns a single letter if the word is one character long', () => {
        expect(reverseString('Z')).toBe('Z');
    });

    test('throws an error for non-string inputs', () => {
        expect(() => reverseString(123)).toThrow('Incorrect input, try again');
    });

    test('throws an error for empty strings', () => {
        expect(() => reverseString('')).toThrow('Incorrect input, try again');
    });
});