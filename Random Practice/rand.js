// const num = [1, 2, 3, 4, 1, 5];
// const obj = {};

// let objKeys = Object.keys(obj)

// for(let item of num){
//     if(!objKeys.includes(item)){
//         obj[item] = 1;
//     }else{
//         return obj[item] += 1; 
//     }
// }

//console.log(obj);

//16-07-2024
let obj2 = { id: "1", name: "user22", age: "26", work: "programmer" };

// console.log(Object.keys(obj2));
// console.log(Object.values(obj2));
// console.log(Object.entries(obj2));

//anagrams
function isAnagram(one, two){
    let oneN = one.toLowerCase();
    let twoN = two.toLowerCase();
    return [...oneN].sort().join("") === [...twoN].sort().join("");
}

function rotation(n, arr){
    for(let i = 0; i < n ; i++){
        let last = arr.pop();
        arr.unshift(last);
        console.log(`rotation: ${i + 1}, lastElem: ${last}, arr: ${arr}`);
    }
    return arr;
}
        
    