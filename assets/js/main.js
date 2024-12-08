var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$('a.slow-scrool[href^="#"]').click(function (e) {
  e.preventDefault();
  const target = $(this.hash);
  if (target.length) {
    $('html, body').animate({ scrollTop: target.offset().top }, 1000);
  }
});
