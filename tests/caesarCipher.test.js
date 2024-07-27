const caesarCipher = require('../src/caesarCipher');

describe('takes a string and a shift factor and returns it with a character "shifted"', () => {
    test('Test wrapping from (xyz, 3) should return "abc"', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('Test case preservation from (HeLLo, 3) should return "KhOOr"', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('Punctuation test (non-alphabetical characters should remain unchanged) from ("Hello, World!", 3) should return "Khoor, Zruog!"', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
})