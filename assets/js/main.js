var swiper = new Swiper(".heroSlider", {
  slidesPerView: 1,
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
// Hero Slider

$('a.slow-scrool[href^="#"]').click(function (e) {
  e.preventDefault();
  const target = $(this.hash);
  if (target.length) {
    $('html, body').animate({ scrollTop: target.offset().top - 100}, 1000);
  }
});

const navBar = document.querySelector('#navBar');
const HamBurger = document.querySelector('#HamBurger');

HamBurger.addEventListener('click', () => {
  navBar.classList.toggle("active");
})

window.onscroll = function() {myFunction()};

var header = document.getElementById("Header");
var sticky = header.offsetTop;
var sticky = 88;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var swiper2 = new Swiper(".service", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
  
    1024: {
      slidesPerView: 3,
    },
  },
});
// Our Service

var swiper3 = new Swiper(".portfolio", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
  
    1024: {
      slidesPerView: 3,
    },
  },
});
// Portfolio

var swiper4 = new Swiper(".teamSlider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
  
    1024: {
      slidesPerView: 4,
    },
  },
});
// Our Team Slider

const counters = document.querySelectorAll('#number');

const CountUpdate = (counter, duration = 2000) => {
  const value = parseInt(counter.dataset.value);
  let initialValue = 0;

  const increment = Math.ceil(value / (duration / 10));

  const increaseCount = setInterval(() => {
    initialValue += increment;
    if (initialValue >= value) {
      counter.textContent = `${value}`;
      clearInterval(increaseCount);
      return;
    }
    counter.textContent = `${initialValue}`;
  }, 5); // Interval delay
};

counters.forEach(counter => CountUpdate(counter, 30000));

// Counter

var swiper5 = new Swiper(".logoPartners", {
  spaceBetween: 30,
  slidesPerView: 4,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed:10000,
});


$('.swiper-slide').hover(function(){
  swiper2.autoplay.stop();
}, function(){
  swiper2.autoplay.start();
});

// var swiper = new Swiper(".logoPartners", swiperOptions);