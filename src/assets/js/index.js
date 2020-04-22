$(".reviews__row").slick({
    slidesToShow: 1,
    arrow: true,
    nextArrow: '<button type="button" class="slick-next  reviews-next"><img src="./assets/img/arrowSlider/back.png" alt="Стрелка назад"></button>',
    prevArrow: '<button type="button" class="slick-prev  reviews-prev"><img src="./assets/img/arrowSlider/next.png" alt="Стрелка вперед"></button>',
    responsive: [
        {
            breakpoint: 1004,
            settings: {
                arrow: false,
                dots: true
            }
        }
    ]
});


$('.questions__heading').click(function () {
    $(this).next().slideToggle();
    $('.questions__body').not(this).next().slideUp();
});