const displayedImg = document.querySelector('.displayedImage');
let currentIndex = 0;
function autoDisplayImgChange(){
    setInterval(()=>{
        displayedImg.src = `images/img${currentIndex}.jpg`;

        currentIndex++;

        if(currentIndex > 9){
            currentIndex = 0;
        }
        console.log(currentIndex);
    }, 5000)
}
autoDisplayImgChange();

const rightArrow = document.querySelector('.rightArrow');

rightArrow.addEventListener('click', ()=>{
    addOne();
})


// document.querySelector('#r8').addEventListener('click',()=>{
//     addOne();
// })

function addOne(){
    displayedImg.src = `images/img${currentIndex + 1}.jpg`;
    console.log(currentIndex);
}