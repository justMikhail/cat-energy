'use strict';

(() => {
  const mainNav = document.querySelector('.main-nav');
  const mainNavBurger = document.querySelector('.header__burger');

  mainNav.classList.remove('main-nav--nojs');
  mainNav.setAttribute('aria-hidden', true);

  const onMainNavBurgerClick = (evt) => {
    evt.preventDefault();
    mainNavBurger.classList.toggle('burger--closed');
    mainNavBurger.classList.toggle('burger--opened');
    mainNav.classList.toggle('main-nav--closed');
    mainNav.classList.toggle('main-nav--opened');
  }

  mainNavBurger.addEventListener('click', onMainNavBurgerClick);

})();

(() => {
  const switchSlider = document.querySelector('.switch-slider');

  if (switchSlider) {
    switchSlider.classList.add('switch-slider--js');
    const second = switchSlider.querySelector('.switch-slider__item--after');
    const secondImg = second.querySelector('img');
    const input = switchSlider.querySelector('.switch-slider__input');
    const pin = switchSlider.querySelector('.switch-slider__pin');
    const beforeLabel = switchSlider.querySelector('.switch-slider__label--before');
    const afterLabel = switchSlider.querySelector('.switch-slider__label--after');

    const setStyles = (val) => {
      pin.style.left = val;
      second.style.width = val;
    };

    const setSecondImgPos = () => {
      if (window.innerWidth < 768) {
        beforeLabel.click();
      } else {
        const imgWidth = secondImg.clientWidth;
        const switchSliderWidth = switchSlider.clientWidth;
        afterImage.style.right = `${(elWidth - imgWidth) / 2}px`;
      }
    };

    const inputHandler = () => setStyles('${input.value}%');

    input.addEventListener('input', inputHandler);
    input.addEventListener('change', inputHandler);
    beforeLabel.addEventListener('click', () => setStyles('0'));
    afterLabel.addEventListener('click', () => setStyles('100%'));
    window.addEventListener('resize', setSecondImgPos);

    setSecondImgPos();
    if (window.innerWidth >= 768) {
      setStyles('50%');
    }
  }
})();

console.log("it is works, Bro");
