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

const Button = document.querySelector('#button');
const Header = document.querySelector('#header')

Button.addEventListener('click', () => {
  Header.classList.toggle('header-mobile');
})

// document.addEventListener('click', (event) => {
//   const select = event.target.closest('.test li');
//   document.querySelectorAll('.test li').forEach(selectElement => {
//     if (selectElement === select) {
//       selectElement.classList.toggle('menulist');
//     } else {
//       selectElement.classList.remove('menulist');
//     }
//   });
//  });

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

counters.forEach(counter => CountUpdate(counter, 200000000000));

const FormBtn = document.querySelector("#button");
FormBtn.addEventListener('click', () => {
  if (FormBtn == null) {
    FormBtn.classList.add('form-error');
  }
  else {
    FormBtn.classList.add('form-success');
  }
})

// const today = new Date().toISOString().split('T')[0];
// const datePicker = document.getElementById('datePicker');
// datePicker.setAttribute('min', today);


const today = new Date().toISOString().split('T')[0];
const datePickers = document.querySelectorAll('.datePicker');
datePickers.forEach(datePicker => {
  datePicker.setAttribute('min', today);
});