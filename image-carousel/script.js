const displayedImg = document.querySelector('.displayedImage');
let currentIndex = 0;

//slideshow logic, 5 secs interval
function autoDisplayImgChange(){
    setInterval(()=>{
        displayedImg.src = `images/img${currentIndex}.jpg`;
        
        currentIndex++;
            
            if(currentIndex > 9){
                currentIndex = 0;
            }
        }, 2000)  
    }
// autoDisplayImgChange();
    
function imageAndButtonBgLogic(index){
        displayedImg.src = `images/img${index}.jpg`;
        document.querySelector(`#btn${index}`).style.backgroundColor = "yellow";
        
        if(currentIndex == 0){
            document.querySelector("#btn9").style.backgroundColor = "#dbd8e3";
        }else{
            document.querySelector(`#btn${index- 1}`).style.backgroundColor = "#dbd8e3";
        }
}

//right arrow function
const rightArrow = document.querySelector('.rightArrow');
rightArrow.addEventListener('click',()=>{
    if(currentIndex < 9){
        displayedImg.src = `images/img${currentIndex + 1}.jpg`;
        
        currentIndex++;
    }else{
        displayedImg.src = `images/img0.jpg`;
        
        currentIndex = 0;
    }
})

//left arrow function
const leftArrow = document.querySelector('.leftArrow');
leftArrow.addEventListener('click',()=>{
    if(currentIndex > 0){
        displayedImg.src = `images/img${currentIndex - 1}.jpg`;
        
        currentIndex--;
    }else{
        displayedImg.src = `images/img9.jpg`;
        
        currentIndex = 9;
    }
})
//left images 
const leftImageLibrary = document.querySelector(".leftImages");
leftImageLibrary.addEventListener('click',(e)=>{
    if(e.target.tagName === "IMG"){
        displayedImg.src = e.target.src.split("/image-carousel/")[1];
        
    }
})

//right images
const rightImageLibrary = document.querySelector(".rightImages");
rightImageLibrary.addEventListener('click',(e)=>{
    if(e.target.tagName === "IMG"){
        displayedImg.src = e.target.src.split("/image-carousel/")[1];
        
    }
})

//navbuttons
const buttons = document.querySelectorAll(".navBtns");
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        displayedImg.src = `images/img${(button.id.split('btn')[1])}.jpg`;
        currentIndex = button.id.split('btn')[1];
        
        if(currentIndex > 9){
            currentIndex = 0;
        }
    })
})



function imgNavBtnRelation(){
    let location = displayedImg.src.slice(9, 10);
    console.log(location);
    document.querySelector(`#btn${location}`).style.backgroundColor = "yellow"; 
}


const imagesItems = document.querySelectorAll(".imagesItems");

// Loop through all images
for (let i = 0; i < imagesItems.length; i++) {
    // Add click event listener to each image
    imagesItems[i].addEventListener("click", function() {
        addYellowBorder(this);
    });
}

// Function to add yellow border to the clicked image and remove it from other images
function addYellowBorder(clickedImage) {
    // Loop through all images
    for (let i = 0; i < imagesItems.length; i++) {
        // Remove yellow border from all images
        imagesItems[i].style.border = "none";
        imagesItems[i].style.height = "70px";
    }

    // Add yellow border to the clicked image
    clickedImage.style.border = "2px solid yellow";
    clickedImage.style.height =  "100px";
}
    


