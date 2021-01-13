'use strict';

(() => {
  const mainNav = document.querySelector('.main-nav');
  const mainNavBurger = document.querySelector('.header__burger');

  mainNav.classList.remove('main-nav--nojs');
  mainNav.setAttribute('aria-hidden', true); // доступность (не закончена)

  console.log("работает");

  const onMainNavBurgerClick = (evt) => {
    evt.preventDefault();
    mainNavBurger.classList.toggle('burger--closed');
    mainNavBurger.classList.toggle('burger--opened');
    mainNav.classList.toggle('main-nav--closed');
    mainNav.classList.toggle('main-nav--opened');
  }

  mainNavBurger.addEventListener('click', onMainNavBurgerClick);

})();
