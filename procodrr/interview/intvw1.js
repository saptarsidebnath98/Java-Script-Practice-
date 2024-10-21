function abc(){
    // console.log("Ankit");
    return 8;
}
// console.log(abc(), xyz())

function xyz(){
    return 16;
}

var a = (abc(), xyz())

// console.log(a)

//closure function currying
function multiply(x){
    return function(y){
        return x * y
    }
}

let result = multiply(2)
// console.log(result(3))

//bind method for function currying
function mul(x, y){
    return x * y;
}

let resultMul = mul.bind(this, 2)
// console.log(resultMul(5))

//Infinite currying
function add(a){
    return function(b){
        if(b) return add(a+b);
        return a;
    }
}

// console.log(add(4)(5)(7)(9)());

let arr = [1, 2 ,[3, 4], [5, 6]]
let newArr = []
arr.forEach(item => {
    if(item.length > 1){
        item.forEach(i => newArr.push(i))
    }else{
        newArr.push(item)
    }
})

// console.log(newArr)

const obj = {
    a : 1,
    b : 2,
    c : 3,
    'a' : 4,
    'b' : 7
}

// console.log(obj) { a: 4, b: 7, c: 3 }

Object.freeze(obj)

const shape = obj;
shape.c = 100;
obj.d = 200;
// console.log(obj) { a: 4, b: 7, c: 3 }
// console.log(shape.c) 3


function func(a , b){
    if(a > b){
        console.log("a is greater")
    }else{
        console.log("b is greater")
    }
    return 8;
    // console.log(a + b);
}

// console.log(func(8 , 6))
// console.log(abc(4 , 8))

let name = "Saptarsi"
// console.log(name())

const one = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true;
console.log(one, two, three);
