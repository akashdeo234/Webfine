let hamburger = document.querySelector('.hamburger');
let navOpen = document.querySelector('.nav');
let logo = document.querySelector('.h-logo');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('close');
    navOpen.classList.toggle('open');
    logo.classList.toggle('close');
})