let sliderImages = document.querySelectorAll('.slide'); //catch all the slides
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let currentImage = 0; //varieble that will tell the site which img is now visible

//clears all the images
function resetSlider() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

//function that starts right after the page load - start the slider from the first (0 index) pic
function startSlide() {
    resetSlider();
    sliderImages[0].style.display = 'block';
}

//fuctions to slide back and next images
function slideBack() {
    resetSlider();
    sliderImages[currentImage - 1].style.display = 'block';
    currentImage--;
}

function slideNext() {
    resetSlider();
    sliderImages[currentImage + 1].style.display = 'block';
    currentImage++;
}

// events to slide images after click left of right arrow
arrowLeft.addEventListener('click', function () {
    if (currentImage === 0) {
        currentImage = sliderImages.length;
    }
    slideBack();
})

arrowRight.addEventListener('click', function () {
    if (currentImage === sliderImages.length - 1) {
        currentImage = -1;
    }
    slideNext();
})

//start after the site loading finished 
startSlide();