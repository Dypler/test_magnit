
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


// document.addEventListener('DOMContentLoaded', function () {
//   const swiper = new Swiper('.swiper', {
//     direction: 'horizontal',
//     loop: true,
//     speed: 500,
//     slidesPerView: 1,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

//   const stickersItems = document.querySelectorAll(".stickers__item");

//   stickersItems.forEach(function (item) {
//     item.addEventListener("click", function (event) {
//       event.preventDefault();
//       const targetSlide = item.getAttribute("href");
//       swiper.slideTo(targetSlide, 750, false);
//     });
//   });
// });


const swiper = new Swiper('.swiper', {

  //! Основные настройки 
  direction: 'horizontal', // 'vertical', 'horizontal'
  loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
  speed: 500, // скорость переключения слайдов
  effect: 'slider', // cards, coverflow, flip, fade, cube
  // initialSlide: 2, // Начинаем со 2 слайдера
  // freeMode: true, // можно перетаскивать как ленту
  slidesPerView: 1, // кол-во активных слайдов
  // centeredSlides: true, // центрирование слайдов
  initialSlide: 0,
  //! Пагинация (точки)
  pagination: {
      el: '.swiper-pagination',
      clickable: true, // true - Пагинация становится кликабельной
  },

  //! Кнопки вперед и назад 
  navigation: {
      nextEl: '.s-button-next',
      prevEl: '.s-button-prev',
  },

  //! Автоматическое перелистывание
  // autoplay: {
  //     delay: 1000, //Задержка перед перелистыванием 1с = 1000мл/с
  // },
});

const stickersItems = document.querySelectorAll(".stickers__item");

stickersItems.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    const targetSlideId = item.getAttribute("href").substring(1); // Получить id слайда без символа '#'
    const targetSlide = document.getElementById(targetSlideId); // Найти соответствующий слайд
    const slideIndex = Array.from(targetSlide.parentElement.children).indexOf(targetSlide); // Найти индекс слайда
    swiper.slideTo(slideIndex, 1050); // Перейти к соответствующему слайду
  });
});
const stickersWrapper = document.querySelector('.stickers__wrapper');
const swiperContainer = document.getElementById('swiper-container');

stickersWrapper.addEventListener('click', function () {
  swiperContainer.scrollIntoView({
    behavior: 'smooth', // Добавляет плавную прокрутку
    block: 'start' // Прокручивает так, чтобы верхний край элемента был виден
  });
});