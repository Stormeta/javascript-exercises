const sumAll = function (num1, num2) {

    let finalSum = 0;

    if (
        typeof num1 !== 'number' ||
        typeof num2 !== 'number' ||
        num1 < 0 ||
        num2 < 0 ||
        !Number.isInteger(num1) ||
        !Number.isInteger(num2)
    ) {

        return 'ERROR'
    }
    else if (num1 < num2) {
        for (let contador = num1; contador <= num2; contador++) {
            finalSum += contador;
        }
    } else {
        for (let contador = num2; contador <= num1; contador++) {
            finalSum += contador;
        }
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
