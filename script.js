/* typing animation */

var typed = new Typed(".typing",{
  strings:[" ","Full Stack Developer", "Web developer", "Software Engineer"],
  typespeed:50,
  BackSpeed:30,
  loop:true

})

const navToggler = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');
const mainContent = document.querySelector('.main-content');

navToggler.addEventListener('click', () => {
  aside.classList.toggle('open');
  mainContent.classList.toggle('shifted');
});
