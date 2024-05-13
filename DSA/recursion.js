const recursionPrintNumber = (n) =>{
    if(n<=0){
        console.log("completed");
        return
    }
    console.log(n);
    recursionExample(n - 1);
}

const factorialRecursion = (n, total = 1) =>{
    if(n==0 || n==1){
        return total;
    }else{
        return factorialRecursion(n-1, total * n);
    }
}

const sumRange = (n, total = 0)=>{
    if(n<=0){
        return total;
    }else{
        return sumRange(n-1, total + n);
    }
}

const powerFunc = (num, power)=>{
    if(power === 0){
        return 1;
    }else{
        return num * powerFunc(num, power - 1);
    }
}

const factorial = (n) =>{
    if(n == 1 || n == 0){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}

const productOfArray = (arr) =>{
    if(arr.length === 0){
        return 1;
    }else{
        return arr.shift() * productOfArray(arr);
    }
}

const replicate = function replicate(times, number){
	if(times <= 0) return [];

	return [number].concat(replicate(times - 1, number));
}