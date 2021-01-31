import $lib from '../core';

$lib.prototype.slider = function () {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');
        let offset = 0;
        let slideIndex = 0;

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        $lib(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();

            if(offset == (+width.replace(/\D/g,'') * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g,'');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if(slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        $lib(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();

            if(offset == 0) {
                offset = (+width.replace(/\D/g,'') * (slides.length - 1));
            } else {
                offset -= +width.replace(/\D/g,'');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if(slideIndex === 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        const sliderId = this[i].getAttribute('id');
        $lib(`#${sliderId} .carousel-indicators li`).click((e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = +slideTo;
            offset = +width.replace(/\D/g,'') * slideTo;

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');

            slidesField.style.transform = `translateX(-${offset}px)`;
        });
    }
};

$lib('.carousel').slider();