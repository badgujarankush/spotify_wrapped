const burger = document.querySelector('.burgerMenu');

const nav  = document.querySelector('.navbar');

burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
})