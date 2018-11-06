let sliderImages = document.querySelectorAll('.slide'); //catch all the slides
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let currentImage = 0; //variable that tell which img is now visible by index starting from 0 to length of sliderImages array
let timeToChange = 7000; //time to change to the next slide automaticly

//fuctions to slide previous and next images
function slideBack() {
    currentImage--;
    if(currentImage < 0){
        currentImage = sliderImages.length - 1;
        sliderImages[0].classList.remove('block-show');
        sliderImages[0].style.display = 'none';
        sliderImages[currentImage].style.display = 'block';
        sliderImages[currentImage].classList.add('block-show');
    } else{
        sliderImages[currentImage + 1].classList.remove('block-show');
        sliderImages[currentImage + 1].style.display = 'none';
        sliderImages[currentImage].style.display = 'block';
        sliderImages[currentImage].classList.add('block-show');  
    }
}

function slideNext() {
    currentImage++;
    if(currentImage === sliderImages.length ){
        currentImage = 0;
        sliderImages[sliderImages.length - 1].classList.remove('block-show');
        sliderImages[sliderImages.length - 1].style.display = 'none';
    } else{
        sliderImages[currentImage - 1].classList.remove('block-show');
        sliderImages[currentImage - 1].style.display = 'none';
    }
    sliderImages[currentImage].style.display = 'block';
    sliderImages[currentImage].classList.add('block-show');
}

//events to slide images after click left of right arrow
arrowLeft.addEventListener('click', function () {
    slideBack();
    clearInterval(myTimer);
    myTimer = setInterval("slideNext()", timeToChange);
})

arrowRight.addEventListener('click', function () {
    slideNext();
    clearInterval(myTimer);
    myTimer = setInterval("slideNext()", timeToChange);
})

//images automaticly switch after loading the website
//clicking on any arrow reset the timer
let myTimer = setInterval("slideNext()", timeToChange);