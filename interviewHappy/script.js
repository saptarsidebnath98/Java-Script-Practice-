//1.reverse a string
function reverseStr(str){
    return str.split("").reverse().join("");
}

function reverseStr2(str){
    let result = "";
    for(let i = str.length-1; i >= 0; i--){
        result += str[i]
    }
    return result;
}

// console.log(reverseStr("Interview Happy"));
// console.log(reverseStr2("Interview Happy"));

//2.function returns longest word in a sentence
function longWord(str){
    let longest = ""
    str.split(" ").forEach(item => {
        if(item.length > longest.length){
            longest = item
        }
    })
    return longest;
}

// console.log(longWord("I have some to say about my luxurious life."))

//3.palindrome
function isPlaindrome(str){
    return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
}

// console.log(isPlaindrome("kukuku"));


//4.remove & find Duplicates
function removeDuplicate(arr){
    const set = new Set(arr);
    return [...set];
}

function findDuplicate(arr){
    const set = new Set();
    const duplicates = [];
    for(let val of arr){
        if(!set.has(val)){
            set.add(val)
        }else{
            duplicates.push(val)
        }
    }
    return duplicates;
}

// console.log(removeDuplicate([1,2,1,2,3,8,8,7]));
// console.log(findDuplicate([1,2,1,2,3,8,8,7]));

//5.two strings are anagrams or not?
function isAnagram(str1, str2){

    function sortStr(string){
        return string.toLowerCase().split("").sort().join("")
    }

    return sortStr(str1) === sortStr(str2);
}

// console.log(isAnagram("listen","silent"));

//6.count vowels
function countVowels(str){
    const vowels = ["a","e","i","o","u"];
    let count = 0;
    for(let val of str.split("")){
        if(vowels.includes(val)){
            count++
        }
    }
    return count;
}

// console.log(countVowels("Hello, world!"));
//7. find largest number
function findLargestNum(arr){
    return arr.reduce((finalVal, currVal) => finalVal > currVal ? finalVal : currVal);
}

// console.log(findLargestNum([100, 50, 80, 20, 5, 91]))

//8.prime number or not
function isPrime(num){
    for(let i = 2; i <= num/2; i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}

// console.log(isPrime(3));
//9.factorial of a number
function factorial(n){
    if(n==0){
        return 1
    }
    return n * factorial(n-1) 
}

function factorialAnother(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i
    }
    return result
}
// console.log(factorial(4))
console.log(factorialAnother(4))





