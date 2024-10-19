const names = ["David", "Ramid", "Cbum", "Dino"];

display = document.querySelector('h1');
btn = document.querySelector('button');
p = document.querySelector('p');

p.textContent = "pk is the boss"
let index = 0;

btn.addEventListener("click", function(){
    if(index == names.length){
        index = 0;
    }
    display.textContent = names[index];
    index = index + 1;
  });

console.log(index)
