
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal', // 'vertical', 'horizontal'
  loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
  speed: 500, // скорость переключения слайдов
  effect: 'slider', // cards, coverflow, flip, fade, cube
  slidesPerView: 1, // кол-во активных слайдов
  initialSlide: 0,
  navigation: {
      nextEl: '.s-button-next',
      prevEl: '.s-button-prev',
  },

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
