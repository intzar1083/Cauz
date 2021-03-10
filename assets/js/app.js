// $('#demo').tabsA();
$('#demo').tabsA({

  // width
  width: 750,

  // CSS class for tabs container
  containerClass: 'tabs-main-wrapper',

  // initial tab
  defaultTab: 0

});
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});