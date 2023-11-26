$(document).ready(function () {
    $('.burg-button').click(function (event) {
        $('.burg-menu').addClass('active');
        $('.burg-menu').removeClass('disactive');
    });
    $('.close-burg').click(function(){
        $('.burg-menu').removeClass('active');
        $('.burg-menu').addClass('disactive');
    })
});

new Swiper('.header-slider', {
    slidesPerGroup: 1,
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
    },
});

new Swiper('.action-list', {
    slidesPerGroup: 1,
    slidesPerView: 0,
    spaceBetween: 30,
    breakpoints: {
        710: {
            slidesPerView: 2,
        },
        930: {
            slidesPerView: 3,
        },
        1211: {
            slidesPerView: 4,
        }
    },
    speed: 400,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

new Swiper('.mobile-action-list', {
    slidesPerGroup: 1,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    speed: 400,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

new Swiper('.news-blocks', {
    slidesPerGroup: 1,
    slidesPerView: 0,
    speed: 400,
    spaceBetween: 28,
    breakpoints: {
        710: {
            slidesPerView: 1,
        },
        930: {
            slidesPerView: 2,
        },
        1211: {
            slidesPerView: 3,
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

console.log("asdfasf")