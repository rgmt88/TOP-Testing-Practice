const calculator = {
    add(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        } else {
            throw new Error('Both arguments must be numbers');
        }
    },

    subtract(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a - b;
        } else {
            throw new Error('Both arguments must be numbers');
        }
    },

    divide(a, b) {
        if (typeof a === 'number' && typeof b === 'number' && b !== 0) {
            return a / b;
        } else if (typeof a === 'number' && typeof b === 'number' && b === 0) {
            throw new Error('Division by zero is not allowed');
        } else {
            throw new Error('Both arguments must be numbers');
        }
    },

    multiply(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a * b;
        } else {
            throw new Error('Both arguments must be numbers');
        }
    }
}

module.exports = calculator;