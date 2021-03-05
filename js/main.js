$(function() {
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        fade: true,

        responsive: [{
            breakpoint: 1100,
            settings: {
                dots: false
            }
        }]
    });
    $('.reviews__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 596,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.header__menu-btn').on('click', function() {
        $('.header__menu-list').toggleClass('.header__menu--active');
    });
});