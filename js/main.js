// mobile-menu
const burgerBtn = document.querySelector('.burger'),
    cLosed = document.querySelector('.close'),
    mobileMenu = document.querySelector('.nav__main--menu');

burgerBtn.onclick = function () {
    mobileMenu.classList.toggle('nav__menu--active');
};

cLosed.onclick = function () {
    mobileMenu.classList.remove('nav__menu--active');
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos >= currentScrollPos) {
        mobileMenu.classList.remove('nav__menu--active');
    }
    prevScrollpos = currentScrollPos;
};

const swiperONE = new Swiper('.swiperOne', {
    loop: true,

    spaceBetween: 35,
    // slidesPerView: 2,
    pagination: {
        el: '.swiper-paginationONE',
    },

});

const swiperTwo = new Swiper('.swiperTwo', {
    loop: true,

    // slidesPerView: 2,
    pagination: {
        el: '.swiper-paginationTWO',
    },

});

const questions = document.querySelectorAll('.questions__question-header');

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.nextSibling.nextSibling.classList.toggle('questions__question-content--active');
        question.classList.toggle('questions__question-header--active');
    });
});
