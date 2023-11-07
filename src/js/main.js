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
let isWideScreen = window.innerWidth >= 1280;

function updateStickerVisibility() {
  stickers.forEach((sticker, index) => {
    if (isShowing || (isWideScreen && index < 9) || (!isWideScreen && index < 6)) {
      sticker.style.display = 'inline-block';
    } else {
      sticker.style.display = 'none';
    }
  });
}

updateStickerVisibility();

showAllStickersButton.addEventListener('click', function () {
  isShowing = !isShowing;
  const buttonText = isShowing ? 'Скрыть' : 'Посмотреть все Стикерсы';

  updateStickerVisibility();

  showAllStickersButton.querySelector('img').classList.toggle('rotate180', isShowing);
  showAllStickersButton.querySelector('p').textContent = buttonText;
});

window.addEventListener('resize', function () {
  isWideScreen = window.innerWidth >= 1280;
  updateStickerVisibility();
});




