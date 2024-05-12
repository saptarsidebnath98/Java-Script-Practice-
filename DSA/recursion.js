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