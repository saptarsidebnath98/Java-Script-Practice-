function dropDownButton(buttonName, menuDivName){
    buttonName.addEventListener('click', ()=>{
        if(menuDivName.style.display == "none"){
            menuDivName.style.display = "block";
        }else{
            menuDivName.style.display = "none";
        }
    })
}

const menuBtn = document.querySelector(".menuBtn");
const menuDiv = document.querySelector('.menu');
dropDownButton(menuBtn, menuDiv);

const anotherMenuBtn = document.querySelector(".anotherBtn");
const anotherMenuDiv = document.querySelector('.otherMenu');
dropDownButton(anotherMenuBtn, anotherMenuDiv);