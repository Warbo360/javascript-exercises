const repeatString = function(string, num) {
    let addedStrings = "";
    if (num < 0) {
        addedStrings = "ERROR";
    }
    for (i = 0; i < num; i++) {
        addedStrings += string
    }
    return addedStrings
};

// Do not edit below this line
module.exports = repeatString;
