const removeFromArray = function(inputArray, ...targetArray) {
    const x = inputArray;
    for (let targetElements of targetArray) {
        if (targetElements === x[x.indexOf(targetElements)]) {
            x.splice(x.indexOf(targetElements),1);
        } else { 
            continue
        }
    }
    return x;
};

// Do not edit below this line
module.exports = removeFromArray;
