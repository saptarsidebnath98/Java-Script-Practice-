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