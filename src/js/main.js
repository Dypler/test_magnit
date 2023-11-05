import '../scss/style.scss'
import './modules/swiper'

const stickersWrapper = document.querySelector('.stickers__wrapper');
const swiperContainer = document.getElementById('swiper-container');

stickersWrapper.addEventListener('click', function () {
  swiperContainer.scrollIntoView({
    behavior: 'smooth', // Добавляет плавную прокрутку
    block: 'start' // Прокручивает так, чтобы верхний край элемента был виден
  });
});

const showAllStickersButton = document.getElementById('showAllStickers');
const stickers = document.querySelectorAll('.stickers__item');
let isShowing = false;

showAllStickersButton.addEventListener('click', function () {
  isShowing = !isShowing;
  const buttonText = isShowing ? 'Скрыть' : 'Посмотреть все Стикерсы';
  const imgRotation = isShowing ? 'rotate180' : '';

  stickers.forEach((sticker) => {
    if (isShowing || !sticker.classList.contains('hidden')) {
      sticker.style.display = 'inline-block';
    } else {
      sticker.style.display = 'none';
    }
  });

  showAllStickersButton.querySelector('img').classList.toggle('rotate180', isShowing);
  showAllStickersButton.querySelector('p').textContent = buttonText;
});
