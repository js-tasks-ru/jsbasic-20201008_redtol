function initCarousel() {
    let arrLeft = document.querySelector('.carousel__arrow_left');
    let arrRight = document.querySelector('.carousel__arrow_right');
    let slidersWrap = document.querySelector('.carousel__inner');
    let slide = document.querySelector('.carousel__slide');
    let slideWidth = slide.offsetWidth;
    let sliderPosition = 0;
    let totalSlider = document.querySelectorAll('.carousel__slide');

    arrLeft.style.display = 'none';
    arrLeft.addEventListener("click", function() {
        sliderPosition += slideWidth;
        slidersWrap.style.transform = `translateX(${sliderPosition}px)`;
        if (!sliderPosition) {
            arrLeft.style.display = 'none';
        }
        if (sliderPosition > -(slideWidth * (totalSlider.length - 1))) {
            arrRight.style.display = '';
        }
    });
    arrRight.addEventListener("click", function() {
        sliderPosition -= slideWidth;
        slidersWrap.style.transform = `translateX(${sliderPosition}px)`;
        if (sliderPosition) {
            arrLeft.style.display = '';
        }
        if (sliderPosition < -(slideWidth * (totalSlider.length - 2))) {
            arrRight.style.display = 'none';
        }
    });

}