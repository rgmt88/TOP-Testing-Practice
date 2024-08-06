const analyzeArray = require('../src/analyzeArray');

describe('analyze a numbers array', () => {
    test('calculates the correct average, min, max and length for an array of numbers', () => {
        const result = analyzeArray([1, 2, 3, 4, 5]);
        expect(result).toEqual({
            average: 3,
            min: 1,
            max: 5,
            length: 5
        });
    });

    test('throws an error if the input is not an array', () => {
        expect(() => analyzeArray('not an array')).toThrow('Must be an array with numbers');
    });

    test('throws an error if the array contains non-number elements', () => {
        expect(() => analyzeArray([1, 2, '3', 4, 5])).toThrow('Must be an array with numbers');
    });

    test('calculates correctly for an array with negative numbers', () => {
        const result = analyzeArray([-1, -2, -3, -4, -5]);
        expect(result).toEqual({
            average: -3,
            min: -5,
            max: -1,
            length: 5
        });
    });

    test('calculates correctly for an array with one element', () => {
        const result = analyzeArray([42]);
        expect(result).toEqual({
            average: 42,
            min: 42,
            max: 42,
            length: 1
        });
    });

    test('calculates correctly for an empty array', () => {
        const result = analyzeArray([]);
        expect(result).toEqual({
            average: NaN, // As there are no numbers to average
            min: Infinity, // As there are no numbers to compare
            max: -Infinity, // As there are no numbers to compare
            length: 0
        });
    });
})