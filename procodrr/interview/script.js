
// function checkPalindrome(word){
//     let reverseWord = word.split("").reverse().join("")
//     return word == reverseWord
// }

// console.log(checkPalindrome("level"));
// console.log(checkPalindrome("radar"));
// console.log(checkPalindrome("mark"));

//Shallow Copy: Method 1
const obj = {name: "Saptarsi"}
const newObj = Object.assign({}, obj)
newObj.name = "Samay"

// console.log("obj" , obj)
// console.log("newObj" , newObj)

//Shallow Copy: Method 2
const newObj2 = {...obj}
newObj2.name = "Rohit"
// console.log("obj" , obj)
// console.log("newObj2" , newObj2)

//Deep Copy (does not affect the parent object values after 2 level deep where shallow copy is unable after 1 level)
const obj2 = {
    name: "Vinod",
    age: 21,
    address:{
        pin: 741222,
        state: "WB"
    }
}
const deepObj = JSON.parse(JSON.stringify(obj2))
deepObj.address.pin = 891822

// console.log(obj2.address.pin)
// console.log(deepObj.address.pin)
