const sumAll = function(num1, num2) {
    let sum = 0;
    if (typeof(num1) === 'number' && typeof(num2) === 'number'){
        if (num2 > num1 && num1 > 0 && num2 > 0){
            for (i = num1; i <= num2; i++) {
                sum += i;
            }
        } else if (num1 > num2 && num1 > 0 && num2 > 0) {
            for (i = num2; i <= num1; i++) {
                sum += i;
            }
        } else {
            return 'ERROR';
        }  
    } else {
        return 'ERROR';
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
