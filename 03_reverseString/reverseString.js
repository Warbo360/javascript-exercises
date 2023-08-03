const reverseString = function(string) {
    let arrayString;
    let stringArray = string.split('');
    stringArray = stringArray.reverse();
    arrayString = stringArray.join('');
    return arrayString;
};

// Do not edit below this line
module.exports = reverseString;
