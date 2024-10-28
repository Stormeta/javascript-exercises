const reverseString = function (string) {
    const arrayOfstring = string.split('');
    const arrayReversed = arrayOfstring.reverse();
    const reversedString = arrayReversed.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
