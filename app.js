let hamburger = document.querySelector('.hamburger');
let navOpen = document.querySelector('.nav');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('close');
    navOpen.classList.toggle('open');
})