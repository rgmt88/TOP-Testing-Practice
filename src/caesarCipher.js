function caesarCipher(str, shift) {
    if (typeof str !== 'string') {
        throw new Error('Must be a string')
    }

    if (typeof shift !== 'number') {
        throw new Error('Shift must be a number')
    }
    
    const asciiValues = strToAscii(str);
    const modifiedAsciiValues = asciiValues.map(num => {
        // Uppercase letters
        if (num >= 65 && num <= 90 ) {
            if ((num + shift) > 90) {
                return num + shift - 90 + 65 - 1;
            } else if ((num + shift) < 65) {
                return 90 - (65 - num - shift) + 1;
            } else {
                return num + shift;
            }
        }
        // Lowercase letters
        else if (num >= 97 && num <= 122) {
            if ((num + shift) > 122) {
                return (num + shift - 97) % 26 + 97;
            } else if ((num + shift) < 97) {
                return 122 - (97 - (num + shift)) + 1;
            } else {
                return num + shift;
            }
        }
        // Non-alphabetic characters remain unchanged
        else {
            return num;
        }
    });

    return asciiToStr(modifiedAsciiValues);
}

function strToAscii(str) {
    const asciiValues = [];

    for (let i = 0; i < str.length; i++) {
        asciiValues.push(str.charCodeAt(i));
    }

    return asciiValues;
}

function asciiToStr(asciiValues) {
    const chars = asciiValues.map(value => String.fromCharCode(value));
    const str = chars.join('');

    return str;
}

module.exports = caesarCipher;