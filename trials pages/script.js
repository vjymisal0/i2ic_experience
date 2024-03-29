

var swiper = new Swiper(".slide-content", {
    // effect: "flip",
    cssMode: true,

    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});