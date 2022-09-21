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

