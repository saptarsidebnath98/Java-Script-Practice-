const num = [1, 2, 3, 4, 1, 5];
const obj = {};

let objKeys = Object.keys(obj)

for(let item of num){
    if(!objKeys.includes(item)){
        obj[item] = 1;
    }else{
        return obj[item] += 1; 
    }
}

console.log(obj);
        
    