const calculator = require('../src/calculator');

describe('basic calculator with add, subtract, divide and multiply', () => {
    // Test cases for add method
    test('add 30 + 105 to equal 135', () => {
        expect(calculator.add(30, 105)).toBe(135);
    });

    test('add -10 + 20 to equal 10', () => {
        expect(calculator.add(-10, 20)).toBe(10);
    });

    test('add 0 + 0 to equal 0', () => {
        expect(calculator.add(0, 0)).toBe(0);
    });

    // Test cases for subtract method
    test('Subtract 50 - 20 to equal 30', () => {
        expect(calculator.subtract(50, 20)).toBe(30);
    });

    test('Subtract 20 - 50 to equal -30', () => {
        expect(calculator.subtract(20, 50)).toBe(-30);
    });

    test('Subtract 0 - 0 to equal 0', () => {
        expect(calculator.subtract(0, 0)).toBe(0);
    });

    // Test cases for multiply method
    test('Multiply 10 * 5 to equal 50', () => {
        expect(calculator.multiply(10, 5)).toBe(50);
    });

    test('Multiply -10 * 5 to equal -50', () => {
        expect(calculator.multiply(-10, 5)).toBe(-50);
    });

    test('Multiply 0 * 5 to equal 0', () => {
        expect(calculator.multiply(0, 5)).toBe(0);
    });

    // Test cases for divide method
    test('Divide 100 / 5 to equal 20', () => {
        expect(calculator.divide(100, 5)).toBe(20);
    });

    test('Divide 100 / -5 to equal -20', () => {
        expect(calculator.divide(100, -5)).toBe(-20);
    });

    test('Divide 0 / 5 to equal 0', () => {
        expect(calculator.divide(0, 5)).toBe(0);
    });

    test('Throws error when dividing by zero', () => {
        expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    // Edge cases for non-number inputs
    test('Throws error when adding non-number inputs', () => {
        expect(() => calculator.add(10, 'a')).toThrow('Both arguments must be numbers');
    });

    test('Throws error when subtracting non-number inputs', () => {
        expect(() => calculator.subtract(10, 'a')).toThrow('Both arguments must be numbers');
    });

    test('Throws error when multiplying non-number inputs', () => {
        expect(() => calculator.multiply(10, 'a')).toThrow('Both arguments must be numbers');
    });

    test('Throws error when dividing non-number inputs', () => {
        expect(() => calculator.divide(10, 'a')).toThrow('Both arguments must be numbers');
    });

});