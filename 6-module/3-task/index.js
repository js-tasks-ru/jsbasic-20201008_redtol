import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
    constructor(slides) {
        this.slides = slides;

        let _elem = document.createElement('div');

        this.elem = _elem;

        _elem.className = 'carousel';

        let sliderWrap = document.createElement('div');
        sliderWrap.className = 'carousel__inner';

        _elem.append(sliderWrap);

        for (let i = 0; i < slides.length; i++) {
            sliderWrap.insertAdjacentHTML('beforeend', `
                <div class="carousel__slide" data-id="${slides[i].id}">
                    <img src="/assets/images/carousel/${slides[i].image}" class="carousel__img" alt="slide">
                    <div class="carousel__caption">
                        <span class="carousel__price">€${slides[i].price.toFixed(2)}</span>
                        <div class="carousel__title">${slides[i].name}</div>
                        <button type="button" class="carousel__button">
                        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                        </button>
                    </div>
                </div>
            `);
        }



        let arrRight = document.createElement('div');
        arrRight.className = 'carousel__arrow carousel__arrow_right';
        arrRight.insertAdjacentHTML('beforeend', '<img src="/assets/images/icons/angle-icon.svg" alt="icon">');

        let arrLeft = document.createElement('div');
        arrLeft.className = 'carousel__arrow carousel__arrow_left';
        arrLeft.insertAdjacentHTML('beforeend', '<img src="/assets/images/icons/angle-left-icon.svg" alt="icon">');

        _elem.append(arrLeft);
        _elem.append(arrRight);

        let slide = this.elem.querySelector('.carousel__slide');
        let sliderPosition = 0;
        let totalSlider = this.elem.querySelectorAll('.carousel__slide');
        let currendSlideNumber = 0;
        let currentSlide;

        arrLeft.style.display = 'none';

        arrLeft.addEventListener("click", function() {
            currendSlideNumber--;

            sliderPosition = slide.offsetWidth * -currendSlideNumber;
            sliderWrap.style.transform = `translateX(${sliderPosition}px)`;

            if (!currendSlideNumber) {
                arrLeft.style.display = 'none';
            } else {
                arrRight.style.display = '';
            }
        });

        arrRight.addEventListener("click", function() {
            currendSlideNumber++;
            sliderPosition = slide.offsetWidth * -currendSlideNumber;
            sliderWrap.style.transform = `translateX(${sliderPosition}px)`;

            if (currendSlideNumber == totalSlider.length - 1) {
                arrRight.style.display = 'none';
            } else {
                arrLeft.style.display = '';
            }
        });

        let buttonAdd = _elem.querySelector('.carousel__button');

        buttonAdd.addEventListener('click', () => this.onClick());


    }

    // let slide

    onClick() {
        console.log('test');
        const customEvent = new CustomEvent("product-add", {
            detail: console.log(slide.id),
            bubbles: true
        });
        this.elem.dispatchEvent(customEvent);
    }

}
