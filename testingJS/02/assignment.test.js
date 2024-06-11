const { capitalize, getOne, reverseString, calculator, analyzeArray } = require('./assignment.js');


// test("function that capitalizes strings", ()=> {
//     expect(capitalize("javascript")).toBe("Javascript");
// });

// test("First element of an array", ()=> {
//     expect(getOne([1,2,3])).toBe(1);
// });

// test("Reverse a string", ()=> {
//     expect(reverseString("good")).toBe("doog");
// });

// test("Check add method of Calculator object", () => {
//     expect(calculator.add(5, 4)).toBe(9); 
// });

// test("Check substract method of Calculator object", ()=> {
//     expect(calculator.subtract(5, 4)).toBe(1);
// });

// test("Check multiply method of Calculator object", ()=> {
//     expect(calculator.multiply(5, 4)).toBe(20);
// });

// test("Check divide method of Calculator object", ()=> {
//     expect(calculator.divide(20, 4)).toBe(5);
// });

test("Checking the max, min, length, avarage of an array as object properties", () => {
    expect(analyzeArray([2,3,1])).toEqual({average: 2 , min: 1 ,max: 3 ,length: 3 });
})




