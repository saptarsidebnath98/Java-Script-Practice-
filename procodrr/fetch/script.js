console.log("hi");

fetch('https://dummyjson.com/products').then(res => res.json()).then(console.log);