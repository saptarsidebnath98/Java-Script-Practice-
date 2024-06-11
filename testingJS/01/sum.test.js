const sum = require('./sum');


//common matchers:
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test("expect two plustwo equal to four", ()=> {
//     expect(sum(2,2)).toBe(4);
// })

// test("expect two plustwo equal to four", ()=> {
//   expect(2 + 2).toBe(4);
// })

// test('Object assignment', ()=> {
//   const obj = {one : 1};
//   obj["two"] = 2;
//   expect(obj).toEqual({one: 1, two: 2});
// })

// test('Adding positive numbers is not zero', () => {
//   for(let a = 1; a < 10; a++){
//     for(let b = 1; b < 10; b++){
//       expect(a + b).not.toBe(0);
//     }
//   }
// })

// test('null', ()=> {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// })


//Truthiness:
// test('zero', ()=> {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// })


//Numbers:
// test("two plus two", ()=> {
//   const value = 2 + 2;
//   expect(value).toBe(4);
//   expect(value).toBeGreaterThan(3);
//   expect(value).toBeGreaterThanOrEqual(2.5);
//   expect(value).toBeLessThan(5);
//   expect(value).toEqual(4);
// })

//Float:
// test("adding floating point number", () => {
//   const value = 0.1 + 0.2;
//   expect(value).toBeCloseTo(0.3);
// });


//Strings:
// test("there is no I in team", () => {
//   expect('team').not.toMatch(/I/);
// });
// test("There is a 'stop' in 'showstopper'", ()=> {
//   expect('showstopper').toMatch(/stop/);
// });


//Arrays and iterables:
// const shoppingList = [
//   'diapers',
//   'kleenex',
//   'trash bags',
//   'paper towels',
//   'milk',
// ];

// test('the shopping has milk on it', ()=> {
//   expect(shoppingList).toContain('milk');
//   expect(new Set(shoppingList)).toContain('milk');
// });

function compileAndroidCode(){
  throw new Error("You are using wrong JDK!");
}

test('compiling android goes as expected', () => {
  expect(()=> compileAndroidCode()).toThrow();
  expect(()=> compileAndroidCode()).toThrow(Error);
  expect(()=> compileAndroidCode()).toThrow("You are using wrong JDK!");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
})

