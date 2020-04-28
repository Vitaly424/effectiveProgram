"use strict";

$(document).ready(function () {
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

    $(function () {
        $('.header__nav-list a').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
        });
        $('.header__btn').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
        });
        $('.header__nav-list a').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
        });

        $('.footer__nav-link').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
        });
        $('.js-header-btn').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
        });
        $('.js-footer-btn').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
        });
        $('.specifications__btn a').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
        });
        $('.specifications__choose-link').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
        });
    });

    $("#phone").mask("+7 (999) 999-9999");
    $("#phoneTwo").mask("+7 (999) 999-9999");


    var menu = document.querySelector('#js-menu');
    var burger = document.querySelector('#js-burger');


    function showMenu() {
        menu.classList.toggle('active');

        menu.addEventListener('click', (e) => {
            if (e.target) {
                menu.classList.remove('active');
            }
        });
    }

    burger.addEventListener('click', showMenu);

});

