
//86
function angleType(deg){
    if(deg>0 && deg<90){
        return "Acute angle";
    }else if(deg === 90){
        return "Right angle";
    }else if(deg>90 && deg<180){
        return "Obtuse angle";
    }else if(deg=== 180){
        return "Straight angle";
    }else{
        return "Type: None"
    }
}

// console.log(angleType(180));
//87

const sortArr = (arr) => {
    return arr.sort((a, b)=> a - b);
}

const isSimilar = (arr1, arr2) => {
    const result = [];
    if(arr1.length === arr2.length){
        let sortedArr1 = sortArr(arr1);
        let sortedArr2 = sortArr(arr2);
        for(i = 0; i < arr1.length; i++){
            result.push(sortedArr1[i] === sortedArr2[i]);
        }
    }else{
        return false;
    }

    return result.every(item => item === true) ? true : false;
}

// console.log(isSimilar([1, 2, 3, 4, 7, 6, 0], [1, 2, 3, 4, 0]));
// console.log(isSimilar([10, 20, 30], [10, 20, 30]));   // true
// console.log(isSimilar([10, 20, 30], [30, 10, 20]));   // true
// console.log(isSimilar([10, 20, 30, 40], [10, 30, 20, 40]));   // false

//88
const similarInts = (num1, num2, divisor) => {
    let isSimilar = false;
    if((num1%divisor === 0 && num2%divisor === 0) || (num1%divisor !== 0 && num2%divisor !== 0)){
        isSimilar = true;
    }
    return isSimilar;
}

// console.log(similarInts(10, 20, 2));
// console.log(similarInts(10, 20, 3));
// console.log(similarInts(10, 20, 4));
// console.log(similarInts(15, 17, 3));

//89
const replaceExpression = (x, y, z) => {
    let exp = null;
    let result = true;

    if(x + y === z){
        exp = "+" 
    }else if(x - y === z){
        exp = "-"
    }else if(x * y === z){
        exp = "*"
    }else if(x / y === z){
        exp = "/"
    }else{
        result = false;
        return  result + ", No expression is applicable!"
    }

    return `${result}, ${x} ${exp} ${y} = ${z}`;
}

// console.log(replaceExpression(10, 25, 35));   // true, as 10 + 25 = 35
// console.log(replaceExpression(10, 25, 250));  // true, as 10 * 25 = 250
// console.log(replaceExpression(30, 25, 5));    // true, as 30 / 25 = 1.2
// console.log(replaceExpression(100, 25, 4.0)); // true, as 100 / 25 = 4.0
// console.log(replaceExpression(100, 25, 75));  // true, as 100 - 25 = 75

//90
const greatestElem = (arr, position) => {
    return arr.sort((a, b) => b - a)[position - 1];
}

console.log(greatestElem([1,2,6,4,5], 3));       // 4
console.log(greatestElem([-10,-25,-47,-36,0], 1)); // 0