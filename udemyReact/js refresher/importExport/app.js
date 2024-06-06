//import {apikey} from "./script.js"
//console.log(apikey);

// import apikey from "./script.js";
// console.log(apikey);

// import { apikey, email } from "./script.js";
// console.log(apikey, email);

// import * as infos from "./script.js";
// console.log(infos.apikey);

import { apikey, email as officialEmail } from "./script.js";
console.log(officialEmail);

// const objs = arr.map((item) => ({text: item}));
// console.log(objs);

const arr = ["hi", "bye", "chal", "fot"];
const numArr = [1 , 45, 79]
const newArr = [...arr, "hello", "pillow", ...numArr]
// console.log(newArr);

const [greet1, greet2, ...others] = arr;
// console.log(greet1);
// console.log(greet2);
// console.log(others);

const user = {
    name: "Vinod",
    manager: "Bhusan"
}

const printUserDetails = ({name, manager}) => {
    return `name: ${name}, manager name: ${manager}`;
}

console.log(printUserDetails(user));