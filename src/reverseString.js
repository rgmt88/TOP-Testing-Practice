function reverseString(word) {
    if (typeof word !== 'string' || word === "") {
        throw new Error('Incorrect input, try again');
    }
    return word.split('').reverse().join('');
};

module.exports = reverseString;