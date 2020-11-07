function initCarousel() {
    let arrLeft = document.querySelector('.carousel__arrow_left');
    let arrRight = document.querySelector('.carousel__arrow_right');
    let slidersWrap = document.querySelector('.carousel__inner');
    let slide = document.querySelector('.carousel__slide');
    let slideWidth = slide.offsetWidth;
    let sliderPosition = 0;
    let totalSlider = document.querySelectorAll('.carousel__slide');
    let currendSlide = 0;

    arrLeft.style.display = 'none';

    arrLeft.addEventListener("click", function() {
        currendSlide--;
        sliderPosition = slideWidth * -currendSlide;
        slidersWrap.style.transform = `translateX(${sliderPosition}px)`;

        if (!currendSlide) {
            arrLeft.style.display = 'none';
        } else {
            arrRight.style.display = '';
        }
    });

    arrRight.addEventListener("click", function() {
        currendSlide++;
        sliderPosition = slideWidth * -currendSlide;
        slidersWrap.style.transform = `translateX(${sliderPosition}px)`;

        if (currendSlide == totalSlider.length - 1) {
            arrRight.style.display = 'none';
        } else {
            arrLeft.style.display = '';
        }
    });

}
