function analyzeArray (arr) {
    // Test to see if all the items in the array are numbers
    if (!Array.isArray(arr) || !arr.every(item => typeof item === 'number')) {
        throw new Error('Must be an array with numbers')
    }

    const length = arr.length;
    const average = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        average: average,
        min: min,
        max: max,
        length: length
    };
}

module.exports = analyzeArray;