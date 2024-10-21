console.log("hi");

fetch('https://dummyjson.com/products', {
    method: 'GET'
}).then((res) => {
    return res.json();
}).then((data) => {
    console.log(data);
});
