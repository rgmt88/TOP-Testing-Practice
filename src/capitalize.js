function capitalize(word) {
    if (word === "" || typeof word !== 'string') {
        throw new Error('Incorrect input, try again');
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
}

module.exports = capitalize
