const repeatString = function (string, num) {
    let i = 0;
    let fullString = "";

    if (num < 0) {
        return `ERROR`;
    }
    while (i < num) {
        fullString += string;
        ++i;
    }
    return fullString;
};

// Do not edit below this line
module.exports = repeatString;
