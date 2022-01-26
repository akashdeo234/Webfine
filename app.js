let hamburger = document.querySelector('.hamburger');
let navOpen = document.querySelector('.nav');
let logo = document.querySelector('.h-logo');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('close');
    navOpen.classList.toggle('open');
    logo.classList.toggle('close');
})

/*Swiper*/ 

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
  /*Swiper*/ 