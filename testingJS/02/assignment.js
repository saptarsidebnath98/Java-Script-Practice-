function capitalize(str){
    return str[0].toUpperCase() + str.substring(1).toLowerCase();  
}

const getOne = (arr) => {
    return arr[0];
}

const reverseString = (str) => {
    return str.split("").reverse().join("");
}

const calculator = {
    add: (a, b) => {
        return a + b;
    },
    subtract: (a,b) => {
        return a - b;
    },
    divide: (a,b) => {
        if(b === 0){
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    },
    multiply: (a,b) => {
        return a * b;
    }

}

const analyzeArray = (arr) => {
    const obj = {};
    obj['average'] = arr.reduce((total, currVal) => total + currVal, 0) / arr.length;
    obj['min'] = arr.reduce((finalVal, currval) => finalVal < currval ? finalVal : currval);
    obj['max'] = arr.reduce((finalVal, currval) => finalVal > currval ? finalVal : currval);
    obj['length'] = arr.length;
    return obj;
}

module.exports = { capitalize , getOne, reverseString, calculator, analyzeArray};